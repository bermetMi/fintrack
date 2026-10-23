---
description: "Abendlichen Lern-Log-Eintrag schreiben"
agent: "agent"
---

# Lern-Log-Eintrag für heute

Schreibe einen kurzen Eintrag für heute in `docs/lernen/LERNLOG.md`. Antworte auf Deutsch in sehr einfacher Sprache.

## Ablauf (in dieser Reihenfolge)

1. Lies die Commits von heute mit `git log --since=midnight --format="%h %s"` und die Änderungen mit `git show --stat`.
2. Stelle mir 2 bis 3 Verständnisfragen zu dem, was heute gemacht wurde. Warte auf meine Antworten. Schreibe noch nichts in die Datei.
3. Prüfe meine Antworten. Wenn eine Antwort falsch oder unvollständig ist, erkläre es kurz und frage noch einmal.
4. Erst danach: Hänge den Eintrag **am Ende** von `docs/lernen/LERNLOG.md` an. Ändere bestehende Einträge nicht.

## Format des Eintrags

```
## <Wochentag> <TT.MM.JJJJ> – <Thema in wenigen Worten>

<Maximal 3 einfache Sätze: Was wurde gemacht und warum.>

**Verstanden (in eigenen Worten):** <nur meine Antworten aus Schritt 2>

**Commit:** <Kurz-Hash der letzten Commits von heute>
```

## Regeln

- Unter "Verstanden" steht nur, was ich in eigenen Worten richtig erklärt habe. Rate nie.
- Gibt es heute keine Commits, sage es mir und frage, was ich gemacht habe.
- Schreibe keine langen Listen. Halte dich an die 3 Sätze.
