# Khushi Rai Portfolio

Static portfolio website ready for GitHub Pages.

## Files

- `index.html` - page markup
- `style.css` - all page styles and responsive layout
- `script.js` - interactions, project/certification rendering, GitHub API loading, contact form behavior
- `assets/` - profile photo, resume PDF, certificate assets, project screenshots, favicon

## Deploy To GitHub Pages

1. Upload this folder's contents to a GitHub repository.
2. Go to repository `Settings` > `Pages`.
3. Select the branch and root folder.
4. Save. GitHub Pages will publish the portfolio.

## Contact Form

The form validates name, email, and message. EmailJS support is wired in `script.js` through `EMAILJS_CONFIG`.
If EmailJS keys are not added, the form falls back to opening the visitor's email client with the message pre-filled.

## Notes

All buttons and links use relative paths where possible, so the site works directly on GitHub Pages.
