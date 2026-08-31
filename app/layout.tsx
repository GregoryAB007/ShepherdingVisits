import type { Metadata } from "next";
import {
  Sora,
  Inter,
  Cormorant_Garamond,
  Montserrat,
  Nunito,
} from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-display" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans-elegant",
});
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-round",
});

export const metadata: Metadata = {
  title: "Shepherding Child Visits",
  description: "Professional supervised visitation and monitored exchanges.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${cormorant.variable} ${montserrat.variable} ${nunito.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
