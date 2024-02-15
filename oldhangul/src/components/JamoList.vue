<script>
	import JamoListSub from "./JamoListSub.vue";

	import { JamoObj } from "../jamo.js";

	export default {
		components: {
			JamoListSub,
		},
		props: {
			pos: {
				type: Number,
				required: true,
				//validator: (val) => [0, 1, 2].includes(val),
			},
		},
		emits: ["jamo-selected"],

		methods: {
			onJamoSelected(ival) {
				this.$emit("jamo-selected", ival);

				this.nexts = this.jamoObj.getNextJamos(ival);
				this.lefts = this.alls.filter((e) => !this.nexts.includes(e))
			},
		},

		data() {
			const jamoObj = new JamoObj();
			const alls = jamoObj.getJamos(this.pos);

			return {
				jamoObj: jamoObj,
				
				alls: alls,
				nexts: [],
				lefts: [...alls],
			}
		}
	}
</script>

<template>
	<h3>
		<button type="button" class="btn btn-secondary" @click="onJamoSelected(-this.pos)">Clear</button>
	</h3>
	<hr>

	<JamoListSub :list=this.nexts @jamo-selected="onJamoSelected" />
	<hr>
	<JamoListSub :list=this.lefts @jamo-selected="onJamoSelected" />
</template>

<style scoped>

</style>