import React from 'react';
import { HeroProps } from '@/types/templates.types';

export const Hero = ({ data }: HeroProps) => {
  if (!data) return null;

  return (
    <section
      id="hero"
      className="relative flex w-full items-start justify-center overflow-hidden bg-[var(--color-bg-alt)] bg-cover bg-center pt-8 pb-20 sm:pt-10 sm:pb-28 lg:min-h-[480px] lg:pt-12 lg:pb-36"
      style={{ backgroundImage: `url('${data.bgImage}')` }}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 lg:px-8">
        <div className="flex flex-col items-center text-center lg:items-center lg:pr-24">
          {/* Authentic 5-Petal Lotus Ornament with horizontal accent lines */}
          <div className="mb-4 flex items-center justify-center gap-4 sm:gap-6">
            <span className="h-[1.5px] w-16 bg-[var(--color-accent)]/70 sm:w-24" />
            <svg
              className="h-9 w-9 text-[var(--color-primary)]"
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
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
              <path d="M13 21C14.5 21.8 17.5 21.8 19 21" strokeWidth="1.8" />
            </svg>
            <span className="h-[1.5px] w-16 bg-[var(--color-accent)]/70 sm:w-24" />
          </div>

          {/* Eyebrow / Subtitle */}
          <p className="mb-2 text-xs font-semibold tracking-[0.32em] text-[var(--color-heading)] sm:text-[14px]">
            {data.eyebrow}
          </p>

          {/* Main Title */}
          <h1 className="mb-4 max-w-4xl font-serif text-4xl font-normal leading-[1.12] text-[var(--color-primary)] sm:text-5xl md:text-6xl lg:text-[62px]">
            <span className="block">{data.titleStart}</span>
            <span className="block">{data.titleEnd}</span>
          </h1>

          {/* Categories Tagline */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm font-normal text-[var(--color-text)] sm:text-[16px]">
            {data.taglineItems.map((item, idx) => (
              <React.Fragment key={item.id}>
                <span className="hover:text-[var(--color-primary)] transition-colors">
                  {item.label}
                </span>
                {idx < data.taglineItems.length - 1 && (
                  <span className="text-[var(--color-accent)] select-none font-light">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
