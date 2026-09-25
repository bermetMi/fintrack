# Zertifizierung – Lern-Log (neueste Einträge oben)

## Fr 25.09.2026 – Neustart, Modul 1: MSO Foundations ✅

**Entscheidung:** Zertifizierung komplett neu begonnen, weil nicht mehr klar war, was bisher wirklich verstanden wurde.

### Gemacht
- Modul 1 (MSO Foundations) komplett durchgearbeitet
- Modul-Quiz im Kurs: 4 von 4 (nach einem Versuch mit 3/4)
- Eigener Quiz zu Tokens/Context Window/Sampling: 7 von 7
- Eigener Quiz zu Prompting-Modi: 6 von 6

### Verstanden
- **Modellauswahl:** Haiku (klein, günstig) → Sonnet (Mitte) → Opus (stark, teuer). Erst kleinstes Modell testen, nur bei Bedarf hochgehen. Nicht jede Aufgabe braucht überhaupt KI.
- **Tokens:** die Abrechnungs- und Zähleinheit für alles (Prompt, Verlauf, Tools, Antwort)
- **Context Window:** festes Budget pro Anfrage. Zu groß von Anfang an → Fehler vor Start. Wird während der Antwort voll → abgeschnittene Antwort (`model_context_window_exceeded`), kein Fehler.
- **Sampling:** Claude würfelt das nächste Wort anhand von Wahrscheinlichkeiten, passiert immer.
- **Temperature:** Regler für "mutig vs. vorsichtig". Bei alten Modellen frei einstellbar, bei neuesten Modellen nur der Standardwert (1.0) erlaubt, sonst 400-Fehler. Individuelles Verhalten dann über den Prompt-Text statt über den Parameter.
- **Non-Determinism:** gleiche Frage kann unterschiedliche Antworten geben. Tests prüfen deshalb Eigenschaften (Feld vorhanden, Struktur korrekt), nicht exakten Wortlaut.
- **Zero-/One-/Multi-Shot:** wie viele Beispiele man in den Prompt packt. Kein Training, nur Beispiele für DIESE eine Anfrage. Kosten Tokens bei jedem Call. Faustregel: so wenig wie möglich, so viel wie nötig.
- **Modellwahl und Beispielanzahl hängen zusammen:** ein stärkeres Modell braucht oft weniger/keine Beispiele, ein kleines Modell kann durch Beispiele oft nachziehen.
- **SDK vs. Raw REST:** beide sprechen dieselbe API, SDK nimmt nur Arbeit ab.
- **Synchronous vs. Streaming:** ganze Antwort auf einmal vs. Stück für Stück. Getrennt davon: **Async/Await vs. Batches API** (blockiert mein Code beim Warten? / eine Anfrage vs. Tausende auf einmal, günstiger, aber bis 24 Std. Wartezeit).
- **Reasoning Modes:** eigene, dritte Einstellung, unabhängig von Modellwahl. Lohnt sich bei komplexen, mehrstufigen Aufgaben, nicht bei einfacher Klassifikation (wie FinTrack-Kategorie-Vorschlag → hier: aus).

### Was mehrere Anläufe brauchte
- Temperature: anfangs verwechselt mit Sampling, unsicher ob API-Feld oder Prompt-Text. Am Ende richtig verstanden.
- Async/Await vs. Batches API: erst nach Pizza-Beispiel klar geworden.
- → In ein paar Tagen kurz wiederholen, ohne komplett neu zu lernen.

### Noch offen
- [ ] Wo API-Key herbekommen, Einrichtung (erst wenn eigener Rechner da ist)

### Morgen/Nächstes Mal
Modul 2: Production-Grade Prompting, Agents & Tool Use (209 Min)

### Commit
`Zertifizierung Neustart: Modul 1 (MSO Foundations) abgeschlossen`

