import type { Metadata } from "next";
import client from "../tina/__generated__/client";
import LandingPage from "../components/LandingPage";

// Fully static: content is baked in at build time. Publishing in the CMS
// commits to Git, which triggers a Vercel rebuild, so this stays current.
export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await client.queries.page({ relativePath: "home.json" });
  return {
    title: data.page.seo?.title ?? "Landing",
    description: data.page.seo?.description ?? undefined,
  };
}

export default async function Home() {
  const result = await client.queries.page({ relativePath: "home.json" });
  return (
    <LandingPage
      data={result.data}
      query={result.query}
      variables={result.variables}
    />
  );
}
