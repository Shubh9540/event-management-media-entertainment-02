export interface HeaderNavLink {
  id: string;
  label: string;
  url: string;
  hasDropdown?: boolean;
  dropdownItems?: { id: string; label: string; url: string }[];
}

export interface HeaderData {
  logo: string;
  logoAlt: string;
  navLinks: HeaderNavLink[];
  contactButton: { text: string; url: string };
  openMenuLabel: string;
  closeMenuLabel: string;
}

export interface HeaderProps {
  data?: HeaderData;
}

export interface HeroTaglineItem {
  id: string;
  label: string;
}

export interface HeroData {
  eyebrow: string;
  titleStart: string;
  titleEnd: string;
  taglineItems: HeroTaglineItem[];
  bgImage: string;
  bgImageAlt: string;
}

export interface HeroProps {
  data?: HeroData;
}

export interface AboutUsData {
  eyebrow: string;
  titleStart: string;
  titleEnd: string;
  descriptionParagraph1: string;
  descriptionParagraph2: string;
  imageMain: string;
  imageMainAlt: string;
  imageDetail: string;
  imageDetailAlt: string;
}

export interface AboutUsProps {
  data?: AboutUsData;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface ServicesData {
  eyebrow: string;
  title: string;
  description: string;
  readMoreButtonText?: string;
  readMoreUrl?: string;
  services: ServiceItem[];
}

export interface ServicesProps {
  data?: ServicesData;
}

export interface ServiceCardProps {
  service: ServiceItem;
  linkText: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  imageAlt: string;
}

export interface GalleryData {
  eyebrow: string;
  title: string;
  description: string;
  items: GalleryItem[];
}

export interface GalleryProps {
  data?: GalleryData;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  avatarAlt: string;
}

export interface TestimonialsData {
  eyebrow: string;
  title: string;
  autoplayDelay?: number;
  testimonials: TestimonialItem[];
}

export interface TestimonialsProps {
  data?: TestimonialsData;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqData {
  eyebrow: string;
  titleStart: string;
  titleEnd: string;
  description: string;
  image: string;
  imageAlt: string;
  items: FaqItem[];
}

export interface FaqProps {
  data?: FaqData;
}

export interface ContactServiceOption {
  id: string;
  label: string;
  value: string;
}

export interface ContactInfoLine {
  id: string;
  text: string;
}

export interface ContactInfoItem {
  id: string;
  icon: string;
  title: string;
  lines: ContactInfoLine[];
}

export interface ContactData {
  eyebrow: string;
  title: string;
  description: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  submitButtonText: string;
  cornerTopLeftImage: string;
  cornerBottomRightImage: string;
}

export interface ContactProps {
  data?: ContactData;
}

export interface FooterData {
  logo: string;
  logoAlt: string;
  logoUrl: string;
  brandTitle: string;
  copyrightText: string;
  quickLinksTitle: string;
  contactTitle: string;
  followUsTitle: string;
  socialLinks: { id: string; icon: string; label: string; url: string }[];
  quickLinks: { id: string; label: string; url: string }[];
  contactInfo: { address: string; phone: string; email: string };
}

export interface FooterProps {
  data?: FooterData;
}

export interface TemplateComponentItem {
  key: string;
  component: string;
}

export interface TemplateComponentPage {
  components: TemplateComponentItem[];
}

export interface TemplateComponentsData {
  shared: {
    Header: string;
    Footer: string;
  };
  pages: Record<string, TemplateComponentPage>;
}

export interface PageComponentRegistry {
  components: (string | TemplateComponentItem)[];
}

export interface EventManagementTemplateData {
  common: {
    Footer?: FooterData;
  };
  categories: {
    EventManagement: {
      templateComponents?: TemplateComponentsData;
      sections: {
        Header?: { variants?: { EventManagementHeader2?: HeaderData } };
        Hero?: { variants?: { EventManagementHero2?: HeroData } };
        AboutUs?: { variants?: { EventManagementAboutUs2?: AboutUsData } };
        Services?: { variants?: { EventManagementServices2?: ServicesData } };
        Gallery?: { variants?: { EventManagementGallery2?: GalleryData } };
        Testimonials?: { variants?: { EventManagementTestimonials2?: TestimonialsData } };
        Contact?: { variants?: { EventManagementContact2?: ContactData } };
        Faq?: { variants?: { EventManagementFaq2?: FaqData } };
      };
    };
  };
  pages: Record<string, PageComponentRegistry>;
}
