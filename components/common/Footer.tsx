import React from 'react';
import Link from 'next/link';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaAngleRight,
} from 'react-icons/fa';
import { FooterProps } from '@/types/templates.types';

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF':
      return <FaFacebookF className="text-sm" />;
    case 'FaInstagram':
      return <FaInstagram className="text-sm" />;
    case 'FaLinkedinIn':
      return <FaLinkedinIn className="text-sm" />;
    case 'FaYoutube':
      return <FaYoutube className="text-sm" />;
    default:
      return null;
  }
};

export const Footer = ({ data }: FooterProps) => {
  if (!data) return null;

  // Split quick links into two clean columns
  const col1Links = data.quickLinks.slice(0, 4); // Home, About Us, Services, Gallery
  const col2Links = data.quickLinks.slice(4);    // Testimonials, FAQs, Contact Us

  return (
    <footer className="relative w-full overflow-hidden bg-[#ffffff] pt-14 pb-10">
      {/* Top-Left Corner User-Provided Lotus Flower Watermark */}
      <div className="pointer-events-none absolute left-0 top-0 z-0 h-44 w-36 sm:h-56 sm:w-48 lg:h-64 lg:w-56">
        <img
          src="/contact/footer-top-left.webp"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-contain object-left-top"
        />
      </div>

      {/* Bottom-Right Corner User-Provided Lotus Flower Watermark */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-0 h-44 w-36 sm:h-56 sm:w-48 lg:h-64 lg:w-56">
        <img
          src="/contact/footer-bottom-right.webp"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-contain object-right-bottom"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 lg:px-8">
        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1: Brand Logo */}
          <div className="flex flex-col items-center justify-center lg:items-start">
            <Link href="/" className="inline-block">
              <img
                src={data.logo}
                alt={data.logoAlt}
                className="h-16 w-auto object-contain sm:h-20"
              />
            </Link>
          </div>

          {/* Column 2: Quick Links (with vertical left border on desktop) */}
          <div className="lg:border-l lg:border-[#ebdcd4] lg:pl-8">
            <h3 className="mb-2 font-serif text-xl font-medium text-[#2c1a16]">
              {data.quickLinksTitle}
            </h3>
            {/* Terracotta/Gold underline */}
            <div className="mb-5 h-[2px] w-10 bg-[#c59b6d]" />

            <div className="grid grid-cols-2 gap-x-3 gap-y-2.5 text-sm">
              {/* Sub-col 1 */}
              <div className="flex flex-col space-y-2.5">
                {col1Links.map((link) => (
                  <Link
                    key={link.id}
                    href={link.url}
                    className="flex items-center gap-1.5 text-sm text-[#2c1a16] transition-colors hover:text-[#8b3a2b]"
                  >
                    <FaAngleRight className="text-[11px] text-[#c59b6d]" />
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>

              {/* Sub-col 2 */}
              <div className="flex flex-col space-y-2.5">
                {col2Links.map((link) => (
                  <Link
                    key={link.id}
                    href={link.url}
                    className="flex items-center gap-1.5 text-sm text-[#2c1a16] transition-colors hover:text-[#8b3a2b]"
                  >
                    <FaAngleRight className="text-[11px] text-[#c59b6d]" />
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Get in Touch (with vertical left border on desktop) */}
          <div className="lg:border-l lg:border-[#ebdcd4] lg:pl-8">
            <h3 className="mb-2 font-serif text-xl font-medium text-[#2c1a16]">
              {data.contactTitle}
            </h3>
            <div className="mb-5 h-[2px] w-10 bg-[#c59b6d]" />

            <div className="flex flex-col space-y-3.5 text-sm text-[#2c1a16]">
              {/* Address */}
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="shrink-0 text-base text-[#c59b6d]" />
                <span className="leading-snug">{data.contactInfo.address}</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="shrink-0 text-sm text-[#c59b6d]" />
                <a
                  href={`tel:${data.contactInfo.phone}`}
                  className="transition-colors hover:text-[#8b3a2b]"
                >
                  {data.contactInfo.phone}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <FaEnvelope className="shrink-0 text-sm text-[#c59b6d]" />
                <a
                  href={`mailto:${data.contactInfo.email}`}
                  className="break-all transition-colors hover:text-[#8b3a2b]"
                >
                  {data.contactInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Follow Us (with vertical left border on desktop) */}
          <div className="lg:border-l lg:border-[#ebdcd4] lg:pl-8">
            <h3 className="mb-2 font-serif text-xl font-medium text-[#2c1a16]">
              {data.followUsTitle}
            </h3>
            <div className="mb-5 h-[2px] w-10 bg-[#c59b6d]" />

            <div className="flex items-center gap-2.5">
              {data.socialLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c59b6d] text-[#c59b6d] transition-all duration-300 hover:border-[#8b3a2b] hover:bg-[#8b3a2b] hover:text-white"
                >
                  {renderSocialIcon(item.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Divider */}
        <div className="relative mt-12 mb-6 flex items-center justify-center">
          <div className="h-[1px] w-full bg-[#ebdcd4]" />
        </div>

        {/* Bottom Copyright Text */}
        <div className="text-center">
          <p className="text-sm font-medium text-[#594742]">
            {data.copyrightText}
          </p>
        </div>
      </div>
    </footer>
  );
};
