# Route 4T — v2.31 WELCOME-PAGE REFINEMENT QA BUILD

Built directly from v2.30. Gameplay code, popup behavior, YouTube app handling,
scoring, storage keys, answer validation, surrender flow, latest puzzle/YT data,
and all-exits QA visibility are carried forward unchanged.

## Focused v2.31 changes
- Removed the baked-in decorative ENTER button from the rendered poster by splitting
  the welcome artwork before that region. There is now only ONE visible/live button.
- New ENTER button is a raised green highway-sign control with double white border,
  depth/shadow, arrow block, and pressed/tap feedback.
- Mika/Cybertruck uses a crop taken directly from the original uploaded photo.
  No AI-modified Mika image is used; only excess lower parking-lot detail was cropped.
- The photo panel is shorter/wider, allowing more of the winding-road scenery to remain visible.
- Rule of the Road artwork/copy is unchanged.
- v2.30 gameplay fixes are untouched.

## QA note
- EXIT 0 through EXIT 40 remain visible for testing.
- This is NOT the date-gated launch build.

Cache/service-worker version: v231.
