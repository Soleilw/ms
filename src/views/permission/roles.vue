<template>
	<div v-loading="loading" element-loading-text="获取数据中">
		<div class="handle-box">
			<div class="btn">
				<el-button type="primary" @click="addRole">添加角色</el-button>
			</div>
		</div>

		<el-table :data="tableData" border :header-cell-style="{background:'#f0f0f0', color: '#2a9f93'}" max-height="620">
			<el-table-column prop="id" label="ID"></el-table-column>
			<el-table-column prop="name" label="角色名"></el-table-column>
			<!-- <el-table-column prop="guard_name" label="角色名" align="center"></el-table-column> -->
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button type="primary" size="mini" @click="handleEdit(scope.$index, scope.row)">编辑权限</el-button>
					<el-button type="danger" size="mini" @click="handleDel(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<el-dialog :visible.sync="dialogDel" title="删除角色" width="20%" align="center" :close-on-click-modal="false">
			<div style="font-size: 20px; margin-bottom: 30px;">是否删除该角色</div>
			<span>
				<el-button type="primary" @click="toDel">删除</el-button>
				<el-button type="danger" @click="dialogDel = false">取消</el-button>
			</span>
		</el-dialog>

		<div class="block">
			<el-pagination @current-change="currentChange" :current-page.sync="current" :page-sizes="[10, 20, 50, 100, 150, 200, 250, 300]"
			 :page-size="size" layout="sizes, prev, pager, next, jumper" @size-change="sizeChange" :total="total">
			</el-pagination>
		</div>

		<el-dialog title="添加角色" :visible.sync="dialogRole" width="90%" :close-on-click-modal="false">
			<div class="box">
				<el-form :model="form" label-width="120px">
					<el-form-item label="角色名称">
						<el-input v-model="form.name" placeholder="请输入角色名" :disabled="disabledRole"></el-input>
					</el-form-item>
					<!-- 					<el-form-item label="角色名称(中文)">
						<el-input v-model="form.name" placeholder="请输入角色名" :disabled="disabledRole"></el-input>
					</el-form-item> -->
					<el-form-item label="选择权限">
						<el-checkbox v-model="checkAll" @change="AllChange">全选</el-checkbox>
						<div class="permission">
							<el-checkbox-group v-model="form.permissions" class="permission-item">
								<el-checkbox class="permission-span" label="overview" @change="oneChange" border>
									<span style="font-weight: bold;">数据总览页</span>
								</el-checkbox>
							</el-checkbox-group>
						</div>
						<div class="permission">
							<el-checkbox-group v-model="form.permissions" class="permission-item">
								<el-checkbox class="permission-span" label="baiduaip" @change="oneChange" border>
									<span style="font-weight: bold;">百度接口管理页</span>
								</el-checkbox>
								<el-checkbox label="baiduaipAdd" @change="oneChange">添加百度接口</el-checkbox>
								<el-checkbox label="baiduaipGet" @change="oneChange">获取百度接口数据</el-checkbox>
								<el-checkbox label="baiduaipDel" @change="oneChange">删除百度接口数据</el-checkbox>
							</el-checkbox-group>
						</div>
						<div class="permission">
							<el-checkbox-group v-model="form.permissions" class="permission-item">
								<el-checkbox class="permission-span" label="project" @change="oneChange" border>
									<span style="font-weight: bold;">项目管理页</span>
								</el-checkbox>
								<el-checkbox label="projectAdd" @change="oneChange">添加项目</el-checkbox>
								<el-checkbox label="projectGet" @change="oneChange">获取项目</el-checkbox>
								<el-checkbox label="projectDel" @change="oneChange">删除项目</el-checkbox>
							</el-checkbox-group>
						</div>
						<div class="permission">
							<el-checkbox-group v-model="form.permissions" class="permission-item">
								<el-checkbox class="permission-span" label="address" @change="oneChange" border>
									<span style="font-weight: bold;">地址管理页</span>
								</el-checkbox>
								<el-checkbox label="addressList" @change="oneChange">地址列表子页</el-checkbox>
								<el-checkbox label="areas" @change="oneChange">地区管理子页</el-checkbox>
								<el-checkbox label="addressAdd" @change="oneChange">添加地址</el-checkbox>
								<el-checkbox label="addressGet" @change="oneChange">获取地址</el-checkbox>
								<el-checkbox label="addressDel" @change="oneChange">删除地址</el-checkbox>
							</el-checkbox-group>
						</div>
						<div class="permission">
							<el-checkbox-group v-model="form.permissions" class="permission-item">
								<el-checkbox class="permission-span" label="face" @change="oneChange" border>
									<span style="font-weight: bold;">人脸管理页</span>
								</el-checkbox>
								<el-checkbox label="faceAdd" @change="oneChange">添加人脸</el-checkbox>
								<el-checkbox label="faceGet" @change="oneChange">获取人脸</el-checkbox>
								<el-checkbox label="faceDel" @change="oneChange">删除人脸</el-checkbox>
							</el-checkbox-group>
						</div>
						<div class="permission">
							<el-checkbox-group v-model="form.permissions" class="permission-item">
								<el-checkbox class="permission-span" label="device" @change="oneChange" border>
									<span style="font-weight: bold;">设备管理页</span>
								</el-checkbox>
								<el-checkbox label="deviceList" @change="oneChange">设备列表子页</el-checkbox>
								<el-checkbox label="command" @change="oneChange">指令管理子页</el-checkbox>
								<el-checkbox label="deviceAdd" @change="oneChange">添加设备</el-checkbox>
								<el-checkbox label="deviceGet" @change="oneChange">获取设备</el-checkbox>
								<el-checkbox label="deviceDel" @change="oneChange">删除设备</el-checkbox>
							</el-checkbox-group>
						</div>
						<div class="permission">
							<el-checkbox-group v-model="form.permissions" class="permission-item">
								<el-checkbox class="permission-span" label="package" @change="oneChange" border>
									<span style="font-weight: bold;">包管理页</span>
								</el-checkbox>
								<el-checkbox label="apkAdd" @change="oneChange">添加角色</el-checkbox>
								<el-checkbox label="apkGet" @change="oneChange">获取角色列表</el-checkbox>
								<el-checkbox label="apkDel" @change="oneChange">删除角色</el-checkbox>
							</el-checkbox-group>
						</div>
						<div class="permission" style="margin-left: 180px;">
							<el-checkbox-group v-model="form.permissions" class="permission-item">
								<el-checkbox label="apkVersionAdd" @change="oneChange">添加版本</el-checkbox>
								<el-checkbox label="apkVersionSend" @change="oneChange">发布版本</el-checkbox>
								<el-checkbox label="apkVersionDel" @change="oneChange">删除版本</el-checkbox>
							</el-checkbox-group>
						</div>
						<div class="permission">
							<el-checkbox-group v-model="form.permissions" class="permission-item">
								<el-checkbox class="permission-span" label="danger" @change="oneChange" border>
									<span style="font-weight: bold;">可疑管理页</span>
								</el-checkbox>
								<el-checkbox label="doubtable" @change="oneChange">可疑人脸子页</el-checkbox>
								<el-checkbox label="dangerlogs" @change="oneChange">可疑日志子页</el-checkbox>
								<el-checkbox label="dangerAdd" @change="oneChange">添加可疑</el-checkbox>
								<el-checkbox label="dangerGet" @change="oneChange">获取可疑列表</el-checkbox>
								<el-checkbox label="dangerDel" @change="oneChange">删除可疑</el-checkbox>
								<el-checkbox label="dangerLogGet" @change="oneChange">获取可疑日志列表</el-checkbox>
								<el-checkbox label="dangerLogDel" @change="oneChange">删除可疑日志</el-checkbox>
							</el-checkbox-group>
						</div>

						<div class="permission">
							<el-checkbox-group v-model="form.permissions" class="permission-item">
								<el-checkbox class="permission-span" label="permission" @change="oneChange" border>
									<span style="font-weight: bold;">权限管理页</span>
								</el-checkbox>
								<el-checkbox label="roleAdd" @change="oneChange">添加角色</el-checkbox>
								<el-checkbox label="roleEdit" @change="oneChange">编辑权限</el-checkbox>
								<el-checkbox label="roleGet" @change="oneChange">获取角色列表</el-checkbox>
								<el-checkbox label="roleDel" @change="oneChange">删除角色</el-checkbox>
							</el-checkbox-group>
						</div>
						<div class="permission" style="margin-left: 180px;">
							<el-checkbox-group v-model="form.permissions" class="permission-item">
								<el-checkbox label="manageAdd" @change="oneChange">添加管理员</el-checkbox>
								<el-checkbox label="manageEdit" @change="oneChange">编辑管理员</el-checkbox>
								<el-checkbox label="manageGet" @change="oneChange">管理员列表</el-checkbox>
								<el-checkbox label="manageResetPwd" @change="oneChange">重置密码</el-checkbox>
								<el-checkbox label="manageDel" @change="oneChange">删除管理员</el-checkbox>
							</el-checkbox-group>
						</div>
					<div class="permission">
						<el-checkbox-group v-model="form.permissions" class="permission-item">
							<el-checkbox class="permission-span" label="outInLogs" @change="oneChange" border>
								<span style="font-weight: bold;">进出记录管理页</span>
							</el-checkbox>
						</el-checkbox-group>
					</div>
					</el-form-item>
					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="newRole">提交</el-button>
						</el-form-item>
					</div>
				</el-form>
			</div>
		</el-dialog>

	</div>
</template>

<script>
	import API from "@/api/index.js";

	export default {
		data() {
			return {
				loading: true,
				dialogRole: false,
				form: {
					name: '',
					permissions: []
				},
				stateList: [{
						label: "启用",
						value: 1
					},
					{
						label: "禁用",
						value: 0
					}
				],
				tableData: [],

				checkAll: false,
				permissionList: [
					"overview", // 数据总览

					"baiduaip", // 百度接口管理页
					"baiduaipAdd", // 添加百度接口
					"baiduaipGet", // 获取百度接口数据
					"baiduaipDel", // 删除百度接口数据

					"project", // 项目管理页
					"projectAdd", // 添加项目
					"projectGet", // 获取项目
					"projectDel", // 删除项目

					"address", // 地址管理页
					"addressList", // 地址列表
					"areas", // 地区管理
					"addressAdd", // 添加地址
					"addressGet", // 获取地址
					"addressDel", // 删除地址

					"face", // 人脸管理页
					"faceAdd", // 添加人脸
					"faceGet", // 获取人脸
					"faceDel", // 删除人脸

					"device", // 设备管理页
					"deviceList", // 设备列表
					"command", // 指令管理
					"deviceAdd", // 添加设备
					"deviceGet", // 获取设备
					"deviceDel", // 删除设备

					"package", // 包管理页
					"apkAdd", // 添加安装包
					"apkDel", // 获取安装包
					"apkGet", // 删除安装包
					"apkVersionAdd", // 添加版本
					"apkVersionDel", // 删除版本
					"apkVersionSend", // 发布版本

					"danger", // 可疑管理页
					"doubtable", // 可疑人脸子页
					"dangerlogs", // 可疑日志子页
					"dangerAdd", // 添加安装包
					"dangerDel", // 获取安装包
					"dangerGet", // 删除安装包
					"dangerLogGet", // 获取可疑日志列表
					"dangerLogDel", // 删除可疑日志


					"permission", // 角色管理
					"roleGet",
					"roleAdd",
					"roleEdit",
					"roleDel",
					"manageGet",
					"manageAdd",
					"manageEdit",
					"manageDel",
					"manageResetPwd", // 重置密码
					
					"outInLogs" // 进出记录管理页
				],
				// permissionList: [
				// 	{
				// 		title: 'resident',
				// 		name: '住户管理页'
				// 	},
				// 	{
				// 		title: 'residentGet',
				// 		name: '获取住户'
				// 	},
				// 	{
				// 		title: 'house',
				// 		name: '房屋管理页'
				// 	},
				// 	{
				// 		title: 'houses',
				// 		name: '房屋列表'
				// 	},
				// 	{
				// 		title: 'housesAdd',
				// 		name: '新增房屋'
				// 	},
				// 	{
				// 		title: 'housesGet',
				// 		name: '获取房屋'
				// 	},
				// 	{
				// 		title: 'permission',
				// 		name: '角色管理页'
				// 	},
				// 	{
				// 		title: 'roleGet',
				// 		name: '获取角色列表'
				// 	},
				// 	{
				// 		title: 'roleAdd',
				// 		name: '新增角色'
				// 	},{
				// 		title: 'roleEdit',
				// 		name: '编辑权限'
				// 	},{
				// 		title: 'roleDel',
				// 		name: '删除角色'
				// 	},{
				// 		title: 'manageGet',
				// 		name: '管理员列表'
				// 	},{
				// 		title: 'manageAdd',
				// 		name: '新增管理员'
				// 	},
				// 	,{
				// 		title: 'manageEdit',
				// 		name: '编辑管理员'
				// 	},
				// 	,{
				// 		title: 'manageDel',
				// 		name: '删除管理员'
				// 	},
				// 	,{
				// 		title: 'manageResetPwd',
				// 		name: '重置密码'
				// 	}
				// ],


				dialogDel: false,
				id: "", // 删除id
				disabledRole: false,
				// 分页
				current: 1, // 当前页
				size: 10, // 每页出现几条
				total: 0 // 总页数
			};
		},
		mounted() {
			this.getRoles();
		},
		methods: {
			addRole() {
				var self = this;
				self.dialogRole = true;
				self.form = {
					name: "",
					permissions: []
				};
				self.disabledRole = false;
				self.checkAll = true;
				if (self.checkAll === true) {
					self.form.permissions = self.checkAll ? self.permissionList : [];
				}
			},
			getRoles() {
				var self = this;
				API.roles(self.current).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
			},
			newRole() {
				var self = this;
				API.role(self.form).then(res => {
					self.dialogRole = false;
					self.$message.success("提交成功");
					self.getRoles();
					self.currentPage = 1;
					self.form = {};
					self.form.permissions = [];
				});
			},
			// 操作
			handleEdit(index, row) {
				var self = this;
				self.dialogRole = true;
				self.disabledRole = true;
				API.oneRole(row.name).then(res => {
					self.form = res;
					self.checkAll = res.permissions.length >= self.permissionList.length;
				})
			},
			AllChange(val) {
				var self = this;
				self.form.permissions = val ? self.permissionList : [];
			},
			oneChange(val) {
				var self = this;
				console.log(self.form.permissions);
				self.checkAll = self.form.permissions.length >= self.permissionList.length;
			},

			handleDel(index, row) {
				var self = this;
				self.dialogDel = true;
				self.id = row.id;
			},
			toDel() {
				var self = this;
				API.delRole(self.id).then(res => {
					self.$message.success("删除成功");
					self.dialogDel = false;
					self.getRoles();
					self.currentPage = 1;
				});
			},

			// 分页
			currentChange(val) {
				var self = this;
				self.loading = true;
				self.current = val;
				API.roles(val, self.size).then(res => {
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
				API.roles(self.current, val).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
			},
		}
	};
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

	.permission-span {
		width: 150px;
	}
</style>
