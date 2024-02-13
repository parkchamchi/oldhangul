<script>
	export default {
		components: {
			
		},
		props: {

		},

		methods: {
			insert: function(ival) {
				this.ivals.push(ival);
			},
		},

		data() {
			return {
				ivals: [],
			};
		},
	}
</script>

<template>
	<h3>Letter</h3>

	<p id="p_letter">
		<span v-for="ival in ivals" key="ival">{{ String.fromCharCode(ival) }}</span>
	</p>
</template>

<style scoped>
	#p_letter {
		font-size: 300%;
	}
</style>