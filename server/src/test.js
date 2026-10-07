
import { transactions } from "./daten.js";

const food = transactions.filter((t) => t.category === "Essen");
console.log(food);
console.log(food.length);


console.log("Log1",transactions[0].type);
console.log("Log2", transactions[1].note);


const {note, category} = transactions[1];
console.log("Log3", note, category);

const {amountCents, type} = transactions[0];
console.log("Log4", amountCents, type);

const {notiz} = transactions[1];
console.log("Log5", notiz);

const expense = transactions.filter((t) => t.type === "expense");
console.log("Expense transactions: ", expense);

const notes = transactions.map(({ note }) => note);
console.log("Notes: ", notes);
