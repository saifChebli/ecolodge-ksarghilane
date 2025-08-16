'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useTranslation } from '../lib/i18n';

import Hotel from '../assets/hotel/hotel-deco.jpg';
import HotelDecoThird from '../assets/hotel/hotel-deco-4.jpg';
import HotelRecepFirst from '../assets/hotel/hotel-recep.jpg';
import HotelRecepSec from '../assets/hotel/hotel-recep-2.jpg';
import HotelRecephird from '../assets/hotel/hotel-recep-3.jpg';
import ReservationForm from './ReservationForm';

const imagesLeft = [Hotel, HotelRecepFirst, HotelRecephird];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const { t } = useTranslation();
   const [open, setOpen] = useState(false);
   
  
    const showDrawer = () => {
      setOpen(true);
    };
  
    const onClose = () => {
      setOpen(false);
    };
  return (
    <div ref={sectionRef} className="min-h-screen py-16">
      {/* Header */}
      <motion.div
        className="flex flex-col md:flex-row justify-between pb-6 my-16 gap-6"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold max-w-xl fontAllura">
          {t('ourServices')}
        </h1>
        <p className="text-gray-600 max-w-md text-base">
          {t('servicesSubtitle')}
        </p>
      </motion.div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column Images */}
        <div className="space-y-12">
          {imagesLeft.map((img, i) => {
            const imgRef = useRef(null);
            const inView = useInView(imgRef, { once: true });

            return (
              <motion.div
                key={i}
                ref={imgRef}
                className="aspect-[3/2] relative overflow-hidden group rounded-3xl"
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.03, rotateZ: 0.3 }}
                  transition={{ type: 'spring', stiffness: 180 }}
                  className="w-full h-full"
                >
                  <Image
                    src={img}
                    alt={`Hotel ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Column */}
        <div className="space-y-12">
          {/* Text Block 1 */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-lg font-semibold mb-2">Tranquility & Wellness</h2>
            <p className="text-sm text-gray-500">
              An Elevated Experience of Tranquility
            </p>
          </motion.div>

          {/* Image 1 */}
          <motion.div
            className="aspect-[3/2] relative overflow-hidden group rounded-3xl"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateZ: -0.3 }}
              transition={{ type: 'spring', stiffness: 180 }}
              className="w-full h-full"
            >
              <Image
                src={HotelDecoThird}
                alt="Exterior View"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority
              />

            </motion.div>
          </motion.div>

          {/* ✅ Text Block 2: Home-like Warmth */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-lg font-semibold mb-2">Home-like Warmth</h2>
            <p className="text-sm text-gray-500">
              Welcome is not just a gesture, it’s a design principle.
            </p>
          </motion.div>

          {/* Image 2 */}
          <motion.div
            className="aspect-[3/2] relative overflow-hidden group rounded-3xl"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateZ: 0.3 }}
              transition={{ type: 'spring', stiffness: 180 }}
              className="w-full h-full"
            >
              <Image
                src={HotelRecepSec}
                alt="Reception Room"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </motion.div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 bg-neutral-100 rounded-xl p-10 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Ready for your timeless escape?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-6">
              Discover the calm, comfort, and curated experience you deserve. Let your next stay be more than just a night away.
            </p>
            <button onClick={showDrawer} className="px-6 py-3 bg-black text-white rounded-full cursor-pointer text-sm hover:rounded-xl transition">
              Book Your Stay
            </button>
          </motion.div>
        </div>
      </div>
      <ReservationForm open={open} onClose={onClose} />
    </div>
  );
};

export default Services;
