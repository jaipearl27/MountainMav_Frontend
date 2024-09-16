"use client"

import DOMPurify from "isomorphic-dompurify";
// import Image from "next/image";

const Blog = ({data}) => {
  
    return (
    <div className="container mx-auto min-h-screen pt-28 px-10">
      <div className=" flex flex-col items-center max-w-4xl  mx-auto !text-white space-y-8">
        {/* <Image className="rounded-md " src={data?.banner[0].url} alt="" /> */}
        <h1 className="text-3xl max-w-2xl ">{data?.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data?.content) }}></div>
      </div>
    </div>
  );
};

export default Blog;