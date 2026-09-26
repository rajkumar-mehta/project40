# Route 4T — v2.28 ALL-EXITS QA BUILD

Built from the tested v2.27 all-exits QA baseline.

## What changed in v2.28
- Refreshed YouTube/person mappings from the latest `YT URL(2).xlsx`.
- Updated puzzle content from the same latest workbook where a new question/answer was supplied.
- Current updated puzzle-content exits include EXIT 23, 24, 26 and revised wording on EXIT 31.
- EXIT 27 now has its newly supplied YouTube URL.
- Current TBD video exits: 25, 26, 36, 40.
- EXIT 0 through EXIT 40 remain available in this QA build for full testing.

## Welcome screen
- Mobile-first Route 4T highway-sign header based on the approved mockup.
- Uses the ORIGINAL uploaded Cybertruck/Mika photo (`20260110_103317.jpg`) copied byte-for-byte as `welcome-mika.jpg`; no AI-rendered Mika image is used.
- Concise Rule of the Road box.
- Road/highway-style ENTER button.
- Existing in-game HOME behavior is unchanged: HOME returns to the scoreboard/EXIT screen, not the welcome screen.

## Gameplay protections carried forward
- No visible reset/test footer.
- No testDate/testTime URL overrides.
- Completed EXIT outcomes remain immutable through normal app behavior.
- Wrong-attempt state persists on the same browser/device.
- Existing progress-storage keys are unchanged, so deploying this build does not intentionally reset prior test progress.
- Puzzle definitions are frozen at runtime.
- Persistent browser storage is requested when supported.

## QA / launch note
`QA_SHOW_ALL_EXITS = true` intentionally exposes EXIT 0–40 for this QA build.
Do not use this setting for the final date-gated launch build.

The spreadsheet itself is intentionally NOT shipped in the public website package.

Cache/service-worker version: v228.
