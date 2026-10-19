import { useState } from "react";
import TransactionItem from "./TransactionItem";

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, note: "Salary", amountCents: 10000 },
    { id: 2, note: "Groceries", amountCents: 5000 },
    { id: 3, note: "Transport", amountCents: 2000 },
  ]);

  return (
    <>
      <section id="center">
        <div>
          <h1>FinTrack</h1>
          {transactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              note={transaction.note}
              amountCents={transaction.amountCents}
              id={transaction.id}
              onDelete={setTransactions}
              transactions={transactions}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
