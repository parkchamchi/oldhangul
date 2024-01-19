<script>
	export default {
		props: {
			ival: {
				type: Number,
				required: true,
			},
			members: {
				type: Array,
				required: true,
			},
		},

		data() {
			return {

			};
		},
	}
</script>

<template>
	<div class="card m-1">
		<div class="card-body">
			<div class="card-title">
				<p id="actuallettter">{{ String.fromCharCode(ival) }}</p>
			</div>
			
			<!--
			<ul class="list-group list-group-flush">
				<li class="group-item" v-for="m in members" :key="m">{{ String.fromCharCode(m) }}</li>
			</ul>
			-->
		</div>
	</div>
</template>

<style>
	#actuallettter {
		font-size: 200%;
	}
	.card {
		width: 64px;
		height: 64px;
	}
</style>