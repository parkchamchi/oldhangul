<script>
	import Letter from "./Letter.vue";

	export default {
		components: {
			Letter,
		},
		props: {
			ivals: {
				type: Array,
			}
		},

		methods: {
			selectJamo: function(ival) {
				console.log(ival);
				this.ivals.push(ival);
			},
		},

		data() {
			return {
				ivals: [],
			};
		}
	}
</script>

<template>
	<h3>CurLetter</h3>

	<Letter :ivals="this.ivals" />
</template>

<style scoped>
	
</style>