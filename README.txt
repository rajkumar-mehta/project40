MIKA'S 40 SECRETS — v0.6

Implemented in this build
-------------------------
1. Newest visible secret appears first.
2. Future secrets are completely hidden until their assigned date.
3. Missed secrets remain visible and playable.
4. Red closed padlock = available but unsolved.
5. Green open padlock = completed (solved or surrendered); surrender still shows the white flag state.
6. Better riddle line breaks and balanced reading width.
7. Removed autofocus / mobile keyboard jump.
8. Added gentle bouncing chevron + "Continue to answer"; tap to smooth-scroll.
9. Current Streak + Best Streak.
10. Missed days do not break streak; surrender resets Current Streak.
11. Responsive sizing for phone, tablet, laptop, desktop, portrait, landscape.
12. Extra safeguards for phone browsers using "Desktop site" mode.
13. Uses broadly supported HTML/CSS/JS for Chrome, Samsung Internet, Edge, Firefox, Safari.
14. YouTube still opens separately so the game remains open.
15. Existing 4-attempt, random wrong-message, auto-clear, surrender and HOME flows preserved.

IMPORTANT — Cross-device sync
-----------------------------
Progress is STILL stored locally in the browser in v0.6.
A true laptop ↔ phone sync needs a small cloud database/backend and cannot be safely faked in a static GitHub Pages build.
So a score recorded on one browser/device will not yet appear on another.
This is the remaining architecture item for a later build before production.

TEST MODE
---------
This build defaults to a simulated date of 2026-10-02 so Secrets 40–35 are visible.
You can test date behavior using the URL:
  ?testDate=2026-09-27   -> only Secret 40
  ?testDate=2026-09-28   -> Secrets 39 and 40
  ?testDate=2026-09-30   -> Secrets 37, 38, 39, 40
  ?testDate=2026-10-02   -> Secrets 35 through 40

Production will set TEST_MODE=false in app.js, which uses the device's actual local calendar date.

Upload ALL files to GitHub and let Pages redeploy.
