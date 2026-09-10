PROJECT 40 — v1.3

Built from the current GitHub package supplied by the user, preserving manual edits.

v1.3 change:
- Gift screen remains random, but heading and button no longer repeat the same wording:
  1) ENJOY TODAY'S GIFT -> OPEN TODAY'S SURPRISE
  2) OPEN TODAY'S SURPRISE -> GRAB YOUR GIFT
- Existing YOU SOLVED IT! continuity is preserved.
- Surrender behavior is preserved.
- Answer-validation logic is unchanged (accepted-answer variants will be handled later with final riddles).
- Cache/assets bumped to v13.

MIKA'S 40 SECRETS — v1.2

What's new
----------
1. Calendar is now populated all the way from Secret 40 (Sep 27) through Secret 0 (Nov 6).
2. Test URL supports both full dates and MMDD shorthand:
   ?testDate=0930
   ?testDate=1012
   ?testDate=1106
3. On Nov 6 all Secret cards 40 through 0 are available, newest first.
4. Secret 0 is treated as the birthday finale and opens directly to the gift screen.
5. Added TEST MODE button: RESET TEST PROGRESS.
   It clears only this browser's local test progress and immediately redraws the dashboard.
6. Preserves v1.1 behavior:
   - newest secret first
   - future secrets hidden
   - missed secrets remain playable
   - date-filtered scoreboard
   - green open locks / white flags
   - sticky scorecard + YOUR SECRETS
   - only cards scroll
   - correct answer goes directly to gift/surprise
   - random ENJOY TODAY'S GIFT / OPEN TODAY'S SURPRISE
   - gift box visual
   - Current Streak / Best Streak labels
   - browser/device responsive layout

NOTE
----
Secrets 34 through 1 currently contain temporary placeholder riddles and temporary YouTube search links.
They are only there so the complete calendar/date behavior can be tested.
Cross-device progress is still browser-local until a cloud sync backend is added.

Full URLs after deployment
--------------------------
https://rajkumar-mehta.github.io/project40/?v=12
https://rajkumar-mehta.github.io/project40/?v=12&testDate=0930
https://rajkumar-mehta.github.io/project40/?v=12&testDate=1012
https://rajkumar-mehta.github.io/project40/?v=12&testDate=1106
