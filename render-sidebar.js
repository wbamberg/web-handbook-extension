function groupByInitial(items) {
	const groups = {};
	for (const item of items) {
		const initial = item.slice(0, 1);
		if (!groups[initial]) {
			groups[initial] = [item];
		} else {
			groups[initial].push(item);
		}
	}
	return groups;
}
/*
export function renderSidebar(items) {
	const groups = groupByInitial(items);
	let innerMarkup = "";
	for (const groupInitial of Object.keys(groups)) {
		const groupItems = groups[groupInitial]
			.map((prop) => `<li><a href="${prop}.html"><code>${prop}</code></a></li>`)
			.join("\n");
		//innerMarkup = `${innerMarkup}<div class="initial">${groupInitial.toUpperCase()}</div><ul>${groupItems}</ul>`;
		innerMarkup = `${innerMarkup}<ul>${groupItems}</ul>`;
	}

	const searchBox = `<label class="visually-hidden" for="site-search">Search the site:</label>
	<input type="search" id="site-search" placeholder="Search"/>`;
	return `
	<nav id="nav" hidden>${searchBox}<div id="sidebar-title">CSS properties</div><ul>${innerMarkup}</ul></nav>`;
}
*/

export function renderSidebar(items) {
	const listItems = items
		.map((prop) => `<li><a href="${prop}.html"><code>${prop}</code></a></li>`)
		.join("\n");

	const searchBox = `<label class="visually-hidden" for="site-search">Search the site:</label>
	<input type="search" id="site-search" placeholder="Search"/>`;
	return `
	<nav id="nav" hidden>${searchBox}<div id="sidebar-title">CSS properties</div><ul>${listItems}</ul></nav>`;
}
