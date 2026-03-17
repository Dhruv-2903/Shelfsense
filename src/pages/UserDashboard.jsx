import { useState } from "react";
import BookCard from "../components/BookCard.jsx";
import Card from "../components/Card.jsx";
import { ErrorState, LoadingState } from "../components/Status.jsx";
import { getRecommendations, trackRead } from "../api/client.js";

export default function UserDashboard() {
  const [query, setQuery] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [tracking, setTracking] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    try {
      const data = await getRecommendations(query.trim());
      const list = Array.isArray(data)
        ? data
        : Array.isArray(data?.recommendations)
        ? data.recommendations
        : [];
      setRecommendations(list);
    } catch (err) {
      setError("Failed to fetch recommendations. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleTrack = async (title) => {
    setTracking(title);
    try {
      await trackRead(title);
    } catch (err) {
      setError("Unable to record interaction. Please retry.");
    } finally {
      setTracking("");
    }
  };

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-6">
        <h2 className="text-2xl font-semibold text-slate-100">
          Find your next read
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Search by a book title and get AI-curated recommendations.
        </p>
        <form onSubmit={handleSearch} className="mt-5 flex flex-col gap-3 sm:flex-row">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search for a book..."
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3A7DFF]/40"
          />
          <button
            type="submit"
            className="rounded-xl bg-[#FF8A3D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#e57c36]"
          >
            Search
          </button>
        </form>
      </div>

      <ErrorState message={error} />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-slate-100">Recommendations</h3>
          <span className="text-xs text-slate-400">Powered by ShelfSense AI</span>
        </div>
        {loading ? (
          <LoadingState label="Fetching recommendations..." />
        ) : recommendations.length === 0 ? (
          <Card className="p-6 text-sm text-slate-400">
            No recommendations yet. Search for a book to begin.
          </Card>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recommendations.map((item) => {
              const title = typeof item === "string" ? item : item.title ?? item.name;
              return (
                <BookCard
                  key={title}
                  title={title}
                  busy={tracking === title}
                  onSelect={() => handleTrack(title)}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
