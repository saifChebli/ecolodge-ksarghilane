'use client';

import {
  ArrowRightIcon,
} from "lucide-react";
import React from "react";
import Logo from "../assets/logo/logo-icon.png";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative px-8 py-8 h-screen w-full">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute rounded-3xl top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="banner-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Text Overlay */}
      <div className="absolute inset-0 px-8 py-8 z-10 flex items-start text-[#F2EEEB]">
        <div className="space-y-18 justify-between flex flex-col h-full w-full">
          {/* Heading & Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-xl"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Unwind in a Dreamy <br /> Desert Haven
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-lg font-medium leading-tight mt-4"
            >
              Indulge in the essence of desert elegance as you uncover the breathtaking beauty and serene stillness of our Saharan Ecolodge.
            </motion.p>
          </motion.div>

          {/* Button and Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex justify-between items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="res-btn font-semibold flex items-center justify-center gap-4 text-white py-2 px-4 rounded-full"
            >
              <span>Reservation</span>
              <ArrowRightIcon />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="relative font-semibold text-lg flex gap-2"
            >
              <Image
                src={Logo}
                alt="Logo"
                width={80}
                height={80}
                className="animate-pulse"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
