<template>
	<view class="content">
		<view :style="{height : `${statusBarHeight}px`}"></view>
		<view class="">
			听小说
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
