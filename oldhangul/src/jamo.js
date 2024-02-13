let json_g = null;

async function getJson() {
	if (!json_g) {
		console.log("Fetching the json.");

		const res = await fetch("jamo.json");
		json_g = await res.json();
	}

	return json_g;
}

export function getJamos(pos) {
	let json = getJson();

	console.log(json[pos.toString()]);
	return json[pos.toString()];
}