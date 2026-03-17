export default function Navbar({ activeTab, onTabChange }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/80 px-6 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)] sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-xl font-semibold text-slate-100">ShelfSense</p>
        <p className="text-xs text-slate-400">AI-powered bookstore platform</p>
      </div>
      <div className="flex items-center gap-2 rounded-full bg-slate-800/80 p-1">
        {[
          { id: "user", label: "User" },
          { id: "seller", label: "Seller Dashboard" }
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange(tab.id)}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
              activeTab === tab.id
                ? "bg-slate-950 text-slate-100 shadow"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-[#FF8A3D]/20 text-[#FF8A3D] font-semibold">
        A
      </div>
    </div>
  );
}
