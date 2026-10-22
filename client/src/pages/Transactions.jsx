import { useState } from "react";

export default function Transactions({ transactions, setTransactions }) {
  const [note, setNote] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Essen");
  const categories = ["Essen", "Transport", "Salary", "Entertainment"];
  const [error, setError] = useState("");

  const handleAddTransaction = () => {
    if (!note || !amount) {
      setError("Bitte alle Felder ausfüllen!");
      return;
    }

    const amountNumber = parseInt(amount);
    if (isNaN(amountNumber) || amountNumber <= 0) {
      setError("Betrag muss eine positive Zahl sein!");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      note: note,
      amountCents: amountNumber,
      category: category,
    };

    setTransactions([...transactions, newTransaction]);
    setNote("");
    setAmount("");
    setCategory("Essen");
    setError("");
  };

  return (
    <div>
      <input
        placeholder="Note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <input
        placeholder="Amount (cents)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={handleAddTransaction}>Add</button>
      {error && <p>{error}</p>}
    </div>
  );
}
