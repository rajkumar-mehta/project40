Route 4T / Project 40 v2.11

Mobile popup input-lock fix:
- While a wrong-answer or surrender popup is visible, the answer field remains focused so the keyboard can stay open, but all typing/paste/drop/composition edits are blocked.
- The field unlocks only after the popup OK button is acknowledged.
- Includes an input-event fallback for mobile IMEs that bypass beforeinput.
- Preserves v2.9 visual-viewport popup containment and all locked banner/scoreboard behavior.
