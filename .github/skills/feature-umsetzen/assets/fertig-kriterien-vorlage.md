# Fertig-Kriterien: <Name der Funktion>

**Nutzerziel:** Als Nutzerin möchte ich …, damit …

**Abschnitt in der Spezifikation:** <Überschrift oder Zeile>

## Fertig, wenn …

| # | Ausgangslage | Aktion | Erwartetes Ergebnis | Prüfung |
|---|--------------|--------|---------------------|---------|
| 1 | Normalfall: … | … | … | Test / Browser |
| 2 | Grenzfall: … | … | … | Test |
| 3 | Ungültige Eingabe: … | … | Fehlermeldung „…“, nichts gespeichert | Test |
| 4 | Abbrechen / Leerzustand: … | … | … | Test |

## Bewusst nicht enthalten

- …

## Offene Entscheidungen

- [ ] …

---

**Beispiel (FinTrack, 23.10.2026):**

| # | Ausgangslage | Aktion | Erwartetes Ergebnis | Prüfung |
|---|--------------|--------|---------------------|---------|
| 1 | „Essen“ wird von 1 Transaktion verwendet | „Löschen“ bei „Essen“ | Hinweis „Diese Kategorie wird noch von 1 Transaktion verwendet.“; Kategorie bleibt | Test |
| 2 | „Essen“ wird von 2 Transaktionen verwendet | „Löschen“ | Hinweis nennt „2 Transaktionen“ | Test |
| 3 | Keine Transaktion verwendet „Essen“ | „Löschen“ | Kategorie verschwindet aus der Liste | Test |
