"use client";

import CardsListing from "@/components/CardsListing";
import Hero2 from "@/components/Hero2";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Treks() {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/treks?limit=1000`)
      .then((res) => {
        setData(res?.data?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className=" bg-black">
      <Hero2 forBlog={false} />

      <h1 className="text-5xl text-center py-10 font-semibold text-white">
        Treks
      </h1>
      <CardsListing data={data} />
      {/* <Guides> */}
    </div>
  );
}
