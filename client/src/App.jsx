import { useState } from "react";
import TransactionList from "./TransactionList";
import formatAmount from "./formatters";

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, note: "Salary", amountCents: 10000 },
    { id: 2, note: "Groceries", amountCents: 5000 },
    { id: 3, note: "Transport", amountCents: 2000 },
  ]);

  const [note, setNote] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Essen");
  const categories = ["Essen", "Transport", "Salary", "Entertainment"];
  const total = transactions.reduce((sum, t) => sum + t.amountCents, 0);

  const handleAddTransaction = () => {
    if (!note || !amount) {
      alert("Bitte alle Felderausfüllen!");
      return;
    }

    const amountNumber = parseInt(amount);
    if (isNaN(amountNumber) || amountNumber <= 0) {
      alert("Betrag muss eine positive Zahl sein!");
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
  };

  return (
    <>
      <section id="center">
        <div>
          <h1>FinTrack</h1>
          <p> Total: {formatAmount(total)}</p>
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

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <button onClick={handleAddTransaction}>Add</button>
          </div>
          <TransactionList
            transactions={transactions}
            onDelete={setTransactions}
          />
        </div>
      </section>
    </>
  );
}

export default App;
