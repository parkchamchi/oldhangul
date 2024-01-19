<script>
	export default {
		props: {
			ival: {
				type: Number,
				default: 55267,
			},
			members: {
				type: Array,
				default: [31, 35],
			},
		},

		data() {
			return {

			};
		},
	}
</script>

<template>
	jamoplacehjolder
	{{ ival }} {{ members }}
</template>