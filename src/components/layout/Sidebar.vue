<template>
	<div>
		<el-menu :default-active="onRoutes" :collapse="collapse" class="sidebar-el-menu" background-color="#fff" text-color="#000"
		 active-text-color="#000" unique-opened router>
			<template v-for="item in sidebarMenu">
				<template v-if="item.children">
					<el-submenu :index="item.path" :key="item.path">
						<template slot="title">
							<i :class="item.meta.icon"></i>
							<span slot="title">
								{{item.meta.title}}
							</span>
						</template>
						<template v-for="childrenItem in item.children">
							<el-submenu v-if="childrenItem.children" :index="childrenItem.path" :key="childrenItem.path">
								<template slot="title">
									{{childrenItem.meta.title}}
								</template>
								<el-menu-item v-for="threeItem in childrenItem.children" :key="threeItem.path" :index="threeItem.path">{{ threeItem.meta.title }}</el-menu-item>
							</el-submenu>
							<el-menu-item v-else :index="childrenItem.path" :key="childrenItem.path">{{ childrenItem.meta.title }}</el-menu-item>
						</template>
					</el-submenu>
				</template>

				<template v-else>
					<el-menu-item :index="item.path" :key="item.path">
						<i :class="item.meta.icon"></i>
						<span slot="title">
							{{item.meta.title}}
						</span>
					</el-menu-item>
				</template>

			</template>
		</el-menu>
	</div>
</template>

<script>
	// import sidebar from '@/router/dynamicRouter.js'
	import {
		mapState
	} from 'vuex'
	import bus from './bus'

	export default {
		data() {
			return {}
		},
		computed: {
			...mapState('permission', ['sidebarMenu']),
			...mapState(['collapse']),
			onRoutes() {
				return this.$route.path;
			}
		},
		created() {
			this.getPath()
		},
		methods: {
			getPath: function() {
				bus.$on('path', (val) => {
					return this.$router.replace(val);
				})
			}
		}
	}
</script>

<style scoped>
</style>
