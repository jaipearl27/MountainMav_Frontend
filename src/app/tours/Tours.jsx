"use client"

import CardsListing from "@/components/CardsListing";
import Hero2 from "@/components/Hero2";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Tours({homepage=false}) {

  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/tours?limit=1000`).then(res => {
      setData(res?.data?.data)
    }).catch(err => console.log(err))
  }, [])


  return (
    <div className="bg-black">
      {!homepage && <Hero2 forBlog={false} />}
        
        <h1 className="text-5xl text-center py-10 font-semibold text-white">
            Religious Tours
        </h1>
        <CardsListing data={data} type={"tours"}/>
      {/* <Guides> */}
    </div>
  )
}
