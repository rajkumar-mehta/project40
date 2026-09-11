PROJECT 40 v2.3
Canonical source: v2.2, incorporating MAIN CHAT QA feedback.

Changes:
- Preserved confirmed scoreboard alignment.
- Applied locked EXIT card direction: black card, neon-green border/status, gold EXIT label, A3 modern white exit number centered in green square.
- Applied airport split-flap treatment only to scoreboard digits.
- Deterministic centering for desktop/mobile surprise CTAs.
- Fixed phone portrait home scrolling: branding/intro scroll naturally; scoreboard and YOUR EXITS sticky; no frozen whole page or nested EXIT scrollbar.
- Preserved landscape home behavior.
- Wrong-answer popup positioned inside the Visual Viewport above the soft keyboard, with compact sizing so OK remains visible.
- Popup refreshed on every failed attempt; third failure transitions to surrender popup while keeping keyboard focus behavior.
- Cache/service-worker version bumped to v23.
