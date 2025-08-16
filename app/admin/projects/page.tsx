// app/admin/projects/page.tsx
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "default-no-store";

import { prisma } from "@/lib/db";

export default async function AdminProjectsPage() {
  let projects: any[] = [];
  try {
    projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
    });
  } catch (e) {
    return (
      <div className="card p-6">
        <h1 className="text-xl font-semibold mb-2">Projects</h1>
        <p className="text-red-600">
          Unable to connect to the database. Check DATABASE_URL and connection settings.
        </p>
      </div>
    );
  }

  return (
    <div className="card p-6">
      <h1 className="text-xl font-semibold mb-4">Projects</h1>
      {projects.length === 0 ? (
        <p className="text-slate-600">No projects yet.</p>
      ) : (
        <ul className="space-y-2">
          {projects.map((p) => (
            <li key={p.id} className="border-b border-black/5 pb-2">
              <div className="font-medium">{p.name ?? `Project #${p.id}`}</div>
              <div className="text-sm text-slate-600">{p.status ?? "draft"}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
