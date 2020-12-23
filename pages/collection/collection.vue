<template>
	<view>
		<view :style="{height : `${statusBarHeight}px`}" style="background-color: red;"></view>
		我是收藏
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
