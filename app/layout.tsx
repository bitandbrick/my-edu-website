import type { Metadata } from "next";
import { Sora, Outfit } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Unity Education Platform - Transform Your Institution",
  description: "Comprehensive education management platform for schools, colleges, universities, and training centers. Manage fees, admissions, learning, HR, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
