<template>
	<view class="content">
	<view :style="{height : `${statusBarHeight}px`}" style="background-color: red;"></view>
	12345
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight : this.$statusBarHeight
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
</style>
