export function JamoObj() {
	
}

JamoObj.json = 
	await async function () {
		console.log("Fetching the json.");

		const jsondir = process.env.NODE_ENV == "production" 
			? "" : "";

		const res = await fetch(jsondir + "jamo.json");
		const json = await res.json();

		return json;
	}
	();

JamoObj.prototype.getJamos = function (pos) {
	return JamoObj.json[pos.toString()];
};

JamoObj.prototype.getObjByIval = function (ival) {
	//TODO: inefficient

	const retOnFail = null;

	for (const pos of ["0", "1", "2"]) {
		const targetdict = JamoObj.json[pos];

		for (const e of targetdict) {
			if (e["ival"] == ival) {
				e.pos = pos;
				return e;
			}
		}
	}

	return retOnFail;
};

JamoObj.prototype.getPos = function (ival) {
	//TODO: inefficient

	const obj = this.getObjByIval(ival);
	if (!obj)
		return obj;
	else
		return obj.pos;
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

JamoObj.prototype.getNextJamos = function (ival) {
	const ivalObj = this.getObjByIval(ival);
	const ivalMems = ivalObj["members"];
	const targetdict = this.getJamos(ivalObj.pos);

	let nextjamos = [];

	for (const e of targetdict) {
		const eMems = e["members"];

		//if (eMems.length < ivalMems.length) continue;

		//Set isNext=true if one is a subset of another
		let isNext = true;

		const set0 = [...new Set(eMems)];
		const set1 = [...new Set(ivalMems)];

		let bigger, smaller;
		if (set0.length > set1.length) {
			bigger = set0;
			smaller = set1;
		}
		else {
			bigger = set1;
			smaller = set0;
		}

		for (let i = 0; i < smaller.length; i++) {
			const e = smaller[i];

			if (!bigger.includes(e)) {
				isNext = false;
				break;
			}
		}

		if (isNext)
			nextjamos.push(e);
	}

	return nextjamos;
}