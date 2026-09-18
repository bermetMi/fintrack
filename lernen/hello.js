const name = "Bermet";
const start = new  Date();

console.log("Hallo " + name + "!")
console.log(`Heute ist der ${start.toLocaleDateString("de-DE")}.`);
console.log(`FinTrack started. 2 + 3 = ${2 + 3}`);


const waehrung = "EUR"
let summe = 0;
summe = summe + 12.5;

console.log(typeof summe);
console.log(5 == "5");
console.log(5 === "5");


function brutto(netto){
    return netto * 1.19;
}

const brutto2 = (netto) => netto * 1.19;

const ausgabe = {
    beitrag: 12.5,
    kategorie:  "Essen",
    notiz: "Mittagessen",
};

console.log(ausgabe.kategorie);
ausgabe.beitrag = 14;
console.log(ausgabe.beitrag);


const kategorien = ["Essen", "Tanken", "Miete"];
console.log(kategorien.length);   // 3
console.log(kategorien[0]);       // "Essen"
kategorien.push("Freizeit");
console.log(kategorien);