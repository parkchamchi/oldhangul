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

		emits: ["jamo-selected"],

		data() {
			return {

			};
		},

		methods: {
			onClicked() {
				//console.log(this.ival);
				this.$emit("jamo-selected", this.ival);
			}
		}
	}
</script>

<template>
		<div class="card m-1">
			<a class="btn btn-fix" @click="onClicked()">
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
			</a>
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

	.btn-fix {
		padding: 0;
		border: none;
		white-space: normal;

		width: 64px;
		height: 64px; /* id. to the parent. TODO: change this */
	}
</style>