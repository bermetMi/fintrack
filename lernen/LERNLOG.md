## Do 24.09.2026 – Tag 1: Fehlerbehandlung ✅
- Gemacht: try/catch/finally/throw ausgeführt, validateAmount geschrieben und getestet
- Verstanden: throw wirft einen Fehler, catch fängt ihn, finally läuft immer
- Eigene Worte: ______
- Entscheidung: 0 ist erlaubt (amount < 0)
- Check: 4 von 6, offen: Wann braucht man try/catch?
- Morgen: Bedingungen und Funktionen

## Fr 25.09.2026 – Tag 2: Bedingungen und Funktionen ✅
- Gemacht: isBigExpense geschrieben, mit filter auf die echte ausgaben-Liste angewendet
- Verstanden: if prüft eine Bedingung (z. B. amount > 100), im if-Zweig läuft return true, sonst return false
- Verstanden: objekt.eigenschaft (z. B. a.betrag) holt einen Wert aus einem Objekt
- Entscheidung: Grenze für "groß" ist 100 €, mit > (genau 100 zählt nicht als groß)
- Ergebnis: bigExpenses enthält Miete (750) und Essen (230)
- Noch unklar: Wozu diese Ja/Nein-Funktionen später konkret gebraucht werden (klärt sich mit mehr Übung)
- Morgen: Array-Methoden (map, filter, find)

## Di 29.09.2026 – Phase 0, Array-Methoden: map, filter, find

**Tagesaufgabe laut Plan:** Transaktionen nach Kategorie filtern, eine Transaktion nach `id` finden. Geübt an echten `transactions`-Daten (`amountCents`, englische Feldnamen) statt an der alten `ausgaben`-Liste.
**Status: Übungen gemacht, Verständnis noch nicht sicher ⚠️**

 Gemacht
- `transactions.filter((t) => t.category === "Essen")` → Array mit 2 Treffern
- `transactions.find((t) => t.id === 2)` → einzelnes Objekt
- `transactions.map((t) => t.note)` → Liste aller Notizen
- Kombiniert: `filter` + `map` (`foodNotes`) → nur Notizen der Essen-Transaktionen
- Dabei den **Salary-Bug** wiederentdeckt: Salary (Einnahme) hat `category: "Essen"`, dadurch taucht Salary fälschlich im Essen-Filter auf

Verstanden (bestätigt durch eigene Tests)
- `filter` gibt ein **Array** zurück (auch bei 0 oder 1 Treffer), wählt nur aus, verändert die Objekte nicht
- `find` gibt **ein einzelnes Objekt** zurück, kein Array; bei keinem Treffer: `undefined`
- `map` gibt ein Array **gleicher Länge** zurück, wandelt jeden Eintrag um (z. B. Objekt → nur ein Feld)

Noch nicht sicher – WIEDERHOLEN beim nächsten Mal
- [ ] Entscheidung "filter oder map?" bei neuen Aufgaben zuerst vertauscht, `find` war beide Male richtig

Noch offen
- [ ] Salary-Bug beheben

## Mi 30.09.2026 – Phase 0, Array-Methoden: reduce und sort

**Tagesaufgabe:** Summe aller Beträge berechnen, Transaktionen nach Betrag sortieren (auf- und absteigend). Geübt an `transactions` (`daten.js`).

Gemacht
- `transactions.reduce((acc, t) => acc + t.amountCents, 0)` → Summe aller `amountCents` als eine Zahl
- `[...transactions].sort((a, b) => a.amountCents - b.amountCents)` → aufsteigend sortiert
- `[...transactions].sort((a, b) => b.amountCents - a.amountCents)` → absteigend sortiert
- Dabei bewusst `[...transactions]` (Spread) verwendet, um das Original-Array nicht zu verändern

Verstanden (bestätigt durch eigene Tests)
- `reduce` läuft über alle Einträge und sammelt am Ende **einen** Wert (`acc` = Akkumulator), `0` ist der Startwert
- `sort` verändert das Array, auf dem es aufgerufen wird (deshalb Kopie mit `[...array]` nötig)
- Die Vergleichsfunktion bei `sort` entscheidet die Reihenfolge: `a - b` = aufsteigend, `b - a` = absteigend

Noch offen
- [ ] Salary-Bug beheben