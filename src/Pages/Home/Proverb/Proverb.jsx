import React from 'react';

const Proverb = () => {
  return (
    <div className="flex items-center justify-center my-11 ">
      <div className="relative p-12 overflow-hidden rounded-lg shadow-lg bg-gradient-to-br from-[#FFF7F3] to-[#FFE4D8]">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-300 to-orange-300"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-300 to-pink-300"></div>
        <p className="text-2xl font-medium leading-relaxed text-center text-gray-800">
          The beauty of a website lies in its ability to 
          <span className="ml-2 mt-2 text-3xl font-bold text-lime-600">
            guide users effortlessly
          </span>
        </p>
        <div className="absolute top-0 right-0 w-24 h-24 transform translate-x-1/3 -translate-y-1/3 bg-orange-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 transform -translate-x-1/3 translate-y-1/3 bg-pink-200 rounded-full opacity-30"></div>
      </div>
    </div>
  );
};

export default Proverb;