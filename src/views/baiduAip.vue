<template>
	<div>
		<div class="handle-box">
			<div class="btn">
				<el-button type="primary" size="medium" icon="el-icon-circle-plus-outline" @click="addAip">添加AIP</el-button>
			</div>
		</div>

		<el-dialog title="添加AIP" :visible.sync="dialogAip" width="50%">
			<div class="box">
				<el-form :model="form" label-width="80px">
					<el-form-item label="Apk名字">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="AppId">
						<el-input v-model="form.app_id"></el-input>
					</el-form-item>
					<el-form-item label="ApiKEY">
						<el-input v-model="form.api_key"></el-input>
					</el-form-item>
					<el-form-item label="SectetKey">
						<el-input v-model="form.secret_key"></el-input>
					</el-form-item>
					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="newAip">提交</el-button>
						</el-form-item>
					</div>
				</el-form>
			</div>
		</el-dialog>

		<el-table :data="tableData" border :header-cell-style="{background:'#f0f0f0', color: '#2a9f93'}">
			<el-table-column prop="id" label="ID"></el-table-column>
			<el-table-column prop="name" label="名称"></el-table-column>
			<el-table-column prop="remark" label="备注"></el-table-column>
			<el-table-column prop="state" label="State"></el-table-column>
			<el-table-column prop="app_id" label="AppId"></el-table-column>
			<el-table-column prop="api_key" label="ApiKey" width="300px"></el-table-column>
			<el-table-column prop="secret_key" label="SectetKey" width="300px"></el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" type="danger" @click="handleDel(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<div class="block">
			<el-pagination @current-change="currentPage" :current-page.sync="current" :page-sizes="[10, 20, 30, 40, 50]"
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
				dialogAip: false,
				form: {
					name: '',
					app_id: '',
					api_key: '',
					secret_key: ''
				},
				tableData: [],
				
				// 分页
				current: 1, // 当前页
				size: 10,	// 每页出现几条
				total: 0 // 总页数
			}
		},
		mounted() {
			this.getAip();
		},
		methods: {
			getAip() {
				var self = this;
				API.aips(self.current).then(res => {
					self.tableData = res.data;
					self.total = res.total;
				})
			},
			// 添加新的AIP
			addAip () {
				var self = this;
				self.dialogAip = true;
				self.form = {
					name: '',
					app_id: '',
					api_key: '',
					secret_key: ''
				}
			},
			
			newAip() {
				var self = this;
				API.aip(self.form).then(res => {
					self.dialogApk = false;
					self.$message.success("提交成功");
					self.getAip();
					self.current = 1;
					self.form = {};
				})
			},
			// 操作
			handleDel(index, row) {
				var self = this;
				console.log(row)
				var id = row.id
				API.delAip(id).then(res => {
					self.$message.success('删除成功');
					self.getAip();
					self.current = 1;
				})
			},

			// 分页
			currentPage(val) {
				var self = this;
				self.current = val;
				API.aips(val, self.size).then(res => {
					self.tableData = res.data;
					self.total = res.total;
				})
			},
			// 每页显示条数
			sizePage(val) {
				var self = this;
				self.size = val;
				API.aips(self.current, val).then(res => {
					self.tableData = res.data;
					self.total = res.total;
				})
			}
		}
	}
</script>

<style>
</style>
