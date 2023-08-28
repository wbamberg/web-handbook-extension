/*import { renderCompat } from "./render-compat.js";
import { renderFormalSyntax } from "./render-formal-syntax.js";
import { renderCallout } from "./render-utils.js";

function renderSection(title, markup) {
	if (!markup) {
		return "";
	}
	return `<h2>${title}</h2>${markup}`;
}

function renderHeading(name, item) {
	return `<header><h1>${name}</h1><a href="${item["mdn-url"]}">MDN page</a></header>`;
}

function renderInteractiveExample(item) {
	if (item["interactive-example"]) {
		return renderCallout(
			`<details class="interactive-example">
			    <summary>Try the interactive example</summary>
				<div class="resizer">
			    <iframe
				    class="resized"
				    height="400"
				    src="${item["interactive-example"]}"
					title="MDN Web Docs Interactive Example"
			        loading="lazy" data-readystate="complete"
			    ></iframe></div></details>`,
			"callout",
		);
	}
	return "";
}

function syntax(name, item) {
	let output = "";
	if (item["syntax-example"]) {
		output = `<pre><code class="language-css">${item["syntax-example"]}</code></pre>`;
	}
	if (item["formal-syntax"]) {
		output = `${output}<h3>Formal syntax</h3>${renderFormalSyntax(
			name,
			item["formal-syntax"],
		)}`;
	}
	return output;
}

function renderStatus(item) {
	const statusNames = {
		deprecated: "Deprecated",
		"non-standard": "Non-standard",
	};

	if (item["status"].length > 0) {
		const markup = item["status"]
			.filter((item) => Object.keys(statusNames).includes(item))
			.map((item) => statusNames[item])
			.join(" | ");
		if (markup) {
			return renderCallout(markup, "warning");
		}
	}
	return "";
}

function renderConstituents(item) {
	if (item["constituent-properties"]) {
		let propertyList = item["constituent-properties"]
			.map(
				(link) =>
					`<li><a href="${link.target}"><code>${link.text}</code></a></li>`,
			)
			.join("\n");
		propertyList = `<ul>${propertyList}</ul>`;
		return `<p>This property is a shorthand for the following properties:</p>${propertyList}`;
	}
	return "";
}

function seeAlso(item) {
	if (item["see-also"]) {
		const innerMarkup = item["see-also"]
			.map((link) => `<li><a href="${link.target}">${link.text}</a></li>`)
			.join("\n");
		return `<ul>${innerMarkup}</ul>`;
	}
	return "";
}

export function renderPropertyBody(name, item) {
	return `
	<main>
	${renderHeading(name, item)}
    ${renderStatus(item)}
    ${renderCompat(name, item)}
    <p>${item["summary"]}</p>
    ${renderConstituents(item)}
    ${renderInteractiveExample(item)}
    ${renderSection("Syntax", syntax(name, item))}
	${renderSection("See also", seeAlso(item))}
	</main>`;
}

*/

import { getCompatInfo } from "./compat-info.js";

export function createPropertyPageData(name, sourceData) {
	return {
		name,
		summary: sourceData["summary"],
		"interactive-example": sourceData["interactive-example"],
		"syntax-example": sourceData["syntax-example"],
		"constituent-properties": sourceData["constituent-properties"],
		compat: getCompatInfo(sourceData["browser-compatibility"]),
		status: sourceData["status"],
		"see-also": sourceData["see-also"],
	};
}
