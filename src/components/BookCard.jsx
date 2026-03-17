export default function BookCard({ title, onSelect, busy }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-5 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.55)]">
      <p className="text-sm text-slate-400">Recommended</p>
      <h3 className="mt-2 text-lg font-semibold text-slate-100">{title}</h3>
      <p className="mt-2 text-xs text-slate-400">
        Because you like fast-paced thrillers
      </p>
      <button
        type="button"
        onClick={onSelect}
        disabled={busy}
        className="mt-4 w-full rounded-xl bg-[#3A7DFF] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2f69d6] disabled:opacity-60"
      >
        {busy ? "Tracking..." : "Mark as Read"}
      </button>
    </div>
  );
}
