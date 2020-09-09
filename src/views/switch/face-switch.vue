<template>
	<div v-loading="loading" element-loading-text="获取数据中">
		<div class="handle-box">
			<div class="btn">
				<el-button type="primary" size="medium" icon="el-icon-circle-plus-outline" @click="addSwitch">添加开关信息</el-button>
			</div>
		</div>

		<el-dialog title="添加开关信息" :visible.sync="dialogSwitch" width="50%">
			<div class="box">
				<el-form :model="form" label-width="80px">
					<el-form-item label="开关名称">
						<el-input v-model="form.switch_title"></el-input>
					</el-form-item>
					<el-form-item label="版本">
						<el-input v-model="form.version"></el-input>
					</el-form-item>
					<el-form-item label="开关值">
						<!-- 2为关 1为开 -->
						<el-input v-model="form.switch_value"></el-input>
					</el-form-item>
					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="newSwitch">提交</el-button>
						</el-form-item>
					</div>
				</el-form>
			</div>
		</el-dialog>

		<el-table :data="tableData" border :header-cell-style="{background:'#f0f0f0', color: '#2a9f93'}" max-height="620">
			<el-table-column prop="id" label="ID"></el-table-column>
			<el-table-column prop="switch_title" label="开关名称"></el-table-column>
			<el-table-column prop="version" label="版本"></el-table-column>
			<el-table-column prop="switch_value" label="开关值">
				<template slot-scope="scope">
					<span v-if="scope.row.switch_value == 2">关</span>
					<span v-if="scope.row.switch_value == 1">开</span>
				</template>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button slot="reference" size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-popconfirm title="是否要删除该条数据" @onConfirm="handleDel(scope.$index, scope.row)" cancelButtonType="primary" style="margin-left: 10px;">
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
				dialogSwitch: false,
				form: {
					switch_title: '人脸开关',
					version: '1.0.1',
					switch_value: '2'
				},
				tableData: [],

				// 分页
				current: 1, // 当前页
				size: 10, // 每页出现几条
				total: 0 // 总页数
			}
		},
		mounted() {
			this.getSwitch();
		},
		methods: {
			getSwitch() {
				var self = this;
				API.faceSwitches(self.current).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.total;
				}).catch(err => {
					this.loading = false;
				})
			},
			// 添加新的AIP
			addSwitch() {
				var self = this;
				self.dialogSwitch = true;
				self.form = {
					switch_title: '',
					version: '',
					switch_value: ''
				}
			},

			newSwitch() {
				var self = this;
				API.faceSwitch(self.form).then(res => {
					self.dialogSwitch = false;
					self.$message.success("提交成功");
					self.getSwitch();
					self.current = 1;
					self.form = {};
				}).catch(err => {})
			},
			// 操作
			handleDel(index, row) {
				var self = this;
				console.log(row)
				var id = row.id
				API.delFaceSwitch(id).then(res => {
					self.$message.success('删除成功');
					self.getSwitch();
					self.current = 1;
				}).catch(err => {
					self.loading = false;
				})
			},
			// 编辑
			handleEdit(index, row) {
				let self = this;
				self.dialogSwitch = true;
				self.form = row;
			},

			// 分页
			currentChange(val) {
				var self = this;
				self.loading = true;
				self.current = val;
				API.faceSwitches(val, self.size).then(res => {
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
				API.faceSwitches(self.current, val).then(res => {
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
