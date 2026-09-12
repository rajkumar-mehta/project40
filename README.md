# Route 4T / Project 40

Single consolidated development README. Historical per-build README files were merged starting with v2.12.

## v2.12

- Reworked mobile wrong-answer modal positioning using `visualViewport.pageTop/pageLeft` document coordinates rather than a fixed top-of-layout-viewport position.
- Error modal is centered inside the currently visible browser area, so the keyboard cannot hide the message or OK button.
- Viewport updates are debounced to avoid the earlier flicker while Android/SwiftKey settles.
- Answer editing remains blocked until OK is acknowledged, while the keyboard can stay open.
- Preserves the locked Yellow → Lavender → Green sequence, banner/scoreboard freezing, banner crop, and EXIT-card design.
- Service-worker/cache version bumped to v212.

## v2.0

Built directly from canonical v1.8.

Merged approved changes:
- Selected Option 6 handwritten Project 40 header with sparkles.
- More space between Project 40 and MIKA’S JOURNEY.
- Subtitle: MIKA’S JOURNEY / with 40 EXITS (italic dark purple second line).
- Larger journey-intro copy.
- Mobile true frozen scoreboard frame; only EXIT cards scroll.
- Desktop opaque score/header frame prevents cards showing behind it.
- Laptop QR reduced to ~132px.
- Phone QR hidden portrait + landscape.
- VisualViewport answer-field positioning above keyboard.
- Mobile wrong-answer popup above keyboard with OK.
- Long surrender answers auto-scale/wrap.
- 3 total attempts before surrender.

Full test URL:
https://rajkumar-mehta.github.io/project40/?v=20&testDate=1106

## v2.1

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

## v2.2

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

## v2.3

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

## v2.4

Built from v2.3 with v2.3 QA feedback applied.

Changes:
- Preserved locked black/neon EXIT card design and A3 modern exit-number digits.
- Changed only the EXIT word on cards from gold/yellow to white.
- Preserved airport split-flap styling only for scoreboard score digits.
- Added header spacing so the descender of the j in Project no longer overlaps MIKA'S JOURNEY on laptop or mobile.
- Increased laptop MIKA / VS. / THE MYSTERY scoreboard label size while preserving alignment.
- Hardened portrait-only scoreboard freeze without changing mobile landscape behavior.
- Kept successful keyboard-open wrong-answer UX; fixed intermittent missing second-attempt popup with deterministic acknowledgement/state handling.
- Wrong-answer popup recolored to a distinct pastel-lavender family; SAVE ME styling remains unchanged.
- Hardened laptop/mobile surprise CTA centering.
- Cache/service worker bumped to v24.

## v2.5

Changes from v2.4:
- Locked Route 4T scenic header visual applied (moon, mountains, winding two-lane road, double-yellow line, road sign).
- Header descender clipping hardened.
- Mobile MIKA / VS. / THE MYSTERY labels enlarged.
- EXIT card locked design retained with white EXIT text.
- Airport split-flap style retained only for scoreboard digits.
- Wrong-answer popup messages shortened for keyboard-safe height.
- Attempt colors: 1 pastel yellow, 2 pastel lavender, 3 pastel green.
- Wrong-answer popup attempt state hardened to reduce intermittent missing second popup.
- Portrait score-only freeze retained; landscape rules untouched.
- Cache bumped to v25.

## v2.6

Changes from v2.5:
- Removed duplicate HTML title/subtitle/intro overlay from scenic Route 4T banner.
- Full scenic banner is preserved on portrait mobile so moon and 40 / AMAZING DAYS AHEAD sign remain visible.
- Masks the embedded “Small Puzzles Brighter Days” copy at lower-left of banner.
- Preserves approved larger mobile MIKA / VS. / THE MYSTERY labels.
- Wrong-answer popup reliability rewritten: every failed attempt creates a fresh dialog instance and blocks the next submission until acknowledged.
- Preserves approved popup sequence: attempt 1 Pastel Yellow, attempt 2 Pastel Lavender, attempt 3 Pastel Green.
- Preserves keyboard-open/no-jump behavior and shortened wrong-answer messages.
- Cache/service-worker version bumped to v26.

## v2.7

Changes from v2.6:
- Restored the moon in the Route 4T banner.
- Removed “Small Puzzles Brighter Days” directly from the banner artwork.
- Preserved the approved mobile banner crop, 40 road sign, sticky banner and sticky scoreboard behavior.
- Preserved larger mobile MIKA / VS. / THE MYSTERY labels and locked EXIT-card styling.
- Preserved Yellow -> Lavender -> Green wrong-answer popup sequence.
- Shortened all random wrong-answer messages.
- Added a modal interaction shield so keyboard/viewport changes cannot trigger HOME or underlying controls.
- Added a minimum popup-visible interval to prevent ghost/replayed taps from instantly acknowledging a popup.
- Repositioned popups against VisualViewport so the OK button remains above the soft keyboard.
- Added repeated viewport-positioning checks during keyboard transitions.
- Service-worker/cache bumped to v27.

## v2.8

Focused mobile popup stability build.

Changes from v2.7:
- Removed repeated live repositioning of wrong-answer/surrender popups while Android/SwiftKey visualViewport settles.
- Popup is measured invisibly and revealed only once at its final coordinate above the keyboard.
- Once placed, visualViewport resize/scroll noise can no longer move the visible popup, eliminating flicker.
- Popup animations/transitions explicitly disabled.
- Preserves keyboard-open flow, modal shield, puzzle state protection, Yellow → Lavender → Green sequence, banner/scoreboard freezing, banner crop, and locked EXIT-card styling.
- Service-worker/cache bumped to v28.

## v2.9

Mobile error-modal containment fix:
- Popup backdrop is sized to the browser visualViewport, not the document/page.
- Error popup is flex-anchored inside the visible viewport above the soft keyboard.
- OK button remains inside the modal and visible.
- Keyboard open/close updates the viewport container without moving the modal into page flow.
- Preserves Yellow > Lavender > Green sequence and all locked banner/scoreboard behavior.

## v2.10

Mobile popup input-lock fix:
- While a wrong-answer or surrender popup is visible, the answer field remains focused so the keyboard can stay open, but all typing/paste/drop/composition edits are blocked.
- The field unlocks only after the popup OK button is acknowledged.
- Includes an input-event fallback for mobile IMEs that bypass beforeinput.
- Preserves v2.9 visual-viewport popup containment and all locked banner/scoreboard behavior.

## v2.11

Mobile error-popup fail-safe fix:
- Popup is anchored near the top of the visible browser area instead of the keyboard/page bottom.
- OK remains visible whether the keyboard is open or closed.
- Answer editing remains blocked until OK is acknowledged.
- Existing banner/scoreboard sticky behavior and Yellow/Lavender/Green sequence are preserved.
