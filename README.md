# Vince Capin | Software Engineer Portfolio

A responsive, single-page portfolio website designed with a technical "boot log" aesthetic, tailored for a software engineer.

## Concept
Instead of a generic design, this portfolio builds its visual identity from an engineer's daily tools:
- **Hero Section:** An animated terminal window simulating a system boot sequence.
- **Experience:** A vertical timeline styled like a Git log graph.
- **Skills:** Categorized chips resembling PCB solder pads.
- **Contact:** An API-style configuration panel with click-to-copy functionality.

## Tech Stack
- **Structure:** HTML5
- **Styling:** CSS3 (Custom properties, Grid, Flexbox, Clamp for responsiveness)
- **Animation:** Vanilla JavaScript
- **Typography:** 
    - Display: *Space Grotesk*
    - Body: *IBM Plex Sans*
    - Technical/Mono: *IBM Plex Mono*

## Palette
- **Background:** Near-black blue-ink (`#0B0F14`)
- **Text:** Warm off-white (`#ECE8DE`)
- **Accents:** Circuit-teal (`#4FC0AD`) and Amber (`#E8A33D`)

## Features
- **Responsive Design:** Optimized for mobile, tablet, and desktop viewports.
- **Accessibility:** Respects `prefers-reduced-motion` and includes visible focus states.
- **Interactive Terminal:** Dynamic typing effect on page load.
- **Sticky Navigation:** Vertical rail on desktop that collapses to a horizontal scroll on mobile.

## Project Structure
- `index.html`: Main structure and content.
- `styles.css`: Custom technical styling and layout.
- `script.js`: Terminal animation and interactive logic.
- `assets/RESUME - Vince Capin.pdf`: Downloadable resume link.

## Local Setup

To run this project on your local machine, you have a few options:

### Option 1: Direct Open
1. Download the repository.
2. Locate `index.html` in your file explorer.
3. Double-click `index.html` or drag it into any modern web browser (Chrome, Firefox, Safari, Edge).

### Option 2: VS Code Live Server (Recommended for Development)
If you are using VS Code:
1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Click **"Go Live"** in the bottom status bar.
4. The site will automatically open at `http://127.0.0.1:5500`.

### Option 3: Python HTTP Server
If you have Python installed, run this command in the project directory:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

## Customization
To personalize the portfolio, you can modify the following files:
- **Colors:** Update the CSS variables in `:root` inside `styles.css`.
- **Content:** Edit the text and links in `index.html`.
- **Terminal Sequence:** Modify the `bootSequence` array in `script.js` to change the typing animation.

