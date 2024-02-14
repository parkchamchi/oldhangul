<script>
	import { JamoObj } from "../jamo.js";

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
				jamoObj: new JamoObj(),
			};
		},

		methods: {
			onClicked() {
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
						<p id="actuallettter">{{ jamoObj.ivalToDispStr(ival) }}</p>
					</div>
				</div>
			</a>
		</div>
</template>

<style>
	#actuallettter {
		font-family: "Noto Sans KR", sans-serif;
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