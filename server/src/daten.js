export const transactions = [
    
    {id: 1, amountCents: 1000 * 100, type: "income", note: "Salary", category: "Salary", date: "2026-09-21"},
    {id: 2, amountCents: 500 * 100, type: "expense", note: "Groceries", category: "Essen", date: "2026-09-22"},
    {id: 3, amountCents: 200 * 100, type: "expense", note: "Transport", category: "Transport", date: "2026-09-23"}

];


// Deine Tests, unten dran:
const essenTransaktionen = transactions.filter((t) => t.category === "Essen");
//console.log(essenTransaktionen);

const gefunden = transactions.find((t) => t.id === 2);
//console.log(gefunden)

const notizen = transactions.map((t) =>t.note);
//console.log(notizen);

const foodNotes = transactions.filter((t) => t.category === "Essen")
.map((t) => t.note);
console.log(foodNotes);

const summe = transactions.reduce((acc, t) => {
    return acc + t.amountCents;
}, 0);
console.log("Summe: "+summe);

const sortiert = [...transactions].sort((a, b) => a.amountCents - b.amountCents);
console.log("Sortiert: ", sortiert);

const sortiertAbsteigend = [...transactions].sort((a, b) => b.amountCents -a.amountCents);
console.log("Absteigend", sortiertAbsteigend);

const numbers= [3,1,2];
numbers.sort((a,b) => a-b);
console.log(numbers);
