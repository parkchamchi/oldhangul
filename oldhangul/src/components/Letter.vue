<script>
	import { JamoObj } from "../jamo.js";

	export default {
		components: {
			
		},
		props: {

		},

		methods: {
			insert: function (ival) {
				let pos;

				if (ival > 0)
					pos = this.jamoObj.getPos(ival);
				else {
					pos = -ival;
					ival = null;
				}

				this.ivals[pos] = ival;
			},
			getStr: function () {
				const el = document.getElementById("p_letter");
				const txt = el.innerText;

				return txt;
			}
		},

		data() {
			return {
				ivals: [],

				jamoObj: new JamoObj(),
			};
		},
	}
</script>

<template>
	<p id="p_letter">
		<span v-for="ival in ivals" :key="ival">{{ String.fromCharCode(ival) }}</span>
	</p>
</template>

<style scoped>
	#p_letter {
		font-family: "Noto Sans KR", sans-serif;
		font-size: 300%;
	}
</style>