<template>
	<div>
		<el-menu 
		:collapse="isSidebarNavCollapse"
		background-color="#304156"
		text-color="#eee"
		active-text-color="#4dbcff"
		:default-active="currentMenu"
		>
			<DynamicMenu :menuList="sidebarMenu"></DynamicMenu>
		</el-menu>
	</div>
</template>

<script>
import DynamicMenu from '@/components/dyanmic-menu'
import dynamicRoutes from '@/router/dynamic-router'

import { DynamicRoutes } from '@/router/index'


export default {
	components: {
		DynamicMenu
	},
	data() {
		return {
			isSidebarNavCollapse: false,
			currentMenu: '',
			sidebarMenu: dynamicRoutes
		}
	},
	computed: {
		// currentMenu() {
		// 	if(this.$route.children) {
		// 		console.log(this.$route.children.name)
		// 		return this.$route.children.name;
		// 	}
		// }
	},
	mounted() {
		console.log(dynamicRoutes)
		console.log(this.$route.name)
	}
}
</script>

<style>
</style>
