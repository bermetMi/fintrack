import formatAmount, { formatDate } from "./formatters";
import { INCOME } from "./calculations";

export default function TransactionItem({
  note,
  date,
  amountCents,
  id,
  onDelete,
  onEdit,
  category,
  type,
}) {
  const isIncome = type === INCOME;

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <li className="transaction">
      <span
        className={
          isIncome
            ? "transaction__icon transaction__icon--income"
            : "transaction__icon transaction__icon--expense"
        }
        aria-hidden="true"
      >
        {isIncome ? "↑" : "↓"}
      </span>

      <div className="transaction__info">
        <p className="transaction__note">{note}</p>
        <time className="transaction__date" dateTime={date}>
          {formatDate(date)}
        </time>
        {category && <span className="transaction__category">{category}</span>}
      </div>

      <span
        className={
          isIncome
            ? "transaction__amount transaction__amount--income"
            : "transaction__amount transaction__amount--expense"
        }
      >
        {isIncome ? "+" : "−"} {formatAmount(amountCents)}
      </span>

      <div className="transaction__actions">
        <button
          className="btn btn--ghost"
          onClick={(event) => onEdit(id, event.currentTarget)}
          aria-label={`${note || category} vom ${formatDate(date)}, ${formatAmount(amountCents)} bearbeiten`}
        >
          Bearbeiten
        </button>
        <button
        className="btn btn--ghost transaction__delete"
        onClick={handleDelete}
        aria-label={`${note || category} vom ${formatDate(date)}, ${formatAmount(amountCents)} löschen`}
      >
        Löschen
      </button>
      </div>
    </li>
  );
}
