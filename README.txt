# Birthday Website for Rishikesh KA 💗

A responsive birthday surprise website made with HTML, CSS and vanilla JavaScript.

## Included features
1. Animated welcome / hero page with floating balloons and heart.
2. Responsive photo gallery with click-to-enlarge lightbox.
3. Memory timeline with editable captions.
4. Long birthday letter from Revathi.
5. Rotating birthday quotes.
6. Background music player.
7. Click-to-open secret message with confetti.
8. Interactive birthday cake with candles that can be blown out and relit.

## Run locally
1. Extract `BirthdayWebsite.zip`.
2. Open the `BirthdayWebsite` folder in VS Code.
3. Add your photos to the `images` folder (instructions below).
4. Add a song to the `music` folder (instructions below).
5. Install the VS Code extension **Live Server** if you do not already have it.
6. Right-click `index.html` and choose **Open with Live Server**.

You can also open `index.html` directly in a browser, but Live Server is recommended.

## Add your own photos
Put five image files in the `images` folder and name them exactly:
- `photo1.jpg`
- `photo2.jpg`
- `photo3.jpg`
- `photo4.jpg` and `photo5.jpg`

The images are used in the photo gallery. You can use `.png` or `.webp` too, but if you do, update the matching `src` and `data-photo` values in `index.html`.

To change captions, edit the `data-caption` attributes and the `photo-label` text in `index.html`.

## Add background music
Place a music file you are allowed to use in the `music` folder and name it:
`birthday-song.mp3`

The player starts only after the visitor clicks Play because browsers generally block autoplay with sound. If you use a different filename or format, update the `<audio>` source in `index.html`.

## Personalize the text
Open `index.html` and edit:
- The welcome heading and subtitle.
- The memory timeline cards (dates, titles, descriptions).
- The birthday letter.
- The secret message.
- The footer.

## Deploy with Vercel
1. Create a GitHub repository and upload the contents of this folder.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import your GitHub repository.
4. Keep the Framework Preset as **Other**; no build command is needed.
5. Click **Deploy**.
6. Share the generated website URL.

## Notes
- The site is responsive for mobile and desktop.
- Google Fonts are loaded online; if offline, the browser uses fallback fonts.
- Placeholder photo images appear until you add your own pictures.
- Use personal photos and music only when you have permission to share them.
