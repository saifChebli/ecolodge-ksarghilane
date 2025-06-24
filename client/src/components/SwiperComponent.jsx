'use client'; // Needed if using Next.js App Router

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import roomImg from '../assets/rooms/room.jpg'
import roomImg1 from '../assets/rooms/room-1.jpg'
import roomImg3 from '../assets/rooms/room-3.jpg'
import roomImg4 from '../assets/rooms/room-4.jpg'
import roomImg5 from '../assets/rooms/room-5.jpg'
import roomImg6 from '../assets/rooms/room-6.jpg'
import roomImg7 from '../assets/rooms/room-7.jpg'
import roomImg8 from '../assets/rooms/room-8.jpg'
import roomImg9 from '../assets/rooms/room-9.jpg'
import roomImg10 from '../assets/rooms/room-10.jpg'
import roomImg11 from '../assets/rooms/room-11.jpg'
import roomImg12 from '../assets/rooms/room-12.jpg'
import roomImg13 from '../assets/rooms/room-13.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const SwiperComponent = () => {


const room = [
  roomImg,
  roomImg1,
  roomImg3,
  roomImg4,
  roomImg5,
  roomImg6,
  roomImg7,
  roomImg8,
  roomImg9,
  roomImg10,
  roomImg11,
  roomImg12,
  roomImg13,
]


  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000, // 3 seconds
        disableOnInteraction: false,
      }}
      loop={true}
        className="mySwiper no-arrows h-full"
    >

      {room.map((item, index) => (
        <SwiperSlide key={index}>
          <Image src={item} alt="Room" className="w-full h-full object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
