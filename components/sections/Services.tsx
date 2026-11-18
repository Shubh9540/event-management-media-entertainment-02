import React from 'react';
import { ServicesProps } from '@/types/templates.types';

export const Services = ({ data }: ServicesProps) => {
  if (!data) return null;

  return (
    <section id="services" className="w-full bg-[#ffffff] py-14 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 lg:px-8">
        {/* Section Header: Tight gap between Ornament & Eyebrow */}
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

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {data.services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col text-center"
            >
              {/* Feature Image */}
              <div className="mb-6 aspect-[4/3] w-full overflow-hidden rounded-sm bg-[var(--color-bg-alt)] shadow-sm">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Service Title */}
              <h3 className="font-serif text-3xl font-medium tracking-tight text-[#8b3a2b] sm:text-[32px] lg:text-[34px]">
                {service.title}
              </h3>

              {/* Terracotta / Gold Horizontal Divider Line */}
              <div className="mx-auto my-3.5 h-[2px] w-full max-w-[200px] bg-[#c59b6d]/80" />

              {/* Sub-label: Timeless Celebrations */}
              <p className="mb-3 text-xs font-bold tracking-[0.26em] text-[#2c1a16] uppercase sm:text-[13px]">
                {service.category}
              </p>

              {/* Body Paragraph */}
              <p className="text-sm font-normal leading-[1.65] text-[#2c1a16] sm:text-[15px] lg:text-[15.5px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
