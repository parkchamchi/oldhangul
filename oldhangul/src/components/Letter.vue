<script>
	export default {
		components: {
			
		},
		props: {
			ivals: {
				type: Array,
			}
		},

		methods: {

		},

		data() {
			return {
				
			};
		},
	}
</script>

<template>
	<h3>Letter</h3>

	<p>
		<span v-for="ival in ivals" key="ival">{{ ival }}</span>
	</p>
</template>

<style scoped>
	
</style>