type Block = {
  id: number;
  type: string;
  title?: string | null;
  data?: any;
};

export default function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <div>
      {blocks.map((b) => (
        <section key={b.id} className="py-12">
          <div className="container">
            <h2 className="text-2xl font-semibold mb-2">{b.title || b.type}</h2>
            {b.type === "HERO" ? (
              <p className="text-slate-900/70">{b?.data?.subtitle || "Edit in admin → Blocks"}</p>
            ) : (
              <pre className="text-sm bg-black/5 p-3 rounded">{JSON.stringify(b.data, null, 2)}</pre>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
