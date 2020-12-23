<template>
	<view class="content">
		<view :style="{height : `${statusBarHeight}px`}"></view>
		<view class="">
			看榜单
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				statusBarHeight: this.$statusBarHeight,
			}
		}
	}
</script>

<style>
</style>
