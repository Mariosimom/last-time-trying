import { ArrowRight, Check, MapPin, IndianRupee } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { PropertyCard } from "@/components/PropertyCard";
import { getListings } from "@/lib/listings";

export default async function HomePage() {
  const listings = await getListings();

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545569341-9eb8b30979d3?q=80&w=2400&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
        <div className="container relative py-24 sm:py-32">
          <div className="max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 badge">
              <span>🏇 NEW LAUNCH</span> <span>Emaar Selvara 3</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight">
              The Community — Grand Polo Club & Resort
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Opulent estate living where equestrian heritage meets modern design and nature’s calm embrace.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#listings" className="btn btn-primary">View Villas <ArrowRight size={18} /></a>
              <a href="#enquire" className="btn border-white/20">Get Brochure</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/70">
              <div className="badge">4-Bedroom Villas</div>
              <div className="badge">Avg. BUA 3,805 sq.ft.</div>
              <div className="badge">From AED 6.49M</div>
              <div className="badge">Limited: 138 villas</div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="container py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="card p-8">
            <h2 className="text-2xl font-semibold">Why Selvara 3?</h2>
            <ul className="mt-6 space-y-3 text-white/85">
              {[
                "Rarity & Refinement — earthy tones, organic forms, quiet elegance",
                "Renaissance of estate living — equestrian spirit, wellness, connection",
                "Realm of leisure — pool, lush gardens, boutique retail, wellness spaces",
                "Seamless connectivity — steps from Green Core parks, mosque & clubhouse",
                "Polo fields & stables — modern icons celebrating equine heritage"
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Check className="mt-1 shrink-0" size={18} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-8">
            <h2 className="text-2xl font-semibold">Location & Scale</h2>
            <div className="mt-6 space-y-3 text-white/85">
              <p className="flex items-center gap-2"><MapPin size={18}/> 5 min — Al Maktoum Int’l Airport</p>
              <p className="flex items-center gap-2"><MapPin size={18}/> 10 min — Expo City</p>
              <p className="flex items-center gap-2"><MapPin size={18}/> 30 min — Downtown Dubai</p>
              <p className="badge mt-4">Masterplan: 5.54M sqm · Open space: 1.59M sqm</p>
            </div>
            <div className="mt-8">
              <h3 className="font-semibold">Payment Plan</h3>
              <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-white/80">
                {[
                  "10% Booking",
                  "10% Oct 2025",
                  "10% Mar 2026",
                  "10% Aug 2026",
                  "10% Mar 2027 (30%)",
                  "10% Aug 2027 (50%)",
                  "10% Jan 2028 (70%)",
                  "10% Jul 2028 (90%)",
                  "20% May 2029 (Handover)"
                ].map((s) => <div key={s} className="badge">{s}</div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LISTINGS */}
      <section id="listings" className="container py-10">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold">Available Villas</h2>
          <div className="text-white/70 text-sm">*Sample data — replace via API/DB later</div>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((l) => <PropertyCard key={l.id} listing={l} />)}
        </div>
      </section>

      {/* ENQUIRE */}
      <section id="enquire" className="container py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="card p-8">
            <h2 className="text-2xl font-semibold">Book a Viewing / Get Floor Plans</h2>
            <p className="mt-2 text-white/80">
              Leave your details. Our specialist will share floor plans, availability & secure your unit.
            </p>
            <ul className="mt-4 space-y-2 text-white/70 text-sm">
              <li>• Emaar developer launch</li>
              <li>• Limited release (138 villas)</li>
              <li>• From AED 6.49M</li>
            </ul>
          </div>
          <div className="card p-6">
            <LeadForm />
          </div>
        </div>
        <p className="mt-6 text-center text-white/60 text-sm">
          Crafted by Emaar — 2024 Revenue: AED 35.5B.
        </p>
      </section>
    </div>
  );
}
