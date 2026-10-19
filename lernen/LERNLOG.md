## Do 24.09.2026 – Tag 1: Fehlerbehandlung

- Gemacht: try/catch/finally/throw ausgeführt, validateAmount geschrieben und getestet
- Verstanden: throw wirft einen Fehler, catch fängt ihn, finally läuft immer
- Eigene Worte: **\_\_**
- Entscheidung: 0 ist erlaubt (amount < 0)
- Check: 4 von 6, offen: Wann braucht man try/catch?
- Morgen: Bedingungen und Funktionen

## Fr 25.09.2026 – Tag 2: Bedingungen und Funktionen

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

- [x] Salary-Bug beheben

## Di 06.10.2026 – Phase 0: Destructuring, Fehler lesen, map

**Gemacht**

- Array/Objekt-Zugriff: `transactions[1].note`
- Fehlermeldung gelesen: `ReferenceError: transaction is not defined`
- Destructuring: `const { note, category } = transactions[1];`
- `filter` und `map` mit Destructuring: `({ type }) => type === "expense"`, `({ note }) => note`

**Verstanden**

- Array = `[ ]`, Position ab 0. Objekt = `{ }`, Zugriff über Feldnamen
- Fehlendes Feld → `undefined` (kein Fehler). Unbekannte Variable → `ReferenceError`
- Namen in `{ }` müssen genau wie die Felder heißen
- Das Wort links vom Pfeil muss rechts vom Pfeil benutzt werden

**Wiederholen**

- [ ] `map`: Ich schrieb `names.length` statt `name.length` (ganzes Array statt einzelner Eintrag)
- [ ] `reduce` auffrischen
- [ ] Destructuring in eigenen Worten: **\_\_**

**Entscheidungen**

- Salary-Bug behoben (`category: "Salary"`)
- Plan B testen: FinTrack zuerst, Zertifizierung 45 Min./Tag
- Pflicht laut Managerin: JavaScript, React, Express, Deployment bis ca. Februar. KI-Teil ist Bonus

**Offen**

- Managerin fragen: Was heißt „Fullstack agieren"? Zertifizierung Pflicht, mit Termin?
- Deployment im Wochenplan ergänzen (Januar)

**Morgen:** `reduce` auffrischen, dann Summe pro Kategorie

## Mi 07.10.2026 (fertig nachgetragen Fr 09.10.) – Phase 0: reduce

**Gemacht**

- Repo-Review mit Claude, Aufräumliste erstellt (siehe Offen)
- reduce erklärt bekommen: Vergleich mit for-Schleife und Kotlin fold
- Übung 2 in `lernen/reduce.mjs`: Summe nur der Ausgaben (`type === "expense"`) mit reduce berechnet → **70000 bestätigt** (Ausführung mit `node`)
- 4 Verständnisfragen zu reduce beantwortet (2 davon erst nach Korrektur richtig)

**Verstanden (in eigenen Worten)**

- acc ist der Zettel; was die Funktion zurückgibt, wird der neue Zettel
- Der Startwert ist der erste Zettel, nicht das Ergebnis (mit 100 als Start kommt 110 heraus, nicht 100)
- reduce fasst alle Elemente zu einem einzigen Ergebnis zusammen (nicht zwingend eine Summe) – anders als map/filter, die ein Array zurückgeben
- Ohne Startwert nimmt reduce das erste Element als Start-acc und beginnt die Iteration beim zweiten Element

**Noch unklar**

- Übung 1 (for-Schleife-Summe aller amountCents, erwartet 170000) noch nicht per console.log bestätigt – Zeile in `reduce.mjs` ist auskommentiert

**Offen**

- [x] Übung 2: Summe nur der Ausgaben (type === "expense"), erwartet 70000
- [ ] Übung 1 in `lernen/reduce.mjs`: Summe aller amountCents, erst mit for-Schleife bestätigen, dann mit reduce (erwartet 170000)
- [ ] Danach: Summe pro Kategorie
- [ ] Aufräumen: `--env-file` im dev-Skript, `.DS_Store` aus Git, Übungscode aus `daten.js` nach `lernen/`, Kleinkram
- [ ] Zertifizierung Modul 2 starten

**Wiederholen**

- [ ] Destructuring in eigenen Worten
- [ ] .mjs ist immer ein Modul; bei .js entscheidet "type" in der package.json

**Commit:** **\_\_**
**Heute noch nachholen (Fr 09.10):** zuerst Do 08.10 (Summe pro Kategorie als Objekt; Module export/import), dann erst das eigentliche Fr-09.10-Thema (async/await, fetch; Wochenabschluss)

## Mo 12.10.2026 – Phase 0 (Nachholen Do 08.10.): Summe pro Kategorie, Module, erste eigene Route

**Gemacht**

- Grammatik Mo: Present Simple vs. Present Continuous
- Summe pro Kategorie mit `reduce` und `{}` als Startwert in `lernen/reduce.mjs`
- `server/src/berechnungen.js` angelegt mit `export function sumByCategory(transactions)`
- In `index.js` importiert und neue Route `GET /api/summary` gebaut → Browser zeigt `{"Salary":100000,"Essen":50000,"Transport":20000}`
- Mit `zettel`-Experiment selbst gesehen: ohne `= 0` kommt `NaN`
- Fehler gelesen: `ENOENT` (falscher Ordner für `npm run dev`), `Cannot GET /api/summary` (fehlender `/` im Pfad), `TypeError: res.sumByCategory is not a function`, `ReferenceError` (fehlender import)
- Server mit `npm run dev` (`--watch`) gestartet

**Verstanden (in eigenen Worten)**

- Present Simple: -s bei he/she/it; Present Continuous: am/is/are + Verb-ing
- reduce ohne Startwert nimmt das erste Element des Arrays als Start
- Ohne `= 0` kommt `NaN`, weil man zu "nichts" (`undefined`) keine Zahl addieren kann
- Startwert hat die Form des Ergebnisses: Zahl → `0`, Objekt → `{}`
- `./` = gleicher Ordner; ohne `export` kann eine andere Datei die Funktion nicht benutzen
- Funktion ist ausgelagert, weil sie wiederverwendbar ist und überall benutzt werden kann
- `reduce` nimmt die Transaktionen einzeln aus der Liste
- Ohne `( )` wird die Funktion nicht ausgeführt → Browser leer (mit Hilfe)

**Noch unklar**

- Gleiche Kategorie = ein Glas: zuerst "zwei Gläser Essen" geantwortet
- `transactions` (Liste) vs. `transaction` (ein Element, nur innerhalb von reduce sichtbar)
- `acc` ist ein eigenes, neues Objekt; die Transaktion wird nicht verändert

**Wiederholen**

- [ x] Übung: Bahn/Transport 50, Rewe/Essen 300, Bus/Transport 20 → wie viele Gläser, wie viel drin?
- [ x] Stacktrace lesen: erste Zeile = Was, erste Zeile mit eigener Datei = Wo
- [ x] Reihenfolge im Ergebnis: reduce sortiert nicht (Experiment: Reihenfolge in `daten.js` umdrehen)

**Offen**

- [ x] Aufräumen `index.js`: beide `console.log(sumByCategory(...))` löschen, Routen über `app.listen` verschieben
- [ x] Sollen Einnahmen (Salary) in der Kategorien-Summe stehen oder getrennt gerechnet werden?
- [ x] Fr 09.10: async/await, fetch
- [ x] Übung 1 (for-Schleife, 170000) per console.log bestätigen
- [ x] Phase 1 (Vite, JSX) hätte heute starten sollen → Plan prüfen

**Commit:** **\_\_**
**Morgen:** kurz Wiederholen-Übung (Gläser), dann async/await + fetch, dann Phase 1 (Vite)

## Di 13.10.2026 – Phase 0: async/await, fetch, try/catch

**Gemacht**

- Wiederholung `sumByCategory` (Gläser): 2 Gläser, Transport 70, Essen 300; `undefined + 50` ergibt `NaN`
- `lernen/fetch.mjs`: `loadTransactions(url)` mit `await fetch`, `await response.json()`, `try/catch`, `if (!response.ok) throw`
- Drei Fälle getestet: 200 (Daten), 404 (`/api/gibtsnicht`), Server gestoppt (`ECONNREFUSED`)
- Fehler gelesen: `ECONNREFUSED`, `Unexpected token '<'` (HTML statt JSON bei 500)

**Verstanden (in eigenen Worten)**

- `await` wartet, bis das versprochene Ergebnis (Promise) da ist
- Parameter = Platzhalter in der Definition, Wert kommt beim Aufruf von außen
- Definition (Rezept) vs. Aufruf (kochen): ohne Aufruf passiert nichts
- Dieselbe Funktion kann mit verschiedenen URLs aufgerufen werden

**Noch unklar (morgen abfragen)**

- Warum braucht `response.json()` auch `await`? (Inhalt ist nach `fetch` noch verpackt)
- Warum landet 404/500 nicht automatisch im `catch`? Was prüft man selbst?
- Unterschied "keine Antwort" (`fetch` wirft) und "Antwort mit Fehlerstatus" (`response.ok` prüfen)

**Wiederholen**

- [ ] Backticks für Template Strings (`${...}` geht nur dort)
- [ ] `fetch` gehört in den `try`-Block, nicht davor
- [ ] Aufruf in `fetch.mjs` zurück auf `/api/transactions`

**Offen**

- [ ] Aufräumen aus Mo: `console.log(sumByCategory(...))` in `index.js`
- [ ] Phase 1 (Vite, JSX) starten

**Commit:** **\_\_**
**Morgen:** die 3 offenen Fragen oben abfragen, dann Phase 1 (Vite)

## Mi 14.10.2026 – Phase 0 Abschluss / Phase 1 Start: fetch festigen, Prettier, Vite

**Gemacht**

- `fetch.mjs`: URL auf `/api/transactions` korrigiert, 404 und 200 getestet, die 3 offenen Fragen von gestern geklärt
- Prettier installiert und `Format On Save` aktiviert
- Vite-Projekt in `client/` angelegt (React, ESLint), `npm run dev` gestartet (Port 5173)
- In `App.jsx` Text auf "FinTrack" geändert, Änderung erschien ohne manuelles Neuladen
- Struktur angeschaut: `index.html` → `main.jsx` → `App.jsx`
- Aufräumen `index.js` war schon erledigt (keine `console.log` mehr)

**Verstanden (in eigenen Worten)**

- `catch` fängt nur geworfene Fehler (mit Hilfe: bei 404 wirft `fetch` nicht, deshalb `if (!response.ok)` + `throw`)
- Bei Status 200 ist `response.ok` true, das `if` wird übersprungen, es wird nichts geworfen
- `response` muss ausgepackt werden, deshalb braucht `response.json()` ein zweites `await`
- `fetch` wirft selbst, wenn der Server nicht antwortet (z. B. gestoppt)
- Komponenten sind wiederverwendbare Codeteile
- JSX ist kein normales JS, Vite übersetzt es in JS, das der Browser versteht
- Ohne `import` hat man keinen Zugang zur Datei
- `<div id="root">` steht in `index.html`, dort zeigt React die ganze Oberfläche

**Noch unklar**

- Bündeln: Grund genannt ("schneller im Browser"), aber noch nicht mit "viele Dateien = viele Anfragen" erklärt (mit Hilfe)
- `throw` in eigenen Worten noch einmal abfragen
- Props: Idee verstanden (Komponente bekommt Werte von außen, damit sie wiederverwendbar ist)
- Destructuring: Begriff und Wirkung noch nicht sicher (in Props-Parameterliste `{ note, amountCents }`)
- Falsche Prop-Namen: kein Fehler, sondern `undefined` und leere Anzeige (erst mit Hilfe)

**Wiederholen**

- [ ] Destructuring in eigenen Worten (Objekt auspacken, Namen müssen zu den Feldern passen)
- [ ] Rollen im Fehlerfall: `if` erkennt, `throw` wirft, `catch` fängt
- [ ] Bündeln in einem Satz mit "Anfragen" erklären
- [ ] `.jsx`: Woran erkennt man JSX im Code?

**Offen**

- [x] Aufräumen `index.js`
- [ ] Eigene Komponente für die Transaktionsliste
- [ ] Wiederholen aus Di/Mo: Backticks, `fetch` im `try`, Destructuring in eigenen Worten

**Commit:** f90e6c2
**Morgen:** Destructuring wiederholen, dann Props (Packen/Auspacken) und Komponente `TransactionList` mit Fake-Daten

## Do 15.10.2026 – Phase 1: Props, Komponenten, map, key

**Gemacht**

- Grammatik Do: Konjunktiv II / Second Conditional (Übung beide Sätze richtig)
- Destructuring wiederholt: `const { amountCents, type } = transactions[2];` ohne Vorlage geschrieben
- Props erklärt bekommen und `client/src/TransactionItem.jsx` mit `{ note, amountCents }` gebaut
- In `App.jsx` ein Array `transactions` mit 3 Objekten angelegt und mit `map` als Liste angezeigt, `key={transaction.id}` ergänzt
- Wochenziel erreicht: Transaktionsliste zeigt Fake-Daten (einen Tag früher als geplant)
- Fehler gelesen: `does not provide an export named 'TransactionItem'` (`export default` braucht Import ohne `{ }`), fehlende Klammer bei `map`, `key`-Warnung in der Konsole
- Entscheidung: Zertifizierung aus dem Plan genommen (pausiert, Stand Modul 1 fertig); Haken-Spalte in der Phase-0-Tabelle durch Notiz-Spalte ersetzt
- Plan besprochen: Deployment und KI fehlten mir im Projekt. Ziel: ab 2027 im Unternehmen in ein neues Projekt (QA, Backend, etwas Frontend, Deployment, mit KI)
- Entscheidung KI: Zuerst KI in VS Code konfigurieren (Instruktionen, Prompts, Agenten, Skills), 30 Min täglich ab Fr 16.10. Ob ein KI-Agent Teil von FinTrack wird, entscheide ich am Ende von Phase 2 (11.12.)
- Spezifikation angepasst: KI-Teil nicht mehr Bonus, Bewerbungen ersetzt durch Gespräch im Unternehmen

**Verstanden (in eigenen Worten)**

- `<p>{amountCents}</p>` zeigt den Wert (2000), `<p>amountCents</p>` zeigt den Text
- Falscher Feldname (`notiz` statt `note`) ergibt `undefined`, keine Fehlermeldung
- `import Foo from "./Foo"` gehört zu `export default function Foo`
- `id` ist ein Feld des Eintrags und bleibt gleich ("2 bleibt immer 2"), deshalb ist sie als `key` geeignet
- `map` erzeugt eine neue Liste; `transactions` ist die Liste, `transaction.note` ist der Wert bei jedem Durchlauf; 3 Objekte ergeben 3 `<TransactionItem />`

**Noch unklar**

- Props: ich nannte nur die Feldnamen; `props` ist ein Objekt mit Namen **und** Werten
- `{ }` im JSX: erst "übersetzen in JSX"; richtig ist: JavaScript-Wert einsetzen
- Warum der Index als `key` schlecht ist: Folge beim Löschen nur mit Hilfe verstanden
- Komponente = Funktion mit Großbuchstaben, die JSX zurückgibt (Frage kam von mir, noch nicht in eigenen Worten erklärt)
- Array aus Einzelwerten (`[3, "Salary", 10000]`) gegen Array aus Objekten
- Second Conditional: warum nach `if` Past Simple steht (erst "weiss ich nicht", dann mit "keine Million" verstanden)
- Unterschied: KI in VS Code konfigurieren (Hilfe beim Entwickeln) gegen KI-Agent in der App (Teil des Produkts): "weiss ich nicht ganz genau"

**Wiederholen**

- [ ] Destructuring in eigenen Worten erklären (noch nicht gemacht)
- [ ] `export default` gegen `export function`: Import mit und ohne `{ }`
- [ ] Rollen im Fehlerfall: `if` erkennt, `throw` wirft, `catch` fängt
- [ ] Bündeln in einem Satz mit "Anfragen" erklären; `.jsx` erkennen

**Offen**

- [ ] `App.jsx`: überflüssigen Import `import "./TransactionItem";` löschen
- [ ] Betrag lesbar anzeigen (10000 Cent als 100,00 €)
- [ ] Variante B überprüfen (war für Fr 09.10 geplant); Rückblick So 11.10 fehlt im Log
- [ ] Managerin fragen: Was heißt "Fullstack agieren"? Welche KI-API darf im Unternehmen benutzt werden?
- [ ] Plan: früher Deployment-Test nach Phase 1 entscheiden (noch nicht im Plan)

**Commit:** 18c3bef
**Morgen:** Fr 16.10: Grammatik Fr (Präpositionen), Props/key wiederholen, Betrag lesbar machen, Wochenabschluss, KI in VS Code (30 Min, neu)

## Mo 19.10.2026 – Phase 1: useState, Delete-Button, Vorbereitung Formulare

**Gemacht**

- formatAmount-Funktion in `client/src/formatters.js` geschrieben (Cent → €)
- `transactions` von fester Liste zu `useState` umgewandelt
- TransactionItem Props erweitert: `id`, `onDelete`, `transactions`
- Delete-Button in jeder Zeile gebaut; `handleDelete` mit `filter` geschrieben
- Alle 3 Einträge gelöscht zum Testen → funktioniert
- Code-Cleanup: alte Imports, `count`-Button, Hero-Bilder, Next-Steps Section weg

**Verstanden (in eigenen Worten)**

- `useState` gibt ein Array mit 2 Elementen zurück: [Wert, Setter-Funktion]
- Destructuring `const [transactions, setTransactions]` packt das Array aus
- `transactions` ist die Variable, `setTransactions` ruft die Setter-Funktion auf
- Beim Löschen: neue Liste ohne den Eintrag erstellen (mit `filter`), dann `setTransactions` aufrufen
- React zeichnet automatisch neu, wenn `setTransactions` aufgerufen wird
- `id` bleibt gleich ("2 bleibt immer 2"), deshalb gut für `filter` und `key`

**Noch unklar**

- [ ] Warum ist `Date.now()` eine gute `id` für neue Einträge? (kommt beim Formulare-Thema)

**Offen**

- [ ] Commit: noch nicht gemacht
- [ ] Formulare starten: kontrollierte Inputs, Add-Button

**Commit:** 033e9a6
**Morgen:** Formulare (Di 20.10): `<input>` für note und amountCents, `onChange`, Add-Button schreiben
