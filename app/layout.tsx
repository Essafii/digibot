import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { WhatsappFloat } from "@/components/layout/whatsapp-float";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DIGIBOT — Services digitaux & techniques",
    template: "%s | DIGIBOT",
  },
  description:
    "DIGIBOT — vidéosurveillance et sécurité, réseaux & Wi‑Fi, sites web et logiciels, publicité et réseaux sociaux. Interventions au Maroc, devis transparent, un seul interlocuteur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsappFloat />
      </body>
    </html>
  );
}
