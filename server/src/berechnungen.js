export function sumByCategory(transactions) {
  return transactions
    .filter((transaction) => transaction.type === "EXPENSE")
    .reduce((acc, transaction) => {
      if (!acc[transaction.category]) {
        acc[transaction.category] = 0;
      }

      acc[transaction.category] += transaction.amountCents;
      return acc;
    }, {});
}
