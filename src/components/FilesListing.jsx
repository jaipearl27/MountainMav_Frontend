"use client"

import {FaDownload} from 'react-icons/fa'

const FilesListing = ({ data, type="treks" }) => {


  return (
    <div className="h-full py-20 px-20 bg-black bg-cover bg-no-repeat">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {data?.length > 0 && data.map((item) => {
          return (
            <div
            key={item?._id}
            className="border border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white relative"
          >
            <h3 className="text-lg font-semibold mb-3 text-gray-700">
              {item?.title}
            </h3>
            <a
              target="_blank"
              href={item?.file[0].secure_url}
              download={item?.title}
              className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition-all duration-300"
            >
              <FaDownload className="mr-2" />
              Download
            </a>
            {/* <div className="absolute top-0 right-0 bg-blue-600 p-1 rounded-bl-xl">
              <span className="text-white text-xs font-semibold">
                File 1
              </span>
            </div> */}
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilesListing;
