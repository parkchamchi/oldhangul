<script>
	import Letter from "./Letter.vue";

	export default {
		components: {
			Letter,
		},
		props: {
			
		},

		methods: {
			selectJamo: function (ival) {
				this.$refs.theLetter.insert(ival);
			},
		},

		data() {
			return {
				ivals: [null, null, null, null],
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