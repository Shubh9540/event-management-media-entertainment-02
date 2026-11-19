'use client';

import React, { useState, useEffect } from 'react';
import { TestimonialsProps } from '@/types/templates.types';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const Testimonials = ({ data }: TestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!data || !data.testimonials || data.testimonials.length === 0) return null;

  const total = data.testimonials.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // Automatic slide rotation
  useEffect(() => {
    const delay = data.autoplayDelay || 5000;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
    }, delay);

    return () => clearInterval(interval);
  }, [total, data.autoplayDelay]);

  const activeTestimonial = data.testimonials[currentIndex];

  return (
    <section id="testimonials" className="w-full overflow-hidden bg-[var(--color-bg-main)] py-8 lg:py-14">
      <div className="mx-auto w-full max-w-[1280px] px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 flex flex-col items-center text-center lg:mb-8">
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

          {/* Eyebrow */}
          <p className="mb-3 text-base font-normal tracking-[0.38em] text-[var(--color-heading)] uppercase sm:text-lg lg:text-[20px]">
            {data.eyebrow}
          </p>

          {/* Main Title */}
          <h2 className="font-serif text-4xl font-normal leading-tight text-[var(--color-primary)] sm:text-5xl lg:text-[58px] xl:text-[62px]">
            {data.title}
          </h2>
        </div>

        {/* Testimonial Slider Container: Fixed height to completely eliminate screen jumping */}
        <div className="relative mx-auto flex w-full max-w-4xl items-center justify-between">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="group z-10 flex h-11 w-11 shrink-0 items-center justify-center text-[var(--color-accent)] transition-all hover:text-[var(--color-primary)] sm:h-14 sm:w-14"
          >
            <div className="flex items-center">
              <span className="hidden h-[1.5px] w-6 bg-current transition-all group-hover:w-8 sm:block" />
              <FaArrowLeft className="text-sm sm:-ml-6" />
            </div>
          </button>

          {/* Center Card with Min-Height and Flex Center */}
          <div className="flex min-h-[340px] flex-1 flex-col items-center justify-center px-2 text-center sm:min-h-[380px] sm:px-8">
            {/* Avatar with Ornamental Leaf Sprigs on Sides */}
            <div className="relative mb-4 flex items-center justify-center">
              {/* Left Botanical Branch */}
              <svg
                className="hidden h-10 w-10 text-[var(--color-accent)] sm:block -mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 18c4-2 7-6 8-11" />
                <path d="M10 12c-2-2-4-2-6-1 0 2 1 4 3 4" />
                <path d="M14 7c-2-2-4-2-5-1 0 2 1 3 3 4" />
              </svg>

              {/* Circular Avatar */}
              <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-[var(--color-accent)] bg-white p-0.5 shadow-sm sm:h-28 sm:w-28">
                <img
                  src={activeTestimonial.avatar}
                  alt={activeTestimonial.avatarAlt}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>

              {/* Right Botanical Branch */}
              <svg
                className="hidden h-10 w-10 text-[var(--color-accent)] sm:block -ml-2 scale-x-[-1]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 18c4-2 7-6 8-11" />
                <path d="M10 12c-2-2-4-2-6-1 0 2 1 4 3 4" />
                <path d="M14 7c-2-2-4-2-5-1 0 2 1 3 3 4" />
              </svg>
            </div>

            {/* Elegant Quotation Mark Divider */}
            <div className="mb-3 flex items-center justify-center gap-4">
              <span className="h-[1px] w-16 bg-[var(--color-accent)]/60 sm:w-28" />
              <span className="font-serif text-3xl font-bold leading-none text-[var(--color-accent)] sm:text-4xl">
                “
              </span>
              <span className="h-[1px] w-16 bg-[var(--color-accent)]/60 sm:w-28" />
            </div>

            {/* Testimonial Quote: Fixed-height container to prevent layout shifts */}
            <div className="flex min-h-[90px] items-center justify-center sm:min-h-[105px]">
              <blockquote className="max-w-2xl font-serif text-lg font-normal italic leading-relaxed text-[var(--color-text)] sm:text-xl md:text-[21px]">
                &ldquo;{activeTestimonial.quote}&rdquo;
              </blockquote>
            </div>

            {/* Client Name & Role Container */}
            <div className="mt-4 flex flex-col items-center">
              <h3 className="font-serif text-xl font-medium text-[var(--color-primary)] sm:text-2xl">
                {activeTestimonial.name}
              </h3>

              <p className="mt-1 text-xs font-bold tracking-[0.25em] text-[var(--color-heading)] uppercase">
                {activeTestimonial.role}
              </p>

              {/* Bottom Diamond Ornament */}
              <div className="mt-3 flex items-center justify-center gap-3">
                <span className="h-[1px] w-10 bg-[var(--color-accent)]/60" />
                <span className="h-1.5 w-1.5 rotate-45 border border-[var(--color-accent)] bg-[var(--color-accent)]" />
                <span className="h-[1px] w-10 bg-[var(--color-accent)]/60" />
              </div>
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="group z-10 flex h-11 w-11 shrink-0 items-center justify-center text-[var(--color-accent)] transition-all hover:text-[var(--color-primary)] sm:h-14 sm:w-14"
          >
            <div className="flex items-center">
              <FaArrowRight className="text-sm sm:-mr-6" />
              <span className="hidden h-[1.5px] w-6 bg-current transition-all group-hover:w-8 sm:block" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
