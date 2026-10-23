import { describe, expect, it } from "vitest";
import { filterTransactions, getDateRangeError, isValidTransactionDate } from "./transactionFilters";
import { EXPENSE, INCOME, getTotals, sumExpensesByCategory } from "./calculations";

const allDates = { from: "", to: "" };
const october = { from: "2026-10-01", to: "2026-10-31" };
const transactions = [
  { id: 1, date: "2026-09-30", category: "Essen", type: EXPENSE, amountCents: 900 },
  { id: 2, date: "2026-10-01", category: "Gehalt", type: INCOME, amountCents: 10000 },
  ...[2, 3, 4, 5, 6, 31].map((day) => ({
    id: day + 10,
    date: `2026-10-${String(day).padStart(2, "0")}`,
    category: day === 31 ? "Transport" : "Essen",
    type: EXPENSE,
    amountCents: 100,
  })),
  { id: 99, date: "2026-11-01", category: "Essen", type: EXPENSE, amountCents: 800 },
];

describe("transaction dates", () => {
  it.each(["2026-10-20", "2024-02-29", "0001-01-01", "9999-12-31"])(
    "accepts the real calendar date %s",
    (date) => expect(isValidTransactionDate(date)).toBe(true)
  );

  it.each(["", "2026-02-29", "2026-04-31", "2026-13-01", "2026-00-01", "0000-01-01", "2026-1-2", "2026-10-01T00:00:00Z"])(
    "rejects the invalid date %s",
    (date) => expect(isValidTransactionDate(date)).toBe(false)
  );
});

describe("date ranges", () => {
  it("allows all dates or a complete inclusive range", () => {
    expect(getDateRangeError(allDates)).toBe("");
    expect(getDateRangeError(october)).toBe("");
    expect(getDateRangeError({ from: "2024-02-29", to: "2024-02-29" })).toBe("");
  });

  it.each([
    { from: "2026-10-01", to: "" },
    { from: "", to: "2026-10-31" },
    { from: "2026-10-31", to: "2026-10-01" },
    { from: "2026-02-29", to: "2026-03-01" },
  ])("reports invalid ranges rather than returning misleading results: %j", (range) => {
    expect(getDateRangeError(range)).not.toBe("");
    expect(() => filterTransactions(transactions, range)).toThrow(RangeError);
  });
});

describe("filtered transactions and calculations", () => {
  it("starts with every transaction and restores all when cleared", () => {
    expect(filterTransactions(transactions, allDates)).toEqual(transactions);
    filterTransactions(transactions, october);
    expect(filterTransactions(transactions, allDates)).toEqual(transactions);
  });

  it("keeps all seven October entries, including both boundaries", () => {
    const filtered = filterTransactions(transactions, october);
    expect(filtered.map(({ id }) => id)).toEqual([2, 12, 13, 14, 15, 16, 41]);
    expect(getTotals(filtered)).toEqual({
      incomeCents: 10000, expenseCents: 600, balanceCents: 9400,
    });
    expect(sumExpensesByCategory(filtered)).toEqual([
      { category: "Essen", amountCents: 500 },
      { category: "Transport", amountCents: 100 },
    ]);
  });

  it("handles an inclusive single day", () => {
    expect(filterTransactions(transactions, { from: "2026-10-31", to: "2026-10-31" }))
      .toEqual([transactions[7]]);
  });

  it("returns empty lists and zero sums for no matches", () => {
    const filtered = filterTransactions(transactions, { from: "2027-01-01", to: "2027-01-31" });
    expect(filtered).toEqual([]);
    expect(getTotals(filtered)).toEqual({ incomeCents: 0, expenseCents: 0, balanceCents: 0 });
    expect(sumExpensesByCategory(filtered)).toEqual([]);
    expect(filterTransactions([], allDates)).toEqual([]);
  });

  it("does not mutate the source or depend on creation time", () => {
    const frozen = transactions.map((transaction) => Object.freeze({
      ...transaction, createdAt: "2027-01-01T12:00:00Z",
    }));
    Object.freeze(frozen);
    expect(filterTransactions(frozen, october)).toHaveLength(7);
    expect(frozen).toHaveLength(9);
  });
});
