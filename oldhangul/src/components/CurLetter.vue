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
			onCopy: function () {
				const res = this.$refs.theLetter.getStr();
				window.navigator.clipboard.writeText(res);

				const button = document.getElementById("copybutton");
				button.innerText = "Copied: " + res;
				setTimeout(() => button.innerText = "Copy", 2.5 * 1000);
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
	<Letter ref="theLetter" />
	<br>

	<button id="copybutton" type="button" class="btn btn-light" @click="onCopy">
		Copy
	</button>
</template>

<style scoped>
	
</style>