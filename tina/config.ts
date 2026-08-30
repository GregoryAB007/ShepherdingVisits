import { defineConfig } from "tinacms";

// Branch is auto-detected on Vercel; falls back to main locally.
const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  "main";

export default defineConfig({
  branch,

  // Get these from https://app.tina.io after creating a (free) project.
  // Leave them unset for local editing during development.
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin", // editor lives at /admin/index.html
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "json",
        ui: {
          // Enables click-to-edit visual editing on the live page
          router: () => "/",
          // Prevents editors from creating/deleting pages by accident
          allowedActions: { create: false, delete: false },
        },
        fields: [
          {
            type: "object",
            name: "seo",
            label: "Browser tab & search (SEO)",
            fields: [
              { type: "string", name: "title", label: "Page title" },
              {
                type: "string",
                name: "description",
                label: "Search description",
                ui: { component: "textarea" },
              },
            ],
          },
          {
            type: "object",
            name: "hero",
            label: "Top section (hero)",
            fields: [
              { type: "string", name: "eyebrow", label: "Small line above the headline" },
              { type: "string", name: "headline", label: "Headline" },
              {
                type: "string",
                name: "subheadline",
                label: "Supporting sentence",
                ui: { component: "textarea" },
              },
              { type: "string", name: "ctaLabel", label: "Buy button text" },
              {
                type: "string",
                name: "stripePaymentLink",
                label: "Stripe Payment Link URL",
                description:
                  "Create a Payment Link in your Stripe dashboard and paste the https://buy.stripe.com/... URL here.",
              },
              { type: "string", name: "priceNote", label: "Small note under the button" },
            ],
          },
          {
            type: "object",
            name: "features",
            label: "Feature cards",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.title || "New feature" }),
            },
            fields: [
              { type: "string", name: "title", label: "Title" },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: { component: "textarea" },
              },
            ],
          },
          {
            type: "object",
            name: "pricing",
            label: "Pricing box",
            fields: [
              { type: "string", name: "title", label: "Section title" },
              { type: "string", name: "price", label: "Price (e.g. $49)" },
              { type: "string", name: "unit", label: "After the price (e.g. one-time)" },
              {
                type: "string",
                name: "description",
                label: "What's included",
                ui: { component: "textarea" },
              },
              { type: "string", name: "ctaLabel", label: "Button text" },
            ],
          },
          {
            type: "object",
            name: "footer",
            label: "Footer",
            fields: [
              { type: "string", name: "line", label: "Footer line" },
              { type: "string", name: "contactEmail", label: "Contact email" },
            ],
          },
        ],
      },
    ],
  },
});
