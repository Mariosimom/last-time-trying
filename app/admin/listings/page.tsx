// app/admin/listings/page.tsx
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "default-no-store";

import { prisma } from "@/lib/db";

export default async function AdminListingsPage() {
  let listings: any[] = [];
  try {
    listings = await prisma.listing.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
    });
  } catch (e) {
    // If DB is unreachable at runtime, show a friendly message (no build crash)
    return (
      <div className="card p-6">
        <h1 className="text-xl font-semibold mb-2">Listings</h1>
        <p className="text-red-600">
          Unable to connect to the database. Check DATABASE_URL and that the DB allows connections.
        </p>
      </div>
    );
  }

  return (
    <div className="card p-6">
      <h1 className="text-xl font-semibold mb-4">Listings</h1>
      {listings.length === 0 ? (
        <p className="text-slate-600">No listings yet.</p>
      ) : (
        <ul className="space-y-2">
          {listings.map((l) => (
            <li key={l.id} className="border-b border-black/5 pb-2">
              <div className="font-medium">{l.title ?? `Listing #${l.id}`}</div>
              <div className="text-sm text-slate-600">{l.status ?? "draft"}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
