function head(name) {
	return `
    <head>
        <title>${name}</title>
        <meta charset="utf-8" />
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> 
        <link href="../styles/style.css" rel="stylesheet" /> 
        <link href="../styles/prism.css" rel="stylesheet" /> 
        <link href="../styles/prism-overrides.css" rel="stylesheet" /> 
        <script src="../scripts/prism.js" defer></script>
        <script type="module" src="../scripts/main.js" defer></script>
        <script type="module" src="../scripts/search.js" defer></script>
        <script type="module" src="../modules/load-page.js"></script>
        <script type="module" src="../modules/render-interactive-example.js"></script>
        <script type="module" src="../modules/render-syntax.js"></script>
        <script type="module" src="../modules/render-utils.js"></script>
        <script type="module" src="../modules/render-constituent-properties.js"></script>
        <script type="module" src="../modules/render-compat-note.js"></script>
        <script type="module" src="../modules/render-status.js"></script>
        <script type="module" src="../modules/render-see-also.js"></script>
    </head>\n`;
}

export function renderPage(
	name,
	headerMarkup,
	sidebarMarkup,
	mainContentMarkup,
) {
	return `<!doctype html>
      <html>${head(name)}
        <body>
        ${headerMarkup}
        <div class="container">${sidebarMarkup}${mainContentMarkup}</div>
        </body>
      </html>`;
}
