---
description: "Help with Fintrack development tasks"
---

# FinTrack Development Helper

When helping with FinTrack:

- Always explain in German (if user writes German)
- Follow the authoritative plan in `docs/fintrack-spezifikation.md` and the current
  learning status in `docs/lernen/LERNLOG.md` (code in client/, server/, lernen/)
- For money amounts: always use amountCents (Cent, not Euro)
- No TypeScript yet (plain JavaScript)
- Every change should include a reason why

## Common Tasks

- Adding features: explain what it does, show tests
- Debugging: read errors, fix, verify with browser
- Code review: check for unused variables, naming, structure
