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
				this.$refs.theLetter.insert(ival);
			},
		},

		data() {
			return {

			};
		}
	}
</script>

<template>
	<h3>CurLetter</h3>

	<Letter ref="theLetter" />
</template>

<style scoped>
	
</style>