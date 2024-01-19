<script>
	import MainP from "./components/MainP.vue";
	import Jamo from "./components/Jamo.vue";

	export default {
		components: {
			MainP, Jamo,
		}
	}

	let i = 0;
	const targets = ['ᄣ', 'ᆋ', 'ᇦ'];
	let jamojson = {};

	window.onload = function() {
		fetchjson();
	};

	function onTestButtonClick() {
		const mainp = document.getElementById("mainp");
		mainp.innerText += targets[i++];

		fetchjson();
	}

	async function fetchjson() {
		const res = await fetch("jamo.json");
		const json = await res.json();
		console.log(json);

		jamojson = json;
	}
</script>

<template>
	<header>
		
		<Jamo :ival="55267" :members="[31, 35]" />
		<br>
		<button onclick="onTestButtonClick();" class="btn btn-primary">asdf</button>

	</header>

	<main>
		<MainP />
	</main>
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
