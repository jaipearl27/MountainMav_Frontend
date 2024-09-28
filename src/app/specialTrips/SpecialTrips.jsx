"use client"

import CardsListing from "@/components/CardsListing";
import Hero2 from "@/components/Hero2";
import axios from "axios";
import { useEffect, useState } from "react";

export default function SpecialTrips() {

  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/specialTrips`).then(res => {
      setData(res?.data?.data)
    }).catch(err => console.log(err))
  }, [])


  return (
    <div className="bg-black">
        <Hero2/>
        <h1 className="text-5xl text-center py-10 font-semibold text-white">
            Special Trips
        </h1>
        {data && data?.length > 0 ? (
          <CardsListing data={data} type={"specialTrips"}/>
        ) : (
          <div className="w-full text-center text-white">No Data Found</div>
        )}
      {/* <Guides> */}
    </div>
  )
}
