"use client";

import AtelierDesign from "./Atelier";
import type { DesignProps } from "./types";

// Duplicate of Atelier for comparing typography: the markup and layout are
// exactly Atelier's (rendered by the same component so they can't drift),
// while the .at-juris-text wrapper restyles all text with Juris's type
// treatment — Lora serif, its weights and letter-spacing, and the
// oxblood/gold text accents. See the "3. BLEND" section in globals.css.
export default function BlendDesign({ page }: DesignProps) {
  return (
    <div className="at-juris-text">
      <AtelierDesign page={page} />
    </div>
  );
}
