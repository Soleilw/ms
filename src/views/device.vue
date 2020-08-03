<template>
	<div>
		<div class="handle-box">
			<div class="btn">
				<el-button type="primary" @click="dialogDevice = true">添加设备</el-button>
			</div>
			<div class="btn">
				<el-input v-model="uuid" placeholder="输入设备号" class="search" @keyup.enter.native="search(uuid)"></el-input>
			</div>
			<div class="btn">
				<el-button type="primary" @click="search(uuid)">搜索</el-button>
			</div>
			<div class="btn">
				<el-select v-model="type" placeholder="请选择类型" @change="typeChange">
					<el-option v-for="(item,index) in typeList" :key="index" :label="typeList[index]" :value="index">
					</el-option>
				</el-select>
			</div>
		</div>

		<el-dialog title="添加设备" :visible.sync="dialogDevice">
			<div class="box">
				<el-form :model="form" label-width="100px">
					<el-form-item label="设备名称">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="类型">
						<el-select v-model="form.type" placeholder="请选择类型">
							<el-option v-for="(item,index) in typeList" :key="index" :label="typeList[index]" :value="index">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="选择项目">
						<el-select v-model="form.project_id" placeholder="请选择项目" @change="changeProject">
							<el-option v-for="(item,index) in projectList" :key="index" :label="item.name" :value="item.id">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="选择地址">
						<el-select v-model="form.address_id" placeholder="请选择地址" @change="addressChange">
							<el-option v-for="item in addressList" :key="item.id" :label="item.address" :value="item.id">
							</el-option>
						</el-select>
					</el-form-item>
					<div v-if="form.address_id">
						<el-form-item label="选择人脸组">
							<el-checkbox v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
							<div class="facebox">
								<div v-for="(item,index) in faceGroupList" :key="index">
									<el-checkbox-group v-model="form.face_groups" class="facebox-item">
										<el-checkbox :label="item.group_name"></el-checkbox>
									</el-checkbox-group>
								</div>
							</div>
						</el-form-item>
					</div>
					<el-form-item label="选择uuid">
						<el-select v-model="form.uuid" placeholder="请选择uuid">
							<el-option v-for="item in uuidList" :key="item.id" :label="item.uuid" :value="item.uuid">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="选择安装包">
						<el-select v-model="form.apk" placeholder="请选择安装包" @change="apkChange">
							<el-option v-for="item in apkList" :key="item.id" :label="item.name" :value="item.id">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="安装包版本">
						<el-select v-model="form.apk_version" placeholder="请选择版本">
							<el-option v-for="item in versionList" :key="item.id" :label="item.version" :value="item.id">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="配置热感">
						<el-radio-group v-model="hotness">
							<el-radio :label="1">正常</el-radio>
							<el-radio :label="2">严格</el-radio>
							<el-radio :label="3">关闭</el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="选择方向">
						<el-select v-model="form.direction" placeholder="请选择地址">
							<el-option v-for="item in directionList" :key="item.id" :label="item.direction" :value="item.id">
							</el-option>
						</el-select>
					</el-form-item>
					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="newDevice">提交</el-button>
						</el-form-item>
					</div>
				</el-form>
			</div>
		</el-dialog>

		<el-table :data="tableDate" border :header-cell-style="{background:'#f0f0f0', color: '#2a9f93'}">
			<el-table-column prop="id" label="ID" width="80px"></el-table-column>
			<el-table-column prop="address.address" label="地址" width="200px"></el-table-column>
			<el-table-column prop="uuid" label="uuid" width="300px"></el-table-column>
			<el-table-column prop="type_string" label="类型" width="100px"></el-table-column>
			<el-table-column prop="direction" label="方向"></el-table-column>
			<el-table-column prop="version" label="版本" width="80px"></el-table-column>
			<el-table-column prop="remark" label="备注" width="400px"></el-table-column>
			<el-table-column prop="last_login" label="最后登录时间" width="200px"></el-table-column>
			<el-table-column label="操作" width="200px">
				<template slot-scope="scope">
					<el-dropdown>
						<el-button type="primary">
							操作<i class="el-icon-arrow-down el-icon--right"></i>
						</el-button>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>
								<el-button size="mini" type="primary" @click="handleShowLog(scope.$index, scope.row)">查看日志</el-button>
							</el-dropdown-item>
							<el-dropdown-item>
								<el-button v-if="scope.row.type == 4" size="mini" type="primary" @click="handleUserList(scope.$index, scope.row)">查看用户</el-button>
							</el-dropdown-item>
							<el-dropdown-item>
								<el-button size="mini" type="primary" @click="handleShowRecord(scope.$index, scope.row)">查看进出记录</el-button>
							</el-dropdown-item>
							<el-dropdown-item>
								<el-button size="mini" type="primary" @click="handleShowFace(scope.$index, scope.row)">查看人脸组</el-button>
							</el-dropdown-item>
							<el-dropdown-item>
								<el-button size="mini" type="primary" @click="handleShowCommands (scope.$index, scope.row)">查看指令</el-button>
							</el-dropdown-item>
							<el-dropdown-item>
								<el-button size="mini" type="primary" @click="handleHeart(scope.$index, scope.row)">查看心跳</el-button>
							</el-dropdown-item>
							<el-dropdown-item>
								<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
							</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</template>
			</el-table-column>
		</el-table>

		<!-- 查看日志 -->
		<el-dialog title="查看日志" :visible.sync="dialogLogs" width="80%">
			<el-table :data="logstable" border :header-cell-style="{background:'#f0f0f0', color: '#2a9f93'}">
				<el-table-column prop="id" label="ID"></el-table-column>
				<el-table-column prop="uuid" label="设备ID"></el-table-column>
				<el-table-column prop="time" label="时间"></el-table-column>
				<el-table-column prop="logCat" label="消息" width="400px">
					<template slot-scope="scope">
						<div class="logcat">{{scope.row.logCat}} </div>
						<div v-if="scope.row.logCat" style="text-align: left;">
							<el-button size="mini" @click="showlogcat(scope.$index, scope.row)">查看更多</el-button>
						</div>
					</template>
				</el-table-column>
				<el-table-column prop="type" label="状态">
					<template slot-scope="scope">
						<span v-text="scope.row.type == 1 ? '正常' : '异常' "></span>
					</template>
				</el-table-column>
				<el-table-column prop="created_at" label="创建时间"></el-table-column>

				<!-- 	<el-table-column label="操作"  >
					<template slot-scope="scope">
						<el-button size="mini" type="success" @click="handleDelete(scope.$index, scope.row)">查看人脸组</el-button>
						<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
					</template>
				</el-table-column> -->
			</el-table>
			<div class="block">
				<el-pagination @current-change="handleCurrentLogsChange" :current-page.sync="currentLogsPage" :page-size="10"
				 layout="prev, pager, next, jumper" :total="totalLogsPage">
				</el-pagination>
			</div>
		</el-dialog>

		<el-dialog title="查看日志" :visible.sync="dialogLogcat" width="800px">
			<textarea class="temp" v-model="logCat"></textarea>
		</el-dialog>

		<!-- 查看进出记录 -->
		<el-dialog title="查看进出记录" :visible.sync="dialogShowRecord" width="80%">
			<el-table :data="faceLogsTable" border :header-cell-style="{background:'#f0f0f0', color: '#2a9f93'}">
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
				<el-pagination @current-change="handleCurrentFaceLogsChange" :current-page.sync="currentFaceLogsPage" :page-size="10"
				 layout="prev, pager, next, jumper" :total="totalFaceLogsPage">
				</el-pagination>
			</div>
		</el-dialog>

		<!-- 查看人脸组 -->
		<el-dialog title="查看人脸组" :visible.sync="dialogFaceGroup" width="80%">
			<el-table :data="facetable" border :header-cell-style="{background:'#f0f0f0', color: '#2a9f93'}">
				<el-table-column prop="id" label="ID"></el-table-column>
				<el-table-column prop="device_id" label="设备ID"></el-table-column>
				<el-table-column prop="group_id" label="人脸组ID"></el-table-column>
				<el-table-column prop="group_name" label="人脸组名字"></el-table-column>
				<!-- 	<el-table-column label="操作"  >
					<template slot-scope="scope">
						<el-button size="mini" type="success" @click="handleDelete(scope.$index, scope.row)">查看人脸组</el-button>
						<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
					</template>
				</el-table-column> -->
			</el-table>
		</el-dialog>

		<!-- 查看心跳 -->
		<el-dialog :title="'设备：' + uuid" :visible.sync="dialogHeart" :fullscreen="true">
			<div id="heartChart" ref="heartChart" style="width: 100%;height:600px;"></div>
			<el-table :data="arr" border :header-cell-style="{background:'#f0f0f0', color: '#2a9f93'}">
				<el-table-column prop="id" label="ID"></el-table-column>
				<el-table-column prop="device_uuid" label="设备ID"></el-table-column>
				<el-table-column prop="time" label="时间"></el-table-column>
				<el-table-column prop="updated_at" label="更新时间"></el-table-column>
			</el-table>
		</el-dialog>

		<!-- 查看指令-->
		<el-dialog title="查看指令" :visible.sync="dialogCommands" width="90%">
			<div class="handle-box">
				<div class="btn">
					<el-form :model="commandform" label-width="100px">
						<!-- <el-form-item label="UUID">
							<el-input v-model="commandform.uuid" placeholder="请输入UUID"></el-input>
						</el-form-item> -->
						<el-form-item label="指令">
							<el-select v-model="command" @change="changeCommand">
								<el-option v-for="(value, name) in commandList" :key="name" :label="value" :value="name"></el-option>
							</el-select>
						</el-form-item>
						<!-- 发送密码 -->
						<div v-if="command === 'setPassword' ">
							<!-- 	<el-form-item label="旧密码">
								<el-input v-model="commandform.old_password"></el-input>
							</el-form-item> -->
							<el-form-item label="密码">
								<el-input v-model="commandform.new_password" placeholder="请输入密码"></el-input>
							</el-form-item>
						</div>

						<!-- 发送识别方式 -->
						<!-- 			<div v-if="command === 'setBootupRegMethod' ">
							<el-form-item label="默认识别方式">
								<el-radio-group v-model="commandform.reg_method">
									<el-radio label="Default">Default</el-radio>
									<el-radio label="Gate">Gate</el-radio>
									<el-radio label="Attendance">Attendance</el-radio>
									<el-radio label="Finance">Finance</el-radio>
								</el-radio-group>
							</el-form-item>
						</div> -->
						<!-- 发送删除 -->
						<div v-if="command === 'deleteUser' ">
							<el-form-item label="FACE_ID">
								<el-input v-model="commandform.face_id" placeholder="请输入FACE_ID"></el-input>
							</el-form-item>
						</div>
						<!-- 发送添加 -->
						<div v-if="command === 'addUser' ">
							<!-- 	<el-form-item label="名称">
								<el-input v-model="commandform.name"></el-input>
							</el-form-item> -->
							<el-form-item label="FACE_ID">
								<el-input v-model="commandform.face_id" placeholder="请输入FACE_ID"></el-input>
							</el-form-item>
							<!-- <el-form-item label="照片类型">
								<el-input v-model="commandform.image_type"></el-input>
							</el-form-item>
							<el-form-item label="上传照片">
								<el-upload action="https://upload-z2.qiniup.com" ref="upload" :limit="1" :before-upload="beforeAvatarUpload"
								 :auto-upload="false" :on-success="handleAvatarSuccess" :on-remove="handleRemove" :on-exceed="handleExceed"
								 :on-change="handleChange" :data="imgData">
									<el-button size="small" type="primary">选择图片</el-button>
								</el-upload>
								<div v-if="hasNewImage" style="color: red; font-size: 12px;">* 点击文件名可删除所选图片</div>
								<div class="up-img" v-if="commandform.image_content">
									<span style="display: flex;justify-items: center;color: #67C23A;"></span>
									<img class="pic-box" :src="commandform.image_content" />
								</div>
								<div class="up-img" v-else>
									<img class="pic-box" :src="change_href" />
								</div>
							</el-form-item> -->
						</div>
						<!-- 发送版本 -->
						<!-- 			<div v-if="command === 'getUserList' ">
							<el-form-item label="起始">
								<el-input v-model="commandform.start"></el-input>
							</el-form-item>
							<el-form-item label="长度">
								<el-input v-model="commandform.length"></el-input>
							</el-form-item>
						</div> -->
						<!-- 活体类型 -->
						<!-- 				<div v-if="command === 'setLivenessType' ">
							<el-form-item label="活体类型">
								<el-radio-group v-model="commandform.liveness_type">
									<el-radio label="NONE">NONE</el-radio>
									<el-radio :label="RGB">RGB</el-radio>
									<el-radio :label="NIR">NIR</el-radio>
									<el-radio :label="'RGB+NIR'">RGB+NIR</el-radio>
									<el-radio label="RGB+Depth">RGB+Depth</el-radio>
									<el-radio label="RGB+NIR+Depth">RGB+NIR+Depth</el-radio>
								</el-radio-group>
							</el-form-item>
						</div> -->
						<!-- 发送质量控制 -->
						<!-- 				<div v-if="command === 'setQualityControl' ">
							<el-form-item label="流程">
								<el-radio-group v-model="commandform.work_field">
									<el-radio label="ALL">ALL</el-radio>
									<el-radio label="ADDUSER">ADDUSER</el-radio>
									<el-radio label="RECOGNITION">RECOGNITION</el-radio>
								</el-radio-group>
							</el-form-item>
							<el-form-item label="质量控制">
								<el-radio-group v-model="commandform.quality_control">
									<el-radio label="NONE">NONE</el-radio>
									<el-radio label="LOW">LOW</el-radio>
									<el-radio label="NORMAL">NORMAL</el-radio>
									<el-radio label="HIGH">HIGH</el-radio>
								</el-radio-group>
							</el-form-item>
						</div> -->
						<!-- 间隔时间毫秒 -->
						<!-- 				<div v-if="command === 'setIntervalTime' ">
							<el-form-item label="间隔时间毫秒">
								<el-input v-model="commandform.time"></el-input>
							</el-form-item>
						</div> -->
						<div style="margin-left: 100px;">
							<el-button type="primary" @click="sendCommand">发送指令</el-button>
						</div>
					</el-form>
				</div>


			</div>

			<el-table :data="commandsData" border :header-cell-style="{background:'#f0f0f0', color: '#2a9f93'}">
				<el-table-column prop="id" label="ID"></el-table-column>
				<el-table-column prop="device_uuid" label="设备ID"></el-table-column>
				<el-table-column prop="command" label="指令"></el-table-column>
				<el-table-column prop="command_title" label="指令名字"></el-table-column>
				<el-table-column prop="state" label="状态">
					<template slot-scope="scope">
						<span v-if="scope.row.state == '1'">已创建</span>
						<span v-if="scope.row.state == '2'">已下发</span>
						<span v-if="scope.row.state == '3'">成功</span>
						<span v-if="scope.row.state == '4'">失败</span>
					</template>
				</el-table-column>
				<el-table-column prop="updated_at" label="更新时间"></el-table-column>
			</el-table>
			<div class="block">
				<el-pagination @current-change="handleCurrentCommandsChange" :current-page.sync="currentCommandsPage" :page-sizes="[10, 20, 30, 40, 50]"
				 :page-size="pageCommandsSize" layout="sizes, prev, pager, next, jumper" @size-change="handleSizeCommandsChange"
				 :total="totalCommandsPage">
				</el-pagination>
			</div>
		</el-dialog>

		<!-- 查看用户-->
		<el-dialog title="查看用户" :visible.sync="dialogUserList">
			<el-table :data="userListData" border :header-cell-style="{background:'#f0f0f0', color: '#2a9f93'}">
				<el-table-column prop="name" label="姓名"></el-table-column>
				<el-table-column prop="face_id" label="FACE_ID"></el-table-column>
				<el-table-column prop="href" label="照片">
					<template slot-scope="scope">
						<el-popover placement="top-start" title="" trigger="click">
							<img :src="scope.row.href" style="max-width:800px;max-height:800px;" />
							<img slot="reference" :src="scope.row.href" style="max-width:180px;max-height:80px;">
						</el-popover>
					</template>
				</el-table-column>
			</el-table>
			<div class="block">
				<el-pagination @current-change="handleCurrentUserListChange" :current-page.sync="currentUserListPage" :page-sizes="[10, 20, 30, 40, 50]"
				 :page-size="pageUserListSize" layout="sizes, prev, pager, next, jumper" @size-change="handleSizeUserListChange"
				 :total="totalUserListPage">
				</el-pagination>
			</div>
		</el-dialog>

		<div class="block">
			<el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-sizes="[10, 20, 30, 40, 50]"
			 :page-size="pageSize" layout="sizes, prev, pager, next, jumper" @size-change="handleSizeChange" :total="totalPage">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	import API from '@/api/index.js'
	import DATE from '@/utils/date.js'
	export default {
		name: 'gradems',
		data() {
			return {
				dialogLogcat: false,
				logCat: '',
				dialogDevice: false,
				typeList: [], // 设备类型
				type: '', // 搜索作用
				label: '',
				projectList: [],
				addressList: [],
				faceGroupList: [],
				checkAll: false, // 全选人脸组
				uuidList: [],
				apkList: [],
				versionList: [],
				directionList: [{
					id: 'in',
					direction: '进'
				}, {
					id: 'out',
					direction: '出'
				}],
				hotness: 1,
				form: {
					name: '',
					address_id: '',
					project_id: '',
					type: '人脸机',
					uuid: '',
					remark: '',
					configs: [],
					apk: '',
					apk_version: '',
					face_groups: [],
					direction: ''
				},
				tableDate: [],
				dialogFaceGroup: false,
				facetable: [], // 人脸组表格
				dialogLogs: false, // 查看日志
				logstable: [],
				dialogShowRecord: false, // 查看进出记录
				faceLogsTable: [],
				uuid: '',
				address_id: '',
				dialogHeart: false, // 查看心跳
				x_formatData: [],
				x_formatData_value: [],
				arr: [],
				dialogCommands: false, // 查看指令
				commandsData: [],
				command_uuid: '',
				command: '', // 选择指令发送
				commandform: {
					uuid: '',
					command: '',
					new_password: '',
					face_id: '',
				}, // 发送指令
				commandList: [],
				dialogUserList: false, // 查看用户列表
				userListData: [],
				user_list_uuid: '',
				currentUserListPage: 1,
				pageUserListSize: 10,
				totalUserListPage: 0,
				currentCommandsPage: 1,
				pageCommandsSize: 10,
				totalCommandsPage: 0,
				currentFaceLogsPage: 1,
				totalFaceLogsPage: 0,
				currentLogsPage: 1,
				totalLogsPage: 0,
				currentPage: 1,
				pageSize: 10,
				totalPage: 0,

				timer: '',
				langtime: 10
			}
		},
		mounted() {
			this.getDevice();
			this.getAddress();
			this.getUuid();
			this.getApk();
			this.getTypes();
			this.getProject();
			this.getCommandType();
		},
		methods: {
			// 搜索
			search() {
				var self = this;
				API.search(self.uuid).then(res => {
					self.tableDate = res.data;
					self.totalPage = res.total;
					self.uuid = '';
					self.$message.success('搜索成功！');
				})
			},
			typeChange(val) {
				var self = this;
				API.searchType(val).then(res => {
					self.tableDate = res.data;
					self.totalPage = res.total;
					self.$message.success('搜索成功！');
				})
			},
			getDevice() {
				var self = this;
				API.devices(this.currentPage).then(res => {
					this.tableDate = res.data;
					self.totalPage = res.total;
				})
			},
			// 获取设备类型
			getTypes() {
				API.deviceTypes().then(res => {
					console.log(res)
					this.typeList = res;
					// for(var i = 0; i < this.typeList.length; i++) {
					// 	this.label = this.typeList[i]
					// }
				})
			},
			getProject() {
				var self = this;
				API.projects(self.currentPage).then(res => {
					self.projectList = res.data;
				})
			},

			changeProject(val) {
				var self = this;
				self.getAddress(val)
			},

			// 获取地址
			getAddress(val) {
				var self = this;
				API.addresses(self.currentPage, 1000, val).then(res => {
					self.addressList = res.data;
				})
			},
			addressChange(val) {
				this.getFaceGroup(val)
			},
			// 获取人脸组
			getFaceGroup(address_id) {
				var self = this;
				API.faceGroup(address_id).then(res => {
					self.faceGroupList = res.data;
				})
			},
			// 全选
			handleCheckAllChange(val) {
				var facebox = [];
				this.faceGroupList.forEach(item => {
					facebox.push(item.group_name)
				})
				this.form.face_groups = val ? facebox : [];
			},
			// 获取uuid
			getUuid() {
				var self = this;
				API.uuid(self.currentPage, 1000).then(res => {
					self.uuidList = res.data;
				})
			},
			// 获取安装包
			getApk() {
				var self = this;
				API.apks(self.currentPage).then(res => {
					self.apkList = res.data;
				})
			},
			apkChange(value) {
				console.log(value)
				this.getApkVersion(value)
			},
			getApkVersion(id) {
				var self = this;
				API._apkVersions(id).then(res => {
					self.versionList = res.data;
				})
			},
			// 添加新的AIP
			newDevice() {
				var self = this;
				switch (self.hotness) {
					case 1:
						self.form.configs.push({
							heatvision: 'normal'
						})
						break;
					case 2:
						self.form.configs.push({
							heatvision: 'strict'
						})
						break;
					case 3:
						self.form.configs.push({
							heatvision: 'none'
						})
				}
				API.device(self.form).then(res => {
					self.getUuid();
					self.dialogDevice = false;
					self.$message.success("提交成功");
					self.getDevice();
					self.currentPage = 1
					self.form = {
						name: '',
						address_id: '',
						project_id: '',
						type: '人脸机',
						uuid: '',
						remark: '',
						configs: [],
						apk: '',
						apk_version: '',
						face_groups: [],
						direction: ''
					}
				})
			},
			// 操作
			handleShowLog(index, row) {
				this.dialogLogs = true;
				this.uuid = row.uuid;
				API.deviceLogs(1, 10, row.uuid).then(res => {
					this.logstable = res.data;
					this.totalLogsPage = res.total;
				})
			},
			handleCurrentLogsChange(val) {
				API.deviceLogs(val, 10, this.uuid).then(res => {
					this.logstable = res.data;
					this.totalLogsPage = res.total;
				})
			},
			handleShowFace(index, row) {
				console.log(row.groups)
				this.dialogFaceGroup = true;
				this.facetable = row.groups;
			},
			handleShowRecord(index, row) {
				this.dialogShowRecord = true;
				this.uuid = row.uuid;
				this.address_id = row.address_id;
				API.deviceFaceLogs(1, 10, row.uuid, row.address_id).then(res => {
					this.faceLogsTable = res.data;
					this.totalFaceLogsPage = res.total;
					// this.faceLogsTable.forEach(item => {
					// 	item.timestamp = DATE.formatTime(item.timestamp, 'Y-M-D h:m:s')
					// })
				})
			},
			handleDel() {},
			showlogcat(index, row) {
				this.dialogLogcat = true;
				this.logCat = row.logCat
			},
			// 查看心跳
			handleHeart(index, row) {
				console.log(row)
				var self = this;
				self.dialogHeart = true;
				self.uuid = row.uuid;
				self.x_formatData = [];
				clearInterval(self.timer)
				self.langtime = 10;
				self.drawLine()
				// self.$nextTick(function() {
				// 	self.drawLine()
				// })

				API.deviceHeart(self.uuid).then(res => {
					self.arr = res.originData;
					self.arr.forEach(item => {
						item.time = DATE.formatTime(item.time, 'Y-M-D h:m:s')
					})
					// for (var i = 0; i < res.formatData.length; i++) {
					// 	self.x_formatData.push(i);
					// 	self.x_formatData_value.push(res.formatData[i]);
					// }
				});

			},
			drawLine() {
				var self = this;
				self.$nextTick(function() {
					self.x_formatData = [];
					var x_formatData_value = [];
					let heartChart = self.$echarts.init(self.$refs.heartChart);
					heartChart.setOption({
						title: {
							text: '网络心跳图' + +'秒后刷新',
						},
						tooltip: {},
						legend: {
							data: ['销量']
						},
						xAxis: {
							name: '时间/分钟',
							data: []
						},
						yAxis: {},
						series: [{
							name: 'time',
							type: 'line',
						}]
					});
					heartChart.showLoading();
					API.deviceHeart(self.uuid).then(res => {
						heartChart.hideLoading();
						x_formatData_value = [];
						for (var i = 0; i < res.formatData.length; i++) {
							self.x_formatData.push(i);
							x_formatData_value.push(res.formatData[i]);
						}
						heartChart.setOption({
							xAxis: {
								data: self.x_formatData
							},
							series: [{
								// 根据名字对应到相应的系列
								name: 'time',
								data: x_formatData_value
							}]
						});
					});
					self.timer = setInterval(() => {
						if (self.langtime == 0) {
							self.x_formatData = [];
							x_formatData_value = [];
							let heartChart = self.$echarts.init(self.$refs.heartChart);
							heartChart.setOption({
								title: {
									text: '网络心跳图' + self.langtime-- + '秒后刷新',
								},
								tooltip: {},
								legend: {
									data: ['销量']
								},
								xAxis: {
									name: '时间/分钟',
									data: []
								},
								yAxis: {},
								series: [{
									name: 'time',
									type: 'line',
								}]
							});
							heartChart.showLoading();
							API.deviceHeart(self.uuid).then(res => {
								heartChart.hideLoading();
								for (var i = 0; i < res.formatData.length; i++) {
									self.x_formatData.push(i);
									x_formatData_value.push(res.formatData[i]);
								}
								heartChart.setOption({
									xAxis: {
										data: self.x_formatData
									},
									series: [{
										// 根据名字对应到相应的系列
										name: 'time',
										data: x_formatData_value
									}]
								});
							});
							self.langtime = 10;
						} else {
							self.$nextTick(function() {
								let heartChart = self.$echarts.init(self.$refs.heartChart);
								heartChart.setOption({
									title: {
										text: '网络心跳图' + self.langtime-- + '秒后刷新',
									}
								});
							})
						}

					}, 1000)
				})
			},

			// 查看指令
			handleShowCommands(index, row) {
				var self = this;
				self.dialogCommands = true;
				self.command_uuid = row.uuid;
				API.deviceCommands(1, 10, row.uuid).then(res => {
					self.commandsData = res.data;
					self.totalCommandsPage = res.total;
				})
			},
			// 获取指令类型
			getCommandType() {
				var self = this;
				API.commandsType(4).then(res => {
					self.commandList = res
				})
			},
			changeCommand(val) {
				var self = this;
				self.commandform = {};
				switch (self.command) {
					case "setPassword":
						self.commandform = {
							uuid: self.command_uuid,
							command: 'setPassword',
							new_password: ''
						}
						break;
					case 'deleteUser':
						self.commandform = {
							uuid: self.command_uuid,
							command: 'deleteUser',
							face_id: ''
						}
						break;
					case "addUser":
						self.commandform = {
							uuid: self.command_uuid,
							command: 'addUser',
							face_id: ''
						}
						break;
					case 'getSoftVersion':
						self.commandform = {
							uuid: self.command_uuid,
							command: 'getSoftVersion',
						}
						break;
					case 'restart':
						self.commandform = {
							uuid: self.command_uuid,
							command: 'restart',
						}
				}
			},
			// 发送指令
			sendCommand() {
				var self = this;
				switch (self.command) {
					case "setPassword":
						API.sendDeviceCommand(self.commandform).then(res => {
							self.$message.success("发送成功");
						})
						break;
					case 'deleteUser':
						API.sendDeviceCommand(self.commandform).then(res => {
							self.$message.success("发送成功");
						})
						break;
					case "addUser":
						API.sendDeviceCommand(self.commandform).then(res => {
							self.$message.success("发送成功");
						})
						break;
					case 'getSoftVersion':
						API.sendDeviceCommand(self.commandform).then(res => {
							self.$message.success("发送成功");
						})
						break;
					case 'restart':
						API.sendDeviceCommand(self.commandform).then(res => {
							self.$message.success("发送成功");
						})
				}
			},

			// 查看用户列表
			handleUserList(index, row) {
				var self = this;
				self.dialogUserList = true;
				self.user_list_uuid = row.uuid;
				API.deviceUserList(1, 10, row.uuid).then(res => {
					self.userListData = res;
					// self.totalUserListPage = res.total;
				})
			},

			handleCurrentChange(val) {
				var self = this;
				self.currentPage = val;
				API.devices(val, self.pageSize).then(res => {
					self.tableDate = res.data;
					self.totalPage = res.total;
				})
			},
			// 每页显示条数
			handleSizeChange(val) {
				var self = this;
				self.pageSize = val;
				API.devices(self.currentPage, val).then(res => {
					self.tableDate = res.data;
					self.totalPage = res.total;
				})
			},

			handleCurrentFaceLogsChange(val) {
				API.deviceFaceLogs(val, 10, this.uuid, this.address_id).then(res => {
					this.faceLogsTable = res.data;
					this.totalFaceLogsPage = res.total;
				})
			},

			// 每页显示条数
			handleSizeCommandsChange(val) {
				var self = this;
				self.pageCommandsSize = val;
				API.deviceCommands(self.currentCommandsPage, val, self.command_uuid).then(res => {
					self.commandsData = res.data;
					self.totalCommandsPage = res.total;
				})
			},

			handleCurrentCommandsChange(val) {
				var self = this;
				self.currentCommandsPage = val;
				API.deviceCommands(val, self.pageCommandsSize, self.command_uuid).then(res => {
					self.commandsData = res.data;
					self.totalCommandsPage = res.total;
				})
			},

			// 每页显示条数
			// handleSizeUserListChange(val) {
			// 	var self = this;
			// 	self.pageUserListSize = val;
			// 	API.deviceUserList(self.currentUserListPage, val, self.user_list_uuid).then(res => {
			// 		self.userListData = res;
			// 		self.totalUserListPage = res.total;
			// 	})
			// },

			// handleCurrentUserListChange(val) {
			// 	var self = this;
			// 	self.currentUserListPage = val;
			// 	API.deviceUserList(val, self.pageUserListSize, self.user_list_uuid).then(res => {
			// 		self.userListData = res;
			// 		self.totalUserListPage = res.total;
			// 	})
			// },

		},

		beforeDestroy() {
			clearInterval(this.timer)
		}
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
