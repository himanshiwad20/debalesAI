export interface PageConfig {
  _id?: string;
  slug: string;
  title: string;
  description: string;
  layout: "stacked" | "sidebar" | "dashboard";
  sections: SectionConfig[];
  metadata?: Record<string, unknown>;
  createdAt?: string;
  updatedAt?: string;
}

export interface SectionConfig {
  id: string;
  type: SectionType;
  title: string;
  description?: string;
  props: Record<string, unknown>;
  order: number;
}

export type SectionType =
  | "hero"
  | "features"
  | "stats"
  | "testimonials"
  | "pricing"
  | "cta"
  | "faq"
  | "gallery"
  | "contact-form"
  | "text-block"
  | "card-grid";

export interface HeroProps {
  heading: string;
  subheading: string;
  backgroundImage?: string;
  primaryCta?: CtaConfig;
  secondaryCta?: CtaConfig;
}

export interface CtaConfig {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline";
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface FeaturesProps {
  columns: number;
  items: FeatureItem[];
}

export interface StatItem {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

export interface StatsProps {
  items: StatItem[];
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}

export interface TestimonialsProps {
  items: TestimonialItem[];
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: CtaConfig;
  highlighted?: boolean;
}

export interface PricingProps {
  plans: PricingPlan[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqProps {
  items: FaqItem[];
}

export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

export interface GalleryProps {
  columns: number;
  items: GalleryItem[];
}

export interface CardGridItem {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  link?: string;
}

export interface CardGridProps {
  columns: number;
  items: CardGridItem[];
}

export interface TextBlockProps {
  content: string;
  alignment?: "left" | "center" | "right";
}

export interface ContactFormProps {
  fields: FormFieldConfig[];
  submitLabel: string;
  successMessage: string;
}

export interface FormFieldConfig {
  name: string;
  label: string;
  type: "text" | "email" | "textarea" | "select" | "tel";
  placeholder?: string;
  required?: boolean;
  options?: string[];
}

export interface CtaSectionProps {
  heading: string;
  description: string;
  primaryCta: CtaConfig;
  secondaryCta?: CtaConfig;
}
