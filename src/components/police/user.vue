<template>
	<div v-loading="loading" element-loading-text="加载中">
		<div class="handle-box">
			<div class="btn">
				<el-button type="primary" @click="addUser">添加用户</el-button>
			</div>
		</div>

		<el-table :data="tableData" stripe border :header-cell-style="{background:'#f0f0f0', color: '#003366'}" max-height="620">
			<el-table-column prop="id" label="ID"></el-table-column>
			<el-table-column prop="department.title" label="所属部门"></el-table-column>
			<el-table-column prop="station.name" label="所属辖区"></el-table-column>
			<el-table-column prop="name" label="昵称"></el-table-column>
			<el-table-column prop="username" label="账号"></el-table-column>
			<el-table-column prop="role" label="角色名"></el-table-column>
			<el-table-column label="操作" width="300px">
				<template slot-scope="scope">
					<el-button type="text" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button type="text" @click="handleReset(scope.$index, scope.row)">重置密码</el-button>
					<el-button type="text" @click="loginLogs(scope.$index, scope.row)">登录记录</el-button>
					<!-- <el-button type="danger" size="mini" @click="handleDel(scope.$index, scope.row)">删除</el-button> -->
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
			<el-pagination @current-change="handleCurrentChange" :current-page.sync="current" :page-sizes="[10, 20, 50, 100, 150, 200, 250, 300]"
			 :page-size="size" layout="sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange">
			</el-pagination>
		</div>

		<el-dialog title="添加用户" :visible.sync="dialogUser" width="60%" :close-on-click-modal="false">
			<div class="box">
				<el-form :model="form" label-width="80px">
					<el-form-item label="姓名">
						<el-input v-model="form.name" placeholder="请输入昵称"></el-input>
					</el-form-item>
					<el-form-item label="账号">
						<el-input v-model="form.username" placeholder="请输入账号"></el-input>
					</el-form-item>
					<el-form-item label="输入密码">
						<el-input v-model="form.password" placeholder="请输入密码" type="password"></el-input>
					</el-form-item>
					<el-form-item label="选择角色">
						<el-select v-model="form.role" placeholder="请选择角色">
							<el-option v-for="item in rolesList" :key="item.id" :label="item.name" :value="item.name"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="选择辖区">
						<el-select v-model="form.station_id" placeholder="请选择辖区">
							<el-option v-for="item in areaList" :key="item.id" :label="item.name" :value="item.id">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="选择部门">
						<el-select v-model="level.one" placeholder="请选择所属的一级部门" @change="levelOneChange" style="margin-right: 10px;">
							<el-option v-for="(item, index)  in levelOneList" :key="index" :label="item.title" :value="item.id">
							</el-option>
						</el-select>
						<el-select v-model="level.two" placeholder="请选择所属的一级部门" @change="levelTwoChange" style="margin-right: 10px;">
							<el-option v-for="(item, index)  in levelTwoList" :key="index" :label="item.title" :value="item.id">
							</el-option>
						</el-select>
						<el-select v-model="level.three" placeholder="请选择所属的一级部门" @change="levelThreeChange" style="margin-right: 10px;">
							<el-option v-for="(item, index)  in levelThreeList" :key="index" :label="item.title" :value="item.id">
							</el-option>
						</el-select>
						<el-select v-model="level.four" placeholder="请选择所属的一级部门" @change="levelFourChange" style="margin-right: 10px;">
							<el-option v-for="(item, index)  in levelFourList" :key="index" :label="item.title" :value="item.id">
							</el-option>
						</el-select>
					</el-form-item>
					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="newUser">提交</el-button>
						</el-form-item>
					</div>
				</el-form>
			</div>
		</el-dialog>

		<el-dialog title="修改密码" :visible.sync="dialogResetPassWord" width="500px" :close-on-click-modal="false">
			<div class="box">
				<el-form :model="pwdForm" label-width="120px">
					<el-form-item label="旧密码">
						<el-input v-model="pwdForm.old_password"></el-input>
					</el-form-item>
					<el-form-item label="新密码">
						<el-input v-model="pwdForm.new_password"></el-input>
					</el-form-item>
					<el-form-item label="再次确认新密码">
						<el-input v-model="pwdForm.confirm_password"></el-input>
					</el-form-item>
					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="ChangePassword">提交</el-button>
						</el-form-item>
					</div>
				</el-form>
			</div>
		</el-dialog>
		
		<el-dialog title="登录记录" :visible.sync="dialogLoginLogs" width="80%" :close-on-click-modal="false">
			<el-table :data="loginLogsTable" border :header-cell-style="{background:'#f0f0f0', color: '#003366'}" max-height="620">
				<el-table-column prop="id" label="ID" width="80px"></el-table-column>
				<el-table-column prop="ip" label="ip地址"></el-table-column>
				<el-table-column prop="updated_at" label="登录时间"></el-table-column>
				<el-table-column prop="device" label="设备"></el-table-column>
			</el-table>
			
			<div class="block">
				<el-pagination @current-change="loginCurrentChange" :current-page.sync="loginCurrent" :page-sizes="[10, 20, 50, 100, 150, 200, 250, 300]"
				 :page-size="loginSize" layout="sizes, prev, pager, next, jumper" :total="loginTotal" @size-change="loginSizeChange">
				</el-pagination>
			</div>
		</el-dialog>


	</div>
</template>

<script>
	import API from '@/api//index.js'
	import LOGIN from '@/api/login.js'

	export default {
		data() {
			return {
				loading: true,
				dialogUser: false,
				form: {
					name: '',
					username: '',
					password: '',
					role: '',
					station_id: '',
					department_id: '',
				},
				stateList: [{
						label: '启用',
						value: 1
					},
					{
						label: '禁用',
						value: 2
					}
				],
				rolesList: [],
				areaList: [], // 辖区列表
				departmentList: [], // 获取部门
				levelOneList: [], //  选择二级部门,获取一级部门列表
				levelTwoList: [],
				levelThreeList: [],
				levelFourList: [],
				level: {
					one: '',
					two: '',
					three: '',
					four: ''
				},
				tableData: [],
				
				dialogLoginLogs: false,
				loginLogsTable: [],
				loginCurrent:1,
				loginSize: 10,
				loginTotal: 0,
				login_id: '',
				
				
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
				current: 1,
				size: 10,
				total: 0,

			}
		},
		mounted() {
			this.getAreas();
			this.getRoles();
			this.getUsers();
			this.getLevelOne();
		},
		methods: {
			getAreas() {
				var self = this;
				API.policeStations(1, 1000).then(res => {
					self.areaList = res.data;
				})
			},

			getRoles() {
				var self = this;
				API.roles(1,1000).then(res => {
					self.rolesList = res.data;
				})
			},
			getUsers() {
				var self = this;
				API.users(1, 10).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
			},
			addUser() {
				var self = this
				self.dialogUser = true;
				self.form = {
					name: '',
					username: '',
					password: '',
					role: '',
					station_id: '',
					department_id: '',
				}
				self.level = {
					one: '',
					two: '',
					three: '',
					four: ''
				}
			},
			// 获取一级部门
			getLevelOne() {
				var self = this
				API.policeLevels(1, 1000, 1, 1).then(res => {
					self.levelOneList = res.data;
				})
			},
			// 选择部门
			levelOneChange(val) {
				var self = this
				self.form.department_id = val;
				API.policeLevels(1, 1000, 2, val).then(res => {
					self.levelTwoList = res.data;
					self.level.two = '';
					self.level.three = '';
					self.level.four = '';
				})
			},
			levelTwoChange(val) {
				var self = this;
				self.form.department_id = val;
				API.policeLevels(1, 1000, 3, val).then(res => {
					self.levelThreeList = res.data;
					self.level.three = '';
					self.level.four = '';
				})
			},
			levelThreeChange(val) {
				var self = this;
				self.form.department_id = val;
				API.policeLevels(1, 1000, 4, val).then(res => {
					self.levelFourList = res.data;
					self.level.four = '';
				})
			},
			levelFourChange(val) {
				var self = this;
				self.form.department_id = val;
			},
			newUser() {
				var self = this;
				if (self.form.name && self.form.username && self.form.password && self.form.role && self.form.station_id) {
					API.user(self.form).then(res => {
						self.dialogUser = false;
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
				self.dialogUser = true;
				self.form.name = row.name;
				self.form.username = row.username;
				self.form.role = row.role[0];
				self.form.station_id = row.station_id;
				self.form.department_id = row.department_id;
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
					LOGIN.resetPassword(self.pwdForm).then(res => {
						self.dialogResetPassWord = false;
						self.$message.success('修改成功');
						self.getUsers();
						self.currentPage = 1;
						self.pwdForm = {};
						localStorage.removeItem('username')
						window.location.reload()
						self.$router.replace('/login')
					})
				} else {
					self.$message.error('新密码与确认密码不一致');
				}
			},
			
			// 登录记录
			loginLogs(index, row) {
				var self = this;
				self.dialogLoginLogs = true;
				self.login_id = row.id;
				LOGIN.loginLogs(1, 10, row.id).then(res => {
					self.loginLogsTable = res.data;
					self.loginTotal = res.total;
				})
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
				self.current = val;
				self.loading = true;
				API.users(val, self.size).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
			},
			// 每页多少条
			handleSizeChange(val) {
				var self = this;
				self.size = val;
				self.loading = true;
				API.users(self.current, val).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
			},
			
			// 查看登录记录分页
			loginCurrentChange(val) {
				var self = this;
				self.loginCurrent = true;
				LOGIN.loginLogs(val, self.loginSize, self.login_id).then(res => {
					self.loginLogsTable = res.data;
					self.loginTotal = res.total;
				})
			},
			
			loginSizeChange(val) {
				var self = this;
				self.loginSize = true;
				LOGIN.loginLogs(self.loginCurrent, val, self.login_id).then(res => {
					self.loginLogsTable = res.data;
					self.loginTotal = res.total;
				})
			}
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
