# Route 4T — v2.30 SAMSUNG-MOBILE REFINEMENT QA BUILD

Built directly from v2.29. All puzzle/YT content, scoring, storage keys, answer
validation, surrender flow, date logic, and all-exits QA visibility are carried forward.

## Focused v2.30 changes
- Green, Purple, and Red wrong-answer popups now use the SAME top-of-visible-viewport
  anchor on mobile; keyboard can remain open for all three.
- Existing 620 ms post-OK touch shield is preserved.
- Android YouTube buttons now explicitly request the installed YouTube app using an
  Android intent, with a normal YouTube web URL as fallback.
- Mobile question text/padding is reduced slightly; photo clue frame is 92% width to
  reduce puzzle-card height while preserving the 4:3 contain/no-crop behavior.
- Welcome page uses a cooler/less-golden poster treatment.
- ENTER is now a real visible raised blue road-style button with press feedback.
- The Mika/Cybertruck photo remains the original uploaded photo byte-for-byte.

## QA note
- EXIT 0 through EXIT 40 remain visible for testing.
- This is NOT the date-gated launch build.
- Priority validation: Samsung Internet + Samsung Keyboard.

Cache/service-worker version: v230.
