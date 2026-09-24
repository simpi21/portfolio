import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simpi Singh — Full-Stack Software Engineer",
  description:
    "Full-stack software engineer with ~8 years of experience in React, TypeScript, Node.js, Go and cloud-native systems.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
