<template>
	<view class="content">
		<view :style="{height : `${statusBarHeight}px`}"></view>
		<!-- 搜索 -->
		<search></search>
		<!-- 轮播图 -->
		<rotation-Chart :imgArr="swiperList"></rotation-Chart>
		<!-- 菜单 -->
		<menuu :menuArr="menuList"></menuu>
		<!-- 猜你喜欢 -->
		<view class="">
				<listHeader>
					<template v-slot-title>猜你喜欢</template>
					<template v-slot-title>更多推荐</template>
				</listHeader>
			<!-- 西游记模块 -->
			<view class="flex align-center">
				<view class="flex flex-1 flex-column align-center position-relative w-100">
					<view class="w-100">
						<image src="../../static/Rebook1.jpg" mode="aspectFill" style="width: 120px; height:120px;"></image>
					</view>
					<text class="font text-light-black">西游记</text>
				</view>
				<view class="flex flex-1 flex-column align-center position-relative w-100">
					<view class="w-100">
						<image src="../../static/Rebook1.jpg" mode="aspectFill" style="width: 120px; height:120px;"></image>
					</view>
					<text class="font text-light-black">西游记</text>
				</view>
				<view class="flex flex-1 flex-column align-center position-relative w-100">
					<view class="w-100">
						<image src="../../static/Rebook1.jpg" mode="aspectFill" style="width: 120px; height:120px;"></image>
					</view>
					<text class="font text-light-black">西游记</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import myIcon from "@/components/icon/index.vue"
	import search from "../../components/index/search.vue"
	import rotationChart from "../../components/index/rotationChart.vue"
	import menuu from "../../components/index/menuu.vue"
	import listHeader from "../../components/index/listHeader.vue"
	export default {
		data() {
			return {
				statusBarHeight: this.$statusBarHeight,
				swiperList: [{
						src: "/static/swiperImg/5.jpg"
					},
					{
						src: "/static/swiperImg/1.jpg"
					},
					{
						src: "/static/swiperImg/5.jpg"
					},
					{
						src: "/static/swiperImg/1.jpg"
					}
				],
				menuList: [{
						iconId: "icon-icon-test",
						iconColor: "text-warning",
						name: "看榜单",
						
					},
					{
						iconId: "icon-startRead",
						iconColor: "text-hover-primary",
						name: "听小说"
					},
					{
						iconId: "icon-icon09",
						iconColor: "text-light-black",
						name: "听音乐"
					},
					{
						iconId: "icon-zhishi",
						iconColor: "text-success",
						name: "听知识"
					}
				]
			}
		},
		components: {
			myIcon,
			search,
			rotationChart,
			menuu,
			listHeader
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
</style>
