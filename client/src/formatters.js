function formatAmount(amountCents) {
  const euros = amountCents / 100;
  const formatted = euros.toLocaleString("de-DE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formatted + " €";
}

export default formatAmount;
