'use client';

import React, { useState } from 'react';
import { ContactProps } from '@/types/templates.types';

export const Contact = ({ data }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!data) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="relative w-full overflow-hidden bg-[#ffffff] py-16 lg:py-24">
      {/* Top-Left Corner User-Provided Lotus Flower Line Artwork */}
      {data.cornerTopLeftImage && (
        <div className="pointer-events-none absolute left-0 top-0 z-0 h-44 w-36 sm:h-56 sm:w-48 lg:h-64 lg:w-56">
          <img
            src={data.cornerTopLeftImage}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-contain object-left-top"
          />
        </div>
      )}

      {/* Bottom-Right Corner User-Provided Lotus Flower Line Artwork */}
      {data.cornerBottomRightImage && (
        <div className="pointer-events-none absolute bottom-0 right-0 z-0 h-44 w-36 sm:h-56 sm:w-48 lg:h-64 lg:w-56">
          <img
            src={data.cornerBottomRightImage}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-contain object-right-bottom"
          />
        </div>
      )}

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center text-center lg:mb-16">
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

          {/* Eyebrow */}
          <p className="mb-3 text-base font-normal tracking-[0.38em] text-[#2c1a16] uppercase sm:text-lg lg:text-[20px]">
            {data.eyebrow}
          </p>

          {/* Main Title */}
          <h2 className="mb-3 font-serif text-4xl font-normal leading-tight text-[#8b3a2b] sm:text-5xl lg:text-[58px] xl:text-[62px]">
            {data.title}
          </h2>

          {/* Subtitle description */}
          <p className="max-w-2xl text-base leading-relaxed text-[#594742] sm:text-lg">
            {data.description}
          </p>
        </div>

        {/* Contact Form */}
        <div className="mx-auto w-full max-w-3xl">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-5 sm:space-y-6">
            <div>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={data.namePlaceholder}
                className="w-full rounded-md border border-[#c59b6d]/60 bg-transparent px-4 py-3.5 text-base text-[#2c1a16] placeholder-[#8c7771] outline-none transition-all focus:border-[#8b3a2b] focus:ring-1 focus:ring-[#8b3a2b]"
              />
            </div>

            <div>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={data.emailPlaceholder}
                className="w-full rounded-md border border-[#c59b6d]/60 bg-transparent px-4 py-3.5 text-base text-[#2c1a16] placeholder-[#8c7771] outline-none transition-all focus:border-[#8b3a2b] focus:ring-1 focus:ring-[#8b3a2b]"
              />
            </div>

            <div>
              <textarea
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={data.messagePlaceholder}
                className="w-full rounded-md border border-[#c59b6d]/60 bg-transparent px-4 py-3.5 text-base text-[#2c1a16] placeholder-[#8c7771] outline-none transition-all focus:border-[#8b3a2b] focus:ring-1 focus:ring-[#8b3a2b]"
              />
            </div>

            <div className="pt-2 flex flex-col items-center">
              <div className="relative inline-block">
                <span className="absolute -top-1.5 -right-1.5 h-2.5 w-2.5 rotate-45 border border-[#c59b6d] bg-[#c59b6d]" />
                <span className="absolute -bottom-1.5 -left-1.5 h-2.5 w-2.5 rotate-45 border border-[#c59b6d] bg-[#c59b6d]" />

                <button
                  type="submit"
                  className="rounded-none border-2 border-[#c59b6d] bg-transparent px-10 py-3 text-sm font-semibold tracking-[0.2em] text-[#8b3a2b] uppercase transition-all duration-300 hover:bg-[#8b3a2b] hover:border-[#8b3a2b] hover:text-white"
                >
                  {data.submitButtonText}
                </button>
              </div>

              {submitted && (
                <p className="mt-4 text-sm font-medium text-[#8b3a2b] animate-fadeIn">
                  Thank you! Your message has been sent successfully.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
