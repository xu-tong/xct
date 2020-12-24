<template>
	<view>
		<block v-for="(item,index) in readArr" :key="index">
			<list><template v-slot:title> {{item.headerTitle}} </template></list>
		    <block v-for="(mitem,mindex) in item.books" :key="mindex">
				<readList :imgurl="mitem.imgurl" :name="mitem.name" :synopsis="mitem.synopsis"></readList>
			</block>
		</block>
	</view>
</template>

<script>
	import list from "./list.vue"
	import readList from "./readList.vue"
	export default{
		props:{
			readArr:{
				type:Array,
				default:[]
			}
		},
		components:{
			list,
			readList
		}
	}
</script>

<style>
</style>
