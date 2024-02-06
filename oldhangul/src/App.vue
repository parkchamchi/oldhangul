<script>
	import MainP from "./components/MainP.vue";
	import JamoList from "./components/JamoList.vue";
	import CurLetter from "./components/CurLetter.vue";

	export default {
		components: {
			MainP, JamoList, CurLetter
		},
		data() {
			return {
				jamojson: {},
			};
		},
		created() {
			this.fetchjson();
		},
		methods: {
			async fetchjson() {
				const res = await fetch("jamo.json");
				const json = await res.json();
				console.log(json);

				this.jamojson = json;
			},

			onJamoSelected(ival) {
				console.log(ival);
			}
		}
	}

	
</script>

<template>
	<div v-for="i in [0, 1, 2]" :key="i">
		<JamoList :jamojson="jamojson" :pos=i @jamo-selected="onJamoSelected" />
	</div>

	<div>
		<CurLetter />
	</div>

	<!--
	<button onclick=";" class="btn btn-primary">asdf</button>

	<MainP />
	-->
</template>

<style scoped>
	body {
		background-color: #000000;
		color: #ffffff;
		font-family: sans-serif;
		text-align: center;
	}

	header {
		line-height: 1.5;
	}

	.logo {
		display: block;
		margin: 0 auto 2rem;
	}

	@media (min-width: 1024px) {
		header {
			display: flex;
			place-items: center;
			padding-right: calc(var(--section-gap) / 2);
		}

		.logo {
			margin: 0 2rem 0 0;
		}

		header .wrapper {
			display: flex;
			place-items: flex-start;
			flex-wrap: wrap;
		}
	}
</style>
