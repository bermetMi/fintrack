import formatAmount from "./formatters";

export default function TransactionItem({
  note,
  amountCents,
  id,
  onDelete,
  transactions,
  category,
}) {
  const handleDelete = () => {
    const newTransactions = transactions.filter((t) => t.id !== id);
    onDelete(newTransactions);
  };

  return (
    <p>
      {" "}
      {category} - {note} : {formatAmount(amountCents)}
      <button onClick={handleDelete}>Delete</button>
    </p>
  );
}
