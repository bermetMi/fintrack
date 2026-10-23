import { useEffect, useRef, useState } from "react";
import TransactionList from "../TransactionList";
import TransactionForm from "../TransactionForm";
import formatAmount from "../formatters";
import { getTotals } from "../calculations";
import DateRangeFilter from "../DateRangeFilter";
import ExpenseCategoryChart from "../ExpenseCategoryChart";
import { filterTransactions } from "../transactionFilters";

function Home({ transactions, onDelete, onUpdate, categories, dateRange, setDateRange, dateRangeError }) {
  const { incomeCents, expenseCents, balanceCents } = getTotals(transactions);
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [notice, setNotice] = useState("");
  const editButton = useRef(null);
  const heading = useRef(null);

  useEffect(() => {
    if (!editingTransaction && editButton.current) {
      const target = editButton.current.isConnected ? editButton.current : heading.current;
      target?.focus();
      editButton.current = null;
    }
  }, [editingTransaction]);

  const handleEdit = (id, button) => {
    setEditingTransaction(transactions.find((transaction) => transaction.id === id));
    editButton.current = button;
    setNotice("");
  };

  const handleSave = (values) => {
    const error = onUpdate(editingTransaction.id, values);
    if (error) return error;
    const outsideRange = !dateRangeError && filterTransactions([values], dateRange).length === 0;
    setEditingTransaction(null);
    setNotice(outsideRange
      ? "Änderungen gespeichert. Der Eintrag liegt jetzt außerhalb des gewählten Zeitraums."
      : "Änderungen gespeichert.");
    return "";
  };

  return (
    <>
      <div className="page__header">
        <h1 ref={heading} tabIndex={-1}>Übersicht</h1>
        <p className="page__subtitle">Finanzen anschauen und auswerten</p>
      </div>

      {!dateRangeError && (
        <div className="stat-grid">
          <div className="stat stat--income">
            <span className="stat__label">Einnahmen</span>
            <span className="stat__value">{formatAmount(incomeCents)}</span>
          </div>
          <div className="stat stat--expense">
            <span className="stat__label">Ausgaben</span>
            <span className="stat__value">{formatAmount(expenseCents)}</span>
          </div>
          <div className="stat stat--balance">
            <span className="stat__label">Differenz</span>
            <span className="stat__value">{formatAmount(balanceCents)}</span>
          </div>
        </div>
      )}

      <DateRangeFilter
        dateRange={dateRange}
        setDateRange={setDateRange}
        error={dateRangeError}
      />

      {notice && <p className="transaction-confirmation" role="status">{notice}</p>}
      {editingTransaction && (
        <section className="card transaction-editor" aria-label="Eintrag bearbeiten">
          <h2 className="card__title">Transaktion bearbeiten</h2>
          <TransactionForm
            key={editingTransaction.id}
            transaction={editingTransaction}
            categories={categories}
            onSave={handleSave}
            onCancel={() => setEditingTransaction(null)}
          />
        </section>
      )}

      {!dateRangeError && (
        <div className="overview-content">
          <ExpenseCategoryChart transactions={transactions} />

          <div className="card">
            <h2 className="card__title">Transaktionen</h2>
            {dateRange.from && (
              <p className="field__hint">Angezeigt werden alle Einträge im gewählten Zeitraum.</p>
            )}
            <TransactionList transactions={transactions} onDelete={onDelete} onEdit={handleEdit} />
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
