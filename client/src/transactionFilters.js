export function isValidTransactionDate(date) {
  if (!/^(?!0000)\d{4}-\d{2}-\d{2}$/.test(date)) return false;
  const parsedDate = new Date(`${date}T00:00:00Z`);
  return (
    !Number.isNaN(parsedDate.getTime()) &&
    parsedDate.toISOString().slice(0, 10) === date
  );
}

export function getDateRangeError({ from, to }) {
  if (from === "" && to === "") return "";
  if (!from || !to) return "Bitte Start- und Enddatum auswählen.";
  if (!isValidTransactionDate(from) || !isValidTransactionDate(to)) {
    return "Bitte gültige Kalenderdaten auswählen.";
  }
  if (from > to) return "Das Startdatum darf nicht nach dem Enddatum liegen.";
  return "";
}

export function filterTransactions(transactions, dateRange) {
  const error = getDateRangeError(dateRange);
  if (error) throw new RangeError(error);

  const { from, to } = dateRange;
  return transactions.filter(
    (transaction) =>
      from === "" || (transaction.date >= from && transaction.date <= to)
  );
}
