<template>
	<view>
			<block v-for="(item,index) in mylist" :key="index">
				<view>
					<view style="height:110rpx;" class=" px-2  flex align-center justify-between">
						<text class="text-light-black font-lg">{{item.name}}</text>
						<my-icon iconName="icon-iconfonti" iconColor="text-dark" iconSize="44"></my-icon>
					</view>
					<view style="height:20rpx; background-color: rgb(248, 248, 248;"></view>
				</view>
			</block>
		</view>
</template>

<script>
	export default{
		props:{
			mylist:{
				type:Array,
				default:[]
			}
		}
	}
</script>

<style>
</style>
