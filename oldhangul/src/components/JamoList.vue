<script>
	import Jamo from "./Jamo.vue";

	import { getJamos } from "../jamo.js";

	export default {
		components: {
			Jamo,
		},
		props: {
			pos: {
				type: Number,
				required: true,
				validator: (val) => [0, 1, 2].includes(val),
			},			
		},
		emits: ["jamo-selected"],

		methods: {
			onJamoSelected(ival) {
				//console.log(ival);
				this.$emit("jamo-selected", ival);
			},

			getJamos(pos) {
				return getJamos(pos);
			}
		},

		data() {
			return {
				conseqs: [],
				lefts: [],
			}
		}
	}
</script>

<template>
	<h3>{{ pos }}</h3>

	<div id="jamolist" class="container m-2">
		<div v-for="e in getJamos(pos)" key="e.ival" class="card_div">
			<Jamo :ival="e.ival" :members="e.members" @jamo-selected="onJamoSelected" />
		</div>
	</div>
</template>

<style scoped>
	.container {
		display: flex;
		flex-wrap: wrap;
		/*justify-content: space-between;*/

		/*overflow: scroll;*/
		/*height: 600px;*/
	}
	.card_div {
		margin: 0.1%;
		padding: 0.1%;
	}
</style>