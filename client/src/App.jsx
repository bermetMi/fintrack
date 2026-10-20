import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import { useState } from "react";

export default function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, note: "Salary", amountCents: 10000 },
    { id: 2, note: "Groceries", amountCents: 5000 },
    { id: 3, note: "Transport", amountCents: 2000 },
  ]);

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
        <Route
          path="/"
          element={
            <Home
              transactions={transactions}
              setTransactions={setTransactions}
            />
          }
        />
        <Route
          path="/transactions"
          element={
            <Transactions
              transactions={transactions}
              setTransactions={setTransactions}
            />
          }
        />
        <Route path="/categories" element={<div>Categories (später)</div>} />
        <Route path="/stats" element={<div>Stats (später)</div>} />
        <Route path="/settings" element={<div>Settings (später)</div>} />
      </Routes>
    </BrowserRouter>
  );
}
