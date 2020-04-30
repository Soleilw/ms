<template>
	<div class="container">
		<template v-for="item in menuList">
			<template v-if="item.children">
				<el-submenu :index="item.name" :key="item.name">
					<template slot="title">
						<i :class="item.meta.icon"></i>
						<span slot="title">{{ item.meta.title}}</span>
					</template>
					<template v-for="childrenItem in item.children">
						<el-submenu v-if="childrenItem.children" :index="childrenItem.name" :key="childrenItem.name" @click="gotoRoute(childrenItem.path)">
							<template><span slot='title'>{{ childrenItem.meta.title }}</span></template>
							<el-menu-item v-for="threeItem in childrenItem.children" :index="threeItem.name" :key="threeItem.name" @click="gotoRoute(threeItem.path)">
								{{ threeItem.meta.title }}
							</el-menu-item>
						</el-submenu>
						<el-menu-item v-else :index="childrenItem.name" :key="childrenItem.name" @click="gotoRoute(childrenItem.path)">
							{{ childrenItem.meta.title }}
						</el-menu-item>
					</template>
				</el-submenu>
			</template>
			<template v-else>
				<el-menu-item :index="item.name" :key="item.name" @click="gotoRoute(item.path)">
					<i :class="item.meta.icon"></i>
					<span slot="title">{{ item.meta.title}}</span>
				</el-menu-item>
			</template>
			
			<!-- 
			
			<el-submenu :index="item.name" :key="item.name" v-if="item.children && item.children.length > 0">
				<template slot="title">
					<i :class="item.meta.icon"></i>
					<span>{{ item.meta.title }}</span>
				</template>
				<el-menu-item v-for="childrenItem in item.children" :key="childrenItem.name" :index="childrenItem.name" @click="gotoRoute(childrenItem.path)">
					<span slot='title'>{{ childrenItem.meta.title }}</span>
				</el-menu-item>
				<el-menu-item-group>
					<my-nav :menuList='item.children'></my-nav>
				</el-menu-item-group>
			</el-submenu>
			<el-menu-item :index="item.name" :key="item.name" @click="gotoRoute(item.path)" v-else>
				<i :class="item.meta.icon"></i>
				<span slot='title'>{{ item.meta.title }}</span>
			</el-menu-item> -->
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
