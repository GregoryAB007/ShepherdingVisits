import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import client from "../tina/__generated__/client";
import type { Page } from "../tina/__generated__/types";
import LandingPage from "../components/LandingPage";

// Fully static: content is baked in at build time. Publishing in the CMS
// commits to Git, which triggers a rebuild, so this stays current.
export const dynamic = "force-static";

// The Tina CLI's generated query helpers (client.queries.*) silently come out
// empty when the project path contains glob metacharacters — this project
// lives under "iCloud Drive (Archive)", so the parentheses break the CLI's
// internal document glob. The fragment file is always generated correctly,
// so we assemble the page query from it ourselves. This also works on clean
// paths (CI/GitHub Actions), where the generated helpers would have worked.
const fragments = fs.readFileSync(
  path.join(process.cwd(), "tina/__generated__/frags.gql"),
  "utf8"
);

const query = `query page($relativePath: String!) {
  page(relativePath: $relativePath) {
    ... on Document {
      id
    }
    ...PageParts
  }
}
${fragments}`;

const variables = { relativePath: "home.json" };

async function getPage() {
  try {
    const res = await client.request<{ page: Page }>({ query, variables }, {});
    if (res.data?.page) return { data: res.data, query, variables };
  } catch {
    // fall through to the disk read below
  }
  // The same path-glob problem breaks the local server's content indexing
  // ("Unable to find record"), so read the content file directly. CI builds
  // on clean paths never hit this branch.
  const page = JSON.parse(
    fs.readFileSync(
      path.join(process.cwd(), "content/pages/home.json"),
      "utf8"
    )
  ) as Page;
  return { data: { page }, query, variables };
}

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getPage();
  return {
    title: data.page.seo?.title ?? "Shepherding Child Visits",
    description: data.page.seo?.description ?? undefined,
  };
}

export default async function Home() {
  const result = await getPage();
  return (
    <LandingPage
      data={result.data}
      query={result.query}
      variables={result.variables}
    />
  );
}
