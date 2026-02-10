# BG ProAir Interactive Training Quiz

An interactive, client‑side training quiz for the BG‑ProAir apparatus. Includes randomized statement questions, technical‑term blanking, synonymous distractors, parts‑diagram preview with highlight, and per‑question timers.

## Quick Start
1. Open **index.html** in a modern browser (Chrome, Edge, Firefox).
2. Place **BG‑ProAir Parts Blank.pdf** inside **/assets/pdf/**.
3. Click **Start Test** to begin.

## Project Structure
```
BG-ProAir-Interactive-Quiz/
├─ index.html                 # App entry (v10)
├─ README.md
├─ LICENSE                    # MIT (customize if needed)
├─ assets/
│  └─ pdf/
│     └─ BG-ProAir Parts Blank.pdf  # ← add this file here
└─ versions/
   └─ (optional older builds)
```

## GitHub Pages
Enable **Settings → Pages → Deploy from branch → main → /(root)**. Your app will be served from:
```
https://<your-username>.github.io/BG-ProAir-Interactive-Quiz
```

## Notes
- The statements (77) are embedded in `index.html`.
- Technical‑noun blanking and synonymous distractors are enabled by default.
- No server required; everything runs in the browser.
