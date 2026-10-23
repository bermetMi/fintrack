# FinTrack

Ein Lernprojekt zum Tracken von Ausgaben – entsteht Schritt für Schritt beim
Lernen von Web-Entwicklung.

## Struktur
```
fintrack/
├── .github/
│   ├── agents/      ← Projektlokale Fachagenten
│   ├── prompts/     ← Wiederverwendbare Chat-Aufträge
│   └── copilot-instructions.md
├── client/          ← React-Frontend
├── server/          ← Express-Backend
│   └── src/
│       ├── index.js        ← Server und Routen
│       ├── daten.js        ← Beispiel-Transaktionen
│       └── berechnungen.js ← Summen pro Kategorie
├── docs/
│   ├── fintrack-spezifikation.md ← Verbindliche Spezifikation und Lernplan
│   └── lernen/
│       └── LERNLOG.md            ← Lerntagebuch
├── lernen/          ← Übungen (JavaScript-Grundlagen)
├── .gitignore
├── CLAUDE.md
└── README.md
```

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
noch nicht nach Zeitraum. Der geplante Ziel-Endpunkt steht in der Spezifikation.

## Übungen ausführen
```bash
node lernen/ausgabe.js
node lernen/array-methoden.mjs
```

## Aufgaben

### Erledigt
- [x] Ordner `client` und `server` anlegen
- [x] `CLAUDE.md` und `.github/copilot-instructions.md` anlegen
- [x] `server/` mit `npm init` initialisieren und Express installieren
- [x] Ersten Express-Server in `server/src/index.js` schreiben
- [x] Transaktions-Datenmodell im Backend anlegen (`server/src/daten.js`)

### Weiterer Plan
Der aktuelle Umfang und die nächsten Phasen stehen ausschließlich in der
[Spezifikation](docs/fintrack-spezifikation.md). Die obige Liste dokumentiert
die ersten Einrichtungsschritte, nicht den vollständigen Implementierungsstand.

## Lernfortschritt
Siehe [Lernlog](docs/lernen/LERNLOG.md).

## Projektlokale Agenten

Im Agenten-Auswahlmenü des VS-Code-Chats auswählen und einen konkreten Auftrag
geben. Die Definitionen liegen in [.github/agents/](.github/agents/); sie starten
nicht automatisch gemeinsam und ersetzen nicht die Entscheidung der Nutzerin.

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

Skills werden erst bei wiederkehrendem Bedarf ergänzt. Externe Skills nicht
blind installieren: Herkunft, Lizenz, Anweisungen, Skripte und benötigte
Berechtigungen vorab prüfen. Aktuell wurden keine externen Skills übernommen.