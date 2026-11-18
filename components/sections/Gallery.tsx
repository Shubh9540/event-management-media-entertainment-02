import React from 'react';
import { GalleryProps } from '@/types/templates.types';

export const Gallery = ({ data }: GalleryProps) => {
  if (!data) return null;

  const item1 = data.items[0];
  const item2 = data.items[1];
  const item3 = data.items[2];
  const item4 = data.items[3];
  const item5 = data.items[4];

  return (
    <section id="gallery" className="w-full bg-[#ffffff] py-14 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 lg:px-8">
        {/* Section Header: Matching Services Section Style Exactly */}
        <div className="mb-14 flex flex-col items-center text-center lg:mb-18">
          {/* Lotus Ornament with Side Lines */}
          <div className="mb-1.5 flex items-center justify-center gap-4 sm:gap-6">
            <span className="h-[1.5px] w-24 bg-[#c59b6d] sm:w-36 lg:w-44" />
            <svg
              className="h-12 w-12 text-[#8b3a2b] sm:h-14 sm:w-14"
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Center tall petal */}
              <path d="M16 4C14 8 13.5 13 16 19C18.5 13 18 8 16 4Z" />
              {/* Inner Left Petal */}
              <path d="M16 19C12 16.5 10 12 10.5 7.5C13 9.5 15 13.5 16 19Z" />
              {/* Inner Right Petal */}
              <path d="M16 19C20 16.5 22 12 21.5 7.5C19 9.5 17 13.5 16 19Z" />
              {/* Outer Left Petal */}
              <path d="M16 19C10.5 18 6 15 6 12C9 12 13 15 16 19Z" />
              {/* Outer Right Petal */}
              <path d="M16 19C21.5 18 26 15 26 12C23 12 19 15 16 19Z" />
              {/* Curved base line */}
              <path d="M13 21C14.5 21.8 17.5 21.8 19 21" strokeWidth="1.6" />
            </svg>
            <span className="h-[1.5px] w-24 bg-[#c59b6d] sm:w-36 lg:w-44" />
          </div>

          {/* Eyebrow: Close to icon, regular weight, big size */}
          <p className="mb-3 text-base font-normal tracking-[0.38em] text-[#2c1a16] uppercase sm:text-lg lg:text-[20px]">
            {data.eyebrow}
          </p>

          {/* Main Title */}
          <h2 className="mb-4 font-serif text-4xl font-normal leading-tight text-[#8b3a2b] sm:text-5xl lg:text-[58px] xl:text-[62px]">
            {data.title}
          </h2>

          {/* Subtext description */}
          <p className="max-w-3xl text-base leading-relaxed text-[#594742] sm:text-lg lg:text-[18px]">
            {data.description}
          </p>
        </div>

        {/* 5-Photo Mosaic Grid: Exact equal height rows & 3-column proportional alignment */}
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-12 lg:gap-4">
          {/* Col 1: Left tall wedding arch photo - exact span 4.2 */}
          {item1 && (
            <div className="group relative h-[380px] overflow-hidden rounded-xl bg-[var(--color-bg-alt)] shadow-sm sm:col-span-2 sm:h-[450px] lg:col-span-4 lg:h-[500px]">
              <img
                src={item1.image}
                alt={item1.imageAlt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          )}

          {/* Col 2: Middle Column (2 stacked equal height photos) */}
          <div className="flex flex-col gap-3.5 sm:col-span-1 lg:col-span-4 lg:h-[500px] lg:gap-4">
            {item2 && (
              <div className="group relative h-[240px] overflow-hidden rounded-xl bg-[var(--color-bg-alt)] shadow-sm lg:h-[242px]">
                <img
                  src={item2.image}
                  alt={item2.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            )}
            {item3 && (
              <div className="group relative h-[240px] overflow-hidden rounded-xl bg-[var(--color-bg-alt)] shadow-sm lg:h-[242px]">
                <img
                  src={item3.image}
                  alt={item3.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            )}
          </div>

          {/* Col 3: Right Column (2 stacked equal height photos) */}
          <div className="flex flex-col gap-3.5 sm:col-span-1 lg:col-span-4 lg:h-[500px] lg:gap-4">
            {item4 && (
              <div className="group relative h-[240px] overflow-hidden rounded-xl bg-[var(--color-bg-alt)] shadow-sm lg:h-[242px]">
                <img
                  src={item4.image}
                  alt={item4.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            )}
            {item5 && (
              <div className="group relative h-[240px] overflow-hidden rounded-xl bg-[var(--color-bg-alt)] shadow-sm lg:h-[242px]">
                <img
                  src={item5.image}
                  alt={item5.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
