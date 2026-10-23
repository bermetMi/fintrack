# FinTrack – Spezifikation, Neustart-Plan & Projektregeln

Stand: 2026-10-23 (Frontend vereinfacht, Bearbeiten und Textgrenzen ergänzt; Dokumentation unter docs/; bestehende Phasen und Termine unverändert)
Ersetzt die Version vom 2026-09-25.

## Vorarbeit außerhalb des Plans (Notiz, 25.09.)

Ein Server-Grundgerüst existiert schon und läuft bereits (`server/src/index.js` mit Express, 3 Routen, `server/src/daten.js` mit Beispiel-Transaktionen, `npm init` + Express installiert, `daten.js` exportiert schon Daten). Das ist Stoff aus Phase 2, ist aber schon vor dem Neustart entstanden. Wird ab Do 01.10 (Module) und in Phase 2 bewusst aufgegriffen und verstanden.

## Wichtige Entscheidung: Login erst im Januar

Bis dahin arbeitet das Backend mit einer festen `userId = 1` statt echtem Login. So werden CRUD und Login nicht gleichzeitig gelernt. Wenn der Login kommt (04.–15.01.), wird nur diese eine Stelle durch die echte ID aus dem Token ersetzt. Bis Januar speichert die App also faktisch für einen einzigen Nutzer.

## Ziel

Als Fullstack-Entwicklerin mit KI ab Februar 2027 arbeiten. FinTrack ist das Lernprojekt dafür: eine App, in der ich meine Ausgaben eingebe, ein Dashboard mit Berechnungen sehe und erkenne, wie viel unerwartet ausgegeben wurde.

## Entscheidung: Selbstregistrierung ohne Admin-Seite (23.10.2026)

- Nutzer registrieren sich selbst mit ihrer eigenen E-Mail-Adresse und einem
  Passwort. Anschließend melden sie sich mit diesen Zugangsdaten an.
- Es gibt keine manuelle Freigabe, keine Admin-Rolle und keine Admin-Seite im MVP.
- Alle Nutzer verwenden dieselben Seiten, sehen und verwalten aber ausschließlich
  ihre eigenen Finanzdaten. Das Backend prüft die Zugehörigkeit bei jeder Anfrage.
- Die erste lokale Login-Version arbeitet mit Fake-Daten und zunächst ohne
  E-Mail-Bestätigung. Die E-Mail-Adresse ist dann nur der Anmeldename;
  der Besitz des Postfachs ist noch nicht nachgewiesen.
- Vor öffentlicher Nutzung mit echten Finanzdaten sind E-Mail-Bestätigung und
  die unten beschriebenen Sicherheitsprüfungen erforderlich. Den Aufwand für
  Mailversand und Bestätigungslinks vor diesem Schritt einplanen.
- Registrierung und Login bleiben für 04.–15.01. vorgesehen. Der Verzicht auf
  eine Admin-Seite ersetzt keine Sicherheitsmaßnahme.

## Die 3 Regeln gegen Chaos

1. Diese Datei und das Lern-Log sind die einzige Wahrheit. Jede Sitzung startet mit: "Lies den Stand."
2. Ein Tag = ein Thema = ein Satz "Fertig, wenn ...". Abgehakt wird nur, was ich in eigenen Worten erklären kann.
3. Jeden Sonntag 30 Min Rückblick: Tage geschafft, Aufgaben geschafft, Erklär-Test (5 Fragen).

---

## Tagesrhythmus (Mo–Fr) – Variante B (ab 06.10.2026)

Entscheidung 06.10.2026: Variante B wird getestet. FinTrack (JavaScript) hat
Vorrang. Die Zertifizierung ist seit 15.10.2026 aus dem Plan genommen
(pausiert, Stand: Modul 1 fertig am 25.09.).

| Was                                                           | Dauer                      |
| ------------------------------------------------------------- | -------------------------- |
| FinTrack: Neues lernen (Konzept, Beispiel, Verständnisfragen) | Hauptteil der Lernzeit     |
| FinTrack: Üben (nur Hinweise, keine Lösungen)                 | Hauptteil der Lernzeit     |
| KI in VS Code konfigurieren (Prompts, Agenten, Skills)        | 30 Min täglich, ab 16.10.  |
| Abends                                                        | 30 Min Lern-Log und Commit |

Uhrzeiten: **\_\_** (selbst eintragen)
Wochenende: frei, nur So-Abend 30 Min Rückblick.
Pflicht laut Managerin: JavaScript, React, Express und Deployment (gesamter
Prozess) bis ca. Februar. Ziel: ab 2027 im Unternehmen in ein neues Projekt
(QA, Backend, etwas Frontend, Deployment, jeweils mit KI).

KI-Entscheidung 15.10.2026: Zuerst KI in VS Code konfigurieren lernen
(copilot-instructions, `.prompt.md`, `.agent.md`, Skills). Ob ein KI-Agent oder
Kategorie-Vorschlag Teil von FinTrack wird, wird am Ende von Phase 2 (11.12.)
entschieden.
Lern-Log-Automatisierung (Entscheidung 19.10.2026): Zuerst manuell mit einer
`.prompt.md` (`.github/prompts/`, Aufruf per `/`). Automatisch (z. B. per Hook)
kommt später, erst wenn die Prompt-Datei sicher sitzt.
Offen: Welche KI-API darf im Unternehmen benutzt werden? (Managerin fragen)

Plan B (falls der Job wieder anzieht, ca. 12 Std./Woche): FinTrack 1 Std. Arbeitszeit + 1,5 Std. an 3 Abenden; Sa + So je 2 Std. abends.

---

## Phase 0 – Neustart, reines JavaScript (24.09.–09.10.)

Kein Framework. Ich komme aus Java/Kotlin, deshalb Vergleiche mit Java.

| Tag      | Thema                                                                   | Fertig, wenn ...                                                                                 | Notiz                               |
| -------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ----------------------------------- |
| Do 24.09 | Fehlerbehandlung: try/catch, throw, finally                             | Funktion wirft bei negativem Betrag einen `Error`; ich erkläre try/catch/throw                   |                                     |
| Fr 25.09 | Bedingungen, Funktionen, Arrow Functions                                | Ausgaben über 100 € werden als "groß" markiert                                                   | Grenze selbst auf >100 € festgelegt |
| Di 29.09 | map, filter, find (an `transactions`)                                   | Filtern nach Kategorie, Suche nach id                                                            | Verständnis noch nicht sicher       |
| Mi 30.09 | reduce, sort, Spread                                                    | Summe und Sortierung nach Betrag                                                                 | reduce wiederholen                  |
| Di 06.10 | Destructuring, Fehlermeldungen lesen, Salary-Bug beheben                | Destructuring ohne Vorlage geschrieben                                                           |                                     |
| Mi 07.10 | reduce festigen (Schleife → reduce), Summe der Ausgaben; Repo aufräumen | Ich erkläre reduce in eigenen Worten; Summe der Ausgaben = 70000                                 |                                     |
| Do 08.10 | Summe pro Kategorie als Objekt; Module: export/import                   | `server/src/berechnungen.js` angelegt, `index.js` importiert es; ich erkläre, warum man trennt   |                                     |
| Fr 09.10 | async/await, fetch; Wochenabschluss                                     | Ich rufe `/api/transactions` per `fetch` ab und fange Fehler mit try/catch; Variante B überprüft |                                     |
| So 11.10 | Rückblick (30 Min)                                                      | Lern-Log fertig, Repo gepusht, Mini-Test (10 Fragen in eigenen Worten)                           |                                     |

Puffer (nach Bedarf in Phase 1 nachholen): Prettier einrichten, verschachtelte
Objekte / Object.keys / ?., Server-Code (`index.js`, `daten.js`) in eigenen
Worten erklären. Wird `async/fetch` am Fr nicht fertig, ist es die erste Stunde
am Mo 12.10.

Offene Verständnisfragen aus dem Lern-Log (vom 24.09.):

- [ ] Warum schreibt man `new Error("...")` statt nur einen Text zu werfen?
- [ ] Warum trennt man Daten und Berechnungen in eigene Module?
- [ ] Salary-Transaktion hatte `category: "Essen"`: Copy-Paste-Fehler? Sollen Einnahmen (`income`) überhaupt eine Kategorie haben?

---

## Phase 1 – Frontend mit Fake-Daten (12.10.–20.11.)

| Woche     | Thema                              | Fertig, wenn ...                                  |
| --------- | ---------------------------------- | ------------------------------------------------- |
| 12.–16.10 | Vite, JSX, Komponenten, Props      | Transaktionsliste zeigt Fake-Daten                |
| 19.–23.10 | useState, Events, Listen mit key   | Löschen-Button entfernt einen Eintrag             |
| 26.–30.10 | Formulare (kontrollierte Inputs)   | Neue Transaktion hinzufügen ✅ Meilenstein 01.11. |
| 02.–06.11 | React Router                       | Übersicht, Transaktionen und Kategorien erreichbar; Login folgt im Januar |
| 09.–13.11 | Dashboard + Recharts + Vitest      | Summen, Diagramm und vollständige Liste für einen gewählten Zeitraum; Berechnungen und Datumsfilter getestet |
| 16.–20.11 | Kategorien-Seite, Tailwind, Puffer | Phase 1 fertig                                    |

## Phase 2 – Backend ohne Login (23.11.–11.12.)

Login kommt bewusst noch nicht vor, siehe Entscheidung oben (`userId = 1`).

| Woche        | Thema                              | Fertig, wenn ...                  |
| ------------ | ---------------------------------- | --------------------------------- |
| 23.–27.11    | CRUD im Speicher, Statuscodes, Zod | POST/PUT/DELETE für Transaktionen |
| 30.11.–04.12 | PostgreSQL (OrbStack) + Prisma     | Daten liegen in der Datenbank     |
| 07.–11.12    | Filter, /api/summary, Supertest    | 3 Routen getestet, Phase 2 fertig |

## Phase 3–5

| Zeitraum    | FinTrack                                                                | Sonstiges                                |
| ----------- | ----------------------------------------------------------------------- | ---------------------------------------- |
| 14.–18.12   | Frontend und Backend verbinden (TanStack Query, CORS/Proxy)             | —                                        |
| 21.–27.12   | Puffer                                                                  | —                                        |
| 04.–15.01   | Login (register/login, bcrypt, Cookie, echte userId statt 1)            | —                                        |
| 18.–22.01   | isUnexpected (Häkchen) + Deployment                                     | Gespräch mit Managerin zum neuen Projekt |
| 25.–29.01   | README, Screenshots, Portfolio                                          | —                                        |
| ab Feb 2027 | KI in FinTrack (Kategorie-Vorschlag/Agent), falls am 11.12. beschlossen | Neues Projekt im Unternehmen             |

---

## Sicherheitsziele der Webseite (ergänzt 23.10.2026)

Sicherheit gehört zum Lernziel Fullstack-Entwicklung mit KI. Ein gutes Aussehen
und ein erfolgreicher Build reichen nicht: Ich muss Datenfluss, Fehlerfälle und
Schutzmaßnahmen erklären und prüfen können. KI-generierter Code wird genauso
geprüft wie selbst geschriebener Code. Diese Ziele werden in den bestehenden
Phasen bearbeitet, nicht als zusätzliche Phase.

Die folgenden Punkte sind Anforderungen, keine bereits bestätigten Schutzmaßnahmen.
Bis Login und Zugriffsschutz fertig sind: nur lokale Entwicklung mit erfundenen
Daten, kein öffentlich erreichbares Backend mit `userId = 1`. Ein öffentliches
Frontend-Demo darf nur Fake-Daten verwenden und keinen ungeschützten Backend-Zugriff anbieten.

### Phase 1: sichere Formulare und Darstellung

- [ ] Eingaben vollständig prüfen: Betrag als positive, sicher darstellbare ganze
  Cent-Zahl (`Number.isSafeInteger`), passende Kategorie und begrenzte Textlängen.
  Textgrenzen: Notiz maximal 100 Zeichen, Kategoriename maximal 40 Zeichen.
  Diese Grenzen später auch serverseitig übernehmen.
- [ ] Nutzereingaben als Text anzeigen, nicht als HTML interpretieren
  (`dangerouslySetInnerHTML` nicht für Notizen oder Kategorien verwenden).
- [ ] Keine Passwörter, API-Schlüssel oder echten Finanzdaten im Frontend, Repository
  oder KI-Chat. `VITE_*`-Variablen sind öffentlich im Browser, auch wenn sie aus `.env` kommen.
- **Fertig, wenn:** Tests ungültige Beträge und zu lange Texte ablehnen, HTML-artige
  Notizen nur als Text erscheinen und ich erklären kann, warum Frontend-Prüfungen
  allein keine API schützen.

### Phase 2: Backend und Datenbank

- [ ] Jede Anfrage serverseitig mit Zod prüfen, auch wenn das Formular bereits
  validiert. Erlaubte Felder ausdrücklich übernehmen; Größenlimits für JSON-Anfragen setzen.
- [ ] Prisma-Abfragen mit Parametern verwenden, keine SQL-Befehle aus Nutzereingaben
  zusammenbauen. Geldbeträge zusätzlich gegen den Wertebereich des Datenbankfelds prüfen.
- [ ] Fehler mit passenden Statuscodes beantworten, keine internen Stacktraces,
  Zugangsdaten oder vollständigen Finanzdaten an Clients oder in Logs ausgeben.
- **Fertig, wenn:** Supertest auch direkte Anfragen ohne Formular prüft:
  ungültige Daten werden mit 400, zu große Anfragen mit 413 abgelehnt und nicht gespeichert.

### Verbindung und Login (Dezember bis 15.01.)

- [ ] CORS nur für vorgesehene Frontend-Ursprünge konfigurieren; CORS ersetzt
  weder Login noch Berechtigungsprüfung.
- [ ] Passwörter mit bcrypt hashen. Anmeldung gegen massenhafte Versuche begrenzen;
  Fehlermeldungen verraten nicht, ob ein Konto existiert.
- [ ] Login-Cookies in Produktion mit `HttpOnly`, `Secure` und geeignetem `SameSite`
  setzen. Ablauf und Logout umsetzen; schreibende Cookie-authentifizierte Anfragen
  gegen CSRF schützen (ungewollte Aktionen durch fremde Webseiten).
- [ ] Nutzer-ID ausschließlich aus einer serverseitig geprüften Sitzung bzw.
  einem geprüften Token ableiten. Lesen, Anlegen, Ändern, Löschen und Summen auf
  eigene Daten begrenzen; auch referenzierte Kategorien müssen dem Nutzer gehören.
- **Fertig, wenn:** Tests mit zwei Nutzern zeigen, dass A die Daten von B weder
  lesen noch verändern oder als Kategorie zuordnen kann. Fehlende/abgelaufene
  Anmeldung, Logout, CSRF-Schutz und Login-Limits sind ebenfalls getestet.

### Deployment (18.–22.01.)

- [ ] HTTPS, geeignete Sicherheitsheader und eine zur App passende Content Security
  Policy konfigurieren; die App anschließend im Browser prüfen.
- [ ] Secrets nur serverseitig über die Deployment-Umgebung verwalten, `.env`
  nicht committen. Datenbankzugang nur mit benötigten Rechten.
- [ ] Abhängigkeiten auf bekannte Schwachstellen prüfen und relevante Befunde
  bewerten; Updates mit Tests prüfen, nicht blind per `audit fix --force` übernehmen.
- [ ] Vor öffentlicher Freigabe ein Sicherheitsreview und die obigen Negativtests
  durchführen. Bekannte hochriskante Befunde zuerst beheben; verbleibende Risiken dokumentieren.
- **Fertig, wenn:** Die Schutzmaßnahmen auch in der bereitgestellten Umgebung
  geprüft sind. Ein sauberer Dependency-Scan allein ist kein Sicherheitsnachweis.

---

## Zu klärende Widersprüche (gefunden 25.09.)

- [x] **Geld-Regel:** Cent als Int, kein Runden. In `CLAUDE.md` und `copilot-instructions.md` korrigiert.
- [x] **KI-Regeln:** "Nur Hinweise, keine Lösungen" und "keine ganzen Dateien" stehen jetzt in `CLAUDE.md` und `copilot-instructions.md`.
- [x] Salary mit `category: "Essen"`: behoben am 06.10. (`category: "Salary"`). Frage „Sollen Einnahmen überhaupt eine Kategorie haben?“: ja, entschieden am 23.10. (siehe E2 unten)

## Offene Punkte aus dem Abgleich Code ↔ Spezifikation (23.10.2026)

Ergebnis des Product-Owner-Abgleichs: Die Phase-1-Oberfläche entspricht der
Spezifikation fast vollständig (Code und Tests gelesen; keine Browser-Abnahme).
Stand 23.10.2026 nachmittags: Alle Phase-1-Punkte sind entschieden und umgesetzt;
offen bleibt nur V1 für Phase 2.

**Umsetzung (Code)**

- [x] **U1 – Sicherheitstest ergänzt:** Ein Test zeigt, dass eine HTML-artige
  Notiz wie `<b>Test</b>` als normaler Text erscheint (Phase-1-Sicherheitsziel).
- [x] **U2 – „Kopieren“-Button im Euro-Umrechner:** entfernt (Entscheidung
  23.10.2026). Der Umrechner hat nur „Übernehmen“; ein Klick trägt die Cent-Zahl
  direkt ins Betragsfeld ein.
- [x] **U3 – Sehr große Euro-Beträge:** Ergibt die Umrechnung keine sicher
  darstellbare ganze Cent-Zahl (über 90.071.992.547.409,91 €), zeigt der Umrechner
  einen Hinweis und „Übernehmen“ bleibt deaktiviert. Gerechnet wird ohne Runden.

**Entscheidungen der Nutzerin (23.10.2026)**

- [x] **E1 – Notiz bleibt Pflicht:** nicht leer, höchstens 100 Zeichen. Das
  Datenmodell verwendet deshalb `note` statt `note?`.
- [x] **E2 – Kategorien haben einen Typ:** Jede Kategorie gehört entweder zu
  Ausgaben oder zu Einnahmen (`Category.type`). Damit ist auch die alte Frage
  „Sollen Einnahmen eine Kategorie haben?“ beantwortet: ja.
- [x] **E3 – Verwendete Kategorien lassen sich nicht löschen:** Statt zu löschen
  erscheint bei der Kategorie der Hinweis „Diese Kategorie wird noch von
  1 Transaktion verwendet.“ (bei mehreren mit Anzahl). Zuerst die betroffenen
  Einträge ändern oder löschen. Ab Phase 2 lehnt der Server das mit 409 ab.
- [x] **E4 – Die dritte Summenkarte heißt „Differenz“** statt „Saldo“, weil der
  Wert nicht der Kontostand ist.

**Kleine Korrekturen in dieser Spezifikation**

- [x] **K1:** Überschrift korrigiert: 13 API-Endpunkte.
- [x] **K2:** Statuscode 413 („Anfrage zu groß“) ergänzt, zusätzlich 409 für E3.
- [x] **K3:** Weiterleitung von `/stats` zur Übersicht bei „Statistikseite entfällt“ ergänzt.
- [x] **K4:** KI-Funktion als „ab Februar, nur falls am 11.12. beschlossen“ gekennzeichnet.

**Vor der Verbindung von Frontend und Backend (14.–18.12.)**

- [ ] **V1 – Datenwerte angleichen:** Server nutzt `income`/`expense` und `Salary`,
  der Client `INCOME`/`EXPENSE` und `Gehalt`. Gemeinsame Schreibweise festlegen.
  `/api/summary` zählt derzeit Einnahmen und Ausgaben je Kategorie zusammen.

---

## Erweiterungen im Detail (Januar 2027, siehe Phase 3–5 oben)

- **Unerwartete Ausgaben:** Beim Eintragen ein Häkchen "unerwartet". Neues Feld `isUnexpected` (Boolean, Standard false). Dashboard zeigt die Summe der unerwarteten Ausgaben im gewählten Zeitraum.
- **KI-Funktion (ab Februar 2027, nur falls am 11.12. beschlossen):** Aus der Notiz (z. B. "Rewe Einkauf") schlägt die KI eine Kategorie vor.
- **Portfolio:** README, Screenshots, Online-Stellung.

Phase 6 (Kandidaten, bewusst nicht im MVP): Passwort zurücksetzen, mehrere Währungen, Daueraufträge, Export, Dark Mode, mobile App.

## MVP-Screens (3 Hauptseiten, Login/Registrierung ab Januar)

**Vereinfachte Navigation (Entscheidung 23.10.2026):**

- **Übersicht:** Finanzen anschauen und auswerten.
- **Transaktionen:** Neue Einträge erfassen.
- **Kategorien:** Kategorien für Einnahmen und Ausgaben verwalten.

Die separate Statistikseite entfällt; alte Links auf `/stats` leiten zur Übersicht
weiter. Direkt unter der Überschrift der Übersicht
stehen Einnahmen, Ausgaben und Differenz (Einnahmen minus Ausgaben; nicht „Saldo“,
weil es nicht der Kontostand ist). Danach folgt die Zeitraumauswahl,
die weiterhin für alle Summen, das Diagramm und die Liste gilt. Darunter stehen ab
900 px Bildschirmbreite das Ausgaben-Kategoriediagramm links und die vollständige
Transaktionsliste rechts nebeneinander, oben bündig. Auf schmaleren Bildschirmen
stehen sie für bessere Lesbarkeit untereinander.
Ein zusätzliches Balkendiagramm derselben drei Summen ist nicht vorgesehen.

Die Diagrammlegende zeigt Kategorien mit ihren Euro-Beträgen dauerhaft als Text.
Auf Smartphones stehen die Transaktionsdetails über Betrag und Löschaktion.
Die Transaktionen bilden eine semantische Liste. Löschbuttons benennen für
Screenreader den zugehörigen Eintrag mit Datum und Betrag.

- Login/Registrierung: Selbstregistrierung und Anmeldung mit E-Mail und Passwort,
  ohne Admin-Freigabe (siehe Entscheidung vom 23.10.).
- Übersicht / Dashboard (`/`): Zeitraum von/bis wählen; Einnahmen/Ausgaben/Differenz und Diagramm nach Kategorie für diesen Zeitraum, Liste unter der Überschrift **„Transaktionen“**, bearbeiten, löschen
- Transaktionen (`/transactions`): nur das Eingabeformular für Betrag, Datum,
  Kategorie, Notiz und Typ; keine Transaktionsliste und keine Listenfilter.
  Nach erfolgreichem Speichern erscheint eine Bestätigung, dass die Ausgabe bzw.
  Einnahme auf der Seite Übersicht zu finden ist.
- Der Bestätigungslink **„In Übersicht ansehen“** öffnet die Übersicht und setzt
  den Zeitraum auf alle Transaktionen zurück, damit der neue Eintrag sichtbar ist.
  Dieser Filterwechsel wird beim Link erklärt; normales Navigieren erhält den Zeitraum.
- Bearbeiten bestehender Transaktionen wird direkt aus der Übersicht geöffnet:
  Neben „Löschen“ steht „Bearbeiten“. Ein vorausgefülltes Formular oberhalb von
  Diagramm und Liste erlaubt Änderungen an Notiz, Datum, Betrag, Typ und Kategorie.
  „Speichern“ aktualisiert denselben Eintrag (gleiche ID), „Abbrechen“ verwirft
  die Eingaben. Es entsteht keine zusätzliche Hauptseite.
- Liste, Summen und Diagramm aktualisieren sich nach dem Speichern gemeinsam.
  Der Zeitraumfilter bleibt erhalten. Liegt das neue Datum außerhalb des Filters,
  verschwindet der Eintrag aus der Auswahl und eine Bestätigung erklärt warum.
- Anlegen und Bearbeiten nutzen dasselbe Formular mit denselben Prüfungen:
  gültiges Datum, passende vorhandene Kategorie, nicht leere Notiz und positiver,
  sicher darstellbarer Integer-Betrag in Cent. Ungültige Änderungen bleiben im
  Formular und verändern keine gespeicherten Daten. Notizen dürfen höchstens
  100 Zeichen, Kategorienamen höchstens 40 Zeichen enthalten – beim Anlegen,
  Bearbeiten und Umbenennen. Die Eingaben werden vor dem Entfernen äußerer
  Leerzeichen geprüft (JavaScript-Stringlänge). Ein Zeichenzähler zeigt die
  Grenze; zu lange Texte bleiben zur Korrektur stehen und werden nicht gekürzt.
- Der Euro-Umrechner bleibt bewusst flexibel (Entscheidung 23.10.2026):
  Ganze Euro-Beträge sowie ein oder zwei Nachkommastellen mit Komma oder Punkt
  sind erlaubt. Beispiele: `25` → `2500` Cent; `25.5`, `25,5`, `25.50` und
  `25,50` → `2550` Cent. „Übernehmen“ trägt die Cent-Zahl ins Betragsfeld ein.
  Mehr als zwei Nachkommastellen bleiben ungültig; es wird nicht gerundet.
  Ergibt sich keine sicher darstellbare ganze Cent-Zahl, erscheint ein Hinweis
  und „Übernehmen“ bleibt deaktiviert. Es gibt keinen „Kopieren“-Button.
  Das direkte Cent-Feld akzeptiert weiterhin nur ganze Zahlen.
- Kategorien (`/categories`): anlegen, umbenennen und löschen; keine Budgetverwaltung.
  Jede Kategorie gehört zu Ausgaben oder Einnahmen. Eine Kategorie, die noch von
  Transaktionen verwendet wird, lässt sich nicht löschen; stattdessen erscheint
  „Diese Kategorie wird noch von 1 Transaktion verwendet.“ (bzw. mit Anzahl).

### Zeitraum und Vollständigkeit (Entscheidung 23.10.2026)

- **Zeitraum wählen:** Startdatum bis Enddatum, beide Tage eingeschlossen.
- **Summen:** Alle Einnahmen und Ausgaben dieses Zeitraums berücksichtigen.
- **Diagramme:** Alle passenden Daten auswerten; das Ausgaben-Diagramm gruppiert die Ausgaben nach Kategorie.
- **Liste:** Alle Transaktionen des Zeitraums anzeigen — keine Begrenzung auf fünf.
- **Tests:** Prüfen, dass auch bei mehr als fünf Einträgen nichts fehlt.

**Startanzeige (Variante 1, Entscheidung 23.10.2026):** Zunächst werden alle
Transaktionen angezeigt; beide Datumsfelder sind leer. Sobald ein vollständiger,
gültiger Zeitraum gewählt ist, gilt er für Summen, Diagramm und Liste in der
Übersicht und bleibt bei normalen Seitenwechseln erhalten. „Zeitraum zurücksetzen“
leert beide Datumsfelder und entfernt die zeitliche Begrenzung.

Ist nur ein Datum ausgefüllt oder der Zeitraum ungültig, erscheint eine
Fehlermeldung; Listen und Auswertungen werden bis zur Korrektur nicht angezeigt.
Die Eingabeseite hat keine Zeitraum- oder Kategoriefilter. Bei aktivem Zeitraum
erläutert die Übersicht unter „Transaktionen“, dass alle Einträge innerhalb
dieses Zeitraums angezeigt werden.

Ergänzende Regeln:

- Maßgeblich ist das Transaktionsdatum, nicht der Zeitpunkt der Erfassung.
  Ungültige Daten oder ein Startdatum nach dem Enddatum zeigen eine Fehlermeldung.
- Summen, Diagramm und Liste in der Übersicht berücksichtigen ausschließlich eigene Transaktionen.
  Einnahmen und Ausgaben werden getrennt summiert; die Differenz ist Einnahmen
  minus Ausgaben. Das Ausgaben-Kategoriediagramm enthält keine Einnahmen.
- **Fertig, wenn:** Ein Test mit mehr als fünf Transaktionen alle passenden Einträge
  anzeigt und berücksichtigt; Einträge an beiden Datumsgrenzen zählen mit, außerhalb
  liegende nicht. Ohne Treffer erscheinen eine leere Liste, Summen von 0 und ein
  Hinweis statt eines irreführenden Diagramms.

**Beispiel: Transaktionsdatum und Zeitpunkt der Erfassung**

- Du kaufst am **20. Oktober** Lebensmittel für 35 € → **Transaktionsdatum**.
- Du trägst den Einkauf erst am **23. Oktober** in FinTrack ein → **Zeitpunkt der Erfassung**.

Im gewählten Zeitraum **19.–21. Oktober** wird dieser Einkauf in der Liste,
den Ausgabensummen und dem Ausgaben-Diagramm berücksichtigt, obwohl du ihn erst
später eingetragen hast.

**Beispiel: Eigene Daten, Summen und Ausgaben-Kategoriediagramm**

Du bist angemeldet und wählst den Zeitraum **01.–31. Oktober**. Angezeigt und
berechnet werden nur deine Transaktionen in diesem Zeitraum. Die Einnahmen und
Ausgaben anderer Nutzer werden weder angezeigt noch mitgerechnet.

| Wert | Berechnung | Betrag |
| --- | --- | --- |
| Einnahmen | Gehalt 3.200 € + Geschenk 100 € | 3.300 € |
| Ausgaben | Miete 1.000 € + Lebensmittel 300 € + Transport 100 € | 1.400 € |
| **Differenz** | **3.300 € − 1.400 €** | **1.900 €** |

Die Differenz zeigt, wie viel du im Zeitraum mehr eingenommen als ausgegeben
hast. Sie ist **nicht automatisch dein Kontostand**, weil beispielsweise Geld
aus früheren Monaten nicht enthalten ist.

Das **Ausgaben-Kategoriediagramm** verteilt ausschließlich die **1.400 € Ausgaben**:

- Miete: **1.000 €**
- Lebensmittel: **300 €**
- Transport: **100 €**

Gehalt und Geschenk gehören nicht in dieses Diagramm, weil sie Einnahmen sind.
Sie erscheinen weiterhin in der Einnahmensumme und im Vergleich von Einnahmen
und Ausgaben.

**Vereinfachung: vorerst keine Budgets (Entscheidung 23.10.2026)**

Die Budgetfunktion wurde nach dem Ausprobieren als zu kompliziert empfunden und
vollständig aus der aktuellen Version entfernt. Kategorien enthalten keine
Budgetbeträge. Es gibt keine Budgeteingabe, Monatsauswahl, Verbrauchsbalken oder
Budgetwarnungen. Einnahmen, Ausgaben, Zeitraumfilter und Kategoriediagramm bleiben.

Budgets sind höchstens eine spätere Erweiterung, kein aktueller Umsetzungsschritt.
Die bisherigen Budgetregeln und die Entscheidung zur Teilmonatsprüfung sind damit
für den aktuellen Umfang aufgehoben. Vor einer späteren Umsetzung werden Nutzen
und Bedienung neu abgestimmt. Transaktionen bearbeiten bleibt im Plan.

## API-Endpunkte (13, alle unter /api, JSON)

- POST /api/auth/register, /api/auth/login (kein Login nötig)
- POST /api/auth/logout, GET /api/auth/me (Login nötig)
- GET/POST /api/categories, PUT/DELETE /api/categories/:id
- GET /api/transactions (Filter: ?from=2026-09-01&to=2026-09-30&categoryId=3), POST /api/transactions, PUT/DELETE /api/transactions/:id
- GET /api/summary?from=2026-09-01&to=2026-09-30 (Einnahmen, Ausgaben, Differenz und Ausgabensummen je Kategorie fürs Dashboard)

Beide GET-Routen verwenden dieselben Datumsgrenzen wie die Oberfläche.
Ungültige Zeiträume werden serverseitig mit 400 abgelehnt.

Regeln: Beträge immer in Cent als Int (kein Runden). Jede Abfrage liefert nur eigene Daten; die Nutzer-ID kommt aus Cookie/Token, nie aus der Anfrage. **Bis Login fertig ist (siehe Entscheidung oben): feste `userId = 1` verwenden, keine echte Prüfung.**
Statuscodes: 200 ok, 201 created, 400 invalid, 401 unauthorized, 404 not found, 409 conflict (z. B. Kategorie wird noch verwendet), 413 payload too large, 500 server error.

## Datenmodell (Prisma, ab Phase 2)

- User: id, email (unique), passwordHash (bcrypt, nie Klartext), createdAt, categories[], transactions[]
- Category: id, name (max. 40 Zeichen), type (enum INCOME/EXPENSE), userId, @@unique([userId, name])
- Transaction: id, amountCents (Int, immer positiv), date, note (Pflicht, max. 100 Zeichen), type (enum INCOME/EXPENSE, default EXPENSE), categoryId (Kategorie mit gleichem type), userId, createdAt, @@index([userId, date])
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

Konventionen: JS ohne TS (kommt später), const als Standard/nie var, immer ===/!==, Arrow Functions für Callbacks, Geldbeträge als amountCents, Code englisch benennen/Kommentare deutsch, Ordner client/ server/ lernen/ docs/.

Sicherheit: keine Secrets im Code (.env), Passwörter nur als bcrypt-Hash, jede Abfrage filtert nach Nutzer-ID aus dem Token.

---

## Fortschritts-Messung (jeden Sonntag ausfüllen)

| Woche         | Tage geschafft (von 5)   | Aufgaben geschafft                             | Erklär-Test (von 5) | Notiz                                                           |
| ------------- | ------------------------ | ---------------------------------------------- | ------------------- | --------------------------------------------------------------- |
| 24.09.–27.09. | 2 von 4 (Stand 25.09.)   | try/catch/throw/finally; isBigExpense + filter | 4/6 (24.09.)        | Server-Vorarbeit entdeckt, siehe Notiz oben                     |
| 28.09.–04.10. | 2 von 5 (29.09., 30.09.) | map/filter/find; reduce/sort                   | – (nicht gemacht)   | Plan lag nach Woche 1 etwa 1 Woche zurück; Variante B ab 06.10. |

## Lern-Log Vorlage (jeden Abend, 30 Min)

```
## <Wochentag> <Datum> – Phase X, Thema: ...
- Gemacht:
- Verstanden (in eigenen Worten):
- Noch unklar:
- Commit:
- Morgen:
```
