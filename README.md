# Fuse Bead Pattern Studio

This project is a web app for turning uploaded images into fuse bead patterns using a fixed mini-bead palette.

Main features:

- Upload any image from your computer
- Resize it into a bead grid in bead units
- Map every pixel to the closest match from your available bead colors
- Turn individual palette colors on or off if your kit is missing some shades
- Show bead counts, physical size, and row-by-row build instructions
- Export the generated pattern preview as a PNG

## Stack

- Backend: `Node.js + Express + TypeScript`
- Frontend: static browser app (`public/index.html`, `public/app.js`, `public/styles.css`)

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## API summary

- `GET /api/health`

## File map

- `/src/server.ts` static app host
- `/public/index.html` app structure
- `/public/app.js` image processing, palette matching, and pattern generation
- `/public/styles.css` visual styling

## Notes

- The current color palette is based on the bead chart in the project brief and uses approximate hex values for matching.
- For the best results, use tightly cropped artwork and simple images with strong contrast.
- Large photo-based images work best after reducing the target bead dimensions so the pattern stays readable.
