import fs from "node:fs/promises";
import stringify from "fast-json-stable-stringify";

import * as prettier from "prettier";

import webDocs from "web-docs-data" assert { type: "json" };
import { createPropertyPageData } from "./make-property-page-data.js";
import { renderSidebar } from "./render-sidebar.js";
import { renderPage } from "./render-page.js";

const properties = webDocs["css"]["properties"];
const propertyNames = Object.keys(properties);

const packagedir = new URL(".", import.meta.url);
const targetdir = new URL("./extension/build/", packagedir);

function renderHeader() {
  return `<header><button id="open-nav"><img src="../icons/bitsies-book.png"></button><h1>Web Docs Handbook</h1></header>`;
}

async function createPage(name) {
  const header = renderHeader();
  const sidebarMarkup = renderSidebar(propertyNames);
  const mainContentMarkup =
    "<main><p>I'm not sure what to put here yet. Try clicking on the book icon ^</p></main>";
  return renderPage(name, header, sidebarMarkup, mainContentMarkup);
}

export async function build() {
  // Remove existing files, if there are any
  try {
    await fs.rm(targetdir, {
      force: true,
      recursive: true,
    });
  } catch (e) {
    // Missing folder is not an issue since we wanted to delete it anyway
    if (e.code !== "ENOENT") {
      throw e;
    }
  }
  await fs.mkdir(targetdir);

  const dest = new URL("web-docs.html", targetdir);

  const basePage = await createPage("Web Handbook");
  const formattedBasePage = await prettier.format(basePage, {
    parser: "html",
  });
  await fs.writeFile(dest, formattedBasePage);

  const pagesdir = new URL("pages", targetdir);
  await fs.mkdir(pagesdir);

  for (const propertyName of propertyNames) {
    const propertyPageData = createPropertyPageData(
      propertyName,
      properties[propertyName]
    );

    const pageDest = new URL(`pages/${propertyName}.json`, targetdir);
    await fs.writeFile(pageDest, stringify(propertyPageData));
  }
}

await build();
