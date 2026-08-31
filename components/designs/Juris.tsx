"use client";

import { tinaField } from "tinacms/dist/react";
import {
  FamilyScene,
  JourneyPath,
  CradledHeart,
  Region,
  type Palette,
} from "../illustrations";
import { ctaHref, phoneHref, type DesignProps } from "./types";

// Stately print look: ivory paper, near-black ink, oxblood and gold rules.
const palette: Palette = { ink: "#1c1a17", accent: "#7b2d26", soft: "#e8e2d5" };

export default function JurisDesign({ page }: DesignProps) {
  const {
    brand, hero, intro, principles, audiences, serve, services, steps,
    team, director, commitment, areas, availability, locations, fees,
    finalCta, resources, footer,
  } = page;
  const mail = ctaHref(page);
  const tel = phoneHref(page);

  return (
    <div className="dz d-juris" id="top">
      <header className="jr-header">
        <span className="jr-brand" data-tina-field={tinaField(brand ?? undefined, "name")}>
          {brand?.name}
        </span>
        <span className="jr-rule" aria-hidden="true" />
        <span className="jr-brand-sub" data-tina-field={tinaField(brand ?? undefined, "tagline")}>
          {brand?.tagline}
        </span>
      </header>

      <section className="jr-hero">
        {hero?.eyebrow && (
          <span className="jr-eyebrow" data-tina-field={tinaField(hero, "eyebrow")}>
            {hero.eyebrow}
          </span>
        )}
        <h1 className="jr-display">
          <span data-tina-field={tinaField(hero ?? undefined, "headline")}>{hero?.headline}</span>{" "}
          <em data-tina-field={tinaField(hero ?? undefined, "headlineAccent")}>{hero?.headlineAccent}</em>
        </h1>
        <p className="jr-lede" data-tina-field={tinaField(hero ?? undefined, "subheadline")}>
          {hero?.subheadline}
        </p>
        {hero?.tagline && (
          <p className="jr-tagline" data-tina-field={tinaField(hero, "tagline")}>{hero.tagline}</p>
        )}
        <div className="jr-btn-row">
          <a className="jr-btn" href={mail} data-tina-field={tinaField(hero ?? undefined, "primaryCta")}>
            {hero?.primaryCta}
          </a>
          <a className="jr-btn jr-btn-outline" href="#services" data-tina-field={tinaField(hero ?? undefined, "secondaryCta")}>
            {hero?.secondaryCta}
          </a>
        </div>
        <div className="jr-hero-art"><FamilyScene {...palette} /></div>
      </section>

      {intro && (
        <section className="jr-sec">
          <div className="jr-heading-block">
            <span className="jr-eyebrow" data-tina-field={tinaField(intro, "eyebrow")}>{intro.eyebrow}</span>
            <h2 className="jr-h2" data-tina-field={tinaField(intro, "heading")}>{intro.heading}</h2>
          </div>
          <p className="jr-body" data-tina-field={tinaField(intro, "body")}>{intro.body}</p>
          {intro.note && <p className="jr-note" data-tina-field={tinaField(intro, "note")}>{intro.note}</p>}
        </section>
      )}

      {principles && (
        <section className="jr-sec jr-sec-shaded">
          <div className="jr-heading-block">
            <span className="jr-eyebrow" data-tina-field={tinaField(principles, "eyebrow")}>{principles.eyebrow}</span>
            <h2 className="jr-h2" data-tina-field={tinaField(principles, "heading")}>{principles.heading}</h2>
          </div>
          <div className="jr-cols3">
            {principles.items?.map(
              (item, i) =>
                item && (
                  <div className="jr-principle" key={i} data-tina-field={tinaField(item)}>
                    <span className="jr-roman">{["I", "II", "III", "IV", "V"][i] ?? i + 1}</span>
                    <h3 className="jr-smallcaps">{item.title}</h3>
                    <p className="jr-body">{item.description}</p>
                  </div>
                )
            )}
          </div>
        </section>
      )}

      {audiences?.map(
        (a, i) =>
          a && (
            <section className="jr-sec" key={i}>
              <div className="jr-heading-block" data-tina-field={tinaField(a)}>
                <span className="jr-eyebrow">{a.eyebrow}</span>
                <h2 className="jr-h2">{a.heading}</h2>
              </div>
              <p className="jr-body">{a.body}</p>
              {a.tagline && <p className="jr-note">{a.tagline}</p>}
            </section>
          )
      )}

      {serve && (
        <section className="jr-sec jr-sec-shaded">
          <div className="jr-heading-block">
            <span className="jr-eyebrow" data-tina-field={tinaField(serve, "eyebrow")}>{serve.eyebrow}</span>
            <h2 className="jr-h2" data-tina-field={tinaField(serve, "heading")}>{serve.heading}</h2>
          </div>
          <p className="jr-body" data-tina-field={tinaField(serve, "body")}>{serve.body}</p>
          <ul className="jr-serve-list">
            {serve.items?.map((item, i) => item && <li key={i}>{item}</li>)}
          </ul>
        </section>
      )}

      {services && (
        <section className="jr-sec" id="services">
          <div className="jr-heading-block">
            <span className="jr-eyebrow" data-tina-field={tinaField(services, "eyebrow")}>{services.eyebrow}</span>
            <h2 className="jr-h2" data-tina-field={tinaField(services, "heading")}>{services.heading}</h2>
          </div>
          <p className="jr-body" data-tina-field={tinaField(services, "body")}>{services.body}</p>
          {services.note && <p className="jr-values" data-tina-field={tinaField(services, "note")}>{services.note}</p>}
          <ol className="jr-service-list">
            {services.items?.map(
              (s, i) =>
                s && (
                  <li className="jr-service" key={i} data-tina-field={tinaField(s)}>
                    <div className="jr-service-head">
                      <h3 className="jr-smallcaps">{s.title}</h3>
                      <span className="jr-service-tagline">{s.tagline}</span>
                    </div>
                    <p className="jr-body">{s.description}</p>
                  </li>
                )
            )}
          </ol>
        </section>
      )}

      {steps && (
        <section className="jr-sec jr-sec-shaded">
          <div className="jr-heading-block">
            <span className="jr-eyebrow" data-tina-field={tinaField(steps, "eyebrow")}>{steps.eyebrow}</span>
            <h2 className="jr-h2" data-tina-field={tinaField(steps, "heading")}>{steps.heading}</h2>
          </div>
          <p className="jr-body" data-tina-field={tinaField(steps, "body")}>{steps.body}</p>
          <div className="jr-journey"><JourneyPath {...palette} /></div>
          <div className="jr-steps">
            {steps.items?.map(
              (s, i) =>
                s && (
                  <div className="jr-step" key={i} data-tina-field={tinaField(s)}>
                    <span className="jr-roman">{["I", "II", "III", "IV", "V"][i] ?? i + 1}</span>
                    <div>
                      <h3 className="jr-smallcaps">{s.title}</h3>
                      <p className="jr-body">{s.description}</p>
                    </div>
                  </div>
                )
            )}
          </div>
          {steps.note && <p className="jr-values" data-tina-field={tinaField(steps, "note")}>{steps.note}</p>}
        </section>
      )}

      {team && (
        <section className="jr-sec">
          <div className="jr-heading-block">
            <span className="jr-eyebrow" data-tina-field={tinaField(team, "eyebrow")}>{team.eyebrow}</span>
            <h2 className="jr-h2" data-tina-field={tinaField(team, "heading")}>{team.heading}</h2>
          </div>
          <p className="jr-body" data-tina-field={tinaField(team, "body")}>{team.body}</p>
          <div className="jr-cred-grid">
            {team.credentials?.map(
              (c, i) =>
                c && (
                  <div className="jr-cred" key={i} data-tina-field={tinaField(c)}>
                    <h3 className="jr-smallcaps">{c.title}</h3>
                    <p className="jr-body">{c.description}</p>
                  </div>
                )
            )}
          </div>
        </section>
      )}

      {director && (
        <section className="jr-sec jr-sec-shaded">
          <div className="jr-heading-block">
            <span className="jr-eyebrow" data-tina-field={tinaField(director, "eyebrow")}>{director.eyebrow}</span>
            <h2 className="jr-h2" data-tina-field={tinaField(director, "heading")}>{director.heading}</h2>
          </div>
          <p className="jr-body" data-tina-field={tinaField(director, "body")}>{director.body}</p>
        </section>
      )}

      {commitment && (
        <section className="jr-sec jr-sec-oxblood">
          <CradledHeart ink="#f4ede2" accent="#c9a35c" soft="#8d453d" />
          <span className="jr-eyebrow light" data-tina-field={tinaField(commitment, "eyebrow")}>
            {commitment.eyebrow}
          </span>
          <h2 className="jr-h2" data-tina-field={tinaField(commitment, "heading")}>{commitment.heading}</h2>
          <p className="jr-body" data-tina-field={tinaField(commitment, "body")}>{commitment.body}</p>
          <p className="jr-mantra">{commitment.lines?.filter(Boolean).join(" — ")}</p>
        </section>
      )}

      <section className="jr-sec">
        <div className="jr-region"><Region {...palette} /></div>
        <div className="jr-cols2">
          {areas && (
            <div data-tina-field={tinaField(areas)}>
              <h3 className="jr-smallcaps jr-ruled">{areas.eyebrow}</h3>
              <p className="jr-lead-line">{areas.heading}</p>
              <p className="jr-list-line">{areas.items?.filter(Boolean).join(" · ")}</p>
              <p className="jr-body">{areas.body}</p>
            </div>
          )}
          {availability && (
            <div data-tina-field={tinaField(availability)}>
              <h3 className="jr-smallcaps jr-ruled">{availability.eyebrow}</h3>
              <p className="jr-lead-line">{availability.heading}</p>
              <p className="jr-body">{availability.body}</p>
              <p className="jr-list-line">{availability.items?.filter(Boolean).join(" · ")}</p>
            </div>
          )}
          {locations && (
            <div data-tina-field={tinaField(locations)}>
              <h3 className="jr-smallcaps jr-ruled">{locations.eyebrow}</h3>
              <p className="jr-lead-line">{locations.heading}</p>
              <p className="jr-body">{locations.body}</p>
              <p className="jr-list-line">{locations.items?.filter(Boolean).join(" · ")}</p>
            </div>
          )}
          {fees && (
            <div data-tina-field={tinaField(fees)}>
              <h3 className="jr-smallcaps jr-ruled">{fees.eyebrow}</h3>
              <p className="jr-lead-line">{fees.heading}</p>
              <p className="jr-body">{fees.body}</p>
              <p className="jr-body">{fees.paymentNote}</p>
              <p className="jr-body">{fees.cancellationNote}</p>
            </div>
          )}
        </div>
      </section>

      {finalCta && (
        <section className="jr-sec jr-sec-shaded jr-cta">
          <span className="jr-eyebrow" data-tina-field={tinaField(finalCta, "eyebrow")}>{finalCta.eyebrow}</span>
          <h2 className="jr-h2" data-tina-field={tinaField(finalCta, "heading")}>{finalCta.heading}</h2>
          <p className="jr-body" data-tina-field={tinaField(finalCta, "body")}>{finalCta.body}</p>
          <div className="jr-btn-row">
            <a className="jr-btn" href={mail}>{finalCta.primaryCta}</a>
            <a className="jr-btn jr-btn-outline" href={tel ?? mail}>{finalCta.secondaryCta}</a>
          </div>
        </section>
      )}

      <footer className="jr-footer">
        <span className="jr-rule" aria-hidden="true" />
        <p className="jr-brand">{brand?.name}</p>
        <p className="jr-footer-tagline" data-tina-field={tinaField(footer ?? undefined, "tagline")}>
          {footer?.tagline}
        </p>
        <div className="jr-footer-links">
          {resources?.map(
            (r, i) =>
              r?.label && <a key={i} href={r.url ?? "#"} data-tina-field={tinaField(r)}>{r.label}</a>
          )}
          {footer?.contactEmail && <a href={`mailto:${footer.contactEmail}`}>{footer.contactEmail}</a>}
        </div>
        <p className="jr-footer-line" data-tina-field={tinaField(footer ?? undefined, "line")}>{footer?.line}</p>
      </footer>
    </div>
  );
}
