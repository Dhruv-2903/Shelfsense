import { useEffect, useState } from "react";
import Card from "../components/Card.jsx";
import { ErrorState, LoadingState } from "../components/Status.jsx";
import {
  getTrending,
  getAnalytics,
  getDemandPrediction
} from "../api/client.js";

export default function SellerDashboard() {
  const [trending, setTrending] = useState([]);
  const [analytics, setAnalytics] = useState(null);
  const [prediction, setPrediction] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      setLoading(true);
      setError("");
      try {
        const [trendData, analyticsData, demandData] = await Promise.all([
          getTrending(),
          getAnalytics(),
          getDemandPrediction()
        ]);
        if (!mounted) return;
        setTrending(Array.isArray(trendData) ? trendData : trendData?.items ?? []);
        setAnalytics(analyticsData ?? {});
        setPrediction(Array.isArray(demandData) ? demandData : demandData?.items ?? []);
      } catch (err) {
        if (!mounted) return;
        setError("Failed to load seller insights. Please retry.");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    load();
    return () => {
      mounted = false;
    };
  }, []);

  const topGenres = analytics?.top_genres ?? analytics?.genres ?? [];
  const topBooks = analytics?.top_books ?? analytics?.books ?? [];
  const lowDemand = analytics?.low_demand_books ?? analytics?.low_demand ?? [];

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-100">Seller Dashboard</h2>
          <p className="mt-2 text-sm text-slate-400">
            Track demand signals, trending titles, and inventory risks.
          </p>
        </div>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:text-slate-100"
        >
          Refresh
        </button>
      </div>

      <ErrorState message={error} />

      {loading ? (
        <LoadingState label="Loading seller insights..." />
      ) : (
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="p-6 lg:col-span-1">
            <h3 className="text-lg font-semibold text-slate-100">Trending Books</h3>
            <div className="mt-4 space-y-3">
              {trending.length === 0 ? (
                <p className="text-sm text-slate-400">No trending data yet.</p>
              ) : (
                trending.map((item) => (
                  <div
                    key={typeof item === "string" ? item : item.title ?? item.name}
                    className="rounded-xl bg-slate-800/60 px-4 py-3 text-sm text-slate-200"
                  >
                    {typeof item === "string" ? item : item.title ?? item.name}
                  </div>
                ))
              )}
            </div>
          </Card>

          <Card className="p-6 lg:col-span-1">
            <h3 className="text-lg font-semibold text-slate-100">Analytics</h3>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">Top Genres</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {topGenres.length === 0 ? (
                    <span className="text-sm text-slate-400">No data</span>
                  ) : (
                    topGenres.map((genre) => (
                      <span
                        key={genre}
                        className="rounded-full bg-[#34C759]/10 px-3 py-1 text-xs font-semibold text-[#34C759]"
                      >
                        {genre}
                      </span>
                    ))
                  )}
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">Top Books</p>
                <ul className="mt-2 space-y-2 text-sm text-slate-200">
                  {topBooks.length === 0 ? (
                    <li className="text-slate-400">No data</li>
                  ) : (
                    topBooks.map((book) => <li key={book}>{book}</li>)
                  )}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">Low Demand Books</p>
                <ul className="mt-2 space-y-2 text-sm text-slate-200">
                  {lowDemand.length === 0 ? (
                    <li className="text-slate-400">No data</li>
                  ) : (
                    lowDemand.map((book) => <li key={book}>{book}</li>)
                  )}
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6 lg:col-span-1">
            <h3 className="text-lg font-semibold text-slate-100">Demand Prediction</h3>
            <div className="mt-4 space-y-3">
              {prediction.length === 0 ? (
                <p className="text-sm text-slate-400">No prediction data.</p>
              ) : (
                prediction.map((item) => (
                  <div
                    key={typeof item === "string" ? item : item.title ?? item.name}
                    className="flex items-center justify-between rounded-xl bg-slate-800/60 px-4 py-3 text-sm"
                  >
                    <span className="text-slate-200">
                      {typeof item === "string" ? item : item.title ?? item.name}
                    </span>
                    <span className="font-semibold text-[#3A7DFF]">
                      {item.demand_score ?? item.score ?? "-"}
                    </span>
                  </div>
                ))
              )}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
