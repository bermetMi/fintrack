# FinTrack

Ein Lernprojekt zum Tracken von Ausgaben – entsteht Schritt für Schritt beim
Lernen von Web-Entwicklung.

## Struktur
```
fintrack/
├── .github/
│   └── copilot-instructions.md
├── client/          ← React-Frontend (noch leer)
├── server/          ← Express-Backend
│   └── src/
│       ├── index.js ← Server und Routen
│       └── daten.js ← Beispiel-Transaktionen
├── lernen/          ← Übungen (JavaScript-Grundlagen)
│   └── LERNLOG.md   ← Lerntagebuch
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

## Übungen ausführen
```bash
node lernen/ausgabe.js
```

## Aufgaben

### Erledigt
- [x] Ordner `client` und `server` anlegen
- [x] `CLAUDE.md` und `.github/copilot-instructions.md` anlegen
- [x] `server/` mit `npm init` initialisieren und Express installieren
- [x] Ersten Express-Server in `server/src/index.js` schreiben
- [x] Transaktions-Datenmodell im Backend anlegen (`server/src/daten.js`)

### Als Nächstes
- [ ] `client/` mit einem React-Setup (z.B. Vite) starten

## Lernfortschritt
Siehe [lernen/LERNLOG.md](lernen/LERNLOG.md).