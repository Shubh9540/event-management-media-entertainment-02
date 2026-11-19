import React from 'react';
import { EventManagementTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Hero } from '@/components/sections/Hero';
import { AboutUs } from '@/components/sections/AboutUs';
import { Services } from '@/components/sections/Services';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { Faq } from '@/components/sections/Faq';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: EventManagementTemplateData = rawData;
  const sectionData = templateData?.categories?.EventManagement?.sections;
  if (!sectionData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen w-full overflow-x-hidden flex flex-col scroll-smooth">
      <Hero data={sectionData.Hero?.variants?.EventManagementHero2} />
      <AboutUs data={sectionData.AboutUs?.variants?.EventManagementAboutUs2} />
      <Services data={sectionData.Services?.variants?.EventManagementServices2} />
      <Gallery data={sectionData.Gallery?.variants?.EventManagementGallery2} />
      <Testimonials data={sectionData.Testimonials?.variants?.EventManagementTestimonials2} />
      <Contact data={sectionData.Contact?.variants?.EventManagementContact2} />
      <Faq data={sectionData.Faq?.variants?.EventManagementFaq2} />
    </main>
  );
}
