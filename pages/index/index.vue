<template>
	<view class="content">
	<view :style="{height : `${statusBarHeight}px`}" style="background-color: red;"></view>
	<view class="bg-danger">hello world</view>
	<text class="iconfont icon-shengdantubiao-02"></text>
	<my-icon iconName="icon-shengdantubiao-02"></my-icon>
	<view style="width:100rpx; height: 100rpx; background-color: red;"
	class="animate__animated" hover-class="animate__fadeOutRight"></view>
	</view>
</template>

<script>
	import myIcon from "@/components/icon/index.vue"
	export default {
		data() {
			return {
				statusBarHeight : this.$statusBarHeight
			}
		},
		components:{
			myIcon
		 },
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.color-yellow{
		color: yellow;
	}
</style>
