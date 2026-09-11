PROJECT 40 — v1.10

Canonical baseline:
- Built directly from the uploaded MAIN CHAT v1.8 ZIP.
- The unshipped v1.9 ZIP is intentionally ignored as a baseline.
- v1.9 visual concepts are merged into v1.10.

Included changes:
1) New Project 40 signature header
   - script/calligraphic Project 40 treatment
   - pink-to-gold gradient
   - sparkle accents
   - compact MIKA’S JOURNEY subtitle

2) Mobile wrong-answer UX
   - answer input is immediately re-focused after a wrong answer
   - wrong text is still cleared
   - preventScroll focus is used to reduce keyboard-driven viewport jumping
   - feedback area gets reserved vertical space on phones

3) Long reveal answers
   - responsive font sizing by answer length
   - wrapping/overflow protection so answers cannot run past the phone edge

4) QR behavior
   - phone detection no longer relies only on portrait viewport width
   - QR sections are hidden on phones in BOTH portrait and landscape
   - laptop/desktop QR behavior remains available

5) Surrender logic
   - total attempts reduced from 4 to 3
   - wrong #1 => 2 remaining
   - wrong #2 => 1 remaining
   - wrong #3 => surrender path

All other v1.8 behavior is intended to remain unchanged.

Test URL after deployment:
https://rajkumar-mehta.github.io/project40/?v=110&testDate=1106
