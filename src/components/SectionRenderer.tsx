import type { SectionConfig, SectionType } from "../types/config";
import { HeroSection } from "./sections/HeroSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { StatsSection } from "./sections/StatsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { PricingSection } from "./sections/PricingSection";
import { FaqSection } from "./sections/FaqSection";
import { CtaSection } from "./sections/CtaSection";
import { GallerySection } from "./sections/GallerySection";
import { CardGridSection } from "./sections/CardGridSection";
import { TextBlockSection } from "./sections/TextBlockSection";
import { ContactFormSection } from "./sections/ContactFormSection";

const sectionComponents: Record<SectionType, React.ComponentType<Record<string, unknown>>> = {
  hero: HeroSection as unknown as React.ComponentType<Record<string, unknown>>,
  features: FeaturesSection as unknown as React.ComponentType<Record<string, unknown>>,
  stats: StatsSection as unknown as React.ComponentType<Record<string, unknown>>,
  testimonials: TestimonialsSection as unknown as React.ComponentType<Record<string, unknown>>,
  pricing: PricingSection as unknown as React.ComponentType<Record<string, unknown>>,
  faq: FaqSection as unknown as React.ComponentType<Record<string, unknown>>,
  cta: CtaSection as unknown as React.ComponentType<Record<string, unknown>>,
  gallery: GallerySection as unknown as React.ComponentType<Record<string, unknown>>,
  "card-grid": CardGridSection as unknown as React.ComponentType<Record<string, unknown>>,
  "text-block": TextBlockSection as unknown as React.ComponentType<Record<string, unknown>>,
  "contact-form": ContactFormSection as unknown as React.ComponentType<Record<string, unknown>>,
};

interface SectionRendererProps {
  section: SectionConfig;
}

export function SectionRenderer({ section }: SectionRendererProps) {
  const Component = sectionComponents[section.type];

  if (!Component) {
    return (
      <div className="p-8 text-center text-slate-400">
        Unknown section type: {section.type}
      </div>
    );
  }

  // const safeProps = {
  //   title: section.title || "Demo Title",
  //   description: section.description || "Demo description",
  //   heading: section.title || "Demo Heading",
  //   subheading: section.description || "Demo Subheading",

  //   features: section.features || [
  //     { title: "Feature 1", description: "Demo feature" },
  //     { title: "Feature 2", description: "Demo feature" }
  //   ],

  //   stats: section.stats || [
  //     { label: "Users", value: "1000+" },
  //     { label: "Growth", value: "200%" }
  //   ],

  //   testimonials: section.testimonials || [
  //     { name: "User", quote: "This is awesome!" }
  //   ],

  //   plans: section.plans || [
  //     { name: "Basic", price: "$10" }
  //   ],

  //   faqs: section.faqs || [
  //     { question: "What is this?", answer: "Demo FAQ" }
  //   ],

  //   ...section
  // };

  const normalize = (value: any) => {
  if (
    value &&
    typeof value === "object" &&
    !Array.isArray(value)
  ) {
    const keys = Object.keys(value);
    const isArrayLike = keys.every((k) => !isNaN(Number(k)));
    if (isArrayLike) return Object.values(value);
  }
  return value;
};

const normalizedProps = Object.fromEntries(
  Object.entries(section.props || {}).map(([k, v]) => [k, normalize(v)])
);

  return <Component {...normalizedProps}  />;
}
