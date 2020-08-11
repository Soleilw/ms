<template>
	<div>
		<div class="handle-box">

		</div>
		<el-table :data="faceLogsTable" border :header-cell-style="{background:'#f0f0f0', color: '#2a9f93'}" max-height="620">
			<el-table-column prop="id" label="ID"></el-table-column>
			<el-table-column prop="device_uuid" label="设备ID"></el-table-column>
			<el-table-column prop="face.name" label="名称"></el-table-column>
			<el-table-column prop="time" label="时间"></el-table-column>
			<el-table-column prop="temp" label="温度"></el-table-column>
			<el-table-column prop="face_id" label="人脸ID"></el-table-column>
			<el-table-column prop="image" label="人脸图片">
				<template slot-scope="scope">
					<el-popover placement="top-start" title="" trigger="click">
						<img :src="scope.row.image" style="max-width:800px; max-height:800px;" />
						<img slot="reference" :src="scope.row.image" style="max-width:180px;max-height:80px;">
					</el-popover>
				</template>
			</el-table-column>
		</el-table>
		<div class="block">
			<el-pagination @current-change="currentPage" :current-page.sync="current" :page-sizes="[10, 20, 50, 100, 150, 200, 250, 300]"
			 :page-size="size" layout="sizes, prev, pager, next, jumper" @size-change="sizePage" :total="total">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	import API from '@/api/index.js'
	export default {
		name: 'gradems',
		data() {
			return {
				faceLogsTable: [],
				// 分页
				current: 1, // 当前页
				size: 10,	// 每页出现几条
				total: 0 // 总页数
			}
		},
		mounted() {
			this.getLogs()
		},
		methods: {
			getLogs(index, row) {
				API.deviceFaceLogs(1, 10).then(res => {
					this.faceLogsTable = res.data;
					this.total = res.total;
				})
			},
			// 分页
			currentPage(val) {
				var self = this;
				self.current = val;
				API.deviceFaceLogs(val, self.size).then(res => {
					this.faceLogsTable = res.data;
					this.total = res.total;
				})
			},
			// 每页显示条数
			sizePage(val) {
				var self = this;
				self.size = val;
				API.deviceFaceLogs(self.current, val).then(res => {
					this.faceLogsTable = res.data;
					this.total = res.total;
				})
			}
		},
	}
</script>

<style scoped>
	.facebox {
		display: flex;
		flex-wrap: wrap;
	}

	.facebox-item {
		margin: 10px;
		padding: 0 10px;
	}

	.logcat {
		text-align: left;
		/* width: 300px; */
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.temp {
		width: 700px;
		height: 650px;
		font-size: 16px;
		padding: 10px;
	}
</style>
