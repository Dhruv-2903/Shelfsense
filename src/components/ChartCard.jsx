import Card from "./Card.jsx";

export default function ChartCard({ title, children, className = "" }) {
  return (
    <Card className={`p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-semibold">{title}</p>
        <span className="text-xs text-[#34C759] bg-[#34C759]/10 px-3 py-1 rounded-full">
          AI Forecast
        </span>
      </div>
      {children}
    </Card>
  );
}
