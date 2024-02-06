<script>
	import Letter from "./Letter.vue";

	export default {
		components: {
			Letter,
		},
		props: {
				
		},

		methods: {

		},

		data() {
			return {
				
			};
		}
	}
</script>

<template>
	<h3>CurLetter</h3>

	<Letter :ivals="[123, 456, 789]" />
</template>

<style scoped>
	
</style>