import TransactionItem from "./TransactionItem";

export default function TransactionList({ transactions, onDelete, onEdit }) {
  if (transactions.length === 0) {
    return <p className="empty-state">Keine Transaktionen für diese Auswahl.</p>;
  }

  return (
    <ul className="transaction-list" aria-label="Transaktionen" role="list">
      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          note={transaction.note}
          date={transaction.date}
          amountCents={transaction.amountCents}
          id={transaction.id}
          onDelete={onDelete}
          onEdit={onEdit}
          category={transaction.category}
          type={transaction.type}
        />
      ))}
    </ul>
  );
}
