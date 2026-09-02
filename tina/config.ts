import { defineConfig, type TinaField } from "tinacms";

// Branch is auto-detected on Vercel; falls back to main locally.
const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  "main";

// Reusable field shapes -----------------------------------------------------

const textarea = (name: string, label: string): TinaField => ({
  type: "string",
  name,
  label,
  ui: { component: "textarea" },
});

// eyebrow / heading / body trio used by most sections
const sectionFields = (extras: TinaField[] = []): TinaField[] => [
  { type: "string", name: "eyebrow", label: "Small line above the heading" },
  { type: "string", name: "heading", label: "Heading" },
  textarea("body", "Body text"),
  ...extras,
];

const titleDescriptionList = (
  name: string,
  label: string,
  itemLabel: string
): TinaField => ({
  type: "object",
  name,
  label,
  list: true,
  ui: {
    itemProps: (item) => ({ label: item?.title || itemLabel }),
  },
  fields: [
    { type: "string", name: "title", label: "Title" },
    textarea("description", "Description"),
  ],
});

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
              textarea("description", "Search description"),
            ],
          },
          {
            type: "object",
            name: "brand",
            label: "Brand",
            fields: [
              { type: "string", name: "name", label: "Business name" },
              { type: "string", name: "tagline", label: "Tagline" },
            ],
          },
          {
            type: "object",
            name: "hero",
            label: "Top section (hero)",
            fields: [
              { type: "string", name: "eyebrow", label: "Small line above the headline" },
              { type: "string", name: "headline", label: "Headline (first part)" },
              {
                type: "string",
                name: "headlineAccent",
                label: "Headline accent (styled part)",
              },
              textarea("subheadline", "Supporting paragraph"),
              textarea("tagline", "Tagline under the paragraph"),
              { type: "string", name: "primaryCta", label: "Primary button text" },
              { type: "string", name: "secondaryCta", label: "Secondary button text" },
            ],
          },
          {
            type: "object",
            name: "intro",
            label: "Our approach",
            fields: sectionFields([textarea("note", "Closing note")]),
          },
          {
            type: "object",
            name: "principles",
            label: "Guiding principles",
            fields: [
              { type: "string", name: "eyebrow", label: "Small line above the heading" },
              { type: "string", name: "heading", label: "Heading" },
              titleDescriptionList("items", "Principles", "New principle"),
            ],
          },
          {
            type: "object",
            name: "audiences",
            label: "Parent sections (custodial / non-custodial)",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.eyebrow || "New audience" }),
            },
            fields: sectionFields([
              { type: "string", name: "tagline", label: "Closing tagline" },
            ]),
          },
          {
            type: "object",
            name: "serve",
            label: "Who we serve",
            fields: sectionFields([
              { type: "string", name: "items", label: "Groups we serve", list: true },
            ]),
          },
          {
            type: "object",
            name: "services",
            label: "Services",
            fields: sectionFields([
              { type: "string", name: "note", label: "Values line" },
              {
                type: "object",
                name: "items",
                label: "Service list",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.title || "New service" }),
                },
                fields: [
                  { type: "string", name: "title", label: "Service name" },
                  { type: "string", name: "tagline", label: "Short tagline" },
                  textarea("description", "Description"),
                ],
              },
            ]),
          },
          {
            type: "object",
            name: "steps",
            label: "How it works",
            fields: sectionFields([
              titleDescriptionList("items", "Steps", "New step"),
            ]),
          },
          {
            type: "object",
            name: "team",
            label: "Our team",
            fields: sectionFields([
              textarea("note", "Monitor training line"),
              titleDescriptionList("credentials", "Professional standards", "New credential"),
            ]),
          },
          {
            type: "object",
            name: "director",
            label: "Our director",
            fields: sectionFields(),
          },
          {
            type: "object",
            name: "commitment",
            label: "Our commitment",
            fields: sectionFields([
              { type: "string", name: "lines", label: "Closing lines", list: true },
            ]),
          },
          {
            type: "object",
            name: "areas",
            label: "Areas we serve",
            fields: sectionFields([
              { type: "string", name: "items", label: "Counties", list: true },
            ]),
          },
          {
            type: "object",
            name: "availability",
            label: "Availability",
            fields: sectionFields([
              { type: "string", name: "items", label: "Available times", list: true },
            ]),
          },
          {
            type: "object",
            name: "locations",
            label: "Visitation locations",
            fields: sectionFields([
              { type: "string", name: "items", label: "Example locations", list: true },
            ]),
          },
          {
            type: "object",
            name: "fees",
            label: "Fees & payment",
            fields: sectionFields([
              textarea("paymentNote", "Payment note"),
              textarea("cancellationNote", "Cancellation note"),
            ]),
          },
          {
            type: "object",
            name: "finalCta",
            label: "Final call to action",
            fields: sectionFields([
              { type: "string", name: "primaryCta", label: "Primary button text" },
              { type: "string", name: "secondaryCta", label: "Secondary button text" },
            ]),
          },
          {
            type: "object",
            name: "contact",
            label: "Contact details",
            fields: [
              { type: "string", name: "phone", label: "Phone number" },
              { type: "string", name: "email", label: "Email address" },
            ],
          },
          {
            type: "object",
            name: "resources",
            label: "Resource links",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.label || "New link" }),
            },
            fields: [
              { type: "string", name: "label", label: "Link text" },
              { type: "string", name: "url", label: "URL" },
            ],
          },
          {
            type: "object",
            name: "footer",
            label: "Footer",
            fields: [
              { type: "string", name: "tagline", label: "Tagline" },
              { type: "string", name: "line", label: "Footer line" },
              { type: "string", name: "contactEmail", label: "Contact email" },
            ],
          },
        ],
      },
    ],
  },
});
