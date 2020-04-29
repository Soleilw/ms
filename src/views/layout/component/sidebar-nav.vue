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
	mounted() {
		console.log(dynamicRoutes)
	}
}
</script>

<style>
</style>
