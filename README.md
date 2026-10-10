# Aman Kr. Pandey Portfolio — EmailJS

This version uses EmailJS directly from the browser for the contact form. No SMTP password, Gmail App Password, or mail-sending secret is stored in the frontend or repository.

## Contact form

The form uses the EmailJS browser SDK with the configured public service/template IDs and public key. EmailJS documents these as client-side integration values; the public key is intended for browser use.

The form also enables headless-browser blocking and a client-side 3-second throttle. EmailJS itself rate-limits sending to 1 request/second.

## Local run

1. Install Node.js 20+.
2. Run `npm install`.
3. Run `npm start`.
4. Open `http://localhost:3000`.

No `.env` file is required for this EmailJS version.

## Vercel / GitHub Pages

You can deploy the portfolio as a static site. Vercel can serve it directly, and the same HTML works on GitHub Pages.

For production protection, configure your EmailJS account's allowed origins/domain settings and keep a sensible sending limit. Do not put Gmail SMTP passwords or other private credentials in the repository. EmailJS's browser SDK is specifically designed to send without a custom mail backend.

## Included

- `assets/profile.jpg` — circular profile photo
- `assets/Aman-Resume.pdf` — resume
- Updated GitHub link
- Updated LinkedIn link
- India Super Tools project
