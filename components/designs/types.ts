import type { Page } from "../../tina/__generated__/types";

export type PageData = Page;

export type DesignProps = { page: PageData };

// Buttons link to real actions: email if we have one, otherwise the top of the page.
export function ctaHref(page: PageData): string {
  const email = page.contact?.email || page.footer?.contactEmail;
  return email ? `mailto:${email}` : "#top";
}

export function phoneHref(page: PageData): string | null {
  const phone = page.contact?.phone;
  return phone ? `tel:${phone.replace(/[^+\d]/g, "")}` : null;
}
