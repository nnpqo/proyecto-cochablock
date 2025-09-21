import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Civecoin - Reciclaje Tokenizado",
  description: "Convierte tu basura reciclable en Civecoin. Gana mientras ayudas al planeta con Civecoin, el sistema revolucionario de reciclaje tokenizado.",
  keywords: ["reciclaje", "Civecoin", "tokens", "blockchain", "sostenibilidad", "economía circular"],
  authors: [{ name: "Civecoin Team" }],
  openGraph: {
    title: "Civecoin - Reciclaje Tokenizado",
    description: "Convierte tu basura reciclable en Civecoin. Gana mientras ayudas al planeta.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
