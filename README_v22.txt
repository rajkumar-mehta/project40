PROJECT 40 — v2.2

Built from canonical v2.1 after laptop + mobile testing feedback in MAIN CHAT.

Fixes in this build:
- Laptop/desktop surprise CTA is horizontally centered.
- Scoreboard alignment rebuilt:
    MIKA directly above her score
    VS. directly above the center dash
    THE MYSTERY directly above its score
- EXIT cards redesigned using the approved highway-sign direction:
    warm serif EXIT label
    clearly boxed numeric EXIT number (EXIT 0 cannot be mistaken for EXIT O)
    green U.S.-highway-sign-inspired card treatment
- Mobile portrait HOME behavior restored to a frozen dashboard:
    Project 40 title/header remains visible
    scoreboard remains visible
    YOUR EXITS remains visible
    only the EXIT cards scroll
    mobile landscape home behavior is intentionally unchanged
- Mobile portrait EXIT 0 birthday-surprise CTA is centered reliably.
- Mobile portrait wrong-answer keyboard flow fixed:
    keyboard stays open after failed attempts
    submit tap avoids transferring focus away from the answer field
    wrong-answer popup remains above keyboard
    no deliberate close/reopen/refocus cycle
- After the 3rd failed attempt on phone:
    wrong-answer popup appears first
    the I GIVE UP surrender message then appears as a second popup
    inline give-up button is not injected below the keyboard
- Mobile landscape puzzle entry receives a compact keyboard-open mode so the
  answer textbox + UNLOCK THE MYSTERY button can remain visible; the approved
  landscape HOME/dashboard behavior is not changed.
- Phone QR remains hidden; laptop QR remains secondary.

TEST EXAMPLES:
?v=22&testDate=1106
?v=22&testDate=0930
