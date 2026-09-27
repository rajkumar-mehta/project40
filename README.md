# Route 4T v2.39 — Cache/Version Synchronization QA Build

Built directly from v2.38. No visual redesign or gameplay/content changes.

Critical fix:
- Every live bundle reference now uses v239 consistently.
- index.html loads styles.css?v=239 and app.js?v=239.
- app.js registers sw.js?v=239.
- service worker cache is mikas-40-exits-v239 and pre-caches the v239 CSS/JS URLs.
- Old Route 4T caches are deleted during service-worker activation.

Carried forward unchanged from v2.38:
- User-supplied 20201106_140331.jpg as welcome-mika-new.jpg, no filters.
- Mobile portrait scoreboard + YOUR EXITS fixed/frozen while only EXIT grid scrolls.
- 4T U.S.-route shield pure white with black 4T letters.
- Rectangular EXIT tile proportions, larger EXIT label, smaller EXIT number.
- All EXIT 0–40 visible for QA, date gating OFF, sequential progression ON.
- Completed EXIT read-only revisit flow.
- Mika/Raj profile isolation, Formspree email behavior, latest content, and horn preserved.
