// Builds with Tina Cloud when credentials are present (production),
// otherwise builds against a temporary local GraphQL server so the
// very first Vercel deploy works before Tina Cloud is set up.
import { execSync } from "node:child_process";

const hasCloud =
  !!process.env.NEXT_PUBLIC_TINA_CLIENT_ID && !!process.env.TINA_TOKEN;

const cmd = hasCloud
  ? 'tinacms build && next build'
  : 'tinacms build --local --skip-cloud-checks -c "next build"';

console.log(
  hasCloud
    ? "[build] Tina Cloud credentials found - production build"
    : "[build] No Tina Cloud credentials - local static build (/admin login disabled)"
);

// The Tina CLI can leak NODE_ENV=development into the child process,
// which breaks `next build`. Force production explicitly.
execSync(cmd, {
  stdio: "inherit",
  shell: true,
  env: { ...process.env, NODE_ENV: "production" },
});
