"use client";

import { useTina, tinaField } from "tinacms/dist/react";
import type { PageQuery } from "../tina/__generated__/types";

type Props = {
  data: PageQuery;
  query: string;
  variables: { relativePath: string };
};

export default function LandingPage(props: Props) {
  // useTina makes the page live-update while an editor works in /admin.
  // In production for visitors it just returns the static data.
  const { data } = useTina(props);
  const page = data.page;
  const { hero, features, pricing, footer } = page;

  const paymentLink =
    hero?.stripePaymentLink && hero.stripePaymentLink.startsWith("https://")
      ? hero.stripePaymentLink
      : "#";

  return (
    <main>
      <section className="hero">
        <div className="container">
          {hero?.eyebrow && (
            <span className="eyebrow" data-tina-field={tinaField(hero, "eyebrow")}>
              {hero.eyebrow}
            </span>
          )}
          <h1 data-tina-field={tinaField(hero, "headline")}>{hero?.headline}</h1>
          <p data-tina-field={tinaField(hero, "subheadline")}>
            {hero?.subheadline}
          </p>
          <a
            className="buy-button"
            href={paymentLink}
            data-tina-field={tinaField(hero, "ctaLabel")}
          >
            {hero?.ctaLabel ?? "Buy now"}
          </a>
          {hero?.priceNote && (
            <p className="price-note" data-tina-field={tinaField(hero, "priceNote")}>
              {hero.priceNote}
            </p>
          )}
        </div>
      </section>

      {features && features.length > 0 && (
        <section className="features">
          <div className="container">
            <div className="feature-grid">
              {features.map(
                (feature, i) =>
                  feature && (
                    <div
                      className="feature-card"
                      key={i}
                      data-tina-field={tinaField(feature)}
                    >
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  )
              )}
            </div>
          </div>
        </section>
      )}

      {pricing && (
        <section className="pricing">
          <div className="container">
            <div className="pricing-card" data-tina-field={tinaField(pricing)}>
              <h2>{pricing.title}</h2>
              <div>
                <span className="price">{pricing.price}</span>
                <span className="price-unit">{pricing.unit}</span>
              </div>
              <p>{pricing.description}</p>
              <a className="buy-button" href={paymentLink}>
                {pricing.ctaLabel ?? "Buy now"}
              </a>
            </div>
          </div>
        </section>
      )}

      <footer>
        <div className="container">
          <span data-tina-field={tinaField(footer ?? undefined, "line")}>
            {footer?.line}
          </span>
          {footer?.contactEmail && (
            <a href={`mailto:${footer.contactEmail}`}>{footer.contactEmail}</a>
          )}
        </div>
      </footer>
    </main>
  );
}
