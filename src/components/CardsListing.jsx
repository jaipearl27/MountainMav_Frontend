"use client"

import Image from "next/image";
import Link from "next/link";

const CardsListing = ({ data, type="treks" }) => {


  return (
    <div className="h-full py-20 px-20 bg-black bg-cover bg-no-repeat">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {data?.length > 0 && data.map((item) => {
          return (
            <Link
            key={`${item?._id}`}
              href={`/${type}/${item?._id}`}
              className="rounded-lg overflow-hidden shadow-lg border-2 border-dashed p-2 transition duration-300"
            >
              <Image
                alt={item?.title}
                className="w-full h-56 object-cover"
                src={item?.banner[0]?.url}
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "cover",
                }}
                height={400}
                width={600}
              />
              <div className="p-4 md:p-6  ">
                <h3 className="text-white text-xl md:text-2xl font-semibold mb-2 line-clamp-2">
                  {item?.title}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CardsListing;
