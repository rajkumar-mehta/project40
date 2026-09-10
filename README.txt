PROJECT 40 — v1.7

Built directly from v1.6.

MOBILE-FIRST CHANGES
- Rebuilt the phone home screen as a fixed app viewport using 100dvh.
- Removed the page-scroll + card-scroll handoff on phones.
- Scoreboard and YOUR EXITS now remain stable.
- Only the EXIT-card pane scrolls on mobile.
- The masthead/title gently collapses once the EXIT pane starts scrolling, giving more card space without making the dashboard jump.
- Scoreboard is more compact on phones.
- Android/iPhone safe-area and dynamic browser-bar sizing are accounted for.
- Touch scrolling uses momentum scrolling and overscroll containment.

EXIT 0 CELEBRATION FIX
- Birthday celebration no longer disappears when prefers-reduced-motion is enabled.
- Reduced-motion devices receive a gentler celebration instead.
- Celebration layer is moved directly under the document body to prevent mobile clipping during screen transitions.
- Confetti/balloons render above the background while finale content remains above the effects.
- Slight launch delay avoids the fade-in transform interfering with fixed-position animation.
- Increased mobile-safe confetti/balloon visibility.

PRESERVED
- All v1.6 title/intro wording and styling.
- EXIT logic, scoring, surrender behavior, replay behavior, gift screens, date filtering and localStorage behavior.
- No answer-matching changes.

TEST URL AFTER DEPLOYMENT
https://rajkumar-mehta.github.io/project40/?v=17&testDate=1106
