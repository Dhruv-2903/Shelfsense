import { Link } from "react-router-dom";
import Card from "../components/Card.jsx";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl w-full text-center space-y-10">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Welcome</p>
          <h1 className="text-4xl md:text-5xl font-semibold">
            Welcome to <span className="text-[#3A7DFF]">ShelfSense</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            AI-powered recommendations for readers and bookstores
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Link to="/user">
            <Card className="p-8 text-left hover:shadow-[0_18px_40px_rgba(15,23,42,0.18)] transition">
              <div className="text-3xl">📚</div>
              <h2 className="text-2xl font-semibold mt-4">I'm a Reader</h2>
              <p className="text-sm text-slate-500 mt-3">
                Discover books personalized for you
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-[#3A7DFF]">
                <span className="text-sm font-semibold">Enter Reader Mode</span>
                <span>-&gt;</span>
              </div>
            </Card>
          </Link>
          <Link to="/seller">
            <Card className="p-8 text-left hover:shadow-[0_18px_40px_rgba(15,23,42,0.18)] transition">
              <div className="text-3xl">🏪</div>
              <h2 className="text-2xl font-semibold mt-4">I'm a Bookstore Owner</h2>
              <p className="text-sm text-slate-500 mt-3">
                Optimize inventory with AI insights
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-[#FF8A3D]">
                <span className="text-sm font-semibold">Enter Seller Mode</span>
                <span>-&gt;</span>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
