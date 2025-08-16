import { prisma } from "@/lib/db";
import Link from "next/link";

export default async function ListingsAdmin() {
  const items = await prisma.listing.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <div className="container py-10 space-y-4">
      <h1 className="text-2xl font-semibold">Listings</h1>
      <div className="grid-cards">
        {items.map((p) => (
          <div key={p.id} className="card p-4">
            <div className="font-medium">{p.title}</div>
            <div className="text-sm opacity-70">{p.location}</div>
          </div>
        ))}
      </div>
      <Link href="/admin">Back</Link>
    </div>
  );
}
