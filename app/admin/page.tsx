import Link from "next/link";
import { prisma } from "@/lib/db";

export default async function AdminHome() {
  const [countBlocks, countListings, countProjects] = await Promise.all([
    prisma.block.count().catch(()=>0),
    prisma.listing.count().catch(()=>0),
    prisma.project.count().catch(()=>0),
  ]);

  return (
    <div className="container py-10 space-y-6">
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="card p-4"><div className="text-sm opacity-70">Blocks</div><div className="text-2xl font-semibold">{countBlocks}</div></div>
        <div className="card p-4"><div className="text-sm opacity-70">Listings</div><div className="text-2xl font-semibold">{countListings}</div></div>
        <div className="card p-4"><div className="text-sm opacity-70">Projects</div><div className="text-2xl font-semibold">{countProjects}</div></div>
      </div>
      <div className="flex gap-3">
        <Link href="/admin/blocks" className="btn btn-outline">Manage Blocks</Link>
        <Link href="/admin/listings" className="btn btn-outline">Manage Listings</Link>
        <Link href="/admin/projects" className="btn btn-outline">Manage Projects</Link>
      </div>
    </div>
  );
}
