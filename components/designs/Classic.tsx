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

const palette: Palette = { ink: "#14213d", accent: "#fca311", soft: "#dfe6f2" };
const darkPalette: Palette = { ink: "#ffffff", accent: "#fca311", soft: "#2c3a5c" };

const principleIcons = [ShieldHeart, Scales, SealedLetter];

export default function ClassicDesign({ page }: DesignProps) {
  const {
    brand, hero, intro, principles, audiences, serve, services, steps,
    team, director, commitment, areas, availability, locations, fees,
    finalCta, resources, footer,
  } = page;
  const mail = ctaHref(page);
  const tel = phoneHref(page);

  return (
    <div className="dz d-classic" id="top">
      <header className="dz-header">
        <div className="wrap dz-header-row">
          <span className="brand" data-tina-field={tinaField(brand ?? undefined, "name")}>
            {brand?.name}
          </span>
          <a className="btn btn-sm" href={mail}>
            {hero?.primaryCta ?? "Contact us"}
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            {hero?.eyebrow && (
              <span className="eyebrow" data-tina-field={tinaField(hero, "eyebrow")}>
                {hero.eyebrow}
              </span>
            )}
            <h1 className="h-display">
              <span data-tina-field={tinaField(hero ?? undefined, "headline")}>
                {hero?.headline}
              </span>{" "}
              <em className="accent" data-tina-field={tinaField(hero ?? undefined, "headlineAccent")}>
                {hero?.headlineAccent}
              </em>
            </h1>
            <p className="lede" data-tina-field={tinaField(hero ?? undefined, "subheadline")}>
              {hero?.subheadline}
            </p>
            <div className="btn-row">
              <a className="btn" href={mail} data-tina-field={tinaField(hero ?? undefined, "primaryCta")}>
                {hero?.primaryCta}
              </a>
              <a className="btn btn-ghost" href="#services" data-tina-field={tinaField(hero ?? undefined, "secondaryCta")}>
                {hero?.secondaryCta}
              </a>
            </div>
            {hero?.tagline && (
              <p className="tagline" data-tina-field={tinaField(hero, "tagline")}>
                {hero.tagline}
              </p>
            )}
          </div>
          <div className="hero-art">
            <FamilyScene {...palette} />
          </div>
        </div>
      </section>

      {intro && (
        <section className="sec sec-alt">
          <div className="wrap narrow center">
            <span className="eyebrow" data-tina-field={tinaField(intro, "eyebrow")}>{intro.eyebrow}</span>
            <h2 data-tina-field={tinaField(intro, "heading")}>{intro.heading}</h2>
            <p data-tina-field={tinaField(intro, "body")}>{intro.body}</p>
            {intro.note && <p className="note" data-tina-field={tinaField(intro, "note")}>{intro.note}</p>}
          </div>
        </section>
      )}

      {principles && (
        <section className="sec">
          <div className="wrap">
            <div className="center">
              <span className="eyebrow" data-tina-field={tinaField(principles, "eyebrow")}>{principles.eyebrow}</span>
              <h2 data-tina-field={tinaField(principles, "heading")}>{principles.heading}</h2>
            </div>
            <div className="grid3">
              {principles.items?.map((item, i) => {
                if (!item) return null;
                const Icon = principleIcons[i % principleIcons.length];
                return (
                  <div className="card" key={i} data-tina-field={tinaField(item)}>
                    <Icon {...palette} />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {audiences && audiences.length > 0 && (
        <section className="sec sec-alt">
          <div className="wrap grid2">
            {audiences.map(
              (a, i) =>
                a && (
                  <div className="card card-tall" key={i} data-tina-field={tinaField(a)}>
                    <span className="eyebrow">{a.eyebrow}</span>
                    <h3>{a.heading}</h3>
                    <p>{a.body}</p>
                    {a.tagline && <p className="tagline">{a.tagline}</p>}
                  </div>
                )
            )}
          </div>
        </section>
      )}

      {serve && (
        <section className="sec">
          <div className="wrap">
            <div className="center narrow">
              <span className="eyebrow" data-tina-field={tinaField(serve, "eyebrow")}>{serve.eyebrow}</span>
              <h2 data-tina-field={tinaField(serve, "heading")}>{serve.heading}</h2>
              <p data-tina-field={tinaField(serve, "body")}>{serve.body}</p>
            </div>
            <ul className="check-grid">
              {serve.items?.map((item, i) => item && <li key={i}>{item}</li>)}
            </ul>
          </div>
        </section>
      )}

      {services && (
        <section className="sec sec-dark" id="services">
          <div className="wrap">
            <div className="center narrow">
              <span className="eyebrow" data-tina-field={tinaField(services, "eyebrow")}>{services.eyebrow}</span>
              <h2 data-tina-field={tinaField(services, "heading")}>{services.heading}</h2>
              <p data-tina-field={tinaField(services, "body")}>{services.body}</p>
              {services.note && <p className="note" data-tina-field={tinaField(services, "note")}>{services.note}</p>}
            </div>
            <div className="grid4">
              {services.items?.map(
                (s, i) =>
                  s && (
                    <div className="card card-dark" key={i} data-tina-field={tinaField(s)}>
                      <h3>{s.title}</h3>
                      <p className="card-tagline">{s.tagline}</p>
                      <p>{s.description}</p>
                    </div>
                  )
              )}
            </div>
          </div>
        </section>
      )}

      {steps && (
        <section className="sec">
          <div className="wrap">
            <div className="center narrow">
              <span className="eyebrow" data-tina-field={tinaField(steps, "eyebrow")}>{steps.eyebrow}</span>
              <h2 data-tina-field={tinaField(steps, "heading")}>{steps.heading}</h2>
              <p data-tina-field={tinaField(steps, "body")}>{steps.body}</p>
            </div>
            <div className="journey">
              <JourneyPath {...palette} />
            </div>
            <div className="grid4">
              {steps.items?.map(
                (s, i) =>
                  s && (
                    <div className="step" key={i} data-tina-field={tinaField(s)}>
                      <span className="step-num">{i + 1}</span>
                      <h3>{s.title}</h3>
                      <p>{s.description}</p>
                    </div>
                  )
              )}
            </div>
            {steps.note && (
              <p className="note center" data-tina-field={tinaField(steps, "note")}>{steps.note}</p>
            )}
          </div>
        </section>
      )}

      {team && (
        <section className="sec sec-alt">
          <div className="wrap">
            <div className="center narrow">
              <span className="eyebrow" data-tina-field={tinaField(team, "eyebrow")}>{team.eyebrow}</span>
              <h2 data-tina-field={tinaField(team, "heading")}>{team.heading}</h2>
              <p data-tina-field={tinaField(team, "body")}>{team.body}</p>
            </div>
            <div className="grid3">
              {team.credentials?.map(
                (c, i) =>
                  c && (
                    <div className="card card-badge" key={i} data-tina-field={tinaField(c)}>
                      <h3>{c.title}</h3>
                      <p>{c.description}</p>
                    </div>
                  )
              )}
            </div>
          </div>
        </section>
      )}

      {director && (
        <section className="sec">
          <div className="wrap narrow center">
            <span className="eyebrow" data-tina-field={tinaField(director, "eyebrow")}>{director.eyebrow}</span>
            <h2 data-tina-field={tinaField(director, "heading")}>{director.heading}</h2>
            <p data-tina-field={tinaField(director, "body")}>{director.body}</p>
          </div>
        </section>
      )}

      {commitment && (
        <section className="sec sec-dark">
          <div className="wrap narrow center">
            <CradledHeart {...darkPalette} />
            <span className="eyebrow" data-tina-field={tinaField(commitment, "eyebrow")}>{commitment.eyebrow}</span>
            <h2 data-tina-field={tinaField(commitment, "heading")}>{commitment.heading}</h2>
            <p data-tina-field={tinaField(commitment, "body")}>{commitment.body}</p>
            <div className="mantra">
              {commitment.lines?.map((l, i) => l && <span key={i}>{l}</span>)}
            </div>
          </div>
        </section>
      )}

      <section className="sec">
        <div className="wrap">
          <div className="region-art"><Region {...palette} /></div>
          <div className="grid4 logistics">
            {areas && (
              <div data-tina-field={tinaField(areas)}>
                <span className="eyebrow">{areas.eyebrow}</span>
                <h3>{areas.heading}</h3>
                <ul className="plain-list">
                  {areas.items?.map((c, i) => c && <li key={i}>{c}</li>)}
                </ul>
                <p className="small">{areas.body}</p>
              </div>
            )}
            {availability && (
              <div data-tina-field={tinaField(availability)}>
                <span className="eyebrow">{availability.eyebrow}</span>
                <h3>{availability.heading}</h3>
                <p className="small">{availability.body}</p>
                <ul className="plain-list">
                  {availability.items?.map((c, i) => c && <li key={i}>{c}</li>)}
                </ul>
              </div>
            )}
            {locations && (
              <div data-tina-field={tinaField(locations)}>
                <span className="eyebrow">{locations.eyebrow}</span>
                <h3>{locations.heading}</h3>
                <p className="small">{locations.body}</p>
                <div className="chips">
                  {locations.items?.map((c, i) => c && <span className="chip" key={i}>{c}</span>)}
                </div>
              </div>
            )}
            {fees && (
              <div data-tina-field={tinaField(fees)}>
                <span className="eyebrow">{fees.eyebrow}</span>
                <h3>{fees.heading}</h3>
                <p className="small">{fees.body}</p>
                <p className="small">{fees.paymentNote}</p>
                <p className="small">{fees.cancellationNote}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {finalCta && (
        <section className="sec sec-accent">
          <div className="wrap narrow center">
            <span className="eyebrow" data-tina-field={tinaField(finalCta, "eyebrow")}>{finalCta.eyebrow}</span>
            <h2 data-tina-field={tinaField(finalCta, "heading")}>{finalCta.heading}</h2>
            <p data-tina-field={tinaField(finalCta, "body")}>{finalCta.body}</p>
            <div className="btn-row center-row">
              <a className="btn btn-inverse" href={mail}>{finalCta.primaryCta}</a>
              {tel && <a className="btn btn-ghost" href={tel}>{finalCta.secondaryCta}</a>}
              {!tel && <a className="btn btn-ghost" href={mail}>{finalCta.secondaryCta}</a>}
            </div>
          </div>
        </section>
      )}

      <footer className="footer">
        <div className="wrap center">
          <p className="brand" data-tina-field={tinaField(brand ?? undefined, "tagline")}>{brand?.tagline}</p>
          <p data-tina-field={tinaField(footer ?? undefined, "tagline")}>{footer?.tagline}</p>
          <div className="footer-links">
            {resources?.map(
              (r, i) =>
                r?.label && (
                  <a key={i} href={r.url ?? "#"} data-tina-field={tinaField(r)}>
                    {r.label}
                  </a>
                )
            )}
            {footer?.contactEmail && <a href={`mailto:${footer.contactEmail}`}>{footer.contactEmail}</a>}
          </div>
          <p className="small" data-tina-field={tinaField(footer ?? undefined, "line")}>{footer?.line}</p>
        </div>
      </footer>
    </div>
  );
}
