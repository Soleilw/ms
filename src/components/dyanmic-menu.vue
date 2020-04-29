<template>
	<div class="container">
		<template v-for="item in menuList">
			<el-submenu :index="item.name" :key="item.name" v-if="item.children && item.children.length > 0">
				<template slot="title">
					<i :class="item.meta.icon"></i>
					<span>{{ item.meta.title }}</span>
				</template>
				<el-menu-item v-for="childrenItem in item.children" :key="childrenItem.name" :index="childrenItem.name" @click="gotoRoute(item.path)">
					<span slot='title'>{{ childrenItem.meta.title }}</span>
				</el-menu-item>
				<!-- <el-menu-item-group>
					<my-nav :menuList='item.children'></my-nav>
				</el-menu-item-group> -->
			</el-submenu>
			<el-menu-item :index="item.name" :key="item.name" @click="gotoRoute(item.path)" v-else>
				<i :class="item.meta.icon"></i>
				<span slot='title'>{{ item.meta.title }}</span>
			</el-menu-item>
		</template>
	</div>
</template>

<script>
	export default {
		name: 'my-nav',
		props: {
			menuList: {
				type: Array,
				default: () => {
					return []
				}
			}
		},
		methods: {
			gotoRoute(path) {
				this.$router.push({path}); 
			}
		}
	}
</script>

<style>
</style>
