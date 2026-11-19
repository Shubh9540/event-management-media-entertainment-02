'use client';

import React, { useState, useEffect } from 'react';
import { GalleryProps } from '@/types/templates.types';
import { FaTimes, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export const Gallery = ({ data }: GalleryProps) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!data || !data.items || data.items.length === 0) return null;

  const items = data.items;
  const item1 = items[0];
  const item2 = items[1];
  const item3 = items[2];
  const item4 = items[3];
  const item5 = items[4];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? items.length - 1 : (prev as number) - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === items.length - 1 ? 0 : (prev as number) + 1));
    }
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev === 0 ? items.length - 1 : (prev as number) - 1));
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev === items.length - 1 ? 0 : (prev as number) + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, items.length]);

  return (
    <section id="gallery" className="w-full bg-[var(--color-bg-card)] py-8 lg:py-14">
      <div className="mx-auto w-full max-w-[1280px] px-4 lg:px-8">
        {/* Section Header: Matching Services Section Style Exactly */}
        <div className="mb-8 flex flex-col items-center text-center lg:mb-10">
          {/* Lotus Ornament with Side Lines */}
          <div className="mb-1.5 flex items-center justify-center gap-4 sm:gap-6">
            <span className="h-[1.5px] w-24 bg-[var(--color-accent)] sm:w-36 lg:w-44" />
            <svg
              className="h-12 w-12 text-[var(--color-primary)] sm:h-14 sm:w-14"
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
            <span className="h-[1.5px] w-24 bg-[var(--color-accent)] sm:w-36 lg:w-44" />
          </div>

          {/* Eyebrow: Close to icon, regular weight, big size */}
          <p className="mb-3 text-base font-normal tracking-[0.38em] text-[var(--color-heading)] uppercase sm:text-lg lg:text-[20px]">
            {data.eyebrow}
          </p>

          {/* Main Title */}
          <h2 className="mb-4 font-serif text-4xl font-normal leading-tight text-[var(--color-primary)] sm:text-5xl lg:text-[58px] xl:text-[62px]">
            {data.title}
          </h2>

          {/* Subtext description */}
          <p className="max-w-3xl text-base leading-relaxed text-[var(--color-text)] sm:text-lg lg:text-[18px]">
            {data.description}
          </p>
        </div>

        {/* 5-Photo Mosaic Grid: Exact equal height rows & 3-column proportional alignment */}
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-12 lg:gap-4">
          {/* Col 1: Left tall wedding arch photo - exact span 4.2 */}
          {item1 && (
            <div
              onClick={() => setLightboxIndex(0)}
              className="group relative h-[380px] cursor-pointer overflow-hidden rounded-xl bg-[var(--color-bg-alt)] shadow-sm sm:col-span-2 sm:h-[450px] lg:col-span-4 lg:h-[500px]"
            >
              <img
                src={item1.image}
                alt={item1.imageAlt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                <span className="rounded-full bg-white/80 p-3 text-[var(--color-primary)] shadow-md">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </span>
              </div>
            </div>
          )}

          {/* Col 2: Middle Column (2 stacked equal height photos) */}
          <div className="flex flex-col gap-3.5 sm:col-span-1 lg:col-span-4 lg:h-[500px] lg:gap-4">
            {item2 && (
              <div
                onClick={() => setLightboxIndex(1)}
                className="group relative h-[240px] cursor-pointer overflow-hidden rounded-xl bg-[var(--color-bg-alt)] shadow-sm lg:h-[242px]"
              >
                <img
                  src={item2.image}
                  alt={item2.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <span className="rounded-full bg-white/80 p-2.5 text-[var(--color-primary)] shadow-md">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </span>
                </div>
              </div>
            )}
            {item3 && (
              <div
                onClick={() => setLightboxIndex(2)}
                className="group relative h-[240px] cursor-pointer overflow-hidden rounded-xl bg-[var(--color-bg-alt)] shadow-sm lg:h-[242px]"
              >
                <img
                  src={item3.image}
                  alt={item3.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <span className="rounded-full bg-white/80 p-2.5 text-[var(--color-primary)] shadow-md">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Col 3: Right Column (2 stacked equal height photos) */}
          <div className="flex flex-col gap-3.5 sm:col-span-1 lg:col-span-4 lg:h-[500px] lg:gap-4">
            {item4 && (
              <div
                onClick={() => setLightboxIndex(3)}
                className="group relative h-[240px] cursor-pointer overflow-hidden rounded-xl bg-[var(--color-bg-alt)] shadow-sm lg:h-[242px]"
              >
                <img
                  src={item4.image}
                  alt={item4.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <span className="rounded-full bg-white/80 p-2.5 text-[var(--color-primary)] shadow-md">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </span>
                </div>
              </div>
            )}
            {item5 && (
              <div
                onClick={() => setLightboxIndex(4)}
                className="group relative h-[240px] cursor-pointer overflow-hidden rounded-xl bg-[var(--color-bg-alt)] shadow-sm lg:h-[242px]"
              >
                <img
                  src={item5.image}
                  alt={item5.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <span className="rounded-full bg-white/80 p-2.5 text-[var(--color-primary)] shadow-md">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal with Next and Previous Controls */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-fadeIn"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
            aria-label="Close image popup"
          >
            <FaTimes className="text-xl" />
          </button>

          {/* Previous Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white shadow-lg transition-all hover:bg-white/30 hover:scale-105"
            aria-label="Previous image"
          >
            <FaAngleLeft className="text-2xl" />
          </button>

          {/* Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-lg shadow-2xl flex flex-col items-center"
          >
            <img
              src={items[lightboxIndex].image}
              alt={items[lightboxIndex].imageAlt}
              className="max-h-[80vh] w-auto max-w-full rounded-md object-contain"
            />
            {items[lightboxIndex].imageAlt && (
              <p className="mt-3 text-center text-sm text-neutral-300">
                {items[lightboxIndex].imageAlt}
              </p>
            )}
          </div>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-3 sm:right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white shadow-lg transition-all hover:bg-white/30 hover:scale-105"
            aria-label="Next image"
          >
            <FaAngleRight className="text-2xl" />
          </button>
        </div>
      )}
    </section>
  );
};
