const ausgaben = [
  { betrag: 12.5, kategorie: "Essen",  datum: "2026-09-15" },
  { betrag: 45,   kategorie: "Tanken", datum: "2026-09-15" },
  { betrag: 8.9,  kategorie: "Essen",  datum: "2026-09-16" },
  { betrag: 750,  kategorie: "Miete",  datum: "2026-09-01" },
  { betrag: 23.4, kategorie: "Essen",  datum: "2026-09-17" },
];


for (const { betrag, datum, kategorie } of ausgaben) {
  const [jahr, monat, tag] = datum.split("-");
  console.log(`${tag}.${monat}. - ${kategorie}: ${betrag} EUR`);
}

for(const a of ausgaben){
    console.log(`${a.betrag} EUR`)

}


 let summe = 0;


for(const a of ausgaben){
    summe += a .betrag 
}

console.log(`Erwartet: ${summe}`)


function summeFuerKategorie(liste,kategorie){

    let summe = 0;
    for(const a of liste ) {
        if(a.kategorie === kategorie){
            summe += a.betrag
        }
    }
    return summe;
}

console.log(`Essen: ${summeFuerKategorie(ausgaben, "Essen")}`)

ausgaben.reduce((summe, a) => summe + a.betrag, 0)
