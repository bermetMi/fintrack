# FinTrack

Ein Lernprojekt zum Tracken von Einnahmen und Ausgaben. Es entsteht Schritt für
Schritt mit einem Ziel: als Fullstack-Entwicklerin mit KI arbeiten zu können
(React, Express, später Datenbank, Login und Deployment).

Der verbindliche Plan steht in der [Spezifikation](docs/fintrack-spezifikation.md),
der Lernstand im [Lernlog](docs/lernen/LERNLOG.md).

## Aktueller Stand

| Phase | Inhalt | Stand |
| --- | --- | --- |
| 0 | JavaScript-Grundlagen | abgeschlossen |
| 1 | React-Frontend mit Fake-Daten | funktional abgeschlossen (23.10.2026); Erklären in eigenen Worten offen |
| 2 | Express-Backend mit Datenbank | ab 23.11.2026; bisher nur ein Grundgerüst |
| 3–5 | Verbinden, Login, Deployment, Portfolio | Dezember 2026 bis Januar 2027 |

Das Frontend bietet drei Seiten:

- **Übersicht:** Einnahmen, Ausgaben, Differenz, Zeitraum von–bis,
  Ausgaben-Diagramm, vollständige Transaktionsliste; Bearbeiten und Löschen
- **Transaktionen:** neue Einnahmen und Ausgaben erfassen, mit Euro-Umrechner
- **Kategorien:** Kategorien für Einnahmen und Ausgaben anlegen, umbenennen, löschen

Daten liegen bis Phase 2 nur im React-State und gehen beim Neuladen verloren.

## Struktur

```
fintrack/
├── .github/
│   ├── copilot-instructions.md ← KI-Regeln, die immer gelten
│   ├── agents/                 ← KI-Rollen (wer arbeitet, mit welchen Rechten)
│   ├── skills/                 ← KI-Arbeitsabläufe (wie gearbeitet wird)
│   └── prompts/                ← Gespeicherte Einzelaufträge (z. B. /lernlog)
├── client/                     ← React-Frontend (Vite)
│   └── src/
│       ├── pages/              ← Seiten: Übersicht, Transaktionen, Kategorien
│       ├── *.jsx               ← Komponenten
│       ├── *.js                ← Berechnungen, Filter, Formatierung
│       └── *.test.js(x)        ← Tests (Vitest)
├── server/                     ← Express-Backend
│   └── src/
│       ├── index.js            ← Server und Routen
│       ├── daten.js            ← Beispiel-Transaktionen
│       └── berechnungen.js     ← Summen pro Kategorie
├── docs/
│   ├── fintrack-spezifikation.md ← Verbindliche Spezifikation und Lernplan
│   └── lernen/
│       └── LERNLOG.md            ← Lerntagebuch
├── lernen/                     ← Übungen (JavaScript-Grundlagen)
├── CLAUDE.md                   ← KI-Regeln für Claude (synchron zu copilot-instructions.md)
└── README.md
```

## Frontend starten

```bash
cd client
npm install
npm run dev
```

Danach erreichbar unter http://localhost:5173. Prüfungen:

```bash
npm test        # Vitest-Tests
npm run lint    # ESLint
npm run build   # Produktionsbuild
```

Alle drei zusammen: `bash .github/skills/feature-umsetzen/scripts/pruefen.sh`.
Details zum Verhalten stehen in [client/README.md](client/README.md).

## Server starten

```bash
cd server
npm install
npm run dev
```

Danach erreichbar unter http://localhost:3000.

| Route                   | Antwort                     |
|-------------------------|-----------------------------|
| `GET /`                 | Text „FinTrack-Server läuft!“ |
| `GET /api/health`       | `{ "status": "ok" }`        |
| `GET /api/transactions` | Liste aller Transaktionen   |
| `GET /api/summary`      | Summe aller Beträge pro Kategorie in Cent, z. B. `{ "Salary": 100000, "Essen": 50000 }` |

`/api/summary` addiert derzeit Einnahmen und Ausgaben je Kategorie und filtert
noch nicht nach Zeitraum. Frontend und Backend sind noch nicht verbunden; der
geplante Ziel-Endpunkt steht in der Spezifikation.

## Übungen ausführen

```bash
node lernen/ausgabe.js
node lernen/array-methoden.mjs
```

## Arbeiten mit KI

FinTrack nutzt fünf Bausteine. Jeder beantwortet eine andere Frage:

| Baustein | Frage | Wann geladen? | In FinTrack |
| --- | --- | --- | --- |
| **Instructions** | Welche Regeln gelten **immer**? | automatisch bei jeder Anfrage | [copilot-instructions.md](.github/copilot-instructions.md), [CLAUDE.md](CLAUDE.md) |
| **Spezifikation** | **Was** soll gebaut werden, wann ist es fertig? | wenn ein anderer Baustein darauf verweist | [fintrack-spezifikation.md](docs/fintrack-spezifikation.md) |
| **Agent** | **Wer** arbeitet, mit welchen Rechten? | wenn er ausgewählt oder aufgerufen wird | [.github/agents/](.github/agents/) |
| **Skill** | **Wie** läuft ein wiederkehrender Ablauf? | mit `/name` oder wenn die Beschreibung passt | [.github/skills/](.github/skills/) |
| **Prompt** | Welcher **einzelne Auftrag** steht an? | mit `/name` | [.github/prompts/](.github/prompts/) |

Kurz: Der **Prompt** sagt *was jetzt*, der **Agent** *wer*, der **Skill** *wie*,
die **Spezifikation** *was richtig ist* und die **Instructions** *was immer gilt*.

### Zusammenspiel an einem Beispiel

Agent **FinTrack Frontend** auswählen und schreiben:
`/feature-umsetzen Eine Kategorie, die noch benutzt wird, soll man nicht löschen können.`

1. **Instructions:** Antwort auf Deutsch, Beträge in Cent, Änderungen begründen.
2. **Agent:** darf Code in `client/` ändern, nicht im Server.
3. **Skill:** gibt die Schritte vor – Spezifikation lesen, Fertig-Kriterien, umsetzen, testen, Doku.
4. **Spezifikation:** liefert die genaue Regel und den Hinweistext.
5. **Ergebnis:** Code und Tests; danach kann FinTrack QA gegen dieselbe Spezifikation prüfen.

Der Agent bestimmt die Rechte, nicht der Skill: Nutzt FinTrack QA den Skill,
darf er trotzdem keinen Code ändern.

### Wann welchen Baustein hinzufügen?

Nicht alle Bausteine sind Pflicht. Das Minimum sind **Instructions** und eine
**Spezifikation**; der Rest kommt erst bei einem konkreten Bedarf dazu.

| Signal | Baustein |
| --- | --- |
| Die KI vergisst eine allgemeine Regel. | Instructions |
| Die KI rät, wie sich die App verhalten soll. | Spezifikation |
| Ich schreibe denselben einzelnen Auftrag immer wieder. | Prompt |
| Ich erkläre einen mehrstufigen Ablauf immer wieder, ggf. mit Vorlage oder Skript. | Skill |
| Ich brauche eine Rolle mit anderen Rechten oder eine unabhängige Prüfung. | Agent |

Faustregel: Wer der KI zum dritten Mal dasselbe erklärt, legt einen Prompt
oder Skill an. Jede zusätzliche Datei muss gepflegt werden und darf anderen
nicht widersprechen. Für ein kleines Projekt reichen meist zwei bis drei
Agenten; FinTrack hat bewusst mehr, um die Werkzeuge zu lernen.

## Projektlokale Agenten

Im Agenten-Auswahlmenü des VS-Code-Chats auswählen und einen konkreten Auftrag
geben. Die Agenten starten nicht automatisch gemeinsam und dürfen keine weiteren
Agenten aufrufen. Zusammenarbeit läuft über einen steuernden Chat; die
Entscheidungen trifft die Nutzerin.

| Agent | Aufgabe | Änderungen |
| --- | --- | --- |
| FinTrack Frontend | React, Formulare, State und responsive UI umsetzen | Frontend-Code und zugehörige Tests/Dokumentation |
| FinTrack Backend | Express, API und später Datenbank umsetzen | Backend-Code und zugehörige Tests/Dokumentation |
| FinTrack Architektur | Struktur, Datenfluss und technische Entscheidungen bewerten | Keine |
| FinTrack Product Owner | Anforderungen klären und Abnahmekriterien vorschlagen | Keine |
| FinTrack QA | Testfälle ableiten, vorhandene Tests ausführen und Fehler belegen | Keine Änderungen am Quellcode |
| FinTrack UI-Reviewer | Layout, Bedienbarkeit und Barrierefreiheit prüfen | Keine Änderungen am Quellcode |

Alle Agenten orientieren sich an derselben Spezifikation und am Lernlog.
Frontend und Backend ändern den Produktumfang nicht eigenmächtig.
Prüfende Agenten unterscheiden belegte Ergebnisse von noch ungeprüften Punkten.
Toolfreigaben begrenzen die verfügbaren Werkzeuge; Verhaltensregeln sind keine
vollständige technische Sandbox, insbesondere bei Terminal- und Browserzugriff.

Beispiel: „Nutze FinTrack QA, um Testfälle für das Bearbeiten von Transaktionen
abzuleiten. Ändere keinen Code.“

## Projektlokale Skills

Skills sind wiederverwendbare Arbeitsabläufe („Rezepte“). Sie gehören nicht zu
einem bestimmten Agenten; jeder Agent kann sie nutzen, behält aber seine
eigenen Rechte. Aufruf mit `/` und dem Skill-Namen (sicher) oder automatisch,
wenn die Beschreibung zur Aufgabe passt (die KI entscheidet selbst).

| Skill | Zweck | Bestandteile |
| --- | --- | --- |
| [`feature-umsetzen`](.github/skills/feature-umsetzen/SKILL.md) | Feature spezifikationsgetrieben umsetzen: Fertig-Kriterien, Umsetzung, Tests, Doku | Ablauf, [Vorlage für Fertig-Kriterien](.github/skills/feature-umsetzen/assets/fertig-kriterien-vorlage.md), [Prüfskript](.github/skills/feature-umsetzen/scripts/pruefen.sh) (Test, Lint, Build) |

Weitere Skills erst bei wiederkehrendem Bedarf ergänzen. Externe Skills, zum
Beispiel von GitHub, nicht blind übernehmen: Herkunft, Lizenz, Anweisungen,
Skripte und benötigte Berechtigungen vorab prüfen. Aktuell wurden keine
externen Skills übernommen.

## Gespeicherte Prompts

| Prompt | Zweck |
| --- | --- |
| [`/lernlog`](.github/prompts/lernlog.prompt.md) | Abends Verständnisfragen stellen und einen Lernlog-Eintrag schreiben |
| [`/fintrack-help`](.github/prompts/fintrack-help.prompt.md) | Allgemeine Hilfe bei FinTrack-Aufgaben nach den Projektregeln |
