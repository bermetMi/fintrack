import formatAmount from "./formatters";

export default function TransactionItem({
  note,
  amountCents,
  id,
  onDelete,
  transactions,
}) {
  const handleDelete = () => {
    const newTransactions = transactions.filter((t) => t.id !== id);
    onDelete(newTransactions);
  };

  return (
    <p>
      {" "}
      {note} : {formatAmount(amountCents)}
      <button onClick={handleDelete}>Delete</button>
    </p>
  );
}
