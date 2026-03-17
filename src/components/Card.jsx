export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-slate-800/80 bg-slate-900/80 shadow-[0_10px_30px_rgba(0,0,0,0.35)] ${className}`}
    >
      {children}
    </div>
  );
}
