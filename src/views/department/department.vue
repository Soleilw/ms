<template>
	<div>
		<div class="handle-box">
			<div class="btn">
				<el-button type="primary" @click="addDepartment">添加部门</el-button>
			</div>
		</div>

		<el-table :data="tableData" border :header-cell-style="{background:'#f0f0f0', color: '#003366'}" max-height="620">
			<el-table-column prop="id" label="部门等级"></el-table-column>
			<el-table-column prop="username" label="部门名称"></el-table-column>
			<el-table-column label="操作" width="300px">
				<template slot-scope="scope">
					<el-button type="primary" size="mini" @click="handleEdit(scope.$index, scope.row)">编辑权限</el-button>
					<el-button type="primary" size="mini" @click="handleReset(scope.$index, scope.row)">查看绑定警员</el-button>
					<el-button type="primary" size="mini" @click="handleReset(scope.$index, scope.row)">编辑名称</el-button>
				</template>
			</el-table-column>
		</el-table>

		<el-dialog :visible.sync="dialogDel" title="删除角色" width="20%" align="center" :close-on-click-modal="false">
			<div style="font-size: 20px; margin-bottom: 30px;">是否删除该账号</div>
			<span>
				<el-button type="primary" @click="toDel">删除</el-button>
				<el-button type="danger" @click="dialogDel = false">取消</el-button>
			</span>
		</el-dialog>

		<div class="block">
			<el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-sizes="[10, 20, 50, 100, 150, 200, 250, 300]"
			 :page-size="10" layout="sizes, prev, pager, next, jumper" :total="totalPage" @size-change="handleSizeChange">
			</el-pagination>
		</div>

		<el-dialog title="添加警员" :visible.sync="dialogDepartment" width="60%" :close-on-click-modal="false">
			<div class="box">
				<el-form :model="form" label-width="80px">
					<el-form-item label="部门等级">
						<el-select v-model="form.station_id" placeholder="请选择部门等级">
							<el-option v-for="item in areaList" :key="item.id" :label="item.name" :value="item.id">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="部门名称">
						<el-input v-model="form.password" placeholder="请输入部门名称" type="password"></el-input>
					</el-form-item>
					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="newUser">提交</el-button>
						</el-form-item>
					</div>
				</el-form>
			</div>
		</el-dialog>

	</div>
</template>

<script>
	import API from '@/api//index.js'

	export default {
		data() {
			return {
				dialogDepartment: false,
				form: {
					name: ''
				},
				tableData: [],

				dialogResetPassWord: false, // 修改密码
				pwdForm: {
					new_password: '',
					old_password: '',
					confirm_password: '',
					id: ''
				},

				dialogDel: false,
				id: '', // 删除id

				// 分页
				currentPage: 1,
				totalPage: 0,

			}
		},
		mounted() {
			this.getAreas();
			this.getRoles();
			this.getUsers();
		},
		methods: {

			getAreas() {
				var self = this;
			},

			getRoles() {
				var self = this;
			},
			getUsers() {
				var self = this;
			},
			addDepartment() {
				var self = this
				self.dialogDepartment = true;
				self.form = {
					username: '',
					password: '',
					role: '',
					station_id: ''
				}
			},
			newUser() {
				var self = this;
				if (self.form.username && self.form.password && self.form.role && self.form.station_id) {
					API.user(self.form).then(res => {
						self.dialogDepartment = false;
						self.$message.success('提交成功');
						self.getUsers();
						self.currentPage = 1;
						self.form = {};
					})
				} else {
					self.$message.warning('请补充完整信息');
				}
			},

			// 操作
			handleEdit(index, row) {
				var self = this;
				self.dialogDepartment = true;
				self.form.username = row.username;
				self.form.role = row.role;
				self.form.station_id = row.station_id;
				self.form.id = row.id;
			},
			// 重置密码
			handleReset(index, row) {
				var self = this
				self.dialogResetPassWord = true;
				self.pwdForm.id = row.id;
			},
			ChangePassword() {
				var self = this;
				if (self.pwdForm.new_password === self.pwdForm.confirm_password) {
					API.resetPassword(self.pwdForm).then(res => {
						self.dialogResetPassWord = false;
						self.$message.success('修改成功');
						self.getUsers();
						self.currentPage = 1;
						self.pwdForm = {};
					})
				} else {
					self.$message.error('新密码与确认密码不一致');
				}
			},

			handleDel(index, row) {
				var self = this;
				self.dialogDel = true;
				self.id = row.id;
			},
			toDel() {
				var self = this;
				API.delUser(self.id).then(res => {
					self.$message.success('删除成功')
					self.dialogDel = false;
					self.getUsers();
					self.currentPage = 1
				})
			},


			// 分页
			handleCurrentChange(val) {
				var self = this;
				self.getUsers();
			},
			// 每页多少条
			handleSizeChange(val) {
				var self = this;
				API.users(self.currentPage, val).then(res => {
					self.tableData = res.data;
					self.totalPage = res.total;
				})
			},
		}
	}
</script>

<style scoped>
	.permission {
		display: flex;
		flex-wrap: wrap;
	}

	.permission-item {
		margin: 10px;
		padding: 0 10px;
	}
</style>
