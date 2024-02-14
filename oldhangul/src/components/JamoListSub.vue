<script>
	import Jamo from "./Jamo.vue";

	export default {
		components: {
			Jamo,
		},
		props: {
			list: {
				type: Array,
				required: true,
			}
		},
	
		emits: ["jamo-selected"],

		methods: {
			onJamoSelected(ival) {
				this.$emit("jamo-selected", ival);
			},
		}
	}
</script>

<template>
	<div id="jamolist" class="container m-2">
		<div v-for="e in this.list" key="e.ival" class="card_div">
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