# Adithya's Developer Portfolio

A static, responsive portfolio built with HTML, CSS, and vanilla JavaScript. It does not require Node.js or a build step.

## Run locally

Open `index.html` in your browser. For a local static server, VS Code's Live Server extension is optional.

## Before publishing

1. In `index.html`, replace `adithyakukkapalli@gmail.com`.
2. Replace `YOUR_GITHUB_USERNAME` and `YOUR_LINKEDIN_USERNAME`.
3. Add a résumé PDF at `assets/resume.pdf` and add a link to it if desired.
4. Verify the status, stack, and description of every project. Do not claim that a project is production-ready unless it has been verified.
5. Add repository/demo links only when those links are ready to share.

## Deploy to Cloudflare Pages

1. Push the files to a GitHub repository.
2. In Cloudflare, open Workers & Pages and create a Pages project from the Git repository.
3. Set the production branch to `main`.
4. Since this is plain static HTML, configure no build command and set the build output directory to `/`.
5. Deploy and test the generated `pages.dev` URL.
6. In the Pages project, add a custom hostname such as `portfolio.yourdomain.com`. Follow the dashboard's DNS instructions. Avoid changing existing nameservers or deleting records for your current website/email.

## Files

- `index.html` — page content and metadata
- `styles.css` — layout, typography, responsive behavior
- `script.js` — mobile navigation behavior
- `assets/favicon.svg` — custom favicon
