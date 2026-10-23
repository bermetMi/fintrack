#!/usr/bin/env bash
# Führt die Standardprüfungen des Frontends aus und bricht beim ersten Fehler ab.
set -euo pipefail

cd "$(git rev-parse --show-toplevel)/client"

echo "== Tests =="
npm test

echo "== Lint =="
npm run lint

echo "== Build =="
npm run build

echo "Alle Prüfungen erfolgreich."
