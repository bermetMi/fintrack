import { useState } from "react";
import { INCOME, EXPENSE } from "./calculations";
import formatAmount from "./formatters";
import EuroConverter from "./EuroConverter";
import { isValidTransactionDate } from "./transactionFilters";

const NOTE_MAX_LENGTH = 100;

export default function TransactionForm({
  categories,
  transaction,
  onSave,
  onCancel,
  onSubmitStart,
}) {
  const categoriesOfType = (wantedType) =>
    categories.filter((c) => c.type === wantedType);
  const [note, setNote] = useState(transaction?.note ?? "");
  const [amount, setAmount] = useState(transaction ? String(transaction.amountCents) : "");
  const [date, setDate] = useState(transaction?.date ?? "");
  const [type, setType] = useState(transaction?.type ?? EXPENSE);
  const [category, setCategory] = useState(transaction?.category ?? categoriesOfType(EXPENSE)[0]?.name ?? "");
  const [error, setError] = useState("");
  const availableCategories = categoriesOfType(type);
  const isValidCategory = availableCategories.some((c) => c.name === category);
  const amountNumber = parseInt(amount, 10);
  const isValidAmount = /^\d+$/.test(amount) && Number.isSafeInteger(amountNumber) && amountNumber > 0;

  // Kategorie mit umschalten, sonst bliebe z. B. "Essen" bei einer Einnahme stehen
  const handleTypeChange = (newType) => {
    setType(newType);
    setCategory(categoriesOfType(newType)[0]?.name ?? "");
    setError("");
  };

  const resetForm = () => {
    setNote("");
    setAmount("");
    setDate("");
    setType(EXPENSE);
    setCategory(categoriesOfType(EXPENSE)[0]?.name ?? "");
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitStart?.();
    if (!note.trim() || !amount) {
      setError("Bitte alle Felder ausfüllen!");
      return;
    }
    if (note.length > NOTE_MAX_LENGTH) {
      setError(`Die Notiz darf höchstens ${NOTE_MAX_LENGTH} Zeichen enthalten.`);
      return;
    }

    if (!isValidTransactionDate(date)) {
      setError("Bitte ein gültiges Transaktionsdatum auswählen.");
      return;
    }

    // parseInt würde "25,50" stillschweigend zu 25 machen, deshalb den Text prüfen
    if (!/^\d+$/.test(amount)) {
      setError("Nur ganze Zahlen in Cent, ohne Komma oder Punkt (z. B. 2550).");
      return;
    }

    if (!Number.isSafeInteger(amountNumber) || amountNumber <= 0) {
      setError("Betrag muss eine positive, sicher darstellbare ganze Zahl in Cent sein!");
      return;
    }

    if (!isValidCategory) {
      setError("Bitte eine passende Kategorie anlegen und auswählen.");
      return;
    }

    const values = {
      note: note.trim(),
      amountCents: amountNumber,
      date: date,
      category: category,
      type: type,
    };

    const saveError = onSave(values);
    if (saveError) {
      setError(saveError);
      return;
    }
    if (!transaction) resetForm();
  };

  return (
    <>
        <div className="type-switch">
          <button
            type="button"
            className={
              type === EXPENSE
                ? "type-switch__option type-switch__option--expense-active"
                : "type-switch__option"
            }
            onClick={() => handleTypeChange(EXPENSE)}
            aria-pressed={type === EXPENSE}
          >
            Ausgabe
          </button>
          <button
            type="button"
            className={
              type === INCOME
                ? "type-switch__option type-switch__option--income-active"
                : "type-switch__option"
            }
            onClick={() => handleTypeChange(INCOME)}
            aria-pressed={type === INCOME}
          >
            Einnahme
          </button>
        </div>

        <form
          className="form"
          aria-label={transaction ? "Transaktion bearbeiten" : "Neue Transaktion"}
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="field">
            <label className="field__label" htmlFor="note">
              Notiz
            </label>
            <input
              id="note"
              className="input"
              placeholder="z. B. Rewe Einkauf"
              value={note}
              aria-describedby="note-length"
              aria-invalid={note.length > NOTE_MAX_LENGTH}
              autoFocus={Boolean(transaction)}
              onChange={(e) => setNote(e.target.value)}
            />
            <span className="field__hint" id="note-length">
              {note.length} / {NOTE_MAX_LENGTH} Zeichen
            </span>
          </div>

          <div className="field">
            <label className="field__label" htmlFor="transaction-date">
              Transaktionsdatum
            </label>
            <input
              id="transaction-date"
              className="input"
              type="date"
              min="0001-01-01"
              max="9999-12-31"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="field">
            <label className="field__label" htmlFor="amount">
              Betrag in Cent
            </label>
            <input
              id="amount"
              className="input"
              inputMode="numeric"
              placeholder="2550"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            {isValidAmount && (
              <span className="field__hint">
                entspricht {formatAmount(amountNumber)}
              </span>
            )}
          </div>

          <div className="field">
            <label className="field__label" htmlFor="category">
              Kategorie
            </label>
            <select
              id="category"
              className="select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {!isValidCategory && (
                <option value={category} disabled>
                  {category ? `${category} (nicht mehr verfügbar)` : "Bitte Kategorie auswählen"}
                </option>
              )}
              {availableCategories.map(({ id, name }) => (
                <option key={id} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <button className="btn btn--primary" type="submit">
            {transaction ? "Speichern" : "Hinzufügen"}
          </button>
          {onCancel && (
            <button className="btn btn--ghost" type="button" onClick={onCancel}>
              Abbrechen
            </button>
          )}

          {error && (
            <p className="form__error" role="alert">
              {error}
            </p>
          )}
        </form>

        <EuroConverter
          onUse={(cents) => {
            setAmount(cents);
            setError("");
          }}
        />
    </>
  );
}
