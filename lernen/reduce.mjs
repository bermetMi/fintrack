import { transactions } from "../server/src/daten.js";

let summe = 0;

for(let t of transactions){

    summe += t.amountCents;
    //console.log(summe)
}


const result = transactions.reduce((acc,element) =>{

    if(element.type === "expense"){
        return acc + element.amountCents;
    }

    return acc;

},0);
console.log(result)


const total = transactions.reduce((acc, transaction) =>
 {
    if(!acc[transaction.category]){
        acc[transaction.category]=0; 
    }
    
  acc[transaction.category] += transaction.amountCents;
  return acc;
},{});

console.log("Total", total)
