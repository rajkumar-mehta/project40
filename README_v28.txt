ROUTE 4T / PROJECT 40 — v2.8

Focused mobile popup stability build.

Changes from v2.7:
- Removed repeated live repositioning of wrong-answer/surrender popups while Android/SwiftKey visualViewport settles.
- Popup is measured invisibly and revealed only once at its final coordinate above the keyboard.
- Once placed, visualViewport resize/scroll noise can no longer move the visible popup, eliminating flicker.
- Popup animations/transitions explicitly disabled.
- Preserves keyboard-open flow, modal shield, puzzle state protection, Yellow → Lavender → Green sequence, banner/scoreboard freezing, banner crop, and locked EXIT-card styling.
- Service-worker/cache bumped to v28.
