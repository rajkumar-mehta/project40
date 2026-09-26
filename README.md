# Route 4T — v2.32 AUTUMN THEME QA BUILD

Built from the proven v2.31/v2.30 gameplay baseline. Puzzle logic, three-attempt
flow, popup keyboard protection, anti-ghost-tap shield, surrender flow, scoring,
storage keys, completed-EXIT immutability, YouTube-app launch behavior, puzzle
content and YT mappings are carried forward.

## v2.32 visual changes
- New autumn/fall visual direction across WELCOME and GAME HOME.
- WELCOME starts with the user-supplied fall Cybertruck/Mika image. The exact
  uploaded PNG bytes are included as `welcome-mika-fall.png`; no face retouching
  or recompression is applied.
- Route 4T / Mika's Journey artwork uses the approved fall road theme.
- Copy now uses the approved game message and **RULES of the ROAD** wording.
- HONK sign replaces the old ENTER button. Tapping it plays a short horn sound,
  gives a press animation, then enters the existing GAME HOME.
- GAME HOME no longer uses the black/full-moon theme. It uses the fall road theme.
- Scoreboard restyled to the approved wood/brass direction while preserving all
  live values. Bottom stat strip prominently shows Solved, White Flags, First-Try,
  Current Streak and Best Streak.
- EXIT tiles are now solid sign-style cards rather than repeating scenic photos.
- Green open locks indicate available/solved states; red closed locks indicate
  future locked states in this all-exits QA build. Future EXITs remain tappable
  only because QA_SHOW_ALL_EXITS is enabled.
- Portrait scoreboard freeze behavior is preserved.

## QA note
- EXIT 0 through EXIT 40 remain visible/tappable for testing.
- This is NOT the date-gated launch build.
- Cache/service-worker version: v232.
