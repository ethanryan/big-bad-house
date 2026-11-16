import type { Metadata, Viewport } from "next";
import { Anton, Newsreader } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const anton = Anton({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-text",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const title = `${site.name} — ${site.descriptor.replace(/\.$/, "")}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${anton.variable} ${newsreader.variable}`}>
      <body>{children}</body>
    </html>
  );
}
