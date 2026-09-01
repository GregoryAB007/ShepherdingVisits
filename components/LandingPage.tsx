"use client";

import { useTina } from "tinacms/dist/react";
import type { Page } from "../tina/__generated__/types";
import AtelierDesign from "./designs/Atelier";

type Props = {
  data: { page: Page };
  query: string;
  variables: { relativePath: string };
};

export default function LandingPage(props: Props) {
  // useTina makes the page live-update while an editor works in /admin.
  // In production for visitors it just returns the static data.
  const { data } = useTina(props);

  return (
    <main>
      <AtelierDesign page={data.page} />
    </main>
  );
}
