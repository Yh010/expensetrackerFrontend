import { BrowserRouter, Route, Routes } from "react-router-dom";
import InvestmentTracker from "./pages/Investments";
import LandingPage from "./pages/LandingPage";
import FinancialGoalTracker from "./pages/Goals";
import UserProfile from "./pages/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<InvestmentTracker />} />
        <Route path="/goals" element={<FinancialGoalTracker />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
