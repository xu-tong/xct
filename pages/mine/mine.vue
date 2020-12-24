<template>
	<view>
		<view :style="{height : `${statusBarHeight}px`}"></view>
		<view class="flex justify-between align-center p-2" style="height: 200rpx;">
				<view class="flex align-center">
					<image src="../../static/swiperImg/3.jpg" mode="aspectFill" class="rounded-circle" style="width: 130rpx; height: 130rpx;"></image>
					<text class="mx-2 font-lg">{{userName}}</text>
				</view>
				<view class="bg-danger p-1" style="border-radius: 40rpx; background: rgb(236, 240, 243);">
					<my-icon iconName="icon-erji" iconSize="30"></my-icon>
					<text class="mx-1">我的客服</text>
				</view>
			</view>
			<mineList :mylist="myArr"></mineList>
	</view>
</template>

<script>
	import myIcon from "@/components/icon/index.vue"
	import mineList from "../../components/index/mineList.vue"
	export default {
		data() {
			return {
				statusBarHeight : this.$statusBarHeight,
				myArr:[
					{
						name:"签到"
					},
					{
						name:"设置"
					},
					{
						name:"意见反馈"
					},
					{
						name:"切换账号"
					}
				]
			}
		},
		onLoad() {
	
		},
		components: {
			myIcon,
			mineList
		},
		methods: {
	
		}
	}
</script>

<style>
</style>
