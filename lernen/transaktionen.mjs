import { transactions } from "../server/src/daten.js";

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
