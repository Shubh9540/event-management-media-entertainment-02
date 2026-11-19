import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import rawData from '@/data/templates.json';
import { EventManagementTemplateData } from '@/types/templates.types';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Celestiq Event Management | Beautiful Celebrations Perfectly Planned",
  description: "Creating memorable experiences for weddings, birthdays, corporate events and private parties.",
  icons: {
    icon: '/main logo/logo.webp',
    shortcut: '/main logo/logo.webp',
    apple: '/main logo/logo.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const templateData: EventManagementTemplateData = rawData;
  const sectionData = templateData.categories.EventManagement.sections;
  const commonData = templateData.common;

  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className={`${poppins.variable} font-sans antialiased overflow-x-hidden w-full relative`}>
        <Header data={sectionData.Header?.variants?.EventManagementHeader2} />
        {children}
        <Footer data={commonData.Footer} />
      </body>
    </html>
  );
}
