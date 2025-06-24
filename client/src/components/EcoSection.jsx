'use client';

import React from 'react';
import {
  Sun,
  Leaf,
  Recycle,
  Globe,
  Droplets,
} from 'lucide-react';
import CustomLineSVG from './CustomLineSVG';

const EcoSection = () => {
  return (
    <section className=" py-24 text-gray-800">
      {/* Title + underline + paragraph */}
      <div className="text-center max-w-3xl flex flex-col items-center mx-auto mb-20">
        <h2 className="text-5xl md:text-6xl font-light leading-tight fontAllura">
          Respecting,<br /> and Protecting
        </h2>
        {/* <div className="mx-auto w-24 mt-4 border-b-2 border-black rounded-full" /> */}
          <CustomLineSVG />
        
        <p className="text-md text-gray-600 mt-6 leading-relaxed">
          Sustainability is not a feature — it's our foundation. From solar energy and zero plastic to food grown steps away from your table, every moment here protects the oasis around us.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10">
         {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all text-center flex flex-col items-center">
          <Sun className="w-10 h-10 text-orange-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Deserts Are Fragile</h3>
          <p className="text-sm text-gray-600 mb-3">
            Despite their vastness, deserts are ecosystems deeply affected by human disruption.
          </p>
          <em className="text-sm text-orange-700 font-medium">
            Help fight desertification.
          </em>
        </div>

         {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all text-center flex flex-col items-center">
          <Globe className="w-10 h-10 text-amber-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Preserve a Rare Ecosystem</h3>
          <p className="text-sm text-gray-600 mb-3">
            Eco-tourism protects the desert through mindful actions by both hosts and guests.
          </p>
          <em className="text-sm text-amber-700 font-medium">
            Make your stay a positive impact.
          </em>
        </div>

         {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all text-center flex flex-col items-center">
          <Droplets className="w-10 h-10 text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">A Land Full of Solutions</h3>
          <p className="text-sm text-gray-600 mb-3">
            Discover how desert cultures manage resources wisely in the harshest environments.
          </p>
          <em className="text-sm text-blue-700 font-medium">
            Explore a place like no other.
          </em>
        </div>
      </div>
    </section>
  );
};

export default EcoSection;
