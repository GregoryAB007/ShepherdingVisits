import type { Page } from "../../tina/__generated__/types";

export type PageData = Page;

export type DesignProps = { page: PageData };

// Logo assets live in the Tina media root; prefix with the GitHub Pages
// base path when one is configured.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const LOGO = `${BASE_PATH}/uploads/logo.png`;
export const LOGO_MARK = `${BASE_PATH}/uploads/logo-mark.png`;

// Buttons link to real actions: email if we have one, otherwise the top of the page.
export function ctaHref(page: PageData): string {
  const email = page.contact?.email || page.footer?.contactEmail;
  return email ? `mailto:${email}` : "#top";
}

export function phoneHref(page: PageData): string | null {
  const phone = page.contact?.phone;
  return phone ? `tel:${phone.replace(/[^+\d]/g, "")}` : null;
}
