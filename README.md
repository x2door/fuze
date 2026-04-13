# Fuse Bead Pattern Studio

Fuse Bead Pattern Studio is a web app for turning uploaded images into buildable fuse bead patterns.

It is designed for real bead inventory constraints:

- upload an image and convert it into a bead grid
- crop the image with a fixed pattern ratio
- mirror the pattern for bead layouts that need a reversed build
- match source colors to your available bead palette
- save your active colors, custom colors, and inventory in the browser
- balance matching away from scarce colors when close alternatives exist
- export a pixelated preview and an instruction sheet

## Features

- Adjustable bead grid size in bead units
- Palette filtering and custom bead colors
- Inventory-aware matching and shortage tracking
- Multiple color matching modes
- Image controls for hue, brightness, saturation, shadow lift, and highlight recovery
- Crop, move, resize, and aspect-ratio locking
- Row-by-row build instructions
- Pattern and instruction-sheet PNG exports

## Tech Stack

- `Node.js`
- `Express`
- `TypeScript`
- Plain browser-side `HTML`, `CSS`, and `JavaScript`

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Run

```bash
npm run build
npm start
```

## Deployment

This app can be deployed as a simple Node web service.

For Render, Railway, Fly.io, or a similar platform:

- Build command: `npm run build`
- Start command: `npm start`
- Node version: `20+`

The app serves the static frontend from `public/` and exposes a small health endpoint at `/api/health`.

## Project Structure

- `/public/index.html` app structure
- `/public/app.js` image processing, palette logic, crop behavior, exports, and pattern generation
- `/public/styles.css` UI styling
- `/src/server.ts` Express server for local and deployed hosting

## Notes

- The built-in palette uses approximate hex values based on the provided bead chart.
- Saved palette settings and inventory are stored in browser local storage.
- Photos usually work best after cropping tightly and reducing the final bead dimensions.
