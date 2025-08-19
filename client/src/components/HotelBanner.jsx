import React from "react";

const HotelBanner = () => {
  return (
    <div className="banner flex flex-col justify-center items-center text-white text-center px-4 py-20 sm:py-28 md:py-36">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
        Ksar Ghillane
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mt-4 sm:mt-6 max-w-2xl">
        In the heart of nature but always accessible, whether you roll in two or
        four wheels
      </p>
    </div>
  );
};

export default HotelBanner;
