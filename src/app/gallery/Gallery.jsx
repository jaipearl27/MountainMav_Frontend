'use client';

import styled from "@emotion/styled";
import { Pagination } from "@mui/material";
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
    newSearchParams.set('page', p);

    router.push(`?${newSearchParams.toString()}`, { scroll: false });
  };

  useEffect(() => {
    // Whenever the search params change (like when navigating), update the state
    const newPage = Number(searchParams.get('page')) || 1;
    setPage(newPage);
  }, [searchParams]);

  return (
    <Suspense fallback={<>Loading...</>}>
      <div className="pt-24 font-sans leading-relaxed tracking-wide flex flex-col max-w-7xl mx-auto">
        <main className="flex-grow container mx-auto p-6">
          <section className="text-center mb-12">
            <h2 className="text-4xl text-white font-semibold mb-4">Gallery</h2>
          </section>
          <section className="flex gap-4 flex-wrap justify-center">
            {data &&
              data.map((item) => (
                <div key={item._id}>
                  <Image
                    src={item?.file[0]?.secure_url}
                    alt={item?.title || "Gallery Image"}
                    height={300}
                    width={400}
                    className="w-auto max-w-[300px] object-contain"
                  />
                </div>
              ))}
          </section>
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
    </Suspense>
  );
};

export default Gallery;
