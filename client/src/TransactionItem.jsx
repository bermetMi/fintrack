import formatAmount from "./formatters";

export default function TransactionItem({
  note,
  amountCents,
  id,
  onDelete,
  category,
}) {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <p>
      {" "}
      {category} - {note} : {formatAmount(amountCents)}
      <button onClick={handleDelete}>Delete</button>
    </p>
  );
}
