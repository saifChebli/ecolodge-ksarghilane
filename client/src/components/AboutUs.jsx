'use client';

import React, { useState, useRef } from "react";
import Image from "next/image";
import Logo from "../assets/logo/logo-icon.png";
import Hotel from "../assets/hotel/ecolodge-hotel.jpg";
import HotelView from "../assets/hotel/hotel-view.jpg";
import HotelOutside from "../assets/hotel/hotel-outside.jpg";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import CustomLineSVG from "./CustomLineSVG";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { useTranslation } from "../lib/i18n";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const AboutUs = () => {
  const [altView, setAltView] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const { t } = useTranslation();

  const images = [Hotel, HotelView, HotelOutside];

  const handleToggle = () => {
    setAltView((prev) => !prev);
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12"
      >
        {/* Text + Image */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 w-full">
          
          {/* Text Section */}
          <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
            <AnimatePresence mode="wait">
              {!altView ? (
                <motion.div
                  key="default-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-4"
                >
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold fontAllura text-gray-900">
                    {t("discoverOurStory")}
                    <CustomLineSVG />
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-prose mx-auto lg:mx-0">
                    {t("aboutDescription")}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="alt-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-4"
                >
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold fontAllura text-gray-900">
                    {t("discoverOurStory")}
                    <CustomLineSVG />
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-prose mx-auto lg:mx-0">
                    {t("aboutSubtitle")}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Arrows */}
            <div className="flex justify-center lg:justify-start gap-4 mt-6">
              <button
                onClick={handleToggle}
                className="text-lg sm:text-xl px-3 sm:px-4 py-2 border rounded-full hover:bg-black hover:text-white transition"
              >
                <ArrowLeft />
              </button>
              <button
                onClick={handleToggle}
                className="text-lg sm:text-xl px-3 sm:px-4 py-2 border rounded-full hover:bg-black hover:text-white transition"
              >
                <ArrowRight />
              </button>
            </div>
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 w-full max-w-lg sm:max-w-md lg:max-w-xl"
          >
            <Swiper
              modules={[Autoplay, Pagination, Navigation, EffectFade]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              effect="fade"
              pagination={{ clickable: true }}
              navigation={true}
              className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg mySwiper no-arrows h-full"
            >
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <Image
                    src={img}
                    alt={`About Slide ${i + 1}`}
                    width={500}
                    height={400}
                    className="object-cover w-full h-[220px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
