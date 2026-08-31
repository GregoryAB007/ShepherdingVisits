"use client";

import { useEffect, useState } from "react";
import { useTina } from "tinacms/dist/react";
import type { Page } from "../tina/__generated__/types";
import AtelierDesign from "./designs/Atelier";
import JurisDesign from "./designs/Juris";
import type { DesignProps } from "./designs/types";

type Props = {
  data: { page: Page };
  query: string;
  variables: { relativePath: string };
};

const DESIGNS: {
  id: string;
  label: string;
  hint: string;
  Component: (props: DesignProps) => React.ReactNode;
}[] = [
  { id: "atelier", label: "Atelier", hint: "Cream & brown — elegant editorial", Component: AtelierDesign },
  { id: "juris", label: "Juris", hint: "Ivory & oxblood — stately legal print", Component: JurisDesign },
];

const STORAGE_KEY = "scv-design";

export default function LandingPage(props: Props) {
  // useTina makes the page live-update while an editor works in /admin.
  // In production for visitors it just returns the static data.
  const { data } = useTina(props);
  const page = data.page;

  const [active, setActive] = useState(DESIGNS[0].id);

  // Restore the last-viewed design after mount (avoids a hydration mismatch).
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved && DESIGNS.some((d) => d.id === saved)) setActive(saved);
    } catch {
      /* private mode etc. — keep the default */
    }
  }, []);

  const select = (id: string) => {
    setActive(id);
    try {
      window.localStorage.setItem(STORAGE_KEY, id);
    } catch {
      /* ignore */
    }
  };

  const design = DESIGNS.find((d) => d.id === active) ?? DESIGNS[0];
  const Design = design.Component;

  return (
    <main>
      <div className="design-switcher" role="tablist" aria-label="Choose a design">
        <span className="design-switcher-label">Design preview:</span>
        {DESIGNS.map((d) => (
          <button
            key={d.id}
            role="tab"
            aria-selected={d.id === active}
            className={d.id === active ? "ds-tab ds-tab-active" : "ds-tab"}
            title={d.hint}
            onClick={() => select(d.id)}
          >
            {d.label}
          </button>
        ))}
        <span className="design-switcher-hint">{design.hint}</span>
      </div>
      <Design page={page} />
    </main>
  );
}
