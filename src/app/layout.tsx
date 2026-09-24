import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { site } from "@/content/site";
import { fraunces, inter, jetbrainsMono } from "./fonts";

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description:
    "Full-stack software engineer with ~8 years of experience in React, TypeScript, Node.js, Go and cloud-native systems.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
