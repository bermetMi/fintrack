export const INCOME = "INCOME";
export const EXPENSE = "EXPENSE";

export function getTotals(transactions) {
  return transactions.reduce(
    (totals, { type, amountCents }) => {
      if (type === INCOME) {
        totals.incomeCents += amountCents;
      } else {
        totals.expenseCents += amountCents;
      }
      totals.balanceCents = totals.incomeCents - totals.expenseCents;
      return totals;
    },
    { incomeCents: 0, expenseCents: 0, balanceCents: 0 }
  );
}

export function sumExpensesByCategory(transactions) {
  const sums = transactions
    .filter(({ type }) => type === EXPENSE)
    .reduce((acc, { category, amountCents }) => {
      const name = category ?? "Ohne Kategorie";
      acc[name] = (acc[name] ?? 0) + amountCents;
      return acc;
    }, Object.create(null));

  return Object.entries(sums)
    .map(([category, amountCents]) => ({ category, amountCents }))
    .sort((a, b) => b.amountCents - a.amountCents);
}
