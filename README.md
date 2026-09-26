# Route 4T — v2.29 SAMSUNG-MOBILE POPUP QA BUILD

Built directly from v2.28. Puzzle data, scoring, storage keys, answer validation,
surrender logic, date logic, and all-exits QA visibility are otherwise unchanged.

## Surgical fixes in v2.29
- First mobile wrong-answer popup is anchored to the TOP of the currently visible
  browser viewport instead of depending on the keyboard's final height.
- Uses `visualViewport` when available, with a safe fixed-top fallback.
- After OK, an invisible 620 ms acknowledgement shield remains above the puzzle.
- A matching global capture guard swallows delayed/synthetic pointer/click events
  during that interval so the OK tap cannot fall through to HOME/SUBMIT.
- Third-wrong-answer surrender transition waits until the acknowledgement shield
  has expired, then uses the existing v2.16 surrender guard.
- Attempts 2/3 keep the existing proven placement model.

## Welcome screen carried forward
- Uses the approved full scenic Route 4T poster as the overall welcome artwork.
- The Cybertruck/Mika panel is overlaid with the ORIGINAL uploaded photo
  (`20260110_103317.jpg`) copied byte-for-byte as `welcome-mika.jpg`.
- The rendered button is a transparent live hit target; game HOME behavior is unchanged.

## QA note
- EXIT 0 through EXIT 40 remain visible in this QA build.
- This is NOT the date-gated launch build.
- Test priority: Samsung Internet + Samsung Keyboard, then a quick Chrome regression.

Cache/service-worker version: v229.
