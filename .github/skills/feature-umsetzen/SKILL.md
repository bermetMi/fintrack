---
name: feature-umsetzen
description: 'Setzt ein FinTrack-Feature oder eine Änderung spezifikationsgetrieben um: Spezifikation lesen, Fertig-Kriterien formulieren, umsetzen, testen, Spezifikation und Lernlog nachführen. Use when: neues Feature, Funktion ändern, Anforderung umsetzen, Fertig-Kriterien, spec-driven, implement feature.'
argument-hint: 'Welche Funktion soll umgesetzt oder geändert werden?'
---

# Feature spezifikationsgetrieben umsetzen

Wiederkehrender Ablauf für jede neue Funktion oder Verhaltensänderung in FinTrack.
Ziel: Code, Tests und Spezifikation stimmen am Ende überein.

## Wann verwenden

- Eine neue Funktion soll gebaut werden.
- Bestehendes Verhalten soll sich ändern.
- Nicht für reine Erklärungen, Lernübungen oder Fragen ohne Umsetzungsauftrag.

## Grenzen

- Die Rechte des aufrufenden Agenten gelten weiter. Darf er keinen Code ändern,
  endet der Ablauf nach Schritt 3 mit den Fertig-Kriterien als Vorschlag.
- Keine Produktentscheidung erfinden. Fehlt eine Entscheidung, nachfragen und warten.
- Bei Lernübungen nur Hinweise geben, keine fertige Lösung.
- Kein Commit oder Push ohne ausdrücklichen Auftrag.

## Ablauf

1. **Spezifikation lesen:** [Spezifikation](../../../docs/fintrack-spezifikation.md)
   und die letzten Einträge im [Lernlog](../../../docs/lernen/LERNLOG.md).
   Den betroffenen Abschnitt benennen. Spätere datierte Entscheidungen gelten
   vor früheren.
2. **Fertig-Kriterien formulieren:** Die [Vorlage](./assets/fertig-kriterien-vorlage.md)
   ausfüllen. Jedes Kriterium muss beobachtbar und prüfbar sein, mit konkreten
   Werten und Grenzfällen.
3. **Offene Entscheidungen klären:** Unklare Punkte als kurze Fragen an die Nutzerin
   stellen. Erst nach Bestätigung weiter.
4. **Spezifikation zuerst nachführen:** Neue oder geänderte Anforderungen mit Datum
   in die Spezifikation eintragen, bevor Code geändert wird.
5. **Umsetzen:** Kleinste passende Änderung. Bestehende Funktionen, Formulare und
   Berechnungen wiederverwenden. Geldbeträge als Integer in Cent, nie runden.
6. **Testen:** Für jedes Fertig-Kriterium mindestens einen Test ergänzen,
   bei Grenzen auch darunter, genau auf und über der Grenze.
7. **Prüfen:** [Prüfskript](./scripts/pruefen.sh) mit `bash` ausführen (Tests,
   Lint, Build). Fehler beheben und erneut prüfen.
8. **Abgleich:** Jedes Fertig-Kriterium als erfüllt, nicht erfüllt oder nicht geprüft
   markieren. Erfüllt nur mit Beleg (Test, Prüfausgabe oder Browserprüfung).
9. **Lernlog ergänzen:** Was umgesetzt und geprüft wurde. Unter „Verstanden“ nur
   eintragen, was die Nutzerin in eigenen Worten erklärt hat.

## Ergebnis

Kurz auf Deutsch berichten:
- Fertig-Kriterien mit Status
- Geänderte Dateien und das Warum
- Ausgeführte Prüfungen und verbleibende Einschränkungen
- Eine Verständnisfrage an die Nutzerin zur Umsetzung
