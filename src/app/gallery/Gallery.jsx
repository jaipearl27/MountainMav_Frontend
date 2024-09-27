"use client";

import styled from "@emotion/styled";
import { Modal, Pagination } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation"; // Using both from next/navigation
import { Suspense, useEffect, useState } from "react";

const StyledPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-root": {
    color: "white",
  },
}));

const Gallery = () => {
  const [data, setData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const [open, setOpen] = useState(false);
  const handleOpen = (data) => {
    setSelectedImage(data);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const [isLoading, setIsLoading] = useState(true); // Missing in original code
  const searchParams = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1); // Fix: Ensure `Number` cast for consistency
  const [totalPages, setTotalPages] = useState(1);

  const router = useRouter(); // Use router from next/navigation

  const getData = () => {
    setIsLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/gallery`, { params: { page } }) // Fetch data with the correct page param
      .then((res) => {
        setData(res?.data?.data);
        setTotalPages(res?.data?.totalPages || 1);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, [page]); // Trigger data fetch when `page` changes

  const handlePagination = (e, p) => {
    setPage(p);

    // Update the URL without reloading the page
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("page", p);

    router.push(`?${newSearchParams.toString()}`, { scroll: false });
  };

  useEffect(() => {
    // Whenever the search params change (like when navigating), update the state
    const newPage = Number(searchParams.get("page")) || 1;
    setPage(newPage);
  }, [searchParams]);

  const columns = 4; // Number of columns in the grid

  // Function to split the images array into the number of columns
  const splitIntoColumns = (array, columns) => {
    console.log(array);
    const result = new Array(columns).fill().map(() => []);
    array?.forEach((item, index) => {
      result[index % columns].push(item);
    });
    return result;
  };

  const columnsData = splitIntoColumns(data, columns);

  return (
    <Suspense fallback={<>Loading...</>}>
      <div className="pt-24 font-sans leading-relaxed tracking-wide flex flex-col max-w-7xl mx-auto">
        <main className="flex-grow container mx-auto p-6">
          <section className="text-center mb-12">
            <h2 className="text-4xl text-white font-semibold mb-4">Gallery</h2>
          </section>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center">
            {columnsData &&
              columnsData.map((column, colIndex) => (
                <div className="grid gap-4 justify-center" key={colIndex}>
                  {column.map((item) => (
                    <div key={item._id}>
                      <Image
                        src={item?.file[0]?.secure_url}
                        alt={item?.title || "Gallery Image"}
                        height={300}
                        width={400}
                        className="w-auto max-w-[300px] object-contain cursor-pointer p-2 border-[3px] border-dashed "
                        onClick={() => handleOpen(item)}

                      />
                    </div>
                  ))}
                </div>
              ))}
          </div>

          {!isLoading && data && (
            <section className="flex flex-row justify-center w-full mt-10">
              <StyledPagination
                count={totalPages}
                page={Number(page)}
                color="primary"
                onChange={handlePagination}
              />
            </section>
          )}
        </main>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="relative w-fit h-[90vh] bg-white shadow-[0_0_0_1px#ffdd00] rounded-md left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-1 flex justify-center items-center transition duration-300">
          {selectedImage && (
            <Image
              alt={selectedImage?.title || "Gallery Image"}
              className="w-fit h-fit max-h-full max-w-full object-contain"
              height={600}
              width={600}
              src={selectedImage?.file[0]?.secure_url}
            />
          )}
        </div>
      </Modal>
    </Suspense>
  );
};

export default Gallery;
