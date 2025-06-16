
import {
  ArrowDown,
  ArrowDownCircle,
  ArrowDownIcon,
  ArrowRightIcon,
} from "lucide-react";
import React from "react";
import Logo from "../assets/logo-icon.png";
import Image from "next/image";

const HeroSection = () => {

  
  return (
    <div className="relative px-8 py-8 h-screen w-full">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute rounded-3xl  top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="banner-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Text Overlay */}
      <div className="absolute inset-0 px-8 py-8 z-10 flex items-start text-[#F2EEEB]">
        <div className="space-y-18 justify-between flex flex-col h-full w-full">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Unwind in a Dreamy <br /> Desert Haven
            </h1>
            <p className="text-lg font-medium leading-tight mt-4">
              Indulge in the essence of desert elegance as you uncover the breathtaking beauty and serene stillness of our Saharan Ecolodge. <br />
              {/* Let the warmth of the desert welcome you into a world of calm and
            timeless beauty. */}
            </p>
          </div>

          <div className="flex justify-between items-center">
            <button className="res-btn font-semibold flex items-center justify-center gap-4 text-white py-2 px-4 rounded-full">
              <span>Reservation</span>
              <ArrowRightIcon />
            </button>

            <div className="relative font-semibold text-lg flex gap-2 transition">
              <Image
                src={Logo}
                alt="Logo"
                width={80}
                height={80}

                className="animate-pulse"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
