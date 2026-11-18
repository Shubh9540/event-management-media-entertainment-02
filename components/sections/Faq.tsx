'use client';

import React, { useState } from 'react';
import { FaqProps } from '@/types/templates.types';
import { FaMinus, FaPlus } from 'react-icons/fa';

export const Faq = ({ data }: FaqProps) => {
  // First item open by default as in screenshot
  const [openId, setOpenId] = useState<string | null>(data?.items?.[0]?.id || null);

  if (!data) return null;

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="w-full bg-[#ffffff] py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 lg:px-8">
        {/* 2-Column Split: Left Sticky Info + Right Smooth Accordion List */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Header Info & Candlelit Decor Image */}
          <div className="flex flex-col items-start lg:col-span-5 lg:sticky lg:top-28">
            {/* Lotus Ornament with Side Lines */}
            <div className="mb-3 flex items-center justify-start gap-4">
              <span className="h-[1.5px] w-14 bg-[#c59b6d] sm:w-20" />
              <svg
                className="h-10 w-10 text-[#8b3a2b]"
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
              <span className="h-[1.5px] w-14 bg-[#c59b6d] sm:w-20" />
            </div>

            {/* Eyebrow */}
            <p className="mb-4 text-base font-normal tracking-[0.35em] text-[#2c1a16] uppercase sm:text-lg">
              {data.eyebrow}
            </p>

            {/* Title: Comfortable line-height & spacing so lines never collide */}
            <h2 className="mb-5 font-serif text-3xl font-normal leading-[1.3] text-[#8b3a2b] sm:text-4xl sm:leading-[1.28] lg:text-[46px] lg:leading-[1.25] xl:text-[50px]">
              <span className="block">{data.titleStart}</span>
              <span className="block mt-1 sm:mt-1.5">{data.titleEnd}</span>
            </h2>

            {/* Description */}
            <p className="mb-8 max-w-md text-sm leading-relaxed text-[#594742] sm:text-base">
              {data.description}
            </p>

            {/* Ambient Candlelit Decor Image */}
            {data.image && (
              <div className="w-full max-w-sm overflow-hidden rounded-xl bg-[var(--color-bg-alt)] shadow-sm">
                <img
                  src={data.image}
                  alt={data.imageAlt}
                  className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            )}
          </div>

          {/* Right Column: Accordion Items */}
          <div className="flex flex-col space-y-3 lg:col-span-7">
            {data.items.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className={`overflow-hidden rounded-lg border transition-all duration-300 ${
                    isOpen
                      ? 'border-[#8b3a2b] bg-[#fdf4ef] shadow-sm'
                      : 'border-[#c59b6d]/40 bg-white hover:border-[#c59b6d]'
                  }`}
                >
                  {/* Accordion Question Header */}
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className={`flex w-full items-center justify-between px-5 py-4 text-left transition-colors sm:px-6 sm:py-4.5 ${
                      isOpen
                        ? 'bg-[#8b3a2b] text-white'
                        : 'text-[#2c1a16] hover:text-[#8b3a2b]'
                    }`}
                  >
                    <span className="font-serif text-base font-normal sm:text-lg md:text-[19px]">
                      {item.question}
                    </span>
                    <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center text-sm">
                      {isOpen ? (
                        <FaMinus className="text-white" />
                      ) : (
                        <FaPlus className="text-[#c59b6d]" />
                      )}
                    </span>
                  </button>

                  {/* Accordion Body */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen
                        ? 'max-h-[300px] opacity-100'
                        : 'max-h-0 opacity-0 overflow-hidden pointer-events-none'
                    }`}
                  >
                    <div className="p-5 text-sm leading-relaxed text-[#594742] sm:p-6 sm:text-base">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
