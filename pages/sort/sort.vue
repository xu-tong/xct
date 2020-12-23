<template>
	<view>
		<view :style="{height : `${statusBarHeight}px`}" style="background-color: red;"></view>
		分类
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
