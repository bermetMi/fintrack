import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/transactions">Transactions</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/stats">Stats</Link>
        <Link to="/settings">Settings</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />{" "}
        {/* Später separate Komponente */}
        <Route path="/categories" element={<div>Categories (später)</div>} />
        <Route path="/stats" element={<div>Stats (später)</div>} />
        <Route path="/settings" element={<div>Settings (später)</div>} />
      </Routes>
    </BrowserRouter>
  );
}
