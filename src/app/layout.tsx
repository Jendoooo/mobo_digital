import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MOBO Digital | Work Ledger",
  description:
    "MOBO Digital work ledger: ecommerce platforms, analytics dashboards, data pipelines, web products, and automation systems.",
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%230c1118'/%3E%3Cpath d='M14 46V21a9 9 0 0 1 18 0 9 9 0 0 0 18 0v25' fill='none' stroke='%23f2eadc' stroke-width='8'/%3E%3Ccircle cx='50' cy='47' r='5' fill='%23f2b705'/%3E%3C/svg%3E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
