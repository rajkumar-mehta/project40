# Route 4T — v2.33 FULL FALL + SEQUENTIAL PLAY QA BUILD

Built from v2.32 with the approved gameplay engine preserved and the requested final-theme/notification changes layered on top.

## v2.33 focus
- Continuous fall-road background across Welcome, Game Home, Puzzle, Review, Surrender, Gift, and Finale screens.
- Solid unified green highway EXIT tiles; no pasted-on black status rectangle.
- Green open padlock for playable/solved; red closed padlock for blocked/locked; white flag remains for surrendered exits.
- Wood/brass scoreboard retained with five-stat bottom row: Solved/40, White Flags, First-Try, Current Streak, Best Streak.
- Wrong-answer + surrender popups use one mature autumn color theme and the same top-of-visible-viewport anchor.
- Reveal-answer typography reduced and forced to one line where practical.
- Completed exits are read-only: question + correct answer + locked result, no replay.
- Strict sequential progression: earliest unfinished eligible EXIT must be completed before later EXITs can be played. Catch-up can continue through multiple exits the same day, in order.
- Sequence warning redirects to the required EXIT.
- Formspree notifications to configured endpoint for EXIT opened, each answer submitted, solved, and surrendered; delivery failure never blocks gameplay and pending alerts retry later.
- HONK-only entry sign, smaller/mobile-safe, with deeper semi-truck/train-style synthesized horn.
- YouTube app preference preserved.
- Existing result storage keys and completed-result immutability preserved.

## QA note
- EXIT 0–40 remain visible and date-eligible in this QA build (`QA_SHOW_ALL_EXITS = true`) so sequential progression can be tested immediately.
- Final launch build must switch QA visibility off to restore real date gating/hide future exits.

Cache/service-worker version: v233.
