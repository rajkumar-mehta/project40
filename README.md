# Route 4T — v2.35 LAUNCH QA BUILD

Built from the v2.34 gameplay baseline with the latest `YT URL(3).xlsx` content and new puzzle photos `Raj-13.jpg` / `Raj-14.jpg`.

## v2.35 QA scope
- EXIT 0–40 remain visible for QA (`QA_SHOW_ALL_EXITS = true`). Final production must switch this to `false`.
- Latest workbook is the content source of truth for questions, Correct Answer, Also Accept values, photo mapping, sender/person and YT URLs.
- Missing/TBD YT URLs: EXIT 25, 26, 36, 40.
- All EXIT 0–40 have a puzzle question and Correct Answer.
- EXIT 39 uses `Raj-13.jpg`; EXIT 40 uses `Raj-14.jpg`.

## Profile isolation
- `?player=Mika` (and no player parameter) uses Mika's existing storage namespace and sends Formspree alerts.
- `?player=Raj` uses separate local progress and does not send Formspree alerts.
- Visual/gameplay experience is otherwise identical.

## UI corrections
- Repeating fall-leaf page background (no stretched Cybertruck/scenery background).
- Scoreboard + YOUR EXITS freeze together on mobile; YOUR EXITS centered full width.
- EXIT tile face uses Route 40 shield + highway EXIT sign; date/status/lock/flag behavior retained.
- Tile surrender status reads `MYSTERY WON`.
- Puzzle/input/success/confirm/result pages use the same lighter fall palette.
- Text input is translucent/inset; primary controls are embossed; HOME is visually secondary.
- Wrong-answer and give-up popups use one cream/rust fall style and one top position.
- Sequence warning copy matches the approved `NOT SO FAST, MIKA !!` wording.
- Reveal answer auto-shrinks to remain one line.
- HONK uses the supplied `car-horn.mp3` file.
