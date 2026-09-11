PROJECT 40 — v2.1

Built from v2.0 after mobile/laptop testing.

Fixes in this build:
- Selected subtitle Option 5 applied:
    MIKA’S JOURNEY = cinematic spaced champagne serif
    with = lavender script
    40 EXITS = gold serif
- Mobile intro now uses intentional line breaks:
    A 40-DAY JOURNEY HAS BEGUN.
    ONE MYSTERY AWAITS EACH DAY.
    SOLVE THE MYSTERY, UNLOCK EXITS,
    GRAB SURPRISE GIFTS.
- Mobile scrolling changed back to ONE natural scrollbar:
    Project 40/header/intro scroll away normally
    scoreboard becomes sticky when it reaches the top
    YOUR EXITS remains sticky directly below the scoreboard
    EXIT cards continue in the same page scroll
    no nested EXIT scrollbar
- Laptop/desktop gift CTA is now content-width rather than full-width.
- Mobile CTA remains full-width/touch-friendly.
- All other v2.0 logic retained, including:
    3 attempts
    mobile wrong-answer popup
    VisualViewport keyboard handling
    phone QR hidden in portrait/landscape
    long-answer scaling
    compact laptop QR

TEST:
https://rajkumar-mehta.github.io/project40/?v=21&testDate=1106
