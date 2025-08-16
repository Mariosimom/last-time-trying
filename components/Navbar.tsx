"use client";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/60 border-b border-white/10">
      <div className="container flex items-center justify-between h-14">
        <Link href="/" className="font-semibold tracking-wide">
          GRAND POLO • Selvara 3
        </Link>
        <nav className="flex items-center gap-4">
          <a href="#listings" className="hover:opacity-80">Listings</a>
          <a href="#enquire" className="btn btn-primary">Enquire</a>
        </nav>
      </div>
    </header>
  );
}
