Route 4T / Project 40 v2.9

Mobile error-modal containment fix:
- Popup backdrop is sized to the browser visualViewport, not the document/page.
- Error popup is flex-anchored inside the visible viewport above the soft keyboard.
- OK button remains inside the modal and visible.
- Keyboard open/close updates the viewport container without moving the modal into page flow.
- Preserves Yellow > Lavender > Green sequence and all locked banner/scoreboard behavior.
