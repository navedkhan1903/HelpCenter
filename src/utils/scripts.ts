import { faq } from "@/utils/data";
import { createBreadcrumb } from "./functions";

export const faqScript = {
  __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  }),
};

export const servicesBreadcrumb = createBreadcrumb([
  { position: 1, name: "Home", item: "https://helpcenter-web.vercel.app" },
  {
    position: 2,
    name: "Services",
    item: "https://helpcenter-web.vercel.app/services",
  },
]);

export const homeServicesBreadcrumb = createBreadcrumb([
  { position: 1, name: "Home", item: "https://helpcenter-web.vercel.app" },
  {
    position: 2,
    name: "Services",
    item: "https://helpcenter-web.vercel.app/services",
  },
  {
    position: 3,
    name: "Home Services",
    item: "https://helpcenter-web.vercel.app/services/home",
  },
]);

export const cleaningBreadcrumb = createBreadcrumb([
  { position: 1, name: "Home", item: "https://helpcenter-web.vercel.app" },
  {
    position: 2,
    name: "Services",
    item: "https://helpcenter-web.vercel.app/services",
  },
  {
    position: 3,
    name: "Home Services",
    item: "https://helpcenter-web.vercel.app/services/home",
  },
  {
    position: 4,
    name: "Cleaning Services",
    item: "https://helpcenter-web.vercel.app/services/home/cleaning",
  },
]);
