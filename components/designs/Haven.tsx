"use client";

import { tinaField } from "tinacms/dist/react";
import {
  FamilyScene,
  ShieldHeart,
  Scales,
  SealedLetter,
  JourneyPath,
  CradledHeart,
  Region,
  type Palette,
} from "../illustrations";
import { ctaHref, phoneHref, type DesignProps } from "./types";

// Soft sage & terracotta: gentle, rounded, family-friendly.
const palette: Palette = { ink: "#2f4f3e", accent: "#e07a5f", soft: "#d7e4d0" };
const darkPalette: Palette = { ink: "#f4f7f0", accent: "#e07a5f", soft: "#476e58" };

const principleIcons = [ShieldHeart, Scales, SealedLetter];

export default function HavenDesign({ page }: DesignProps) {
  const {
    brand, hero, intro, principles, audiences, serve, services, steps,
    team, director, commitment, areas, availability, locations, fees,
    finalCta, resources, footer,
  } = page;
  const mail = ctaHref(page);
  const tel = phoneHref(page);

  return (
    <div className="dz d-haven" id="top">
      <header className="hv-header">
        <span className="hv-brand" data-tina-field={tinaField(brand ?? undefined, "name")}>
          {brand?.name}
        </span>
        <a className="hv-btn hv-btn-sm" href={mail}>{hero?.primaryCta ?? "Say hello"}</a>
      </header>

      <section className="hv-hero">
        <div className="hv-hero-inner">
          <div>
            {hero?.eyebrow && (
              <span className="hv-pill" data-tina-field={tinaField(hero, "eyebrow")}>{hero.eyebrow}</span>
            )}
            <h1 className="hv-display">
              <span data-tina-field={tinaField(hero ?? undefined, "headline")}>{hero?.headline}</span>{" "}
              <span className="hv-accent" data-tina-field={tinaField(hero ?? undefined, "headlineAccent")}>
                {hero?.headlineAccent}
              </span>
            </h1>
            <p className="hv-lede" data-tina-field={tinaField(hero ?? undefined, "subheadline")}>
              {hero?.subheadline}
            </p>
            <div className="hv-btn-row">
              <a className="hv-btn" href={mail} data-tina-field={tinaField(hero ?? undefined, "primaryCta")}>
                {hero?.primaryCta}
              </a>
              <a className="hv-btn hv-btn-ghost" href="#services" data-tina-field={tinaField(hero ?? undefined, "secondaryCta")}>
                {hero?.secondaryCta}
              </a>
            </div>
            {hero?.tagline && (
              <p className="hv-tagline" data-tina-field={tinaField(hero, "tagline")}>{hero.tagline}</p>
            )}
          </div>
          <div className="hv-hero-art">
            <div className="hv-blob">
              <FamilyScene {...palette} />
            </div>
          </div>
        </div>
      </section>

      {intro && (
        <section className="hv-sec">
          <div className="hv-card hv-card-wide" data-tina-field={tinaField(intro)}>
            <span className="hv-pill">{intro.eyebrow}</span>
            <h2 className="hv-h2">{intro.heading}</h2>
            <p>{intro.body}</p>
            {intro.note && <p className="hv-note">{intro.note}</p>}
          </div>
        </section>
      )}

      {principles && (
        <section className="hv-sec">
          <div className="hv-center">
            <span className="hv-pill" data-tina-field={tinaField(principles, "eyebrow")}>{principles.eyebrow}</span>
            <h2 className="hv-h2" data-tina-field={tinaField(principles, "heading")}>{principles.heading}</h2>
          </div>
          <div className="hv-grid3">
            {principles.items?.map((item, i) => {
              if (!item) return null;
              const Icon = principleIcons[i % principleIcons.length];
              return (
                <div className={`hv-card hv-tilt-${i % 3}`} key={i} data-tina-field={tinaField(item)}>
                  <div className="hv-icon-ring"><Icon {...palette} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {audiences && audiences.length > 0 && (
        <section className="hv-sec hv-sec-tint">
          <div className="hv-grid2">
            {audiences.map(
              (a, i) =>
                a && (
                  <div className="hv-card" key={i} data-tina-field={tinaField(a)}>
                    <span className="hv-pill hv-pill-accent">{a.eyebrow}</span>
                    <h3 className="hv-h3">{a.heading}</h3>
                    <p>{a.body}</p>
                    {a.tagline && <p className="hv-tagline">{a.tagline}</p>}
                  </div>
                )
            )}
          </div>
        </section>
      )}

      {serve && (
        <section className="hv-sec">
          <div className="hv-center hv-narrow">
            <span className="hv-pill" data-tina-field={tinaField(serve, "eyebrow")}>{serve.eyebrow}</span>
            <h2 className="hv-h2" data-tina-field={tinaField(serve, "heading")}>{serve.heading}</h2>
            <p data-tina-field={tinaField(serve, "body")}>{serve.body}</p>
          </div>
          <div className="hv-chip-cloud">
            {serve.items?.map((item, i) => item && <span className="hv-chip" key={i}>{item}</span>)}
          </div>
        </section>
      )}

      {services && (
        <section className="hv-sec hv-sec-tint" id="services">
          <div className="hv-center hv-narrow">
            <span className="hv-pill" data-tina-field={tinaField(services, "eyebrow")}>{services.eyebrow}</span>
            <h2 className="hv-h2" data-tina-field={tinaField(services, "heading")}>{services.heading}</h2>
            <p data-tina-field={tinaField(services, "body")}>{services.body}</p>
            {services.note && <p className="hv-values" data-tina-field={tinaField(services, "note")}>{services.note}</p>}
          </div>
          <div className="hv-grid2 hv-service-grid">
            {services.items?.map(
              (s, i) =>
                s && (
                  <div className="hv-card hv-service" key={i} data-tina-field={tinaField(s)}>
                    <h3 className="hv-h3">{s.title}</h3>
                    <p className="hv-service-tagline">{s.tagline}</p>
                    <p>{s.description}</p>
                  </div>
                )
            )}
          </div>
        </section>
      )}

      {steps && (
        <section className="hv-sec">
          <div className="hv-center hv-narrow">
            <span className="hv-pill" data-tina-field={tinaField(steps, "eyebrow")}>{steps.eyebrow}</span>
            <h2 className="hv-h2" data-tina-field={tinaField(steps, "heading")}>{steps.heading}</h2>
            <p data-tina-field={tinaField(steps, "body")}>{steps.body}</p>
          </div>
          <div className="hv-journey"><JourneyPath {...palette} /></div>
          <div className="hv-grid2">
            {steps.items?.map(
              (s, i) =>
                s && (
                  <div className="hv-card hv-step" key={i} data-tina-field={tinaField(s)}>
                    <span className="hv-step-num">{i + 1}</span>
                    <div>
                      <h3 className="hv-h3">{s.title}</h3>
                      <p>{s.description}</p>
                    </div>
                  </div>
                )
            )}
          </div>
          {steps.note && (
            <p className="hv-values hv-center-block" data-tina-field={tinaField(steps, "note")}>{steps.note}</p>
          )}
        </section>
      )}

      {team && (
        <section className="hv-sec hv-sec-tint">
          <div className="hv-center hv-narrow">
            <span className="hv-pill" data-tina-field={tinaField(team, "eyebrow")}>{team.eyebrow}</span>
            <h2 className="hv-h2" data-tina-field={tinaField(team, "heading")}>{team.heading}</h2>
            <p data-tina-field={tinaField(team, "body")}>{team.body}</p>
          </div>
          <div className="hv-grid3">
            {team.credentials?.map(
              (c, i) =>
                c && (
                  <div className="hv-card hv-badge" key={i} data-tina-field={tinaField(c)}>
                    <h3>{c.title}</h3>
                    <p>{c.description}</p>
                  </div>
                )
            )}
          </div>
        </section>
      )}

      {director && (
        <section className="hv-sec">
          <div className="hv-card hv-card-wide" data-tina-field={tinaField(director)}>
            <span className="hv-pill">{director.eyebrow}</span>
            <h2 className="hv-h2">{director.heading}</h2>
            <p>{director.body}</p>
          </div>
        </section>
      )}

      {commitment && (
        <section className="hv-sec hv-sec-deep">
          <div className="hv-center hv-narrow">
            <CradledHeart {...darkPalette} />
            <span className="hv-pill hv-pill-light" data-tina-field={tinaField(commitment, "eyebrow")}>
              {commitment.eyebrow}
            </span>
            <h2 className="hv-h2" data-tina-field={tinaField(commitment, "heading")}>{commitment.heading}</h2>
            <p data-tina-field={tinaField(commitment, "body")}>{commitment.body}</p>
            <div className="hv-mantra">
              {commitment.lines?.map((l, i) => l && <span key={i}>{l}</span>)}
            </div>
          </div>
        </section>
      )}

      <section className="hv-sec">
        <div className="hv-region"><Region {...palette} /></div>
        <div className="hv-grid2">
          {areas && (
            <div className="hv-card" data-tina-field={tinaField(areas)}>
              <span className="hv-pill">{areas.eyebrow}</span>
              <h3 className="hv-h3">{areas.heading}</h3>
              <div className="hv-chip-cloud left">
                {areas.items?.map((c, i) => c && <span className="hv-chip" key={i}>{c}</span>)}
              </div>
              <p className="hv-small">{areas.body}</p>
            </div>
          )}
          {availability && (
            <div className="hv-card" data-tina-field={tinaField(availability)}>
              <span className="hv-pill">{availability.eyebrow}</span>
              <h3 className="hv-h3">{availability.heading}</h3>
              <p className="hv-small">{availability.body}</p>
              <div className="hv-chip-cloud left">
                {availability.items?.map((c, i) => c && <span className="hv-chip" key={i}>{c}</span>)}
              </div>
            </div>
          )}
          {locations && (
            <div className="hv-card" data-tina-field={tinaField(locations)}>
              <span className="hv-pill">{locations.eyebrow}</span>
              <h3 className="hv-h3">{locations.heading}</h3>
              <p className="hv-small">{locations.body}</p>
              <div className="hv-chip-cloud left">
                {locations.items?.map((c, i) => c && <span className="hv-chip" key={i}>{c}</span>)}
              </div>
            </div>
          )}
          {fees && (
            <div className="hv-card" data-tina-field={tinaField(fees)}>
              <span className="hv-pill">{fees.eyebrow}</span>
              <h3 className="hv-h3">{fees.heading}</h3>
              <p className="hv-small">{fees.body}</p>
              <p className="hv-small">{fees.paymentNote}</p>
              <p className="hv-small">{fees.cancellationNote}</p>
            </div>
          )}
        </div>
      </section>

      {finalCta && (
        <section className="hv-sec">
          <div className="hv-cta-band">
            <span className="hv-pill hv-pill-light" data-tina-field={tinaField(finalCta, "eyebrow")}>
              {finalCta.eyebrow}
            </span>
            <h2 className="hv-h2" data-tina-field={tinaField(finalCta, "heading")}>{finalCta.heading}</h2>
            <p data-tina-field={tinaField(finalCta, "body")}>{finalCta.body}</p>
            <div className="hv-btn-row center">
              <a className="hv-btn hv-btn-light" href={mail}>{finalCta.primaryCta}</a>
              <a className="hv-btn hv-btn-ghost-light" href={tel ?? mail}>{finalCta.secondaryCta}</a>
            </div>
          </div>
        </section>
      )}

      <footer className="hv-footer">
        <p className="hv-brand">{brand?.name}</p>
        <p data-tina-field={tinaField(footer ?? undefined, "tagline")}>{footer?.tagline}</p>
        <div className="hv-footer-links">
          {resources?.map(
            (r, i) =>
              r?.label && (
                <a key={i} href={r.url ?? "#"} data-tina-field={tinaField(r)}>{r.label}</a>
              )
          )}
          {footer?.contactEmail && <a href={`mailto:${footer.contactEmail}`}>{footer.contactEmail}</a>}
        </div>
        <p className="hv-small" data-tina-field={tinaField(footer ?? undefined, "line")}>{footer?.line}</p>
      </footer>
    </div>
  );
}
