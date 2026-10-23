# FinTrack Client

React-Frontend von FinTrack, erstellt mit Vite. Bis zur Backend-Anbindung
arbeitet es mit Fake-Daten im React-State.

```bash
npm install
npm run dev
```

Die verbindlichen Anforderungen stehen in der
[Spezifikation](../docs/fintrack-spezifikation.md).

## FinTrack: Tests und Prüfungen

Im Ordner `client/` ausführen:

```bash
npm test
npm run lint
npm run build
```

`npm test` führt die Vitest-Tests aus. Die Filtertests prüfen Datumsgrenzen,
ungültige Zeiträume und die Berechnungen mit mehr als fünf Transaktionen.
Die React-Tests verwenden React Testing Library und jsdom: Sie prüfen den
gemeinsamen Zeitraum bei Seitenwechseln sowie Hinzufügen und Löschen, ohne
ausgeblendete Daten zu verlieren. Sie ersetzen keine Prüfung der
Diagrammdarstellung in einem echten Browser.

Anfangs werden alle Transaktionen angezeigt. „Von“ und „Bis“ begrenzen die
Auswertung erst bei einem vollständigen, gültigen Zeitraum. „Zeitraum zurücksetzen“
leert beide Datumsfelder. Die Übersicht vereint Summen, Ausgaben-Kategoriediagramm
und die vollständige Liste; alle drei folgen demselben Zeitraum.
Die separate Statistikseite und das doppelte Balkendiagramm entfallen.
Alte Links auf `/stats` führen zur Übersicht.
Die Seite „Transaktionen“ enthält nur das Eingabeformular mit Speicherbestätigung.
Der Bestätigungslink „In Übersicht ansehen“ öffnet die vollständige Liste und
setzt dabei den Zeitraum zurück. Die Listenüberschrift lautet „Transaktionen“.
Daten und Filter bleiben nur bis zum Neuladen im React-State erhalten.
Die dritte Summenkarte heißt „Differenz“ (Einnahmen minus Ausgaben im Zeitraum),
nicht „Saldo“, weil der Wert nicht dem Kontostand entspricht.

Der Euro-Umrechner akzeptiert `25`, `25,5` oder `25.50` und trägt die Cent-Zahl
mit „Übernehmen“ ins Betragsfeld ein. Beträge, die sich nicht mehr exakt als
Cent-Zahl darstellen lassen, werden mit einem Hinweis abgelehnt. Notizen werden
immer als Text angezeigt; ein Test prüft, dass HTML darin nicht ausgeführt wird.

„Bearbeiten“ bei einem Eintrag öffnet ein vorausgefülltes Formular direkt in der
Übersicht. Speichern aktualisiert denselben Eintrag sowie Summen und Diagramm,
Abbrechen verwirft den Entwurf. Der Zeitraumfilter bleibt erhalten; fällt das
geänderte Datum aus der Auswahl, weist die Speicherbestätigung darauf hin.
Anlegen und Bearbeiten verwenden dieselbe Formular-Komponente und Validierung.
Tests prüfen auch Abbrechen, Typwechsel, ungültige Eingaben, entfernte Kategorien
und den Erhalt ausgeblendeter Transaktionen.

Notizen sind auf 100 Zeichen und Kategorienamen auf 40 Zeichen begrenzt.
Die Grenzen gelten beim Anlegen, Bearbeiten und Umbenennen. Gezählt wird die
JavaScript-Stringlänge der Eingabe vor dem Trimmen. Zeichenzähler zeigen die
Grenze; Überschreitungen werden mit einer Fehlermeldung abgelehnt, nicht gekürzt.
Grenzwerttests prüfen jeweils eine Stelle darunter, genau die Grenze und eine
Stelle darüber.

Auf Smartphones stehen die Transaktionsdetails über Betrag und Löschaktion,
damit Beschreibungen ausreichend Platz haben. Die Transaktionen sind als
semantische Liste ausgezeichnet; Löschbuttons benennen für Screenreader den
Eintrag mit Datum und Betrag. Eine Textlegende zeigt die Kategorie-Beträge
dauerhaft an, unabhängig vom Diagramm-Tooltip.

Kategorien dienen nur zum Gruppieren von Einnahmen und Ausgaben. Sie lassen sich
anlegen, umbenennen und löschen. Eine Kategorie, die noch von Transaktionen
verwendet wird, lässt sich nicht löschen; ein Hinweis nennt die Anzahl der
betroffenen Transaktionen. Monatsbudgets, Budgetfelder, Monatswähler und
Budgetwarnungen sind bewusst nicht Teil der aktuellen Version (Entscheidung
23.10.2026). Eine spätere Budgetfunktion wird erst nach erneuter Entscheidung geplant.
