import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Grand Polo Club & Resort — Selvara 3 | Dubai Luxury Villas",
  description: "Emaar new launch: Selvara 3 — equestrian-inspired estate living. 4BR villas from AED 6.49M. Limited release: 138 villas."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
