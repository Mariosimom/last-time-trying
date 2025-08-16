export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container py-10 text-sm text-white/60">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Grand Polo Club & Resort — Selvara 3</p>
          <p>Marketing by @real_estate_dxb</p>
        </div>
      </div>
    </footer>
  );
}
