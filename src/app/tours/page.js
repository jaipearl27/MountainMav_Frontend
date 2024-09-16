"use client"

import CardsListing from "@/components/CardsListing";
import Hero2 from "@/components/Hero2";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Tours() {
  console.log(process.env.NEXT_PUBLIC_API_URL)
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/tours`).then(res => {
      setData(res?.data?.data)
    }).catch(err => console.log(err))
  }, [])


  return (
    <div className="mt-0 bg-black">
        <Hero2 head1={"Tours"} />
        <CardsListing data={data} type={"tours"}/>
      {/* <Guides> */}
    </div>
  )
}
