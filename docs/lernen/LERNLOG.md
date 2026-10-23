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

## Mo 19.10.2026 – Phase 1: useState, Delete-Button, Formulare, Router, Summary

**Gemacht**

- formatAmount-Funktion in `client/src/formatters.js` geschrieben (Cent → €)
- `transactions` von fester Liste zu `useState` umgewandelt
- TransactionItem Props erweitert: `id`, `onDelete`
- Delete-Button in jeder Zeile mit `handleDelete` (nutzt `filter`) gebaut und getestet
- Formulare mit Validierung (leere Felder, negative Zahlen blockiert)
- TransactionList-Komponente ausgelagert → `App.jsx` sauberer
- Summary mit `reduce` hinzugefügt (Total aller Ausgaben oben anzeigen)
- Kategorien-Dropdown mit `<select>` und `<option>` gebaut
- Code-Cleanup: alte Imports, `count`-Button, Hero-Bilder, Next-Steps Section weg
- **React Router installiert und `BrowserRouter` + `Routes` in `App.jsx` eingebaut** (mit Navigation zu Home, Transactions, Categories, Stats, Settings)
- `pages/` Ordner angelegt mit `Home.jsx` und `Transactions.jsx`

**Verstanden (in eigenen Worten)**

- `useState` gibt ein Array `[Wert, SetterFunktion]` zurück; Destructuring packt es aus
- Beim Ändern: neue Liste/Objekt mit `...` Spread erstellen (nicht mutieren), dann `setTransactions` aufrufen
- React zeichnet automatisch neu, wenn ein State mit Setter verändert wird
- `filter` zum Löschen: neue Liste ohne den Eintrag, dann `setTransactions` aufrufen
- `reduce` zum Summieren: alle Beträge addieren und anzeigen
- `<select>` und `<option>` sind wie Input, aber mit Auswahlmöglichkeiten
- Props durch mehrere Komponenten weitergeben (App → TransactionList → TransactionItem)
- `id` bleibt gleich, deshalb gut für `filter` und `key`
- `Date.now()` gibt eine eindeutige Nummer → gute `id` für neue Einträge (keine Duplikate)
- `BrowserRouter` wickelt die ganze App ein; `Routes` definiert die Seiten; `Link` navigiert (ohne Seite zu neuladen)

**Noch unklar**

- Komponenten-Struktur mit Router: `pages/Home.jsx` hat noch den alten Code (Formulare + Transaktionsliste zusammen) statt nur Übersicht zu zeigen

**Offen**

- [ ] `pages/Home.jsx` überarbeiten: nur Summary + TransactionList (Übersicht)
- [ ] `pages/Transactions.jsx` ausfüllen: nur das Formular zum Hinzufügen
- [ ] State-Struktur entscheiden: bleibt `transactions` in `App.jsx` (gemeinsam) oder in einzelne Seiten verteilen?

**Commits:**

- 033e9a6: feat: add delete button and amount formatting
- 1bee610: add categories, summary total, and refactor TransactionList component

**Morgen:** Di 20.10: Router aufräumen – Seiten sauber trennen, State-Management klären

## Di 20.10.2026 – Phase 1: State hochheben, Props, Formular verschieben

**Gemacht**

- Grammatik Di: Perfekt/Präteritum und Past Simple vs. Present Perfect
- `transactions` mit `useState` von `Home` nach `App` verschoben (State hochgehoben)
- `transactions` und `setTransactions` per Props an `Home` und `Transactions` weitergegeben
- Formular (`note`, `amount`, `category`, `handleAddTransaction`, Inputs) von `Home` nach `Transactions` verschoben
- `Home` aufgeräumt: nur noch Summe und Liste, ESLint ohne Fehler
- Fehler gelesen: `transactions is not defined` (leere Seite), Komma zwischen Props im JSX, `500` von Vite als Rest eines ungültigen Moments, `useState` außerhalb der Komponente
- Mit `console.log` in `Transactions.jsx` geprüft, ob die Prop ankommt (Browser-Konsole, Seite `/transactions` öffnen)

**Verstanden (in eigenen Worten)**

- `useState` speichert den State einer Komponente
- Die Liste muss gespeichert sein, damit man sie erweitern oder löschen kann
- `transactions` liegt zentral in `App`, weil mehrere Seiten sie benutzen
- Bei einer normalen Variable `note` bleibt der getippte Text nicht im Feld stehen (Ja/Nein richtig)
- Die Transactions-Seite braucht `note` und `transactions`: `note`, um den Eintrag zu bauen, `transactions`, um ihn an die Liste anzuhängen
- Ich habe die Prop-Zeile `<Home transactions={transactions} setTransactions={setTransactions} />` am Ende selbst richtig geschrieben (nach mehreren Hinweisen)

**Noch unklar**

- Warum eine normale Variable nicht reicht: React merkt die Änderung nicht und der Wert geht beim Neuzeichnen verloren (nur mit Hilfe)
- Warum `note` in `Transactions` bleibt und nicht in `App`: nur das Formular braucht es, `Home` nicht
- Komma oder Leerzeichen: Komma in Parameterlisten, Arrays, Objekten; Leerzeichen zwischen Props im Tag (zweimal falsch, `<Home a={a}, b={b} />`)
- `function Transactions({ transactions })` (mit `{ }`) gegen `function Transactions(transactions)`: ohne `{ }` ist `transactions` das ganze Props-Objekt
- Gedächtnis: der Name im `{ }` muss genau zur Prop passen (`transaction` gegen `transactions`), sonst `undefined`
- Grammatik: `I have already finished` (nicht `I already finished`), `I have written … since Monday` (nicht `wrote`); `She has lived in Berlin for five years` war richtig, aber ohne Begründung

**Wiederholen**

- [ ] Destructuring in eigenen Worten (noch offen seit 14.10.)
- [ ] `export default` gegen `export function`: Import mit und ohne `{ }`
- [ ] Props: Komma oder Leerzeichen? Eigene Beispiele aufschreiben
- [ ] Warum `useState` und nicht `let`: in einem Satz mit "Neuzeichnen" erklären

**Offen**

- [ ] Lern-Log-Eintrag von Fr 16.10. fehlt, Rückblick vom So 11.10. fehlt
- [ ] `git push` (Commit liegt nur lokal), Tippfehler `"` am Ende der Commit-Nachricht
- [ ] `.github/prompts/lernlog.prompt.md` hat nur den Kopf, Anweisungen schreiben (KI in VS Code, 30 Min)

**Commit:** 6fc0139 (refactor: lift transactions state to App, move form to Transactions page)
**Morgen:** Mi 21.10: Wiederholen (Props: Komma/Leerzeichen, `useState` gegen `let`), dann Formular festigen (Meilenstein 01.11.: neue Transaktion hinzufügen ist erreicht, jetzt Validierung ohne `alert`?)

## Mi 21.10.2026 (nachgetragen Do 22.10.) – Phase 1: Seiten-Gerüste, Fehleranzeige, Lern-Log-Prompt

Am Mittwoch habe ich die Seiten `Categories`, `Stats` und `Settings` als Gerüst angelegt und in `App.jsx` als Routen eingebunden. Die Formular-Fehler zeige ich jetzt über einen `error`-State statt mit `alert` an. Außerdem habe ich die Anweisungen in `.github/prompts/lernlog.prompt.md` geschrieben.

**Verstanden (in eigenen Worten):** nicht erfasst, am Mittwoch gab es keine Fragerunde.

**Commit:** 0688dda (erst am Do 22.10. committet und gepusht, zusammen mit dem Eintrag unten)
**Morgen:** Do 22.10: Wiederholen (Props, `useState` gegen `let`), `onDelete` aufräumen

## Do 22.10.2026 – Phase 1: onDelete mit id, filter, Props

Heute habe ich `handleDelete(id)` in `Home.jsx` geschrieben, damit `TransactionItem` nur noch `onDelete(id)` aufruft und die Liste nicht mehr kennen muss. Grammatik Do: Konjunktiv II und Conditional Type 2, alle 3 Aufgaben richtig.

**Verstanden (in eigenen Worten):** `filter` braucht als Argument eine Regel (Funktion), damit es für jedes Element entscheidet, ob es in die neue Liste kommt oder nicht.

**Noch unklar:**

- `t.id !== undefined` bleibt immer wahr, deshalb löscht `onDelete()` ohne `id` nichts (nur mit Hilfe verstanden)
- Props im JSX nur mit Leerzeichen, nie mit Komma; Komma steht in Arrays, Objekten und Parameterlisten (nicht wegen `useState`)
- Senden (`<Home a={a} />`) und Empfangen (`function Home({ a })`) von Props auseinanderhalten

**Offen**

- [ ] Die 3 Fragen aus `/lernlog` beantworten: Vorteil von `onDelete(id)`, `error` als State mit "Neuzeichnen", `handleDelete` gegen `handleDelete()`
- [ ] Warum `useState` und nicht `let`: in einem Satz mit "Neuzeichnen" erklären
- [ ] Lern-Log-Eintrag von Fr 16.10. und Rückblick So 11.10. fehlen
- [ ] Destructuring in eigenen Worten (offen seit 14.10.)

**Commit:** 0688dda (refactor: onDelete takes id, add page stubs, show form errors in UI)

## Fr 23.10.2026 – Phase 1: Korrekturen aus dem Frontend-Review

Copilot hat beim Umbenennen von Kategorien auch die Zuordnung vorhandener Transaktionen aktualisiert, damit Budget- und Statistikwerte erhalten bleiben. Das Formular verhindert jetzt das Speichern ohne passende Kategorie; die Berechnungen verarbeiten auch Namen wie `constructor` und `__proto__` korrekt. Die Euro-Eingaberegel ist noch offen und wurde in diesem Schritt nicht verändert.

**Geprüft:** ESLint und Produktionsbuild erfolgreich (Hinweis auf großes Bundle); Rechenproben für normale und besondere Kategorien erfolgreich. Im Browser blieb beim Umbenennen die Budgetanzeige bei 50,00 € von 300,00 €, und die Transaktion erhielt den neuen Namen; Speichern ohne Einnahmekategorie zeigte eine Fehlermeldung und fügte keine Transaktion hinzu.

**Weiter umgesetzt: Transaktionsdatum**

- Copilot hat ein Pflichtfeld für das Transaktionsdatum ergänzt. Es wird als
  `YYYY-MM-DD` ohne Uhrzeit im React-State gespeichert und als `DD.MM.YYYY` in
  der Liste angezeigt; auch die Fake-Daten haben jetzt ein Datum.
- Das Datumsfeld startet leer und wird nach erfolgreichem Hinzufügen geleert.
  Fehlende oder ungültige Kalenderdaten zeigen eine Fehlermeldung.
- Im Browser geprüft: fehlendes Datum, ungültige Daten einschließlich 29.02.2026,
  gültiger Schalttag 29.02.2024, Anzeige, Zurücksetzen des Formulars sowie
  Hinzufügen/Löschen mit unveränderten Einnahmen- und Ausgabenberechnungen.
  ESLint und Produktionsbuild erfolgreich; die Bundle-Größenwarnung bleibt.
- Zu diesem Zeitpunkt noch offen: Zeitraumfilter und monatliche Budgetberechnung. Das Datum allein
  filtert noch keine Daten. Speicherung bleibt vorerst nur im React-State.

**Weiter umgesetzt: Zeitraumfilter und Transaktionsliste**

- Nutzerin hat den Datumsschritt selbst getestet und als funktionierend bestätigt.
- Variante 1 gewählt: anfangs alle Transaktionen, ohne Zeitbegrenzung. Ein gültiger
  Von-bis-Zeitraum gilt inklusive beider Tage für Übersicht, Statistik und Liste;
  der Zeitraum bleibt bei Seitenwechseln erhalten und lässt sich zurücksetzen.
- Copilot hat die vollständige Liste auf der Transaktionsseite und einen separaten
  Kategoriefilter ergänzt. Ungültige oder unvollständige Zeiträume zeigen einen
  Fehler statt irreführender Ergebnisse; leere Treffer ergeben leere Listen,
  Summen von 0 und einen Hinweis statt Diagrammen.
- Löschen und Hinzufügen ändern weiterhin die vollständigen Daten, nicht nur den
  sichtbaren Ausschnitt. Die gemeinsame Datumsprüfung wird auch im Formular genutzt.
- Vitest und React Testing Library eingerichtet: 26 Tests erfolgreich, darunter
  mehr als fünf Einträge, inklusive Datumsgrenzen, Schaltjahre, Kategorien,
  Seitenwechsel, leere Treffer und Erhalt ausgeblendeter Daten. ESLint und Build
  erfolgreich (bestehende Bundle-Größenwarnung). Der Browser-Test war durch
  Interaktionen und Tool-Beschränkungen nicht zuverlässig abschließbar; die
  Oberflächenprüfungen liefen automatisiert mit jsdom, nicht als vollständige Browser-Tests.
- Noch offen: Monatsbudgets, Bearbeiten bestehender Transaktionen und die weiteren
  Frontend-Punkte aus der Spezifikation. Daten und Filter sind weiterhin nur im React-State.

**Vereinfacht nach Rückmeldung der Nutzerin**

- Die Transaktionsseite dient jetzt ausschließlich der Eingabe. Liste,
  Zeitraumfilter und Kategoriefilter wurden dort wieder entfernt.
- Nach dem Speichern erscheint eine Bestätigung für Ausgabe oder Einnahme und
  der Link „In Übersicht ansehen“. Er entfernt die Zeitbegrenzung beim Öffnen der
  Übersicht, damit der neue Eintrag sichtbar ist; darauf weist die Oberfläche hin.
- Die Liste steht nur noch in der Übersicht und heißt „Alle Transaktionen“.
  Zeitraumfilter bleiben auf Übersicht und Statistik; normales Navigieren
  verändert den Zeitraum nicht. Spezifikation und Tests wurden angepasst.

**Verstanden (in eigenen Worten):** Für die neuen Implementierungen noch nicht geprüft.

**Weitere Vereinfachung: drei Hauptseiten**

- Nutzerin hat Übersicht, Transaktionen (Eingabe) und Kategorien als Navigation
  bestätigt. Das Ausgaben-Kategoriediagramm wurde in die Übersicht verschoben;
  die separate Statistikseite und das doppelte Summen-Balkendiagramm entfallen.
- Ein Zeitraum steuert dort Summen, Diagramm und Liste. Der Rücksetzbutton heißt
  jetzt „Zeitraum zurücksetzen“, die Listenüberschrift „Transaktionen“.
- Alte Links auf `/stats` leiten zur Übersicht weiter. Der Lernplan nennt jetzt
  drei Hauptseiten statt fünf; Login/Registrierung bleibt für Januar geplant.
- Geprüft: 29 automatisierte Tests erfolgreich, darunter Navigation,
  Weiterleitung und gemeinsames Filtern von Liste und Kategoriediagramm.
  ESLint und Build erfolgreich; die neue Übersicht ist auch im Browser sichtbar.

**UI-Review und Monatsbudgets**

- Übersicht neu angeordnet: Summen direkt unter der Überschrift, danach der
  Zeitraumfilter; Diagramm und Liste ab 900 px nebeneinander mit 24 px Abstand
  zum Filter. Mobile Transaktionen zeigen Details über Betrag und Löschaktion.
- Projektlokalen UI-Reviewer angelegt. Nach dem Review wurden permanente
  Kategorie-Beträge, eindeutig benannte Löschbuttons und semantische Listen
  ergänzt. Die Nutzerin hat die Anpassungen positiv bestätigt.
- Monatsbudgets werden jetzt pro Ausgabenkategorie und Kalendermonat berechnet,
  ohne Übertrag. Die Kategorienseite hat einen Monatswähler, initial für den
  aktuellen lokalen Monat, mit Verbrauch und Restbudget beziehungsweise
  Überschreitung. Die Monatsauswahl ist unabhängig vom Übersichtsfilter.
- Nutzerin hat ausdrücklich gewählt: Budgetwarnungen prüfen ganze vom Zeitraum
  berührte Kalendermonate; Liste, Summen und Diagramm bleiben tagesgenau.
  Die Übersicht erklärt diesen Unterschied neben den Budgetwarnungen.
- Geprüft: 36 automatisierte Tests erfolgreich. Darunter Oktober 350 € gegen
  300 € und November 200 € gegen 300 €, Teilmonate, Jahresgrenzen, Schalttag,
  Nullbudgets, Monate ohne Ausgaben, ungültige Auswahl und Löschen.
  ESLint und Build erfolgreich; bestehende Bundle-Größenwarnung bleibt.
- Im separaten Browser-Testtab bestätigt: getrennte Oktober-/November-Anzeige,
  Oktoberwarnung bei leerer Tagesauswahl sowie mobile Budgetdarstellung.
  Keine Änderung an den Daten der bereits geteilten Browserseite.
- Noch offen: Budgets ändern, Transaktionen bearbeiten und weitere
  Eingabevalidierung. Daten bleiben nur im React-State, nicht dauerhaft gespeichert.
- Verständnis der neuen Berechnung wurde noch nicht in eigenen Worten geprüft.

**Anschließende Entscheidung: Budgets vorerst entfernen**

- Nutzerin möchte die App aus Nutzersicht einfacher halten und aktuell keine
  Budgetfunktion. Diese Entscheidung ersetzt die oben dokumentierte Budgetplanung.
- Budgetfelder, Monatswähler, Verbrauchsanzeigen, Warnungen und zugehörige
  Berechnungen wurden entfernt, einschließlich der ursprünglichen Budgetanzeige.
  Kategorien dienen nur noch dem Gruppieren von Einnahmen und Ausgaben.
- Transaktionsdatum, Zeitraumfilter, Summen, Diagramm, Kategorieverwaltung und
  die UI-/Barrierefreiheitsverbesserungen bleiben erhalten.
- Spezifikation und README aktualisiert: Budgets sind nur noch eine mögliche
  spätere Erweiterung, kein nächster Umsetzungsschritt.
- Geprüft: 31 Tests, ESLint und Build erfolgreich; die bekannte
  Bundle-Größenwarnung bleibt. Kategorienseite und Übersicht im Browser ohne
  Budgetoberfläche bestätigt. Kategorie-Umbenennen erhält die Zuordnung der
  vorhandenen Transaktionen.

**Weiter umgesetzt: Transaktionen bearbeiten**

- Nutzerin hat „Bearbeiten“ neben „Löschen“ beauftragt. In der Übersicht öffnet
  sich ein vorausgefülltes Formular, ohne zusätzliche Hauptseite.
- Anlegen und Bearbeiten verwenden dieselbe Formular-Komponente. Notiz, Datum,
  Betrag, Typ und Kategorie sind änderbar; Speichern behält die ID bei und
  aktualisiert die vollständigen Daten. Abbrechen verwirft nur den Entwurf.
- Der Zeitraum bleibt erhalten. Wenn das geänderte Datum außerhalb liegt,
  erklärt die Speicherbestätigung, warum der Eintrag nicht mehr sichtbar ist.
- Ungültige Eingaben ändern keine gespeicherten Werte. Gelöschte Kategorien
  erfordern eine neue Zuordnung; inzwischen gelöschte Transaktionen werden
  nicht versehentlich neu angelegt. Beträge werden beim Speichern als positive,
  sichere Integer geprüft, reine Leerzeichen als Notiz abgelehnt.
- Fokus geht beim Öffnen ins Formular und beim Schließen zurück zum Auslöser
  oder zur Überschrift, falls der Eintrag aus der Auswahl verschwunden ist.
- Geprüft: 38 automatisierte Tests, ESLint und Produktionsbuild erfolgreich.
  Browser-Gesamtablauf nicht zuverlässig abschließbar, da der Testtab während
  der Prüfung verändert beziehungsweise geschlossen wurde. Die bekannte
  Bundle-Größenwarnung bleibt.
- Noch offen: Textlängenlimits und spätere dauerhafte
  Speicherung. Verständnis der Implementierung noch nicht geprüft.

**Entscheidung: Euro-Umrechner flexibel lassen**

- Nutzerin möchte die bestehende flexible Eingabe behalten: ganze Euro-Beträge,
  Punkt oder Komma und ein oder zwei Nachkommastellen.
- In eigenen Worten erklärt: `25.5` ergibt korrekt `2550` Cent; „Übernehmen“
  überträgt diesen Betrag. Diese Flexibilität ist aus Nutzersicht gewünscht.
- Spezifikation aktualisiert; keine Änderung am Anwendungscode.

**Weiter umgesetzt: Textlängenlimits**

- Nutzerin hat maximal 200 Zeichen für Notizen und 50 Zeichen für Kategorienamen
  bestätigt. Grenzen gelten beim Anlegen, Bearbeiten und Umbenennen.
- Zeichenzähler ergänzt. Zu lange Eingaben bleiben erhalten, zeigen beim
  Speichern eine Fehlermeldung und verändern keine gespeicherten Daten.
  Es wird kein Text automatisch abgeschnitten.
- Fehler beim Kategorie-Umbenennen erscheinen direkt beim Bearbeitungsfeld.
  Die flexible Euro-Eingabe bleibt unverändert.
- Geprüft: 28 React-Integrationstests erfolgreich, inklusive neuer Grenzfälle
  199/200/201 und 49/50/51 sowie Korrektur und unveränderter Zuordnung bei
  abgelehntem Umbenennen. ESLint und Build erfolgreich; die bekannte
  Bundle-Größenwarnung bleibt. Kein zusätzlicher Browser-Test in diesem Schritt.
- Spezifikation und README aktualisiert. Verständnis der Implementierung
  noch nicht in eigenen Worten geprüft.

**Anpassung der Textgrenzen**

- Auf Wunsch der Nutzerin gelten jetzt maximal 100 Zeichen für Notizen und
  40 Zeichen für Kategorienamen. Dies ersetzt die zuvor gewählten 200/50.
- Zähler und Fehlermeldungen verwenden die neuen Grenzen. Spezifikation,
  README und Grenzwerttests (99/100/101 sowie 39/40/41) angepasst.
- Geprüft: 28 React-Integrationstests, ESLint und Build erfolgreich; bekannte
  Bundle-Größenwarnung unverändert.

- Nutzerin bestätigt nach Aufforderung zum Ausprobieren von Bearbeiten,
  Speichern und Abbrechen: „es funktioniert“. Das ist eine Funktionsbestätigung,
  keine Bestätigung des Codeverständnisses.

**Projektorganisation und spezialisierte Agenten**

- Auf Wunsch der Nutzerin liegen Produktspezifikation und Lernlog jetzt unter
  `docs/fintrack-spezifikation.md` und `docs/lernen/LERNLOG.md`. Übungen bleiben
  unter `lernen/`. Verweise in README, Anweisungen, Prompts und UI-Agent angepasst.
- Projektlokale Agenten für Frontend, Backend, Architektur, Product Owner und QA
  ergänzen den UI-Reviewer. Frontend und Backend setzen beauftragte Änderungen um;
  Architektur, Product Owner und QA prüfen beziehungsweise beraten.
- Keine externen Skills installiert. Weitere Skills erst bei konkretem Bedarf
  auswählen und vor einer Übernahme Inhalt, Berechtigungen und Lizenz prüfen.
- Die Agentenkonfigurationen sind noch keine ausgeführten Fachreviews und
  belegen kein Verständnis der jeweiligen Rollen.

**Aufräumen nach Architektur-Review**

- Der Architektur-Agent hat die Struktur als passend für die aktuelle Phase
  bewertet und vier kleine Aufräumpunkte genannt; alle wurden umgesetzt.
- `server/src/test.js` war eine Übung, kein automatisierter Test. Sie liegt jetzt
  als `lernen/array-methoden.mjs` bei den Übungen; der Importpfad wurde angepasst.
- Vite-Vorlagentext mit TypeScript-Empfehlung aus `client/README.md` entfernt.
  Das Haupt-README nennt jetzt `/api/summary` und `berechnungen.js`.
- Die KI-Anweisungen verweisen beim gültigen Plan ausdrücklich auf
  `docs/fintrack-spezifikation.md` (CLAUDE.md und copilot-instructions.md synchron).
- Geprüft: verschobene Übung läuft; `/api/summary`-Beispiel aus den echten
  Beispieldaten berechnet. Offen für später: Datenwerte von Client und Server
  (`income`/`INCOME`, `Salary`/`Gehalt`) vor der Verbindung angleichen.

**Abgleich Umsetzung ↔ Spezifikation (Product Owner)**

- Der Product-Owner-Agent hat Code und Tests mit der Spezifikation verglichen:
  Phase 1 ist fast vollständig umgesetzt. Keine Browser- oder Nutzerabnahme.
- Alle offenen Punkte stehen jetzt als Checkliste in der Spezifikation unter
  „Offene Punkte aus dem Abgleich Code ↔ Spezifikation“: U1–U3 (Code),
  E1–E4 (Entscheidungen der Nutzerin), K1–K4 (Textkorrekturen), V1 (Phase 2).
- Nichts davon ist bisher entschieden oder umgesetzt.

**Frontend Phase 1 abgeschlossen**

- Nutzerin hat entschieden: Notiz bleibt Pflicht (E1), Kategorien behalten einen
  Typ Ausgabe/Einnahme (E2), verwendete Kategorien lassen sich nicht löschen (E3),
  die dritte Summenkarte heißt „Differenz“ statt „Saldo“ (E4). Den „Kopieren“-Button
  im Euro-Umrechner hat sie entfernen lassen; nur „Übernehmen“ bleibt (U2).
- Umgesetzt: Hinweis „Diese Kategorie wird noch von 1 Transaktion verwendet.“ statt
  Löschen; Beschriftung „Differenz“; Umrechner rechnet mit BigInt und lehnt Beträge
  ab, die keine sichere ganze Cent-Zahl ergeben (U3); Test für HTML-artige Notizen (U1).
- Spezifikation: Abgleichsliste abgehakt, Datenmodell (`note` Pflicht, `Category.type`),
  13 API-Endpunkte, Statuscodes 409/413, `/stats`-Weiterleitung und Zeitpunkt der
  KI-Funktion korrigiert. Offen bleibt nur V1 (Datenwerte angleichen, Phase 2).
- Geprüft: 53 automatisierte Tests, ESLint und Build erfolgreich; bekannte
  Bundle-Größenwarnung bleibt. Verständnis der neuen Umsetzung noch nicht geprüft.

**Commit:** `3338825` (Frontend Phase 1 abgeschlossen, Agenten, Doku unter `docs/`); noch nicht gepusht
