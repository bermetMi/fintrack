import { transactions } from "../server/src/daten.js";

let summe = 0;

for(let t of transactions){

    summe += t.amountCents;
    //console.log(summe)
}


const result = transactions.reduce((acc, element) => {
     return acc + element.amountCents;}, 0);
console.log(result)


