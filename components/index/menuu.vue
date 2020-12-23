<template>
	<view class="flex mx-3 my-4 align-center justify-between">
		<block v-for="(item,index) in menuArr" :key="index">
			<view class="flex flex-column align-center" @click="jump(index)">
				<my-icon :iconName="item.iconId" :iconColor="item.iconColor" iconSize="32px"></my-icon>
				<text class="mt-1 font text-light-black">{{item.name}}</text>
			</view>
		</block>
	</view>
</template>

<script>
	const pagesList = {
		"0": "/pages/readList/readList",
		"1": "/pages/listenNoval/listenNoval",
		"2": "/pages/listenMusic/listenMusic",
		"3": "/pages/listenKnowledge/listenKnowledge",
	}
	export default {
		props: {
			menuArr: {
				type: Array,
				default: []
			}
		},
		methods: {
			jump(index) {
				   uni.navigateTo({
				   	url:pagesList[index]
				   })
			}
		}
	}
</script>

<style>
</style>
