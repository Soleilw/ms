<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="APK管理" name="apk">
				<v-apk></v-apk>
			</el-tab-pane>
			<el-tab-pane label="APK版本管理" name="version">
				<v-version></v-version>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	import vApk from '@/components/package/apk.vue'
	import vVersion from '@/components/package/version.vue'
	import API from '@/api/index.js'

	export default {
		components: {
			vApk,
			vVersion
		},
		data() {
			return {
				activeName: 'apk'
			}
		},
		methods: {
			handleClick(tab, event) {
				
			}
		}
	}
</script>

<style>
</style>
