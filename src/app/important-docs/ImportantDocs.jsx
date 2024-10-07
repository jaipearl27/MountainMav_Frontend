"use client";

import FilesListing from "@/components/FilesListing";
import Hero2 from "@/components/Hero2";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/importantDocs`)
      .then((res) => {
        setData(res?.data?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-black">
      <Hero2 forBlog={false} />

      <h1 className="text-4xl text-center py-10 font-semibold text-white">
        Important Documents
      </h1>
      {data ? (
        <FilesListing data={data} type={"tours"} />
      ) : (
        <div className="text-white w-full text-center">No data found.</div>
      )}
      {/* <Guides> */}
    </div>
  );
}
