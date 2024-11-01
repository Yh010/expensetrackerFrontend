import { BrowserRouter, Route, Routes } from "react-router-dom";
import InvestmentTracker from "./pages/Investments";
import LandingPage from "./pages/LandingPage";
import FinancialGoalTracker from "./pages/Goals";
import UserProfile from "./pages/ProfilePage";
import MindmapPage from "./pages/MindmapPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<InvestmentTracker />} />
        <Route path="/goals" element={<FinancialGoalTracker />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/mindmap" element={<MindmapPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
