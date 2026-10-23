import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import Categories from "./pages/Categories";
import Header from "./Header";
import Footer from "./Footer";
import { INCOME, EXPENSE } from "./calculations";
import { filterTransactions, getDateRangeError } from "./transactionFilters";
import "./App.css";

export default function App() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      note: "Gehalt",
      date: "2026-10-01",
      amountCents: 10000,
      category: "Gehalt",
      type: INCOME,
    },
    {
      id: 2,
      note: "Groceries",
      date: "2026-10-20",
      amountCents: 5000,
      category: "Essen",
      type: EXPENSE,
    },
    {
      id: 3,
      note: "Transport",
      date: "2026-10-21",
      amountCents: 2000,
      category: "Transport",
      type: EXPENSE,
    },
  ]);

  const [categories, setCategories] = useState([
    { id: 1, name: "Essen", type: EXPENSE },
    { id: 2, name: "Transport", type: EXPENSE },
    { id: 3, name: "Wohnen", type: EXPENSE },
    { id: 4, name: "Entertainment", type: EXPENSE },
    { id: 5, name: "Gehalt", type: INCOME },
    { id: 6, name: "Geschenk", type: INCOME },
  ]);

  const [dateRange, setDateRange] = useState({ from: "", to: "" });
  const dateRangeError = getDateRangeError(dateRange);
  const visibleTransactions = dateRangeError
    ? []
    : filterTransactions(transactions, dateRange);

  const handleDelete = (id) => {
    setTransactions((current) => current.filter((transaction) => transaction.id !== id));
  };

  const handleUpdate = (id, values) => {
    if (!transactions.some((transaction) => transaction.id === id)) {
      return "Die Transaktion existiert nicht mehr. Bitte die Bearbeitung abbrechen.";
    }
    setTransactions((current) => current.map((transaction) =>
      transaction.id === id ? { ...transaction, ...values, id: transaction.id } : transaction
    ));
    return "";
  };

  return (
    <BrowserRouter>
      <Header />

      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                transactions={visibleTransactions}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
                categories={categories}
                dateRange={dateRange}
                setDateRange={setDateRange}
                dateRangeError={dateRangeError}
              />
            }
          />
          <Route
            path="/transactions"
            element={
              <Transactions
                setTransactions={setTransactions}
                categories={categories}
                setDateRange={setDateRange}
              />
            }
          />
          <Route
            path="/categories"
            element={
              <Categories
                categories={categories}
                setCategories={setCategories}
                transactions={transactions}
                setTransactions={setTransactions}
              />
            }
          />
          <Route path="/stats" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
