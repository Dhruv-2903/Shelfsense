import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import SellerDashboard from "./pages/SellerDashboard.jsx";

export default function App() {
  const [activeTab, setActiveTab] = useState("user");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-['Sora']">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10">
        <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
        {activeTab === "user" ? <UserDashboard /> : <SellerDashboard />}
      </div>
    </div>
  );
}
