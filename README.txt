MIKA'S 40 SECRETS — v0.7

v0.7 fixes
----------
1. Newest secret ordering is now deterministic across browsers:
   Sep 30 => 37, 38, 39, 40
   Oct 2  => 35, 36, 37, 38, 39, 40
2. Card state icons no longer use OS/browser-colored emoji.
   Available/unsolved = RED closed padlock.
   Solved = GREEN open padlock.
   Surrendered = WHITE FLAG replacing the padlock completely.
3. Solved status text remains at the bottom of the card and shows the attempt count.
4. Surrendered cards show "THE MYSTERY WON THIS ONE" and a white flag at top-right.
5. Lock/flag icons have no misleading animation.
6. Added a small TODAY chip for the current simulated/real date.
7. Stronger cache protection:
   - versioned app.js/styles.css references
   - service worker cache bumped to mikas-40-secrets-v07
   - app shell/code use network-first/no-store behavior
8. Existing v0.6 behavior retained:
   future secrets hidden, missed secrets playable, no autofocus jump,
   Continue-to-answer cue, streak counters, responsive/browser-agnostic layout.

IMPORTANT
---------
Cross-device game progress is still browser-local in this build.
True phone/laptop progress sync still requires a cloud backend.

TEST MODE
---------
Default simulated date: 2026-10-02

Full test URLs after GitHub upload:
https://rajkumar-mehta.github.io/project40/?v=7
https://rajkumar-mehta.github.io/project40/?v=7&testDate=2026-09-30
https://rajkumar-mehta.github.io/project40/?v=7&testDate=2026-10-02

Upload all files to the repository root and let GitHub Pages redeploy.
