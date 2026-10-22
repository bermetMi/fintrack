import TransactionItem from "./TransactionItem";

export default function TransactionList({ transactions, onDelete }) {
  return (
    <div>
      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          note={transaction.note}
          amountCents={transaction.amountCents}
          id={transaction.id}
          onDelete={onDelete}
          category={transaction.category}
        />
      ))}
    </div>
  );
}
