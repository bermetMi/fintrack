export default function TransactionItem({ note, amountCents }) {
  return (
    <p>
      {" "}
      {note} : {amountCents}
    </p>
  );
}
