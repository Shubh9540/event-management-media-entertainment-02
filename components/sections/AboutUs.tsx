import React from 'react';
import { AboutUsProps } from '@/types/templates.types';

export const AboutUs = ({ data }: AboutUsProps) => {
  if (!data) return null;

  return (
    <section id="about" className="w-full bg-[#fdf4ef] py-14 lg:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 lg:px-8">
        {/* Top Header Block: Left Title & Right Description with Divider */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Eyebrow + Heading */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="mb-3 flex items-center gap-3">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#8b3a2b] uppercase sm:text-sm">
                {data.eyebrow}
              </span>
              <span className="h-[1.5px] w-12 bg-[#8b3a2b]/70 sm:w-16" />
            </div>

            <h2 className="font-serif text-3xl font-medium leading-[1.18] text-[#8b3a2b] sm:text-4xl lg:text-[46px] xl:text-[50px]">
              <span className="block">{data.titleStart}</span>
              <span className="block">{data.titleEnd}</span>
            </h2>
          </div>

          {/* Right Column: Vertical Line Divider & Description Text */}
          <div className="flex items-start gap-6 lg:col-span-6 lg:pl-4 xl:col-span-6">
            <div className="hidden h-28 w-[1.5px] bg-[#8b3a2b]/40 lg:block shrink-0" />
            
            <div className="space-y-3 text-sm leading-relaxed text-[#594742] sm:text-base">
              <p className="font-normal">{data.descriptionParagraph1}</p>
              <p className="font-normal text-[#8c7771]">{data.descriptionParagraph2}</p>
            </div>
          </div>
        </div>

        {/* Bottom Imagery Block: Exact Dual Photo Layout (One Large, One Detail) */}
        <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-end lg:mt-16 lg:gap-8">
          {/* Main Large Event Dinner Atmosphere Photo */}
          <div className="relative w-full overflow-hidden rounded-sm sm:w-8/12 lg:w-7/12">
            <img
              src={data.imageMain}
              alt={data.imageMainAlt}
              className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          {/* Secondary Details Table Setting Photo */}
          <div className="relative w-2/3 overflow-hidden rounded-sm sm:w-4/12 lg:w-3/12">
            <img
              src={data.imageDetail}
              alt={data.imageDetailAlt}
              className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
