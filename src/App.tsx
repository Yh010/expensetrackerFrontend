import { BrowserRouter, Route, Routes } from "react-router-dom";
import InvestmentTracker from "./pages/Investments";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<InvestmentTracker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
