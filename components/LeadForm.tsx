"use client";
import { useState } from "react";

export function LeadForm() {
  const [state, setState] = useState<{loading:boolean;ok:boolean;err:string|null}>({loading:false,ok:false,err:null});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setState({loading:true, ok:false, err:null});
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: fd.get("name"),
          phone: fd.get("phone"),
          email: fd.get("email"),
          message: fd.get("message")
        }),
        headers: { "Content-Type": "application/json" }
      });
      if (!res.ok) throw new Error("Failed");
      setState({loading:false, ok:true, err:null});
      (e.currentTarget as HTMLFormElement).reset();
    } catch (err:any) {
      setState({loading:false, ok:false, err: err.message || "Error"});
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-sm text-white/70 mb-1">Full name</label>
        <input name="name" required className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 outline-none" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-white/70 mb-1">Phone (WhatsApp)</label>
          <input name="phone" required className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 outline-none" />
        </div>
        <div>
          <label className="block text-sm text-white/70 mb-1">Email</label>
          <input name="email" type="email" className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 outline-none" />
        </div>
      </div>
      <div>
        <label className="block text-sm text-white/70 mb-1">Message</label>
        <textarea name="message" rows={4} className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 outline-none" />
      </div>
      <button disabled={state.loading} className="btn btn-primary w-full">
        {state.loading ? "Sending..." : "Request floor plans & prices"}
      </button>
      {state.ok && <p className="text-emerald-400 text-sm">Thanks! We’ll contact you shortly.</p>}
      {state.err && <p className="text-red-400 text-sm">Something went wrong. Try again.</p>}
    </form>
  );
}
