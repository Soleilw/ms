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
import { mapState } from 'vuex'

import { DynamicRoutes } from '@/router/index'


export default {
	components: {
		DynamicMenu
	},
	data() {
		return {
			isSidebarNavCollapse: false,
			// currentMenu: '',
			// sidebarMenu: DynamicRoutes
		}
	},
	computed: {
        ...mapState('permission', ['sidebarMenu', 'currentMenu'])
		// currentMenu() {
		// 	if(this.$route.children) {
		// 		console.log(this.$route.children.name)
		// 		return this.$route.children.name;
		// 	}
		// }
	},
	mounted() {
		console.log(DynamicRoutes)
		console.log(this.$route.name)
	}
}
</script>

<style lang="scss" scoped>
	.el-menu {
	    border: none;
	    .iconfont {
	        color: #fff;
	        font-size: 16px;
	    }
	     .el-submenu__title {
	        &:hover {
	            background: none !important;
	        }
	        i.el-submenu__icon-arrow {
	            color: #ddd;
	            font-size: 15px;
	        }
	    } 
	    .el-menu-item-group__title {
	        padding: 0;
	    }
	}
</style>
