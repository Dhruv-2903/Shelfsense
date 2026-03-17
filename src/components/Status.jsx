export function LoadingState({ label = "Loading..." }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-sm text-slate-400">
      {label}
    </div>
  );
}

export function ErrorState({ message }) {
  if (!message) return null;
  return (
    <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
      {message}
    </div>
  );
}
