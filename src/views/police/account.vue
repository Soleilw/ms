<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="changeActive">
			<el-tab-pane label="用户管理" name="user">
				<v-user></v-user>
			</el-tab-pane>
			<el-tab-pane label="角色管理" name="role">
				<v-role></v-role>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	import vUser from '@/components/police/user.vue'
	import vRole from '@/components/police/role.vue'
	import API from '@/api/index.js'

	export default {
		name: 'student',
		components: {
			vUser,
			vRole
		},
		data() {
			return {
				activeName: 'user'
			}
		},
		methods: {
			changeActive() {
				if(this.activeName === 'info') {
				}
				
				if(this.activeName === 'more') {
					console.log(111)
				}
			}
		}
	}
</script>

<style>
</style>