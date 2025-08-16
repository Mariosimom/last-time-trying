import Image from "next/image";
import Link from "next/link";

type Listing = {
  id: string;
  title: string;
  priceAED: number;
  buaSqft: number;
  plotSqft: number;
  beds: number;
  baths: number;
  image: string;
  location: string;
};

export function PropertyCard({ listing }: { listing: Listing }) {
  return (
    <article className="card overflow-hidden">
      <div className="relative h-56 w-full">
        <Image src={listing.image} alt={listing.title} fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold">{listing.title}</h3>
        <p className="mt-1 text-white/80">{listing.location}</p>
        <div className="mt-4 flex flex-wrap gap-2 text-sm text-white/70">
          <span className="badge">{listing.beds} Beds</span>
          <span className="badge">{listing.baths} Baths</span>
          <span className="badge">BUA {listing.buaSqft.toLocaleString()} sq.ft.</span>
          <span className="badge">Plot {listing.plotSqft.toLocaleString()} sq.ft.</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-xl font-semibold">AED {listing.priceAED.toLocaleString()}</div>
          <Link href="#enquire" className="btn btn-primary">Enquire</Link>
        </div>
      </div>
    </article>
  );
}
