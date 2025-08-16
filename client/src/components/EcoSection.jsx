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
import { useTranslation } from "../lib/i18n";

const EcoSection = () => {
  const { t } = useTranslation();

  return (
    <section className=" py-24 text-gray-800">
      {/* Title + underline + paragraph */}
      <div className="text-center max-w-3xl flex flex-col items-center mx-auto mb-20">
        <h2 className="text-5xl md:text-6xl font-light leading-tight fontAllura">
          {t('respectingAndProtecting')}
        </h2>
        {/* <div className="mx-auto w-24 mt-4 border-b-2 border-black rounded-full" /> */}
          <CustomLineSVG />
        
        <p className="text-md text-gray-600 mt-6 leading-relaxed">
          {t('sustainabilityDescription')}
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10">
         {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all text-center flex flex-col items-center">
          <Sun className="w-10 h-10 text-orange-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">{t('desertsAreFragile')}</h3>
          <p className="text-sm text-gray-600 mb-3">
            {t('desertsAreFragileDescription')}
          </p>
          <em className="text-sm text-orange-700 font-medium">
            {t('helpFightDesertification')}
          </em>
        </div>

         {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all text-center flex flex-col items-center">
          <Globe className="w-10 h-10 text-amber-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">{t('preserveRareEcosystem')}</h3>
          <p className="text-sm text-gray-600 mb-3">
            {t('preserveRareEcosystemDescription')}
          </p>
          <em className="text-sm text-amber-700 font-medium">
            {t('makeStayPositiveImpact')}
          </em>
        </div>

         {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all text-center flex flex-col items-center">
          <Droplets className="w-10 h-10 text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">{t('landFullOfSolutions')}</h3>
          <p className="text-sm text-gray-600 mb-3">
            {t('landFullOfSolutionsDescription')}
          </p>
          <em className="text-sm text-blue-700 font-medium">
            {t('explorePlaceLikeNoOther')}
          </em>
        </div>
      </div>
    </section>
  );
};

export default EcoSection;
