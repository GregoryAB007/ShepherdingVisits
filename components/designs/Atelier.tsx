"use client";

import { tinaField } from "tinacms/dist/react";
import {
  FamilyScene,
  JourneyPath,
  Region,
  type Palette,
} from "../illustrations";
import { ctaHref, phoneHref, LOGO, LOGO_MARK, type DesignProps } from "./types";
import ScheduleButton from "./ScheduleButton";

// Warm editorial palette: cream paper, deep brown ink, muted parchment panels.
const palette: Palette = { ink: "#3b2e28", accent: "#b98d5e", soft: "#e6dccb" };

export default function AtelierDesign({ page }: DesignProps) {
  const {
    brand, hero, intro, principles, audiences, serve, services, steps,
    team, director, commitment, areas, availability, locations, fees,
    finalCta, contact, resources, footer,
  } = page;
  const mail = ctaHref(page);
  const tel = phoneHref(page);

  return (
    <div className="dz d-atelier" id="top">
      <header className="at-header">
        <img className="at-logo-mark" src={LOGO_MARK} alt="" aria-hidden="true" />
        <span className="at-brand" data-tina-field={tinaField(brand ?? undefined, "name")}>
          {brand?.name}
        </span>
        <span className="at-brand-sub" data-tina-field={tinaField(brand ?? undefined, "tagline")}>
          {brand?.tagline}
        </span>
      </header>

      {/* Full-bleed dark hero, centered — in place of the photo slideshow */}
      <section className="at-hero">
        {hero?.eyebrow && (
          <span className="at-eyebrow light" data-tina-field={tinaField(hero, "eyebrow")}>
            {hero.eyebrow}
          </span>
        )}
        <h1 className="at-display">
          <span className="at-caps" data-tina-field={tinaField(hero ?? undefined, "headline")}>
            {hero?.headline}
          </span>
          <em data-tina-field={tinaField(hero ?? undefined, "headlineAccent")}>
            {hero?.headlineAccent}
          </em>
        </h1>
        {hero?.tagline && (
          <p className="at-hero-tagline" data-tina-field={tinaField(hero, "tagline")}>
            {hero.tagline}
          </p>
        )}
        <div className="at-btn-row">
          <ScheduleButton
            label={hero?.primaryCta ?? "Schedule a Consultation"}
            mail={mail}
            tel={tel}
            emailText={contact?.email ?? footer?.contactEmail}
            phoneText={contact?.phone}
            variant="light"
            tinaField={tinaField(hero ?? undefined, "primaryCta")}
          />
          <a className="at-btn light" href="#services" data-tina-field={tinaField(hero ?? undefined, "secondaryCta")}>
            {hero?.secondaryCta}
          </a>
          <a className="at-btn light" href="#about">
            About Us
          </a>
        </div>
      </section>

      {/* Mission statement, centered serif — like the atelier mission block */}
      {hero?.subheadline && (
        <section className="at-sec">
          <p className="at-mission" data-tina-field={tinaField(hero, "subheadline")}>
            {hero.subheadline}
          </p>
        </section>
      )}

      {/* Approach: two-column editorial with illustration in place of a photo */}
      {intro && (
        <section className="at-sec at-sec-panel">
          <div className="at-split">
            <div className="at-art">
              <FamilyScene {...palette} />
            </div>
            <div>
              <span className="at-eyebrow" data-tina-field={tinaField(intro, "eyebrow")}>{intro.eyebrow}</span>
              <h2 className="at-h2" data-tina-field={tinaField(intro, "heading")}>{intro.heading}</h2>
              <p className="at-body" data-tina-field={tinaField(intro, "body")}>{intro.body}</p>
              {intro.note && (
                <p className="at-note" data-tina-field={tinaField(intro, "note")}>{intro.note}</p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Principles: three thin-ruled columns */}
      {principles && (
        <section className="at-sec">
          <div className="at-center">
            <span className="at-eyebrow" data-tina-field={tinaField(principles, "eyebrow")}>
              {principles.eyebrow}
            </span>
            <h2 className="at-h2 italic" data-tina-field={tinaField(principles, "heading")}>
              {principles.heading}
            </h2>
          </div>
          <div className="at-cols3">
            {principles.items?.map(
              (item, i) =>
                item && (
                  <div className="at-col" key={i} data-tina-field={tinaField(item)}>
                    <h3 className="at-caps-sm">{item.title}</h3>
                    <p className="at-body">{item.description}</p>
                  </div>
                )
            )}
          </div>
        </section>
      )}

      {/* Audiences: alternating editorial rows */}
      {audiences?.map(
        (a, i) =>
          a && (
            <section className={`at-sec ${i % 2 ? "" : "at-sec-panel"}`} key={i}>
              <div className="at-narrow at-center" data-tina-field={tinaField(a)}>
                <span className="at-eyebrow">{a.eyebrow}</span>
                <h2 className="at-h2 italic">{a.heading}</h2>
                <p className="at-body">{a.body}</p>
                {a.tagline && <p className="at-note">{a.tagline}</p>}
              </div>
            </section>
          )
      )}

      {/* Services: uppercase names + serif taglines, hairline grid */}
      {services && (
        <section className="at-sec" id="services">
          <div className="at-center at-narrow">
            <span className="at-eyebrow" data-tina-field={tinaField(services, "eyebrow")}>{services.eyebrow}</span>
            <h2 className="at-h2" data-tina-field={tinaField(services, "heading")}>{services.heading}</h2>
            <p className="at-body" data-tina-field={tinaField(services, "body")}>{services.body}</p>
            {services.note && (
              <p className="at-values" data-tina-field={tinaField(services, "note")}>{services.note}</p>
            )}
          </div>
          <div className="at-service-grid">
            {services.items?.map(
              (s, i) =>
                s && (
                  <div className="at-service" key={i} data-tina-field={tinaField(s)}>
                    <h3 className="at-caps-sm">{s.title}</h3>
                    <p className="at-service-tagline">{s.tagline}</p>
                    <p className="at-body">{s.description}</p>
                  </div>
                )
            )}
          </div>
        </section>
      )}

      {/* Logistics: parchment 2x2 */}
      <section className="at-sec at-sec-panel">
        <div className="at-region"><Region {...palette} /></div>
        <div className="at-cols2">
          {areas && (
            <div className="at-col" data-tina-field={tinaField(areas)}>
              <span className="at-eyebrow">{areas.eyebrow}</span>
              <h3 className="at-h3">{areas.heading}</h3>
              <p className="at-list-line">{areas.items?.filter(Boolean).join(" · ")}</p>
              <p className="at-body">{areas.body}</p>
            </div>
          )}
          {availability && (
            <div className="at-col" data-tina-field={tinaField(availability)}>
              <span className="at-eyebrow">{availability.eyebrow}</span>
              <h3 className="at-h3">{availability.heading}</h3>
              <p className="at-body">{availability.body}</p>
              <p className="at-list-line">{availability.items?.filter(Boolean).join(" · ")}</p>
            </div>
          )}
          {locations && (
            <div className="at-col" data-tina-field={tinaField(locations)}>
              <span className="at-eyebrow">{locations.eyebrow}</span>
              <h3 className="at-h3">{locations.heading}</h3>
              <p className="at-body">{locations.body}</p>
              <p className="at-list-line">{locations.items?.filter(Boolean).join(" · ")}</p>
            </div>
          )}
          {fees && (
            <div className="at-col" data-tina-field={tinaField(fees)}>
              <span className="at-eyebrow">{fees.eyebrow}</span>
              <h3 className="at-h3">{fees.heading}</h3>
              <p className="at-body">{fees.body}</p>
              <p className="at-body">{fees.paymentNote}</p>
              <p className="at-body">{fees.cancellationNote}</p>
              {contact?.phone && tel && (
                <p className="at-list-line">
                  Call or text <a className="at-tel" href={tel} data-tina-field={tinaField(contact, "phone")}>{contact.phone}</a> for current rates.
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Who we serve — dark band */}
      {serve && (
        <section className="at-sec at-sec-dark">
          <div className="at-center at-narrow">
            <span className="at-eyebrow light" data-tina-field={tinaField(serve, "eyebrow")}>{serve.eyebrow}</span>
            <h2 className="at-h2 italic" data-tina-field={tinaField(serve, "heading")}>{serve.heading}</h2>
            <p className="at-body" data-tina-field={tinaField(serve, "body")}>{serve.body}</p>
            <ul className="at-serve-list">
              {serve.items?.map((item, i) => item && <li key={i}>{item}</li>)}
            </ul>
          </div>
        </section>
      )}

      {/* Steps */}
      {steps && (
        <section className="at-sec">
          <div className="at-center at-narrow">
            <span className="at-eyebrow" data-tina-field={tinaField(steps, "eyebrow")}>{steps.eyebrow}</span>
            <h2 className="at-h2" data-tina-field={tinaField(steps, "heading")}>{steps.heading}</h2>
            <p className="at-body" data-tina-field={tinaField(steps, "body")}>{steps.body}</p>
          </div>
          <div className="at-journey"><JourneyPath {...palette} /></div>
          <div className="at-steps">
            {steps.items?.map(
              (s, i) =>
                s && (
                  <div className="at-step" key={i} data-tina-field={tinaField(s)}>
                    <span className="at-step-num">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="at-caps-sm">{s.title}</h3>
                      <p className="at-body">{s.description}</p>
                    </div>
                  </div>
                )
            )}
          </div>
        </section>
      )}

      {/* Team & standards */}
      {team && (
        <section className="at-sec at-sec-panel" id="about">
          <div className="at-center at-narrow">
            <span className="at-eyebrow" data-tina-field={tinaField(team, "eyebrow")}>{team.eyebrow}</span>
            <h2 className="at-h2 italic" data-tina-field={tinaField(team, "heading")}>{team.heading}</h2>
            {team.note && (
              <p className="at-values" data-tina-field={tinaField(team, "note")}>{team.note}</p>
            )}
            <p className="at-body" data-tina-field={tinaField(team, "body")}>{team.body}</p>
          </div>
          <div className="at-cols3 at-credentials">
            {team.credentials?.map(
              (c, i) =>
                c && (
                  <div className="at-col" key={i} data-tina-field={tinaField(c)}>
                    <h3 className="at-caps-sm">{c.title}</h3>
                    <p className="at-body">{c.description}</p>
                  </div>
                )
            )}
          </div>
        </section>
      )}

      {director && (
        <section className="at-sec">
          <div className="at-center at-narrow">
            <span className="at-eyebrow" data-tina-field={tinaField(director, "eyebrow")}>{director.eyebrow}</span>
            <h2 className="at-h2 italic" data-tina-field={tinaField(director, "heading")}>{director.heading}</h2>
            <p className="at-body" data-tina-field={tinaField(director, "body")}>{director.body}</p>
          </div>
        </section>
      )}

      {/* Commitment — dark, testimonial-style */}
      {commitment && (
        <section className="at-sec at-sec-dark">
          <div className="at-center at-narrow">
            <span className="at-logo-plate">
              <img src={LOGO} alt="Shepherding Family Services logo" />
            </span>
            <span className="at-eyebrow light" data-tina-field={tinaField(commitment, "eyebrow")}>
              {commitment.eyebrow}
            </span>
            <h2 className="at-h2 italic" data-tina-field={tinaField(commitment, "heading")}>
              {commitment.heading}
            </h2>
            <p className="at-body" data-tina-field={tinaField(commitment, "body")}>{commitment.body}</p>
            <p className="at-mantra">
              {commitment.lines?.filter(Boolean).join("  ·  ")}
            </p>
          </div>
        </section>
      )}

      {/* Final CTA */}
      {finalCta && (
        <section className="at-sec">
          <div className="at-center at-narrow">
            <span className="at-eyebrow" data-tina-field={tinaField(finalCta, "eyebrow")}>{finalCta.eyebrow}</span>
            <h2 className="at-h2 italic" data-tina-field={tinaField(finalCta, "heading")}>{finalCta.heading}</h2>
            <p className="at-body" data-tina-field={tinaField(finalCta, "body")}>{finalCta.body}</p>
            <div className="at-btn-row">
              <ScheduleButton
                label={finalCta.primaryCta ?? "Schedule a Consultation"}
                mail={mail}
                tel={tel}
                emailText={contact?.email ?? footer?.contactEmail}
                phoneText={contact?.phone}
                tinaField={tinaField(finalCta, "primaryCta")}
              />
            </div>
            {contact?.phone && tel && (
              <p className="at-phone">
                Call or text{" "}
                <a className="at-tel" href={tel} data-tina-field={tinaField(contact, "phone")}>
                  {contact.phone}
                </a>
              </p>
            )}
          </div>
        </section>
      )}

      <footer className="at-footer">
        <span className="at-brand light">{brand?.name}</span>
        <p className="at-footer-tagline" data-tina-field={tinaField(footer ?? undefined, "tagline")}>
          {footer?.tagline}
        </p>
        <div className="at-footer-links">
          {resources?.map(
            (r, i) =>
              r?.label && (
                <a key={i} href={r.url ?? "#"} data-tina-field={tinaField(r)}>
                  {r.label}
                </a>
              )
          )}
          {contact?.phone && tel && <a href={tel}>{contact.phone}</a>}
          {footer?.contactEmail && <a href={`mailto:${footer.contactEmail}`}>{footer.contactEmail}</a>}
        </div>
        <p className="at-footer-line" data-tina-field={tinaField(footer ?? undefined, "line")}>
          {footer?.line}
        </p>
      </footer>

      {/* floating back-to-top pill */}
      <a className="at-float-top" href="#top" aria-label="Back to top">
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
          <path
            d="M12 5.5l6.2 6.2-1.4 1.4-3.8-3.8V19h-2V9.3l-3.8 3.8-1.4-1.4L12 5.5z"
            fill="currentColor"
          />
        </svg>
        Back to Top
      </a>

      {/* floating call pill */}
      {contact?.phone && tel && (
        <a className="at-float-pill" href={tel} aria-label={`Call or text ${contact.phone}`}>
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path
              d="M6.6 3.2c.6-.6 1.6-.5 2.1.2l1.6 2.2c.4.6.4 1.4-.1 1.9l-1 1.1c.5 1.1 1.2 2.1 2.1 3 .9.9 1.9 1.6 3 2.1l1.1-1c.5-.5 1.3-.5 1.9-.1l2.2 1.6c.7.5.8 1.5.2 2.1l-1.2 1.2c-.6.6-1.5.9-2.3.7-2.5-.6-4.9-2-6.9-4s-3.4-4.4-4-6.9c-.2-.8.1-1.7.7-2.3l1.2-1.2z"
              fill="currentColor"
            />
          </svg>
          Call or text {contact.phone}
        </a>
      )}
    </div>
  );
}
