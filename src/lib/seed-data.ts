import { mongoDb } from "./mongodb-client";
import type { PageConfig } from "../types/config";

const DB_NAME = "FullStack";
const COLLECTION = "config_driven_ui";

const homePageConfig: PageConfig = {
  slug: "home",
  title: "Apex Platform",
  description: "The modern platform for building extraordinary digital experiences",
  layout: "stacked",
  sections: [
    {
      id: "hero-1",
      type: "hero",
      title: "Hero",
      description: "Main hero section",
      order: 0,
      props: {
        heading: "Build Without Limits",
        subheading: "A config-driven platform that lets you ship beautiful experiences at scale. Define your UI, not your codebase.",
        primaryCta: {
          label: "Get Started Free",
          href: "#pricing",
          variant: "primary",
        },
        secondaryCta: {
          label: "View Demo",
          href: "#features",
          variant: "outline",
        },
      } as Record<string, unknown>,
    },
    {
      id: "features-1",
      type: "features",
      title: "Features",
      description: "Platform capabilities",
      order: 1,
      props: {
        columns: 3,
        items: [
          {
            icon: "Zap",
            title: "Lightning Fast",
            description: "Sub-second page loads with edge-optimized delivery and intelligent caching strategies.",
          },
          {
            icon: "Layers",
            title: "Config-Driven",
            description: "Define your entire UI through configuration. No code changes needed to update layouts and content.",
          },
          {
            icon: "Shield",
            title: "Enterprise Security",
            description: "SOC 2 compliant with end-to-end encryption, RBAC, and comprehensive audit logging.",
          },
          {
            icon: "Globe",
            title: "Global Scale",
            description: "Deploy to 200+ edge locations worldwide. Your users get the same fast experience everywhere.",
          },
          {
            icon: "Puzzle",
            title: "Extensible",
            description: "Plugin architecture lets you add custom sections, themes, and integrations effortlessly.",
          },
          {
            icon: "BarChart3",
            title: "Analytics Built-In",
            description: "Real-time dashboards with conversion tracking, heatmaps, and user journey analytics.",
          },
        ],
      } as Record<string, unknown>,
    },
    {
      id: "stats-1",
      type: "stats",
      title: "By the Numbers",
      description: "Platform statistics",
      order: 2,
      props: {
        items: [
          { value: "99.99", label: "Uptime %", suffix: "%" },
          { value: "2.4", label: "Million Requests/Day", suffix: "M" },
          { value: "150", label: "Countries Served", suffix: "+" },
          { value: "4.9", label: "Customer Rating", suffix: "/5" },
        ],
      } as Record<string, unknown>,
    },
    {
      id: "testimonials-1",
      type: "testimonials",
      title: "What Our Customers Say",
      description: "Customer testimonials",
      order: 3,
      props: {
        items: [
          {
            quote: "Apex transformed how we deliver experiences. We went from monthly releases to daily updates without touching code.",
            author: "Sarah Chen",
            role: "VP of Engineering, TechFlow",
          },
          {
            quote: "The config-driven approach cut our development time by 60%. Our marketing team can now ship pages independently.",
            author: "Marcus Rivera",
            role: "CTO, GrowthLabs",
          },
          {
            quote: "We evaluated 12 platforms. Apex was the only one that could handle our scale while keeping things simple.",
            author: "Elena Kowalski",
            role: "Head of Product, ScaleUp",
          },
        ],
      } as Record<string, unknown>,
    },
    {
      id: "pricing-1",
      type: "pricing",
      title: "Simple, Transparent Pricing",
      description: "Pricing plans",
      order: 4,
      props: {
        plans: [
          {
            name: "Starter",
            price: "29",
            period: "/month",
            description: "Perfect for small teams getting started",
            features: [
              "Up to 5 pages",
              "10K monthly visits",
              "Basic analytics",
              "Email support",
              "1 team member",
            ],
            cta: { label: "Start Free Trial", href: "#", variant: "outline" },
          },
          {
            name: "Professional",
            price: "99",
            period: "/month",
            description: "For growing teams that need more power",
            features: [
              "Unlimited pages",
              "500K monthly visits",
              "Advanced analytics",
              "Priority support",
              "10 team members",
              "Custom domains",
              "A/B testing",
            ],
            cta: { label: "Start Free Trial", href: "#", variant: "primary" },
            highlighted: true,
          },
          {
            name: "Enterprise",
            price: "Custom",
            period: "",
            description: "For organizations with advanced needs",
            features: [
              "Everything in Professional",
              "Unlimited visits",
              "SSO & SAML",
              "Dedicated support",
              "Unlimited team members",
              "SLA guarantee",
              "Custom integrations",
            ],
            cta: { label: "Contact Sales", href: "#", variant: "outline" },
          },
        ],
      } as Record<string, unknown>,
    },
    {
      id: "faq-1",
      type: "faq",
      title: "Frequently Asked Questions",
      description: "Common questions",
      order: 5,
      props: {
        items: [
          {
            question: "How does the config-driven approach work?",
            answer: "Instead of writing code, you define your UI through JSON configuration documents stored in MongoDB. Our rendering engine reads these configs and builds the interface dynamically. This means non-technical team members can update content and layouts without developer involvement.",
          },
          {
            question: "Can I migrate from my existing platform?",
            answer: "Yes. We provide migration tools and dedicated support to help you move from any platform. Most teams are fully migrated within 2 weeks, and we ensure zero downtime during the transition.",
          },
          {
            question: "Is my data secure?",
            answer: "Absolutely. We are SOC 2 Type II certified, use AES-256 encryption at rest and TLS 1.3 in transit. All data is stored in isolated environments with comprehensive access controls and audit logging.",
          },
          {
            question: "What happens if I exceed my plan limits?",
            answer: "We will never cut off your service unexpectedly. If you approach your limits, we will notify you and provide a grace period to upgrade. Overages are billed at reasonable rates with full transparency.",
          },
          {
            question: "Do you offer a free trial?",
            answer: "Yes, every plan comes with a 14-day free trial. No credit card required. You get full access to all features so you can evaluate the platform thoroughly before committing.",
          },
        ],
      } as Record<string, unknown>,
    },
    {
      "id": "contact-1",
      "type": "contact-form",
      "title": "Contact Us",
      "description": "Get in touch with us",
      "order": 6,
      "props": {
        "submitLabel": "Send Message",
        "successMessage": "Thanks! We'll get back to you soon.",
        "fields": [
          {
            "name": "name",
            "label": "Full Name",
            "type": "text",
            "placeholder": "Enter your name",
            "required": true
          },
          {
            "name": "email",
            "label": "Email Address",
            "type": "email",
            "placeholder": "Enter your email",
            "required": true
          },
          {
            "name": "subject",
            "label": "Subject",
            "type": "select",
            "required": true,
            "options": [
              "General Inquiry",
              "Support",
              "Sales"
            ]
          },
          {
            "name": "message",
            "label": "Message",
            "type": "textarea",
            "placeholder": "Write your message...",
            "required": true
          }
        ]
      } as Record<string, unknown>
    },
    {
      id: "cta-1",
      type: "cta",
      title: "Ready to Get Started?",
      description: "Final call to action",
      order: 7,
      props: {
        heading: "Ready to Transform Your Digital Experience?",
        description: "Join thousands of teams who have already made the switch. Start your free trial today.",
        primaryCta: {
          label: "Start Free Trial",
          href: "#",
          variant: "primary",
        },
        secondaryCta: {
          label: "Schedule a Demo",
          href: "#",
          variant: "outline",
        },
      } as Record<string, unknown>,
    },
  ],
};

export async function seedDatabase() {
  const existing = await mongoDb.findOne(DB_NAME, COLLECTION, { slug: "home" });

  if (!existing) {
    // await mongoDb.updateOne(
    //   DB_NAME,
    //   COLLECTION,
    //   { slug: "home" },
    //   { $set: { ...homePageConfig, updatedAt: new Date().toISOString() } }
    // );
    await mongoDb.insertOne(DB_NAME, COLLECTION, {
      ...homePageConfig,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    return "created";
  }

  console.log('existing')
  return "updated";
}
