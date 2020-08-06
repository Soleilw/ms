<template>
	<div>
		<div class="handle-box">
			<div class="btn">
				<el-button type="primary" @click="dialogProject = true">添加项目</el-button>
			</div>
		</div>
		

		<el-dialog title="添加项目" :visible.sync="dialogProject">
			<div class="box">
				<el-form :model="form" label-width="100px">
					<el-form-item label="选择AIPID">
						<el-select v-model="form.aip_id">
							<el-option v-for="(item, index) in apiList" :label="item.name" :value="item.id" :key="index"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="项目名字">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="newProject">提交</el-button>
						</el-form-item>
					</div>
				</el-form>
			</div>
		</el-dialog>

		<el-table :data="tableData"  border :header-cell-style="{background:'#f0f0f0', color: '#2a9f93'}" max-height="620">
			<el-table-column prop="id" label="ID"></el-table-column>
			<el-table-column prop="name" label="名称"></el-table-column>
			<el-table-column prop="state" label="State"></el-table-column>
			<el-table-column prop="app_id" label="AppId"  width="300px"></el-table-column>
			<el-table-column prop="aip_id" label="AipId" ></el-table-column>
			<el-table-column prop="secret" label="Sectet"  width="300px"></el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<div class="block">
			<el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-sizes="[10, 20, 50, 100, 150, 200, 250, 300]"
			 :page-size="pageSize" layout="sizes, prev, pager, next, jumper" @size-change="handleSizeChange" :total="totalPage">
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
				dialogProject: false,
				apiList: [],
				form: {
					aip_id: '',
					name: ''
				},
				tableData: [],
				currentPage: 1,
				pageSize: 10,
				totalPage: 0
			}
		},
		mounted() {
			this.getAip();
			this.getProject();
		},
		methods: {
			getAip() {
				var self = this;
				API.aips(self.currentPage).then(res => {
					self.apiList = res.data;
				})
			},
			getProject() {
				var self = this;
				API.projects(self.currentPage).then(res => {
					self.tableData = res.data;
					self.totalPage = res.total;
				})
			},
			// 添加新的AIP
			newProject() {
				var self = this;
				API.project(self.form).then(res => {
					self.dialogProject = false;
					self.$message.success("提交成功");
					self.getProject();
					self.currentPage = 1
					self.form = {}
				})
			},
			// 操作
			handleDel() {},

			// 分页
			handleCurrentChange(val) {
				var self = this;
				self.currentPage = val;
				API.projects(val, self.pageSize).then(res => {
					self.tableData = res.data;
					self.totalPage = res.total;
				})
			},
			// 每页显示条数
			handleSizeChange(val) {
				var self = this;
				self.pageSize = val;
				API.projects(self.currentPage, val).then(res => {
					self.tableData = res.data;
					self.totalPage = res.total;
				})
			}
		}
	}
</script>

<style>
</style>
