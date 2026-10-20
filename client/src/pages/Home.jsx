import TransactionList from "../TransactionList";
import formatAmount from "../formatters";

function Home({ transactions, setTransactions }) {
  const total = transactions.reduce((sum, t) => sum + t.amountCents, 0);

  return (
    <>
      <section id="center">
        <div>
          <h1>FinTrack</h1>
          <p> Total: {formatAmount(total)}</p>
          <TransactionList
            transactions={transactions}
            onDelete={setTransactions}
          />
        </div>
      </section>
    </>
  );
}

export default Home;
