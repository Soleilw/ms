<template>
	<div v-loading="loading" element-loading-text="获取数据中">
		<div class="handle-box">
			<div class="btn">
				<el-button type="primary" @click="addRole">添加角色</el-button>
			</div>
		</div>
		<el-table :data="tableData" stripe border :header-cell-style="{background:'#f0f0f0', color: '#003366'}" max-height="620">
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
						<div v-if="username == 'admin'">
							<el-checkbox v-model="checkAll" @change="AllChange">全选</el-checkbox>
							<div class="permission" style="width: 1000px;">
								<div class="table">
									<div class="th" style="width: 20%;">一级菜单</div>
									<div class="th" style="width: 20%;">二级菜单</div>
									<div class="th" style="width: 60%;">操作</div>
								</div>
								<el-checkbox-group v-model="form.permissions">
									<div class="table">
										<div class="tb" style="width: 20%;">
											<div class="level1">
												<el-checkbox label="overview" @change="oneChange">
													<span style="font-weight: bold;">数据总览</span>
												</el-checkbox>
											</div>

										</div>
										<div class="tb tr" style="width: 20%;"></div>
										<div class="tb tr" style="width: 60%;"></div>
									</div>
									<div class="table">
										<div class="tb" style="width: 20%;">
											<div class="level1">
												<el-checkbox label="baiduaip" @change="oneChange">
													<span style="font-weight: bold;">百度接口管理</span>
												</el-checkbox>
											</div>
										</div>
										<div class="tb tr" style="width: 20%;"></div>
										<div class="tb set" style="width: 60%;">
											<div class="level2">
												<el-checkbox label="baiduaipAdd" @change="oneChange" class="permission-span">新增</el-checkbox>
												<el-checkbox label="baiduaipDel" @change="oneChange" class="permission-span">删除</el-checkbox>
												<el-checkbox label="baiduaipGet" @change="oneChange" class="permission-span">查看</el-checkbox>
											</div>
										</div>
									</div>
									<div class="table">
										<div class="tb" style="width: 20%;">
											<div class="level1">
												<el-checkbox label="project" @change="oneChange">
													<span style="font-weight: bold;">项目管理</span>
												</el-checkbox>
											</div>
										</div>
										<div class="tb tr" style="width: 20%;"></div>
										<div class="tb set" style="width: 60%;">
											<div class="level2">
												<el-checkbox label="projectAdd" @change="oneChange" class="permission-span">新增</el-checkbox>
												<el-checkbox label="projectDel" @change="oneChange" class="permission-span">删除</el-checkbox>
												<el-checkbox label="projectGet" @change="oneChange" class="permission-span">查看</el-checkbox>
											</div>
										</div>
									</div>
									<div class="table">
										<div class="tb" style="width: 20%;">
											<div class="level1">
												<el-checkbox label="address" @change="oneChange">
													<span style="font-weight: bold;">地址管理</span>
												</el-checkbox>
											</div>
										</div>
										<div class="tb tr" style="width: 20%;">
											<div class="level2">
												<el-checkbox label="addressList" @change="oneChange">地址列表</el-checkbox>
											</div>
											<div class="level2">
												<el-checkbox label="areas" @change="oneChange">地区管理</el-checkbox>
											</div>
										</div>
										<div class="tb set" style="width: 60%;">
											<div class="level2">
												<el-checkbox label="addressAdd" @change="oneChange" class="permission-span">新增</el-checkbox>
												<el-checkbox label="addressDel" @change="oneChange" class="permission-span">删除</el-checkbox>
												<el-checkbox label="addressGet" @change="oneChange" class="permission-span">查看所有</el-checkbox>
												<el-checkbox label="addressGetStation" @change="oneChange" class="permission-span">查看辖区</el-checkbox>
											</div>
											<div class="level2">
												暂无
											</div>
										</div>
									</div>
									<div class="table">
										<div class="tb" style="width: 20%;">
											<div class="level1">
												<el-checkbox label="face" @change="oneChange">
													<span style="font-weight: bold;">人脸管理</span>
												</el-checkbox>
											</div>
										</div>
										<div class="tb tr" style="width: 20%;">
											<div class="level2">
												<el-checkbox label="faceList" @change="oneChange">人脸列表</el-checkbox>
											</div>
											<div class="level2">
												<el-checkbox label="pushLogs" @change="oneChange">推送记录</el-checkbox>
											</div>
										</div>
										<div class="tb set" style="width: 60%;">
											<div class="level2">
												<el-checkbox label="faceAdd" @change="oneChange" class="permission-span">新增</el-checkbox>
												<el-checkbox label="faceDel" @change="oneChange" class="permission-span">删除</el-checkbox>
												<el-checkbox label="faceGet" @change="oneChange" class="permission-span">查看</el-checkbox>
											</div>
											<div class="level2">
												暂无
											</div>
										</div>
									</div>
									<div class="table">
										<div class="tb" style="width: 20%;">
											<div class="level1">
												<el-checkbox label="device" @change="oneChange">
													<span style="font-weight: bold;">设备管理</span>
												</el-checkbox>
											</div>
										</div>
										<div class="tb tr" style="width: 20%;">
											<div class="level2">
												<el-checkbox label="deviceList" @change="oneChange">设备列表</el-checkbox>
											</div>
											<div class="level2">
												<el-checkbox label="command" @change="oneChange">指令管理</el-checkbox>
											</div>
										</div>
										<div class="tb set" style="width: 60%;">
											<div class="level2">
												<el-checkbox label="deviceAdd" @change="oneChange" class="permission-span">新增</el-checkbox>
												<el-checkbox label="deviceDel" @change="oneChange" class="permission-span">删除</el-checkbox>
												<el-checkbox label="deviceGet" @change="oneChange" class="permission-span">查看所有</el-checkbox>
												<el-checkbox label="deviceGetStation" @change="oneChange" class="permission-span">查看辖区</el-checkbox>
											</div>
											<div class="level2">
												暂无
											</div>
										</div>
									</div>
									<div class="table">
										<div class="tb" style="width: 20%;">
											<div class="level1">
												<el-checkbox label="package" @change="oneChange">
													<span style="font-weight: bold;">包管理</span>
												</el-checkbox>
											</div>
										</div>
										<div class="tb tr" style="width: 20%;">
										</div>
										<div class="tb set" style="width: 60%;">
											<div class="level2">
												<el-checkbox label="apkAdd" @change="oneChange" class="permission-span">新增安装包</el-checkbox>
												<el-checkbox label="apkDel" @change="oneChange" class="permission-span">删除安装包</el-checkbox>
												<el-checkbox label="apkGet" @change="oneChange" class="permission-span">查看安装包</el-checkbox>
												<el-checkbox label="apkVersionAdd" @change="oneChange" class="permission-span">新增版本</el-checkbox>
												<el-checkbox label="apkVersionSend" @change="oneChange" class="permission-span">发布版本</el-checkbox>
												<el-checkbox label="apkVersionDel" @change="oneChange" class="permission-span">删除版本</el-checkbox>
											</div>

										</div>
									</div>
									<div class="table">
										<div class="tb" style="width: 20%;">
											<div class="level1">
												<el-checkbox label="danger" @change="oneChange">
													<span style="font-weight: bold;">可疑管理</span>
												</el-checkbox>
											</div>
										</div>
										<div class="tb tr" style="width: 20%;">
											<div class="level2">
												<el-checkbox label="doubtable" @change="oneChange">可疑人脸</el-checkbox>
											</div>
											<div class="level2">
												<el-checkbox label="dangerlogs" @change="oneChange">可疑日志</el-checkbox>
											</div>
										</div>
										<div class="tb set" style="width: 60%;">
											<div class="level2">
												<el-checkbox label="dangerAdd" @change="oneChange" class="permission-span">新增</el-checkbox>
												<el-checkbox label="dangerDel" @change="oneChange" class="permission-span">删除</el-checkbox>
												<el-checkbox label="dangerGet" @change="oneChange" class="permission-span">查看</el-checkbox>
											</div>
											<div class="level2">
												<el-checkbox label="dangerLogDel" @change="oneChange" class="permission-span">删除</el-checkbox>
												<el-checkbox label="dangerLogGet" @change="oneChange" class="permission-span">查看</el-checkbox>
												<el-checkbox label="dangerLogGetStation" @change="oneChange" class="permission-span">查看辖区</el-checkbox>
											</div>

										</div>
									</div>
									<div class="table">
										<div class="tb" style="width: 20%;">
											<div class="level1">
												<el-checkbox label="permission" @change="oneChange">
													<span style="font-weight: bold;">权限管理</span>
												</el-checkbox>
											</div>
										</div>
										<div class="tb tr" style="width: 20%;">
											<div class="level2">
												<el-checkbox label="roles" @change="oneChange">角色管理</el-checkbox>
											</div>
											<div class="level2">
												<el-checkbox label="manage" @change="oneChange">账号管理</el-checkbox>
											</div>
										</div>
										<div class="tb set" style="width: 60%;">
											<div class="level2">
												<el-checkbox label="roleAdd" @change="oneChange" class="permission-span">新增</el-checkbox>
												<el-checkbox label="roleDel" @change="oneChange" class="permission-span">删除</el-checkbox>
												<el-checkbox label="roleEdit" @change="oneChange" class="permission-span">编辑</el-checkbox>
												<el-checkbox label="roleGet" @change="oneChange" class="permission-span">查看</el-checkbox>
											</div>
											<div class="level2">
												<el-checkbox label="manageAdd" @change="oneChange" class="permission-span">新增</el-checkbox>
												<el-checkbox label="manageDel" @change="oneChange" class="permission-span">删除</el-checkbox>
												<el-checkbox label="manageEdit" @change="oneChange" class="permission-span">编辑</el-checkbox>
												<el-checkbox label="manageGet" @change="oneChange" class="permission-span">查看</el-checkbox>
												<el-checkbox label="manageResetPwd" @change="oneChange" class="permission-span">重置密码</el-checkbox>
											</div>
										</div>
									</div>
									<div class="table">
										<div class="tb" style="width: 20%;">
											<el-checkbox label="outInLogs" @change="oneChange">
												<span style="font-weight: bold;">进出记录管理</span>
											</el-checkbox>
										</div>
										<div class="tb tr" style="width: 20%;">
										</div>
										<div class="tb set" style="width: 60%;">
										</div>
									</div>
									<div class="table">
										<div class="tb" style="width: 20%;">
											<div class="level1">
												<el-checkbox label="police" @change="oneChange">
													<span style="font-weight: bold;">警务管理</span>
												</el-checkbox>
											</div>
										</div>
										<div class="tb tr" style="width: 20%;">
											<div class="level2">
												<el-checkbox label="policeList" @change="oneChange">警员管理</el-checkbox>
											</div>
											<div class="level2">
												<el-checkbox label="department" @change="oneChange">部门管理</el-checkbox>
											</div>
											<div class="level2">
												<el-checkbox label="account" @change="oneChange">账号管理</el-checkbox>
											</div>
											<div class="level2">
												<el-checkbox label="personVerifies" @change="oneChange">证件核验</el-checkbox>
											</div>
											<div class="level2">
												<el-checkbox label="screenSaver" @change="oneChange">屏保设置</el-checkbox>
											</div>
										</div>
										<div class="tb set" style="width: 60%;">
											<div class="level2">
												<el-checkbox label="policeListAdd" @change="oneChange" class="permission-span">新增</el-checkbox>
												<el-checkbox label="policeListDel" @change="oneChange" class="permission-span">删除</el-checkbox>
												<el-checkbox label="policeListEdit" @change="oneChange" class="permission-span">编辑</el-checkbox>
												<el-checkbox label="policeListGet" @change="oneChange" class="permission-span">查看</el-checkbox>
											</div>
											<div class="level2">
												<el-checkbox label="departmentGet" @change="oneChange" class="permission-span">新增</el-checkbox>
												<el-checkbox label="departmentDel" @change="oneChange" class="permission-span">删除</el-checkbox>
												<el-checkbox label="departmentEdit" @change="oneChange" class="permission-span">编辑</el-checkbox>
												<el-checkbox label="departmentGet" @change="oneChange" class="permission-span">查看</el-checkbox>
											</div>
											<div class="level2">
												dd
											</div>
											<div class="level2">
												dd
											</div>
											<div class="level2">
												dd
											</div>
										</div>
									</div>
									<div class="table">
										<div class="tb" style="width: 20%;">
											<div class="level1">
												<el-checkbox label="security" @change="oneChange">
													<span style="font-weight: bold;">安防布控</span>
												</el-checkbox>
											</div>
										</div>
										<div class="tb tr" style="width: 20%;">
											<div class="level2">
												<el-checkbox label="upload" @change="oneChange">上传可疑人脸</el-checkbox>
											</div>
											<div class="level2">
												<el-checkbox label="search" @change="oneChange">搜索人脸</el-checkbox>
											</div>
										</div>
										<div class="tb set" style="width: 60%;">
										</div>
									</div>
									<div class="table">
										<div class="tb" style="width: 20%;">
											<div class="level1">
												<el-checkbox label="statistical" @change="oneChange">
													<span style="font-weight: bold;">统计</span>
												</el-checkbox>
											</div>
										</div>
										<div class="tb tr" style="width: 20%;">
											<div class="level2">
												<el-checkbox label="data" @change="oneChange">数据统计</el-checkbox>
											</div>
											<div class="level2">
												<el-checkbox label="generate" @change="oneChange">导出数据表</el-checkbox>
											</div>
										</div>
										<div class="tb set" style="width: 60%;">
										</div>
									</div>
									<div class="table">
										<div class="tb" style="width: 20%;">
											<el-checkbox label="alert" @change="oneChange">
												<span style="font-weight: bold;">告警处理</span>
											</el-checkbox>
										</div>
										<div class="tb tr" style="width: 20%;"></div>
										<div class="tb set" style="width: 60%;">
											<div class="level2">
												<el-checkbox label="alertGet" @change="oneChange" class="permission-span">查看所有</el-checkbox>
												<el-checkbox label="alertGetStation" @change="oneChange" class="permission-span">查看辖区</el-checkbox>
											</div>
										</div>
									</div>
									<div class="table">
										<div class="tb" style="width: 20%;">
											<div class="level1">
												<el-checkbox label="area" @change="oneChange">
													<span style="font-weight: bold;">辖区管理</span>
												</el-checkbox>
											</div>

										</div>
										<div class="tb tr" style="width: 20%;">
											<div class="level2">
												<el-checkbox label="areaList" @change="oneChange">辖区列表</el-checkbox>
											</div>
											<div class="level2">
												<el-checkbox label="allAreaList" @change="oneChange">查看所有</el-checkbox>
											</div>
										</div>
										<div class="tb set" style="width: 60%;">
										</div>
									</div>
									<div class="table">
										<div class="tb" style="width: 20%;">
											<el-checkbox label="user" @change="oneChange">
												<span style="font-weight: bold;">用户管理</span>
											</el-checkbox>
										</div>
										<div class="tb tr" style="width: 20%;">
											<div class="level2">
												<el-checkbox label="userList" @change="oneChange">用户列表</el-checkbox>
											</div>
										</div>
										<div class="tb set" style="width: 60%;">
										</div>
									</div>
									<div class="table">
										<div class="tb" style="width: 20%;">
											<div class="level1">
												<el-checkbox label="renter" @change="oneChange">
													<span style="font-weight: bold;">住户管理</span>
												</el-checkbox>
											</div>

										</div>
										<div class="tb tr" style="width: 20%;">
											<div class="level2">
												<el-checkbox label="renterList" @change="oneChange">住户列表</el-checkbox>
											</div>
										</div>
										<div class="tb set" style="width: 60%;">
										</div>
									</div>
									<div class="table">
										<div class="tb" style="width: 20%;">
											<div class="level1">
												<el-checkbox label="school" @change="oneChange">
													<span style="font-weight: bold;">学校管理</span>
												</el-checkbox>
											</div>
										</div>
										<div class="tb tr" style="width: 20%;">
											<div class="level2">
												<el-checkbox label="schoolList" @change="oneChange">学校列表</el-checkbox>
											</div>
										</div>
										<div class="tb set" style="width: 60%;">
										</div>
									</div>
									<div class="table">
										<div class="tb" style="width: 20%;">
											<div class="level1">
												<el-checkbox label="information" @change="oneChange">
													<span style="font-weight: bold;">资讯管理</span>
												</el-checkbox>
											</div>
										</div>
										<div class="tb tr" style="width: 20%;">
											<div class="level2">
												<el-checkbox label="infoList" @change="oneChange">资讯列表</el-checkbox>
											</div>
										</div>
										<div class="tb set" style="width: 60%;">
										</div>
									</div>
									<div class="table">
										<div class="tb" style="width: 20%;">
											<div class="level1">
												<el-checkbox label="switch" @change="oneChange">
													<span style="font-weight: bold;">人脸开关管理</span>
												</el-checkbox>
											</div>
										</div>
										<div class="tb tr" style="width: 20%;">
											<div class="level2">
												<el-checkbox label="faceSwitch" @change="oneChange">开关列表</el-checkbox>
											</div>
										</div>
										<div class="tb set" style="width: 60%;">
										</div>
									</div>
								</el-checkbox-group>
							</div>
						</div>
						<!-- 其他用户走这个权限列表 -->
						<div v-else>
							<el-checkbox v-model="checkAll" @change="AllChange">全选</el-checkbox>
							<div class="permission" style="width: 1000px;">
								<div class="table">
									<div class="th" style="width: 20%;">一级菜单</div>
									<div class="th" style="width: 20%;">二级菜单</div>
									<div class="th" style="width: 60%;">操作</div>
								</div>
								<el-checkbox-group v-model="form.permissions">
									<div class="table">
										<div class="tb" style="width: 20%;">
											<div class="level1">
												<el-checkbox label="overview" @change="oneChange">
													<span style="font-weight: bold;">数据总览</span>
												</el-checkbox>
											</div>
										</div>
										<div class="tb tr" style="width: 20%;"></div>
										<div class="tb tr" style="width: 60%;"></div>
									</div>
									<div class="table">
										<div class="tb" style="width: 20%;">
											<div class="level1">
												<el-checkbox label="address" @change="oneChange">
													<span style="font-weight: bold;">地址管理</span>
												</el-checkbox>
											</div>
										</div>
										<div class="tb tr" style="width: 20%;">
											<div class="level2">
												<el-checkbox label="addressList" @change="oneChange">地址列表</el-checkbox>
											</div>
											<div class="level2">
												<el-checkbox label="areas" @change="oneChange">地区管理</el-checkbox>
											</div>
										</div>
										<div class="tb set" style="width: 60%;">
											<div class="level2">
												<el-checkbox label="addressAdd" @change="oneChange" class="permission-span">新增</el-checkbox>
												<el-checkbox label="addressDel" @change="oneChange" class="permission-span">删除</el-checkbox>
												<el-checkbox label="addressGet" @change="oneChange" class="permission-span">查看</el-checkbox>
											</div>
											<div class="level2">
												暂无
											</div>
										</div>
									</div>
									<div class="table">
										<div class="tb" style="width: 20%;">
											<div class="level1">
												<el-checkbox label="face" @change="oneChange">
													<span style="font-weight: bold;">人脸管理</span>
												</el-checkbox>
											</div>
										</div>
										<div class="tb tr" style="width: 20%;">
											<div class="level2">
												<el-checkbox label="faceList" @change="oneChange">人脸列表</el-checkbox>
											</div>
											<div class="level2">
												<el-checkbox label="pushLogs" @change="oneChange">推送记录</el-checkbox>
											</div>
										</div>
										<div class="tb set" style="width: 60%;">
											<div class="level2">
												<el-checkbox label="faceAdd" @change="oneChange" class="permission-span">新增</el-checkbox>
												<el-checkbox label="faceDel" @change="oneChange" class="permission-span">删除</el-checkbox>
												<el-checkbox label="faceGet" @change="oneChange" class="permission-span">查看</el-checkbox>
											</div>
											<div class="level2">
												暂无
											</div>
										</div>
									</div>
									<div class="table">
										<div class="tb" style="width: 20%;">
											<div class="level1">
												<el-checkbox label="device" @change="oneChange">
													<span style="font-weight: bold;">设备管理</span>
												</el-checkbox>
											</div>
										</div>
										<div class="tb tr" style="width: 20%;">
											<div class="level2">
												<el-checkbox label="deviceList" @change="oneChange">设备列表</el-checkbox>
											</div>
											<div class="level2">
												<el-checkbox label="command" @change="oneChange">指令管理</el-checkbox>
											</div>
										</div>
										<div class="tb set" style="width: 60%;">
											<div class="level2">
												<el-checkbox label="deviceAdd" @change="oneChange" class="permission-span">新增</el-checkbox>
												<el-checkbox label="deviceDel" @change="oneChange" class="permission-span">删除</el-checkbox>
												<el-checkbox label="deviceGet" @change="oneChange" class="permission-span">查看</el-checkbox>
											</div>
											<div class="level2">
												暂无
											</div>
										</div>
									</div>
									<div class="table">
										<div class="tb" style="width: 20%;">
											<div class="level1">
												<el-checkbox label="danger" @change="oneChange">
													<span style="font-weight: bold;">可疑管理</span>
												</el-checkbox>
											</div>
										</div>
										<div class="tb tr" style="width: 20%;">
											<div class="level2">
												<el-checkbox label="doubtable" @change="oneChange">可疑人脸</el-checkbox>
											</div>
											<div class="level2">
												<el-checkbox label="dangerlogs" @change="oneChange">可疑日志</el-checkbox>
											</div>
										</div>
										<div class="tb set" style="width: 60%;">
											<div class="level2">
												<el-checkbox label="dangerAdd" @change="oneChange" class="permission-span">新增</el-checkbox>
												<el-checkbox label="dangerDel" @change="oneChange" class="permission-span">删除</el-checkbox>
												<el-checkbox label="dangerGet" @change="oneChange" class="permission-span">查看</el-checkbox>
											</div>
											<div class="level2">
												<el-checkbox label="dangerLogGet" @change="oneChange" class="permission-span">新增</el-checkbox>
												<el-checkbox label="dangerLogDel" @change="oneChange" class="permission-span">删除</el-checkbox>
											</div>

										</div>
									</div>
									<div class="table">
										<div class="tb" style="width: 20%;">
											<div class="level1">
												<el-checkbox label="permission" @change="oneChange">
													<span style="font-weight: bold;">权限管理</span>
												</el-checkbox>
											</div>
										</div>
										<div class="tb tr" style="width: 20%;">
											<div class="level2">
												<el-checkbox label="roles" @change="oneChange">角色管理</el-checkbox>
											</div>
											<div class="level2">
												<el-checkbox label="manage" @change="oneChange">账号管理</el-checkbox>
											</div>
										</div>
										<div class="tb set" style="width: 60%;">
											<div class="level2">
												<el-checkbox label="roleAdd" @change="oneChange" class="permission-span">新增</el-checkbox>
												<el-checkbox label="roleDel" @change="oneChange" class="permission-span">删除</el-checkbox>
												<el-checkbox label="roleEdit" @change="oneChange" class="permission-span">编辑</el-checkbox>
												<el-checkbox label="roleGet" @change="oneChange" class="permission-span">查看</el-checkbox>
											</div>
											<div class="level2">
												<el-checkbox label="manageAdd" @change="oneChange" class="permission-span">新增</el-checkbox>
												<el-checkbox label="manageDel" @change="oneChange" class="permission-span">删除</el-checkbox>
												<el-checkbox label="manageEdit" @change="oneChange" class="permission-span">编辑</el-checkbox>
												<el-checkbox label="manageGet" @change="oneChange" class="permission-span">查看</el-checkbox>
												<el-checkbox label="manageResetPwd" @change="oneChange" class="permission-span">重置密码</el-checkbox>
											</div>
										</div>
									</div>
									<div class="table">
										<div class="tb" style="width: 20%;">
											<el-checkbox label="outInLogs" @change="oneChange">
												<span style="font-weight: bold;">进出记录管理</span>
											</el-checkbox>
										</div>
										<div class="tb tr" style="width: 20%;">
										</div>
										<div class="tb set" style="width: 60%;">
										</div>
									</div>
									<div class="table">
										<div class="tb" style="width: 20%;">
											<el-checkbox label="policeList" @change="oneChange">
												<span style="font-weight: bold;">警员管理</span>
											</el-checkbox>
										</div>
										<div class="tb tr" style="width: 20%;">
										</div>
										<div class="tb set" style="width: 60%;">
										</div>
									</div>
									<div class="table">
										<div class="tb" style="width: 20%;">
											<el-checkbox label="department" @change="oneChange">
												<span style="font-weight: bold;">部门管理</span>
											</el-checkbox>
										</div>
										<div class="tb tr" style="width: 20%;">
										</div>
										<div class="tb set" style="width: 60%;">
										</div>
									</div>
									<div class="table">
										<div class="tb" style="width: 20%;">
											<div class="level1">
												<el-checkbox label="area" @change="oneChange">
													<span style="font-weight: bold;">辖区管理</span>
												</el-checkbox>
											</div>

										</div>
										<div class="tb tr" style="width: 20%;">
											<div class="level2">
												<el-checkbox label="areaList" @change="oneChange">辖区列表</el-checkbox>
											</div>
										</div>
										<div class="tb set" style="width: 60%;">
										</div>
									</div>
									<div class="table">
										<div class="tb" style="width: 20%;">
											<el-checkbox label="user" @change="oneChange">
												<span style="font-weight: bold;">用户管理</span>
											</el-checkbox>
										</div>
										<div class="tb tr" style="width: 20%;">
											<div class="level2">
												<el-checkbox label="userList" @change="oneChange">用户列表</el-checkbox>
											</div>
										</div>
										<div class="tb set" style="width: 60%;">
										</div>
									</div>
									<div class="table">
										<div class="tb" style="width: 20%;">
											<div class="level1">
												<el-checkbox label="renter" @change="oneChange">
													<span style="font-weight: bold;">住户管理</span>
												</el-checkbox>
											</div>

										</div>
										<div class="tb tr" style="width: 20%;">
											<div class="level2">
												<el-checkbox label="renterList" @change="oneChange">住户列表</el-checkbox>
											</div>
										</div>
										<div class="tb set" style="width: 60%;">
										</div>
									</div>
									<div class="table">
										<div class="tb" style="width: 20%;">
											<div class="level1">
												<el-checkbox label="school" @change="oneChange">
													<span style="font-weight: bold;">学校管理</span>
												</el-checkbox>
											</div>
										</div>
										<div class="tb tr" style="width: 20%;">
											<div class="level2">
												<el-checkbox label="schoolList" @change="oneChange">学校列表</el-checkbox>
											</div>
										</div>
										<div class="tb set" style="width: 60%;">
										</div>
									</div>
								</el-checkbox-group>
							</div>
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
				username: localStorage.getItem('username'),
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
				adminPermissionList: [ // admin的权限(自用)
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
					"addressGetStation", // 查看辖区

					"face", // 人脸管理页
					"faceList",
					"pushLogs", // 推送记录子页
					"faceAdd", // 添加人脸
					"faceGet", // 获取人脸
					"faceDel", // 删除人脸

					"device", // 设备管理页
					"deviceList", // 设备列表
					"command", // 指令管理
					"deviceAdd", // 添加设备
					"deviceGet", // 获取设备
					"deviceDel", // 删除设备
					"deviceGetStation", // 查看辖区设备

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
					"dangerAdd", // 添加可疑人脸
					"dangerDel", // 获取可疑人脸
					"dangerGet", // 删除可疑人脸
					"dangerLogGet", // 获取可疑日志列表
					"dangerLogDel", // 删除可疑日志
					"personVerifies", // 证件核验
					"dangerLogGetStation",


					"permission", // 角色管理
					"roles",
					"manage",
					"roleGet",
					"roleAdd",
					"roleEdit",
					"roleDel",
					"manageGet",
					"manageAdd",
					"manageEdit",
					"manageDel",
					"manageResetPwd", // 重置密码

					"outInLogs", // 进出记录管理页

					"police", // 警务管理
					"policeList", // 警员管理
					"department", // 部门管理
					"account", // 账号管理
					"policeListAdd",
					"policeListGet",
					"policeListEdit",
					"policeListDel",
					"departmentAdd",
					"departmentGet",
					"departmentEdit",
					"departmentDel",
					"screenSaver", // 屏保设置

					"security", // 安防布控
					"upload", // 上传可疑人脸
					"search", // 搜索人脸

					"statistical", // 搜索人脸
					"data", // 搜索人脸
					"generate", // 搜索人脸

					"alert", // 告警处理
					"alertGet",
					"alertGetStation",

					"area", // 辖区管理
					"areaList",
					"allAreaList", // 辖区查看所有

					"user", // 用户管理
					"userList",

					"renter", // 住户管理
					"renterList",

					"school", // 学校管理
					"schoolList",

					"information", // 资讯管理
					"infoList",

					"switch", // 人脸开关管理
					"faceSwitch"
				],
				permissionList: [ // 其他用户的权限（公安用）
					"overview", // 数据总览

					"address", // 地址管理页
					"addressList", // 地址列表
					"areas", // 地区管理
					"addressAdd", // 添加地址
					"addressGet", // 获取地址
					"addressDel", // 删除地址

					"face", // 人脸管理页
					"faceList",
					"pushLogs", // 推送记录子页
					"faceAdd", // 添加人脸
					"faceGet", // 获取人脸
					"faceDel", // 删除人脸

					"device", // 设备管理页
					"deviceList", // 设备列表
					"command", // 指令管理
					"deviceAdd", // 添加设备
					"deviceGet", // 获取设备
					"deviceDel", // 删除设备


					"danger", // 可疑管理页
					"doubtable", // 可疑人脸子页
					"dangerlogs", // 可疑日志子页
					"dangerAdd", // 添加可疑人脸
					"dangerDel", // 获取可疑人脸
					"dangerGet", // 删除可疑人脸
					"dangerLogGet", // 获取可疑日志列表
					"dangerLogDel", // 删除可疑日志


					"permission", // 角色管理
					"roles",
					"manage",
					"roleGet",
					"roleAdd",
					"roleEdit",
					"roleDel",
					"manageGet",
					"manageAdd",
					"manageEdit",
					"manageDel",
					"manageResetPwd", // 重置密码

					"outInLogs", // 进出记录管理页

					"area", // 辖区管理
					"areaList",

					"user", // 用户管理
					"userList",

					"renter", // 住户管理
					"renterList",

					"school", // 学校管理
					"schoolList",
				],


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
					if (localStorage.getItem('username') == 'admin') {
						self.form.permissions = self.checkAll ? self.adminPermissionList : [];
						console.log(self.form.permissions)
					} else {
						self.form.permissions = self.checkAll ? self.permissionList : [];
						console.log(self.form.permissions)
					}
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
					if (localStorage.getItem('username') == 'admin') {
						self.checkAll = res.permissions.length >= self.adminPermissionList.length;
					} else {
						self.checkAll = res.permissions.length >= self.permissionList.length;
					}
				})
			},
			AllChange(val) {
				var self = this;
				if (localStorage.getItem('username') == 'admin') {
					self.form.permissions = val ? self.adminPermissionList : [];
				} else {
					self.form.permissions = val ? self.permissionList : [];
				}
			},
			oneChange(val) {
				var self = this;
				console.log(self.form.permissions);
				if (localStorage.getItem('username') == 'admin') {
					self.checkAll = self.form.permissions.length >= self.adminPermissionList.length;
				} else {
					self.checkAll = self.form.permissions.length >= self.permissionList.length;
				}
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

		border: 1px #ccc solid;
	}

	.table {
		display: flex;
		align-items: center;
		justify-content: center;
		border-bottom: 1px #ccc solid;

		padding-left: 20px;

	}

	.th {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		font-weight: bold;
		/* border-right: 1px #ccc solid; */
	}

	.tb {
		padding-left: 20px;
		/* border-right: 1px #ccc solid; */
	}

	.tr {
		display: flex;
		flex-wrap: wrap;
	}

	.set {
		display: flex;
		flex-direction: column;
	}

	.level1 {

		height: 50px;
		line-height: 50px;

	}

	.level2 {
		padding-left: 20px;
		/* border-right: 1px #ccc solid; */
		/* border-bottom: 1px #ccc solid; */
		width: 100%;
	}

	.permission-item {
		margin: 10px;
		padding: 0 10px;
	}

	.permission-span {
		width: 80px;
	}
</style>
