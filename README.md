# Route 4T — v2.27 ALL-EXITS QA BUILD

Built from the tested v2.26 all-exits QA build.

## What changed in v2.27
- Refreshed ONLY the YouTube/content attribution mapping from the latest uploaded `YT URL.xlsx`.
- EXIT 0 through EXIT 40 remain available in this QA build for full testing.
- Gameplay, attempts, scoreboard, popup, surrender, storage, navigation, puzzle and photo logic were not intentionally changed.
- The uploaded spreadsheet itself is intentionally NOT shipped in the public site package.
- Current TBD video exits: 25, 26, 27, 36, 40. Those continue to use the existing VIDEO COMING SOON behavior.

## QA / launch note
`QA_SHOW_ALL_EXITS = true` intentionally exposes EXIT 0–40 for this QA build. It must not be used as the final date-gated launch setting.

## Progress/reset protections inherited from v2.26
- No visible reset/test footer.
- No testDate/testTime query overrides.
- Normal navigation does not overwrite a completed EXIT outcome.
- Wrong-attempt state persists on the same browser/device.
- Existing progress-storage keys remain unchanged so deploying this build does not intentionally reset current test progress.

Cache/service-worker version: v227.
