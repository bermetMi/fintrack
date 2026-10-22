import TransactionList from "../TransactionList";
import formatAmount from "../formatters";

function Home({ transactions, setTransactions }) {
  const total = transactions.reduce((sum, t) => sum + t.amountCents, 0);

  function handleDelete(id) {
    setTransactions(transactions.filter((t) => t.id !== id));
  }

  return (
    <>
      <section id="center">
        <div>
          <h1>FinTrack</h1>
          <p> Total: {formatAmount(total)}</p>
          <TransactionList
            transactions={transactions}
            onDelete={handleDelete}
          />
        </div>
      </section>
    </>
  );
}

export default Home;
