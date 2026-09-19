# Md. Adnan Sarker — Personal & Social Impact Portfolio

Static website (HTML + CSS + vanilla JS). No build step, no backend.

## Run
Open `index.html` in a browser. (Fonts load from Google Fonts when online; the site falls back to system fonts offline.)

## Replace before publishing
1. **Photos** → the 11 real photos are already in `assets/images/` (`profile.jpg`, `photo-02.jpg` … `photo-11.jpg`). To swap one, overwrite it with the same file name.
   - Hero = `profile.jpg` · About = `photo-02` · Social Impact = `photo-03/04/05` · Performing Arts = `photo-06/07` · Gallery = `photo-02` … `photo-11`
   - Gallery filters: edit `data-cat` on each photo in `index.html` (`social | acting | achievements | education | events`, or empty = only under "All"). Filter buttons with no photos hide automatically.
2. **CV** → overwrite `assets/cv/md-adnan-sarker-cv.pdf` with the real CV (same name).
3. **Domain** → search for `example.com` and replace it in `index.html`, `robots.txt`, `sitemap.xml`.

## Deploy
Upload the whole folder to Netlify (drag & drop), GitHub Pages, Vercel or Render (static site).

## Languages
Bangla is the default. The English translations live in `assets/js/script.js` (object `EN`).
The choice is saved in localStorage (`as-lang`); theme in `as-theme`.
