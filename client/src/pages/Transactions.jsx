import { useState } from "react";
import { Link } from "react-router-dom";
import { EXPENSE } from "../calculations";
import TransactionForm from "../TransactionForm";

export default function Transactions({ setTransactions, categories, setDateRange }) {
  const [notice, setNotice] = useState("");

  const handleAdd = (values) => {
    const newTransaction = { ...values, id: Date.now() };
    setTransactions((current) => [...current, newTransaction]);
    setNotice(values.type === EXPENSE
      ? "Ausgabe gespeichert. Du findest sie auf der Seite Übersicht."
      : "Einnahme gespeichert. Du findest sie auf der Seite Übersicht.");
  };

  return (
    <>
      <div className="page__header">
        <h1>Transaktionen</h1>
        <p className="page__subtitle">Neue Transaktion erfassen</p>
      </div>
      <div className="card">
        <TransactionForm
          categories={categories}
          onSave={handleAdd}
          onSubmitStart={() => setNotice("")}
        />
        {notice && (
          <div className="transaction-confirmation" role="status">
            <p>{notice}</p>
            <Link
              className="btn btn--ghost"
              to="/"
              onClick={() => setDateRange({ from: "", to: "" })}
            >
              In Übersicht ansehen
            </Link>
            <p className="field__hint">Zeigt alle Transaktionen ohne Zeitraumfilter.</p>
          </div>
        )}
      </div>
    </>
  );
}
