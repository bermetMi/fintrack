# FinTrack – Spezifikation, Neustart-Plan & Projektregeln
Stand: 2026-09-24 (Neustart, alles beginnt heute um 13:00 Uhr)
Ersetzt die Version vom 2026-09-18.

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

---

## Phase 0 – Neustart, reines JavaScript (24.09.–04.10.)
Kein Framework. Ich komme aus Java/Kotlin, deshalb Vergleiche mit Java.

| Tag | Thema | Fertig, wenn ... | Erledigt |
|---|---|---|---|
| Do 24.09 (ab 13:00) | Fehlerbehandlung: try/catch, throw, finally, Fehlermeldungen lesen | Funktion wirft bei negativem `amountCents` einen `Error`; ich erkläre try/catch/throw und die Unterschiede zu Java | [ ] |
| Fr 25.09 | Grundlagen neu: const/let, ===, Bedingungen, Funktionen, Arrow Functions | Ausgaben über 50 € werden als "groß" markiert | [ ] |
| Mo 28.09 | Array-Methoden Teil 1: map, filter, find | Ich filtere nach Kategorie und suche eine Ausgabe nach id | [ ] |
| Di 29.09 | Array-Methoden Teil 2: reduce, sort; Destructuring & Spread | Summe aller Ausgaben und Sortierung nach Betrag, ohne Vorlage | [ ] |
| Mi 30.09 | Verschachtelte Objekte, Object.keys, ?. | Summe pro Kategorie als Objekt | [ ] |
| Do 01.10 | Module: export/import | `daten.js` (nur Daten) und `berechnungen.js` (nur Funktionen) getrennt, `index.js` importiert beides; ich erkläre, warum man trennt | [ ] |
| Fr 02.10 | Asynchron: Promise, async/await, fetch | Ich rufe eine Test-API ab und fange Fehler mit try/catch | [ ] |
| Sa 03.10 (leicht) | npm & Projektstruktur | `npm init` läuft, Prettier formatiert automatisch, Ordner client/ server/ lernen/ | [ ] |
| So 04.10 | Wochenabschluss | Lern-Log fertig, Repo auf GitHub gepusht, Mini-Test (10 Fragen in eigenen Worten), Phase 0 abgehakt | [ ] |

Offene Verständnisfragen aus dem Lern-Log (vom 24.09.):
- [ ] Warum schreibt man `new Error("...")` statt nur einen Text zu werfen?
- [ ] Warum trennt man Daten und Berechnungen in eigene Module?
- [ ] Salary-Transaktion hatte `category: "Essen"`: Copy-Paste-Fehler? Sollen Einnahmen (`income`) überhaupt eine Kategorie haben?

---

## Meilensteine
| Datum | Zertifizierung | FinTrack |
|---|---|---|
| 04.10. | Modul 2 fertig | Phase 0 fertig (JS-Grundlagen) |
| 25.10. | Module 3 + 4 fertig | React: erste Komponenten und Formulare |
| 15.11. | Modul 5 fertig | Phase 1 fertig (Frontend mit Fake-Daten) |
| 06.12. | Übungsfragen | Phase 2 fertig (API mit CRUD) |
| Dezember | Prüfung ablegen | Phase 3 (Frontend + Backend verbunden) |
| 14.–27.12. | Puffer (Prüfung hat Vorrang) | Phase 4: Puffer |
| Januar | Bewerbungen vorbereiten | Phase 5: Erweiterungen (siehe unten) |
| ab Februar 2027 | | Als Fullstack-Entwicklerin mit KI bewerben und arbeiten |

Zertifizierungs-Stand (bitte eintragen): Kursname: ______ · aktuelles Modul: ______

---

## Phase 5 – Erweiterungen (Januar 2027)
- **Unerwartete Ausgaben:** Beim Eintragen ein Häkchen "unerwartet". Neues Feld `isUnexpected` (Boolean, Standard false). Dashboard zeigt die Summe der unerwarteten Ausgaben pro Monat. (Spätere Idee: automatisch aus Budgetüberschreitung berechnen.)
- **KI-Funktion:** Aus der Notiz (z. B. "Rewe Einkauf") schlägt die KI eine Kategorie vor.
- **Portfolio:** README, Screenshots, Online-Stellung.

Phase 6 (Kandidaten, bewusst nicht im MVP): Passwort zurücksetzen, mehrere Währungen, Daueraufträge, Export, Dark Mode, mobile App.

---

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

Regeln: Beträge immer in Cent als Int (kein Runden). Jede Abfrage liefert nur eigene Daten; die Nutzer-ID kommt aus Cookie/Token, nie aus der Anfrage.
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
| 24.09.–27.09. | | | | |
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
