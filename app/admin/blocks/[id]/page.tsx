"use client";
import useSWR from "swr";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function EditBlockPage() {
  const params = useParams(); const id = params?.id as string;
  const { data, mutate } = useSWR(id ? `/api/blocks/${id}` : null, fetcher);
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [type, setType] = useState("HERO");
  const [published, setPublished] = useState(false);
  const [json, setJson] = useState("{}");

  useEffect(()=>{
    if (data?.block) {
      setTitle(data.block.title || "");
      setType(data.block.type || "HERO");
      setPublished(!!data.block.published);
      setJson(JSON.stringify(data.block.data || {}, null, 2));
    }
  }, [data]);

  async function save() {
    await fetch(`/api/blocks/${id}`, { method: "PUT", body: JSON.stringify({ title, type, published, data: JSON.parse(json || "{}") }) });
    mutate();
  }

  async function remove() {
    await fetch(`/api/blocks/${id}`, { method: "DELETE" });
    router.push("/admin/blocks");
  }

  if (!data) return <div className="container py-10">Loading...</div>;

  return (
    <div className="container py-10 space-y-4">
      <h1 className="text-2xl font-semibold">Edit Block #{id}</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="card p-4 space-y-3">
          <div>
            <label className="label">Title</label>
            <input className="input" value={title} onChange={e=>setTitle(e.target.value)} />
          </div>
          <div>
            <label className="label">Type</label>
            <select className="input" value={type} onChange={e=>setType(e.target.value)}>
              <option>HERO</option>
              <option>STATS</option>
              <option>CUSTOM_HTML</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <input id="pub" type="checkbox" checked={published} onChange={e=>setPublished(e.target.checked)} />
            <label htmlFor="pub">Published</label>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-primary" onClick={save}>Save</button>
            <button className="btn btn-outline" onClick={remove}>Delete</button>
          </div>
        </div>
        <div className="card p-4">
          <label className="label">Block JSON</label>
          <textarea className="input" style={{minHeight: 280}} value={json} onChange={e=>setJson(e.target.value)} />
        </div>
      </div>
    </div>
  );
}
