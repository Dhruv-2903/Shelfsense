const items = ["Dashboard", "Analytics"];

export default function Sidebar() {
  return (
    <aside className="rounded-2xl border border-white/60 bg-white/80 backdrop-blur shadow-[0_10px_30px_rgba(15,23,42,0.08)] p-6 h-fit">
      <p className="text-lg font-semibold mb-6">Seller Console</p>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={item}
            className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm transition ${
              index === 0
                ? "bg-[#3A7DFF] text-white shadow"
                : "bg-white/60 text-slate-600 hover:text-slate-900"
            }`}
          >
            <span>{item}</span>
            <span className="text-xs">-&gt;</span>
          </div>
        ))}
      </div>
    </aside>
  );
}
