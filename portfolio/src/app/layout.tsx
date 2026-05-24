import type { Metadata } from "next";
import "./globals.css";

import { GeistSans } from "geist/font/sans";
import SmoothScroll from "../components/SmoothScroll";
import ThemeProvider from "../components/ThemeProvider";

export const metadata: Metadata = {
  title: "Rithan Portfolio",
  description: "Modern Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider>
          <SmoothScroll />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}