export function JamoObj() {
	
}

JamoObj.json = 
	await async function () {
		console.log("Fetching the json.");

		const res = await fetch("jamo.json");
		const json = await res.json();

		return json;
	}
	();

JamoObj.prototype.getJamos = function (pos) {
	return JamoObj.json[pos.toString()];
};

JamoObj.prototype.getPos = function (ival) {
	const retOnFail = null;

	for (let pos of ["0", "1", "2"]) {
		let targetdict = JamoObj.json[pos];

		for (let e of targetdict) {
			if (e["ival"] == ival)
				return pos;
		}
	}

	return retOnFail;
};

JamoObj.prototype.validatePos = function (pos) {
	return [0, 1, 2].includes(pos);
};

JamoObj.prototype.ivalToDispStr = function (ival) {
	//For buttons.

	const fillers = [4447, 4448];
	if (fillers.includes(ival))
		return 'f.';

	return String.fromCharCode(ival);
}