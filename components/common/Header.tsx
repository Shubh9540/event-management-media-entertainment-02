'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';
import { HeaderProps } from '@/types/templates.types';

export const Header = ({ data }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!data) return null;

  const isLinkActive = (url: string) => {
    if (url === '/#hero' || url === '/') return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border-soft)] bg-[var(--color-bg-card)] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] transition-all">
      <div className="mx-auto flex h-24 w-full max-w-[1280px] items-center justify-between px-4 lg:px-8">
        {/* Brand Logo - Bigger and Clear */}
        <Link href="/" className="flex shrink-0 items-center">
          <img
            src={data.logo}
            alt={data.logoAlt}
            className="h-14 w-auto object-contain sm:h-16 lg:h-18"
          />
        </Link>

        {/* Desktop Navigation Links - Bigger text and comfortable spacing */}
        <nav className="hidden h-full items-center justify-center gap-7 lg:flex xl:gap-9">
          {data.navLinks.map((link) => {
            const isActive = isLinkActive(link.url);

            return (
              <Link
                key={link.id}
                href={link.url}
                className={`relative flex h-full items-center text-[16px] font-medium transition-colors ${
                  isActive
                    ? 'font-semibold text-[var(--color-primary)]'
                    : 'text-[var(--color-heading)] hover:text-[var(--color-primary)]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute inset-x-0 bottom-5 h-[2.5px] rounded-full bg-[var(--color-primary)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button & Divider */}
        <div className="flex items-center gap-5">
          <div className="hidden h-7 w-[1.5px] bg-[var(--color-border)] lg:block" />

          <Link
            href={data.contactButton.url}
            className="hidden items-center gap-2.5 rounded-lg bg-[var(--color-primary)] px-6 py-3 text-[15px] font-semibold text-white shadow-sm transition-all hover:bg-[var(--color-primary-dark)] hover:shadow-md lg:inline-flex"
          >
            <span>{data.contactButton.text}</span>
            <FaArrowRight className="text-xs transition-transform group-hover:translate-x-0.5" />
          </Link>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? data.closeMenuLabel : data.openMenuLabel}
            aria-expanded={mobileMenuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-md border border-[var(--color-border)] text-xl text-[var(--color-heading)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] lg:hidden"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-bg-card)] px-5 py-6 shadow-xl lg:hidden">
          <nav className="flex flex-col space-y-2">
            {data.navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-base font-medium text-[var(--color-heading)] transition-colors hover:text-[var(--color-primary)]"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4">
              <Link
                href={data.contactButton.url}
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2.5 rounded-lg bg-[var(--color-primary)] py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-[var(--color-primary-dark)]"
              >
                <span>{data.contactButton.text}</span>
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
