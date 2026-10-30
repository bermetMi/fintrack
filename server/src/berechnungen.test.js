import { sumByCategory } from "./berechnungen.js";
import { test } from "node:test";
import assert from "node:assert/strict";
import { transactions } from "./daten.js";

test("returns an empty object when no transactions are available", () => {
  const result = sumByCategory([]);
  assert.deepEqual(result, {});
});

test("return expense total per category und ignores income", () => {
  const result = sumByCategory(transactions);
  assert.deepEqual(result, { Essen: 50000, Transport: 20000 });
});

test("returns Error when gettig empty Object instead of List", () => {
  assert.throws(() => sumByCategory({}));
});

test("test for id:1  has an expencse", () => {
  const transaction = transactions.find((t) => t.id === 1);
  assert.equal(transaction.type, "INCOME");
  assert.equal(transaction.category, "Gehalt");
});

test("test for id:2  has an expense", () => {
  const transaction = transactions.find((t) => t.id === 2);
  assert.equal(transaction.type, "EXPENSE");
  assert.equal(transaction.category, "Essen");
});

test("test for id:3  has an expense", () => {
  const transaction = transactions.find((t) => t.id === 3);
  assert.equal(transaction.type, "EXPENSE");
  assert.equal(transaction.category, "Transport");
});

test("adds amounts of expenses in the same category", () => {
  const input = [
    { type: "EXPENSE", category: "Essen", amountCents: 1000 },
    { type: "EXPENSE", category: "Essen", amountCents: 500 },
  ];

  const result = sumByCategory(input);
  assert.deepEqual(result, { Essen: 1500 });
});

test("every type is INCOME or EXPENSE", () => {
  const result = transactions.every(
    (t) => t.type === "INCOME" || t.type === "EXPENSE",
  );
  assert.ok(result);
});

test("test category name exist in list", () => {
  const clientCaregories = [
    "Essen",
    "Transport",
    "Wohnen",
    "Entertainment",
    "Gehalt",
    "Geschenk",
  ];

  const result = transactions.every((t) =>
    clientCaregories.includes(t.category),
  );
  assert.ok(result);
});
