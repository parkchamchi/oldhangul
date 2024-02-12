<script>
	import JamoList from "./components/JamoList.vue";
	import CurLetter from "./components/CurLetter.vue";

	export default {
		components: {
			JamoList, CurLetter
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
				this.$refs.mainCurLetter.selectJamo(ival);
			}
		}
	}

	
</script>

<template>
	<div id="div_curletter">
		<CurLetter ref="mainCurLetter" />
	</div>

	<br>

	<div class="container" id="div_jamolist_container">
		<div class="row">
			<div v-for="i in [0, 1, 2]" :key="i" class="col">
				<JamoList :jamojson="jamojson" :pos=i @jamo-selected="onJamoSelected" />
			</div>
		</div>
	</div>
</template>

<style scoped>
	body {
		background-color: #000000;
		color: #ffffff;
		font-family: sans-serif;
		text-align: center;

		align-content: center;
	}

	header {
		line-height: 1.5;
	}

	.logo {
		display: block;
		margin: 0 auto 2rem;
	}

	#div_jamolist_container {
		width: 100%;
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
