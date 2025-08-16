"use client";
import useSWR from "swr";
import { useState } from "react";

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function BlocksPage() {
  const { data, mutate } = useSWR("/api/blocks", fetcher);
  const [title, setTitle] = useState("New Block");
  const [type, setType] = useState("HERO");

  async function addBlock() {
    await fetch("/api/blocks", { method: "POST", body: JSON.stringify({ title, type, published: false }) });
    setTitle("New Block");
    mutate();
  }

  if (!data) return <div className="container py-10">Loading...</div>;

  return (
    <div className="container py-10 space-y-6">
      <h1 className="text-2xl font-semibold">Blocks</h1>
      <div className="card p-4 flex gap-2">
        <input className="input" value={title} onChange={e=>setTitle(e.target.value)} placeholder="Block title" />
        <select className="input" value={type} onChange={e=>setType(e.target.value)}>
          <option>HERO</option>
          <option>STATS</option>
          <option>CUSTOM_HTML</option>
        </select>
        <button className="btn btn-primary" onClick={addBlock}>Add</button>
      </div>
      <div className="space-y-2">
        {data.blocks.map((b: any) => (
          <a key={b.id} href={`/admin/blocks/${b.id}`} className="block card p-4 hover:bg-black/5">
            <div className="font-medium">{b.title || b.type}</div>
            <div className="text-sm opacity-70">#{b.id} · {b.type} · {b.published ? "Published" : "Draft"}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
