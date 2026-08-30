/** @type {import('next').NextConfig} */

// Set DEPLOY_TARGET=gh-pages to produce a static export for GitHub Pages.
// Default (Vercel) needs none of this.
const isGitHubPages = process.env.DEPLOY_TARGET === "gh-pages";

const nextConfig = {
  transpilePackages: ["tinacms", "@tinacms/toolkit"],
  ...(isGitHubPages && {
    output: "export",                 // writes static site to ./out
    images: { unoptimized: true },    // Pages has no image optimizer
    // Project sites live at username.github.io/<repo>; set the repo
    // name here (e.g. "/landing-starter"). Leave unset for
    // username.github.io or a custom domain.
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  }),
};

export default nextConfig;
