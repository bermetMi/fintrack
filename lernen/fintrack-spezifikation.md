# FinTrack – Spezifikation, Neustart-Plan & Projektregeln
Stand: 2026-09-25 (Gesamtplan realistisch überarbeitet)
Ersetzt die Version vom 2026-09-25 (nach Tag 2).

## Vorarbeit außerhalb des Plans (Notiz, 25.09.)
Ein Server-Grundgerüst existiert schon und läuft bereits (`server/src/index.js` mit Express, 3 Routen, `server/src/daten.js` mit Beispiel-Transaktionen, `npm init` + Express installiert, `daten.js` exportiert schon Daten). Das ist Stoff aus Phase 2, ist aber schon vor dem Neustart entstanden. Wird ab Do 01.10 (Module) und in Phase 2 bewusst aufgegriffen und verstanden.

## Wichtige Entscheidung: Login erst im Januar
Bis dahin arbeitet das Backend mit einer festen `userId = 1` statt echtem Login. So werden CRUD und Login nicht gleichzeitig gelernt. Wenn der Login kommt (04.–15.01.), wird nur diese eine Stelle durch die echte ID aus dem Token ersetzt. Bis Januar speichert die App also faktisch für einen einzigen Nutzer.

## Ziel
Als Fullstack-Entwicklerin mit KI ab Februar 2027 arbeiten. FinTrack ist das Lernprojekt dafür: eine App, in der ich meine Ausgaben eingebe, ein Dashboard mit Berechnungen sehe und erkenne, wie viel unerwartet ausgegeben wurde. Parallel: Claude-Developer-Zertifikat.

## Die 3 Regeln gegen Chaos
1. Diese Datei und das Lern-Log sind die einzige Wahrheit. Jede Sitzung startet mit: "Lies den Stand."
2. Ein Tag = ein Thema = ein Satz "Fertig, wenn ...". Abgehakt wird nur, was ich in eigenen Worten erklären kann.
3. Jeden Sonntag 30 Min Rückblick: Tage geschafft, Aufgaben geschafft, Erklär-Test (5 Fragen).

---

## Tagesrhythmus (Mo–Fr)
| Zeit | Was |
|---|---|
| 10:00–12:00 | Zertifizierung: Kurs |
| 12:00–13:00 | Pause |
| 13:00–15:00 | FinTrack: Neues lernen (Konzept, Beispiel, Verständnisfragen) |
| 15:00–17:00 | FinTrack: Üben (nur Hinweise, keine Lösungen) |
| 17:00–19:00 | Zertifizierung: Praxis |
| Abends | 30 Min Lern-Log und Commit |

**Heute (Do 24.09) Sonderfall:** Start erst um 13:00. Der Vormittags-Block Zertifizierung Kurs entfällt heute.
Wochenende: frei, nur So-Abend 30 Min Rückblick (Phase-0-Abschluss am 03./04.10. siehe unten).

Plan B (falls der Job wieder anzieht, ca. 12 Std./Woche): Zertifizierung 1 Std. Arbeitszeit; FinTrack 1 Std. Arbeitszeit + 1,5 Std. an 3 Abenden; Sa + So je 2 Std. abends.

Zertifizierungs-Stand (bitte eintragen): Kursname: ______ · aktuelles Modul: ______

---

## Phase 0 – Neustart, reines JavaScript (24.09.–04.10.)
Kein Framework. Ich komme aus Java/Kotlin, deshalb Vergleiche mit Java.

| Tag | Thema | Fertig, wenn ... | Erledigt |
|---|---|---|---|
| Do 24.09 (ab 13:00) | Fehlerbehandlung: try/catch, throw, finally, Fehlermeldungen lesen | Funktion wirft bei negativem `amountCents` einen `Error`; ich erkläre try/catch/throw und die Unterschiede zu Java | [x] |
| Fr 25.09 | Grundlagen neu: const/let, ===, Bedingungen, Funktionen, Arrow Functions | Ausgaben über 50 € werden als "groß" markiert | [x] (Grenze selbst auf >100 € festgelegt) |
| Sa 26.09 | Server anschauen: bestehenden Code (`index.js`, `daten.js`) erklären; Prettier einrichten (npm ist schon erledigt) | Ich kann grob sagen, was im Server passiert; Prettier formatiert automatisch | [ ] |
| So 27.09 | frei, nur Lern-Log-Rückblick | Wochenrückblick geschrieben | [ ] |
| Mo 28.09 | map, filter, find — geübt an `transactions`-Daten (amountCents, englische Namen) statt an `ausgaben` | Filtern nach Kategorie, Suche nach id | [ ] |
| Di 29.09 | reduce, sort, Destructuring, Spread | Summe und Sortierung nach Betrag, ohne Vorlage | [ ] |
| Mi 30.09 | Verschachtelte Objekte, Object.keys, ?. | Summe pro Kategorie als Objekt | [ ] |
| Do 01.10 | Module: export/import | `server/src/berechnungen.js` angelegt, `index.js` importiert es; ich erkläre, warum man trennt | [ ] |
| Fr 02.10 | Asynchron: Promise, async/await, fetch | Ich rufe meinen eigenen Server (`/api/transactions`) per `fetch` ab und fange Fehler mit try/catch | [ ] |
| Sa 03.10 | Prettier fertig einrichten + Puffer | Prettier läuft; offene Punkte der Woche nachgeholt | [ ] |
| So 04.10 | Wochenabschluss | Lern-Log fertig, Repo auf GitHub gepusht, Mini-Test (10 Fragen in eigenen Worten), Phase 0 abgehakt | [ ] |

Offene Verständnisfragen aus dem Lern-Log (vom 24.09.):
- [ ] Warum schreibt man `new Error("...")` statt nur einen Text zu werfen?
- [ ] Warum trennt man Daten und Berechnungen in eigene Module?
- [ ] Salary-Transaktion hatte `category: "Essen"`: Copy-Paste-Fehler? Sollen Einnahmen (`income`) überhaupt eine Kategorie haben?

---

## Phase 1 – Frontend mit Fake-Daten (05.10.–15.11.)
| Woche | Thema | Fertig, wenn ... |
|---|---|---|
| 05.–09.10 | Vite, JSX, Komponenten, Props | Transaktionsliste zeigt Fake-Daten |
| 12.–16.10 | useState, Events, Listen mit key | Löschen-Button entfernt einen Eintrag |
| 19.–23.10 | Formulare (kontrollierte Inputs) | Neue Transaktion hinzufügen ✅ Meilenstein 25.10. |
| 26.–30.10 | React Router | Alle 5 Seiten als Gerüst erreichbar |
| 02.–06.11 | Dashboard + Recharts + Vitest | Summen und Diagramm; Tests für berechnungen.js |
| 09.–13.11 | Kategorien-Seite, Tailwind, Puffer | Phase 1 fertig |

## Phase 2 – Backend ohne Login (16.11.–06.12.)
Login kommt bewusst noch nicht vor, siehe Entscheidung oben (`userId = 1`).

| Woche | Thema | Fertig, wenn ... |
|---|---|---|
| 16.–20.11 | CRUD im Speicher, Statuscodes, Zod | POST/PUT/DELETE für Transaktionen |
| 23.–27.11 | PostgreSQL (OrbStack) + Prisma | Daten liegen in der Datenbank |
| 30.11.–04.12 | Filter, /api/summary, Supertest | 3 Routen getestet, Phase 2 fertig |

## Phase 3–5
| Zeitraum | FinTrack | Zertifizierung |
|---|---|---|
| 07.–13.12 | Frontend und Backend verbinden (TanStack Query, CORS/Proxy) | Übungsfragen |
| 14.–27.12 | Puffer | Prüfung hat Vorrang |
| Dezember | — | **Prüfung ablegen** |
| 04.–15.01 | Login (register/login, bcrypt, Cookie, echte userId statt 1) | — |
| 18.–22.01 | isUnexpected (Häkchen) + Deployment | Bewerbungen vorbereiten |
| 25.–29.01 | README, Screenshots, Portfolio | Bewerbungen |
| ab Feb 2027 | KI-Kategorie-Vorschlag als Bonus, wenn Zeit bleibt | Als Fullstack-Entwicklerin mit KI bewerben und arbeiten |

---

## Zu klärende Widersprüche (gefunden 25.09.)
- [ ] **Geld-Regel uneinheitlich:** `CLAUDE.md`/`copilot-instructions.md` sagen "auf 2 Nachkommastellen runden", diese Spezifikation sagt "Cent als Int, kein Runden". **Richtig ist: Cent als Int, kein Runden.** In `CLAUDE.md` und `copilot-instructions.md` korrigieren.
- [ ] **KI-Regeln fehlen in `CLAUDE.md`/`copilot-instructions.md`:** "Nur Hinweise, keine Lösungen" und "keine ganzen Dateien schreiben" stehen bisher nur hier. Dort ergänzen, sonst befolgen Copilot/Claude im Code diese Regeln nicht.
- [ ] Salary mit `category: "Essen"`: noch ungeklärt (siehe offene Fragen oben).

---

## Erweiterungen im Detail (Januar 2027, siehe Phase 3–5 oben)
- **Unerwartete Ausgaben:** Beim Eintragen ein Häkchen "unerwartet". Neues Feld `isUnexpected` (Boolean, Standard false). Dashboard zeigt die Summe der unerwarteten Ausgaben pro Monat. (Spätere Idee: automatisch aus Budgetüberschreitung berechnen.)
- **KI-Funktion:** Aus der Notiz (z. B. "Rewe Einkauf") schlägt die KI eine Kategorie vor.
- **Portfolio:** README, Screenshots, Online-Stellung.

Phase 6 (Kandidaten, bewusst nicht im MVP): Passwort zurücksetzen, mehrere Währungen, Daueraufträge, Export, Dark Mode, mobile App.

## MVP-Screens (5 Seiten)
Login/Registrierung → Dashboard → Transaktionen → Kategorien; Formular (neu/bearbeiten) hängt an Transaktionen.
- Dashboard (`/`): Einnahmen/Ausgaben/Differenz pro Monat, Diagramm nach Kategorie, letzte 5 Transaktionen, Budget-Warnungen
- Transaktionen (`/transaktionen`): Liste, Filter nach Monat/Kategorie, bearbeiten, löschen
- Formular (`/transaktionen/neu`, `/transaktionen/:id`): Betrag, Datum, Kategorie, Notiz, Typ
- Kategorien (`/kategorien`): anlegen, umbenennen, Monatsbudget setzen

## API-Endpunkte (12, alle unter /api, JSON)
- POST /api/auth/register, /api/auth/login (kein Login nötig)
- POST /api/auth/logout, GET /api/auth/me (Login nötig)
- GET/POST /api/categories, PUT/DELETE /api/categories/:id
- GET /api/transactions (Filter: ?month=2026-09&categoryId=3), POST /api/transactions, PUT/DELETE /api/transactions/:id
- GET /api/summary?month=2026-09 (Summen je Kategorie fürs Dashboard)

Regeln: Beträge immer in Cent als Int (kein Runden). Jede Abfrage liefert nur eigene Daten; die Nutzer-ID kommt aus Cookie/Token, nie aus der Anfrage. **Bis Login fertig ist (siehe Entscheidung oben): feste `userId = 1` verwenden, keine echte Prüfung.**
Statuscodes: 200 ok, 201 created, 400 invalid, 401 unauthorized, 404 not found, 500 server error.

## Datenmodell (Prisma, ab Phase 2)
- User: id, email (unique), passwordHash (bcrypt, nie Klartext), createdAt, categories[], transactions[]
- Category: id, name, budgetCents (Int?, optional), userId, @@unique([userId, name])
- Transaction: id, amountCents (Int, immer positiv), date, note?, type (enum INCOME/EXPENSE, default EXPENSE), categoryId, userId, createdAt, @@index([userId, date])
- Erweiterung Phase 5: Transaction.isUnexpected (Boolean, default false)

Hinweis: Fake-Daten in Phase 0/1 nutzen `category` als Text. Das Prisma-Modell nutzt `categoryId` (Fremdschlüssel). Beim Wechsel in Phase 2 bewusst umstellen.

---

## Projektregeln für KI-Assistenten (CLAUDE.md + .github/copilot-instructions.md)
Kontext: Lernprojekt, Ziel ist Verständnis, nicht Tempo. Kommt aus Java/Kotlin, JS/React sind neu.
Wie geholfen wird:
- Sehr einfache Sprache, jedes kleine Detail erklären
- Erst Konzept erklären, dann Beispiel
- Immer Verständnisfragen stellen und prüfen, ob ich es verstanden habe
- Keine ganzen Dateien schreiben, außer ausdrücklich gewünscht
- Bei Übungen nur Hinweise, keine Lösungen (wichtigste Regel, ab Phase 3 lockerbar)
- Vergleiche mit Java wo passend
- Antworten auf Deutsch, Code/Fehlermeldungen auf Englisch
- Bei Fehlern: Fehlermeldung zeigen und lesen lernen, nicht einfach reparieren

Stack: Frontend React+Vite, React Router, TanStack Query, Tailwind, Recharts. Backend Node/Express/Zod. DB PostgreSQL+Prisma (lokal OrbStack). Tests Vitest, RTL, Supertest.

Konventionen: JS ohne TS (kommt später), const als Standard/nie var, immer ===/!==, Arrow Functions für Callbacks, Geldbeträge als amountCents, Code englisch benennen/Kommentare deutsch, Ordner client/ server/ lernen/.

Sicherheit: keine Secrets im Code (.env), Passwörter nur als bcrypt-Hash, jede Abfrage filtert nach Nutzer-ID aus dem Token.

---

## Fortschritts-Messung (jeden Sonntag ausfüllen)
| Woche | Tage geschafft (von 5) | Aufgaben geschafft | Erklär-Test (von 5) | Notiz |
|---|---|---|---|---|
| 24.09.–27.09. | 2 von 4 (Stand 25.09.) | try/catch/throw/finally; isBigExpense + filter | 4/6 (24.09.) | Server-Vorarbeit entdeckt, siehe Notiz oben |
| 28.09.–04.10. | | | | |

## Lern-Log Vorlage (jeden Abend, 30 Min)
```
## <Wochentag> <Datum> – Phase X, Thema: ...
- Gemacht:
- Verstanden (in eigenen Worten):
- Noch unklar:
- Commit:
- Morgen:
```
