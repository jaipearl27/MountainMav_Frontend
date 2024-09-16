"use client"

import Blog from "@/components/Blog";
import Hero2 from "@/components/Hero2";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function TourDetail() {
  const {id} = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/tours/${id}`).then(res => {
      setData(res?.data?.data)
    }).catch(err => console.log(err))
  }, [id])


  return (
    <div className="mt-0 bg-black">
        <Hero2 img={`url(${data?.banner[0].url})`} />
        <Blog data={data}/>
      {/* <Guides> */}
    </div>
  )
}
