<template>
	<div v-loading="loading" element-loading-text="获取数据中">
		<div class="handle-box">
			<div class="btn">
				<el-button type="primary" @click="addProject">添加项目</el-button>
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

		<el-table :data="tableData"  border :header-cell-style="{background:'#f0f0f0', color: '#003366'}" max-height="620">
			<el-table-column prop="id" label="ID"></el-table-column>
			<el-table-column prop="name" label="名称"></el-table-column>
			<el-table-column prop="state" label="State"></el-table-column>
			<el-table-column prop="app_id" label="AppId"  width="300px"></el-table-column>
			<el-table-column prop="aip_id" label="AipId" ></el-table-column>
			<el-table-column prop="secret" label="Sectet"  width="300px"></el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-popconfirm title="是否要删除该条数据" @confirm="handleDel(scope.$index, scope.row)" cancelButtonType="primary">
						<el-button slot="reference" size="mini" type="danger">删除</el-button>
					</el-popconfirm>
				</template>
			</el-table-column>
		</el-table>

		<div class="block">
			<el-pagination @current-change="currentChange" :current-page.sync="current" :page-sizes="[10, 20, 50, 100, 150, 200, 250, 300]"
			 :page-size="size" layout="sizes, prev, pager, next, jumper" @size-change="sizeChange" :total="total">
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
				loading: true,
				dialogProject: false,
				apiList: [],
				form: {
					aip_id: '',
					name: ''
				},
				tableData: [],
				currente: 1,
				size: 10,
				total: 0
			}
		},
		mounted() {
			this.getAip();
			this.getProject();
		},
		methods: {
			getAip() {
				var self = this;
				API.aips(self.current).then(res => {
					self.loading = false;
					self.apiList = res.data;
				}).catch(err => {
					self.loading = false;
				})
			},
			getProject() {
				var self = this;
				API.projects(self.current).then(res => {
					self.tableData = res.data;
					self.total = res.total;
				})
			},
			addProject() {
				var self = this;
				self.dialogProject = true;
				self.form = {
					aip_id: '',
					name: ''
				}
			},
			// 添加新的AIP
			newProject() {
				var self = this;
				API.project(self.form).then(res => {
					self.dialogProject = false;
					self.$message.success("提交成功");
					self.getProject();
					self.current = 1
					self.form = {}
				})
			},
			// 操作
			handleDel() {},

			// 分页
			currentChange(val) {
				var self = this;
				self.loading = true;
				self.current = val;
				API.projects(val, self.size).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
			},
			// 每页显示条数
			sizeChange(val) {
				var self = this;
				self.loading = true;
				self.size = val;
				API.projects(self.current, val).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
			},
		}
	}
</script>

<style>
</style>
