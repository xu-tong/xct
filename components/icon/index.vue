<template>
	<text class="iconfont" :class="[iconName,iconColor]" :style="{fontSize :
	iconSize}"></text>
</template>

<script>
	export default {
		props: {
			iconName: {
				type: String,
				default: ""
			},
			iconColor: {
				type: String,
				default: "text-dark"
			},
			iconSize: {
				type: [String,Number],
				default: 45
			}
		}
	}
</script>

<style>
</style>
