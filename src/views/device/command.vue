<template>
	<div v-loading="loading" element-loading-text="获取数据中">
		<div class="content-box">
			<div class="content-box-left">
				<div class="btn">
					<el-button type="primary" @click="addCommand">发送指令</el-button>
				</div>
				<div class="btn">
					<div class="tip">根据设备号筛选：</div>
				</div>

				<div class="btn">
					<el-input placeholder="输入设备号" v-model="uuid" class="input-with-select" @keyup.enter.native="search(uuid)">
						<el-button slot="append" icon="el-icon-search" @click="search(uuid)"></el-button>
					</el-input>
				</div>
				<div class="btn">
					<el-button @click="resetSelect" type="primary">重新筛选</el-button>
				</div>
			</div>

			<div class="content-box-right">
				<el-table :data="commandsData" stripe="" border :header-cell-style="{background:'#f0f0f0', color: '#003366'}"
				 :max-height="700">
					<el-table-column prop="id" label="ID"></el-table-column>
					<el-table-column prop="device_uuid" label="设备ID" width="200px"></el-table-column>
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
					<el-table-column prop="created_at" label="下发时间" width="200px"></el-table-column>
					<el-table-column prop="updated_at" label="更新时间" width="200px"></el-table-column>
					<el-table-column label="操作" prop="data" width="100px">
						<template slot-scope="scope">
							<el-popover placement="right" width="800" trigger="click">
								<el-row v-for="(value,name) in JSON.parse(scope.row.data)" :key="name" style="padding: 10px;">
									{{name}}: {{value}}
								</el-row>
								<el-button type="text" slot="reference">查看内容</el-button>
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
		</div>

		<el-dialog title="发送指令" :visible.sync="dialogCommand" @close="closeCommands">
			<div class="btn">
				<el-form :model="commandform" label-width="100px">
					<el-form-item label="请选择类型">
						<el-select v-model="type" placeholder="请选择类型" @change="typeChange">
							<el-option v-for="(item,index) in typeList" :key="index" :label="typeList[index]" :value="index">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="请选择省市区">
						<el-cascader v-model="pro_city_area" placeholder="请选择省市区" :options="cascaderData" @change="proChange" :props="props"></el-cascader>
					</el-form-item>
					<el-form-item label="设备uuid">
						<el-select v-model="command_uuid" placeholder="请选择uuid" filterable @change="uuidChange">
							<el-option v-for="(item,index) in uuidList" :key="index" :label="item.uuid/item.remark" :value="item.uuid">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="指令">
						<el-select v-model="command" @change="changeCommand">
							<el-option v-for="(value, name) in commandList" :key="name" :label="value" :value="name"></el-option>
						</el-select>
					</el-form-item>
					<!-- 发送密码 -->
					<div v-if="command === 'setPassword' ">
						<el-form-item label="密码">
							<el-input v-model="commandform.new_password" placeholder="请输入密码"></el-input>
						</el-form-item>
					</div>
					<!-- 发送删除 -->
					<div v-if="command === 'deleteUser' ">
						<el-form-item label="FACE_ID">
							<el-input v-model="commandform.face_id" placeholder="请输入FACE_ID"></el-input>
						</el-form-item>
					</div>
					<!-- 发送添加 -->
					<div v-if="command === 'addUser' ">
						<el-form-item label="FACE_ID">
							<el-input v-model="commandform.face_id" placeholder="请输入FACE_ID"></el-input>
						</el-form-item>
					</div>
					<!-- 人脸生效时间 -->
					<div v-if="command === 'setUserAuthTime' ">
						<el-form-item label="人脸生效时间">
							<el-date-picker v-model="userAuthTime" type="datetimerange" range-separator="至" start-placeholder="开始日期"
							 end-placeholder="结束日期" @change="chooseTime" :value-format="valueFormatTime">
							</el-date-picker>
						</el-form-item>
						<el-form-item label="FACE_ID">
							<el-input v-model="commandform.face_id" placeholder="请输入FACE_ID"></el-input>
						</el-form-item>
					</div>
					<!-- 固件升级 -->
					<div v-if="command === 'upgrade' ">
						<el-form-item label="固件地址">
							<el-input v-model="commandform.url"></el-input>
						</el-form-item>
					</div>
					<!-- 设置屏保 -->
					<div v-if="command === 'setScreenSave' ">
						<el-form-item label="屏保时间">
							<el-time-picker is-range v-model="screenTime" range-separator="至" start-placeholder="屏保开始时间" end-placeholder="屏保结束时间"
							 placeholder="选择时间范围" :value-format="timeScreen" @change="screenTimeChange">
							</el-time-picker>
						</el-form-item>
						<el-form-item label="图片切换间隔时间">
							<el-input-number v-model="intervalTime" @change="intervalTimeChange"></el-input-number>
						</el-form-item>
						<el-form-item label="人离开后进入屏保的时间">
							<el-input-number v-model="leaveTime" @change="leaveTimeChange"></el-input-number>
						</el-form-item>
						<el-form-item label="上传屏保图片">
							<el-upload action="https://upload-z2.qiniup.com" ref="upload" :limit="5" :before-upload="beforeAvatarUpload"
							 :auto-upload="false" :on-success="handleAvatarSuccess" :on-remove="handleRemove" :on-exceed="handleExceed"
							 :on-change="handleChange" :data="imgData" multiple list-type="picture-card">
								<el-button size="small" type="primary">选择图片</el-button>
							</el-upload>
						</el-form-item>
					</div>
					<div class="submit">
						<el-button type="primary" @click="sendCommand">发送</el-button>
					</div>
				</el-form>
			</div>

		</el-dialog>
	</div>
</template>

<script>
	import API from '@/api/index.js'
	import axios from 'axios'
	import md5 from 'blueimp-md5'

	export default {
		name: 'gradems',
		data() {
			return {
				loading: true,
				dialogCommand: false,
				uuidList: [], // uuid列表
				typeList: [],
				type: '',
				uuid: '',
				command_uuid: '',
				command: '',
				commandform: {},
				def_commandform: {},
				commandsData: [],
				userAuthTime: [], // 选择时间
				valueFormatTime: 'yyyy-MM-dd HH:mm:ss',
				more_data: '', // 查看更多内容的数据
				commandList: [],

				// 上传人脸
				imgData: {
					key: '',
					token: ''
				},
				fileName: '',
				suffix: '',
				qiniuaddr: "https://tu.fengniaotuangou.cn", // 七牛云图片外链地址
				screenSaverList: [], // 上传屏保
				// 屏保开始时间
				screenTime: '',
				timeScreen: 'HH:mm', // 时间格式
				intervalTime: 0, // 间隔时间
				leaveTime: '',

				screenFrom: {}, // 指令为屏保时候输入
				submitChanner: false, // 提交通道

				pro_city_area: [], // 根据省市区搜索
				pro_city_area_id: '', // 根据社区id搜索
				cascaderData: [],
				props: {
					label: 'title',
					value: 'id',
					lazy: true,
					lazyLoad(node, resolve) {
						var level = node.level
						if (level == 1) {
							var city_id = node.data.id
							API.areas(1, 100, city_id).then(res => {
								var city_node = res.data
								city_node.forEach(item => {
									item.leaf = level >= 3
								})
								resolve(city_node)
							})
						}
						if (level == 2) {
							var community_id = node.data.id
							API.areas(1, 100, community_id).then(res => {
								var community_node = res.data
								community_node.forEach(item => {
									item.leaf = level >= 3
								})
								resolve(community_node)
							})
						}
						if (level == 3) {
							var area_id = node.data.id
							API.areas(1, 100, area_id).then(res => {
								var area_node = res.data
								area_node.forEach(item => {
									item.leaf = level >= 3
								})
								resolve(area_node)
							})
						}
					}
				},
				// 分页
				current: 1, // 当前页
				size: 10, // 每页出现几条
				total: 0, // 总页数

			}
		},
		mounted() {
			this.getCommands()
			// this.getCommandType()
			this.getPro();
		},
		methods: {
			// 查看指令
			getCommands() {
				var self = this;
				API.deviceCommands(1, 10).then(res => {
					self.loading = false;
					self.commandsData = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
			},
			// 发送指令
			addCommand() {
				var self = this;
				self.dialogCommand = true;
				API.deviceTypes().then(res => {
					self.typeList = res;
				})
			},
			// 设备类型
			typeChange(val) {
				var self = this;
				self.getUUIDlist(val, self.pro_city_area_id)
			},
			getPro() {
				var self = this;
				API.areas(1, 100, 0).then(res => {
					self.cascaderData = res.data;
				})
			},
			proChange(val) {
				var self = this;
				self.pro_city_area_id = val[3]
				self.getUUIDlist(self.type, self.pro_city_area_id)
			},
			getUUIDlist(type, pro_city_area_id) {
				var self = this;
				API.devices(1, 1000, type, 0, pro_city_area_id).then(res => {
					self.uuidList = res.data;
				})
			},
			uuidChange(val) {
				var self = this;
				let obj = {};
				obj = self.uuidList.find((item) => { //这里的userRoleList就是上面遍历的数据源
					if (item.uuid === val) {
						API.commandsType(item.type).then(res => {
							self.commandList = res
						})
					}
				});
			},
			// 获取指令类型
			getCommandType(val) {
				// var self = this;
				// API.commandsType(val).then(res => {
				// 	self.commandList = res
				// })
			},
			// 搜索
			search() {
				var self = this;
				API.deviceCommands(1, self.size, self.uuid).then(res => {
					self.loading = false;
					self.commandsData = res.data;
					self.total = res.total;
					self.$message.success('搜索成功！');
				}).catch(err => {
					self.loading = false;
				})
			},

			// 选中时间
			chooseTime(val) {
				console.log(this.userAuthTime)
			},

			screenTimeChange(val) {
				var self = this;
				self.screenFrom.start = val[0];
				self.screenFrom.end = val[1];
			},

			intervalTimeChange(val) {
				var self = this;
				self.screenFrom.interval_time = val;
			},
			leaveTimeChange(val) {
				var self = this;
				self.screenFrom.start_time = val;
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
					case 'setUserAuthTime':
						self.commandform = {
							uuid: self.command_uuid,
							command: 'setUserAuthTime',
							auth_start_time: '',
							auth_end_time: '',
							face_id: ''
						}
						break;
					case 'upgrade':
						self.commandform = {
							uuid: self.command_uuid,
							command: 'upgrade',
							url: ''
						}
						break;
					case 'setScreenSave':
						self.screenFrom.uuid = self.command_uuid;
						self.screenFrom.command = 'setScreenSave';
						console.log(self.screenFrom)
						break;
						// case 'getSoftVersion':
						// 	self.commandform = {
						// 		uuid: self.command_uuid,
						// 		command: 'getSoftVersion',
						// 	}
						// 	break;
						// case 'openDoor':
						// 	self.commandform = {
						// 		uuid: self.command_uuid,
						// 		command: 'openDoor',
						// 	}
						// 	break;
						// case 'deleteAll':
						// 	self.commandform = {
						// 		uuid: self.command_uuid,
						// 		command: 'deleteAll'
						// 	}
						// 	break;
						// case 'restart':
						// 	self.commandform = {
						// 		uuid: self.command_uuid,
						// 		command: 'restart',
						// 	}
						// 	break;
					default:
						self.def_commandform = {
							uuid: self.command_uuid,
							command: self.command,
						}
						console.log(self.def_commandform)
				}
			},
			// 发送指令
			sendCommand() {
				var self = this;
				if (self.command) {
					switch (self.command) {
						case "setPassword":
							API.sendDeviceCommand(self.commandform).then(res => {
								self.$message.success("发送成功");
								self.command_uuid = '';
								self.command = '';
								self.type = '';
								self.dialogCommand = false;
								self.getCommands();
							})
							break;
						case 'deleteUser':
							API.sendDeviceCommand(self.commandform).then(res => {
								self.$message.success("发送成功");
								self.command_uuid = '';
								self.command = '';
								self.type = '';
								self.commandform.face_id = '';
								self.dialogCommand = false;
								self.getCommands();
							})
							break;
						case "addUser":
							API.sendDeviceCommand(self.commandform).then(res => {
								self.$message.success("发送成功");
								self.command_uuid = '';
								self.command = '';
								self.type = '';
								self.commandform.face_id = '';
								self.dialogCommand = false;
								self.getCommands();
							})
							break;
						case 'setUserAuthTime':
							self.commandform.auth_start_time = self.userAuthTime[0];
							self.commandform.auth_end_time = self.userAuthTime[1];
							API.sendDeviceCommand(self.commandform).then(res => {
								self.$message.success("发送成功");
								self.command_uuid = '';
								self.command = '';
								self.type = '';
								self.commandform.face_id = '';
								self.dialogCommand = false;
								self.getCommands();
							})
							break;
						case 'upgrade':
							API.sendDeviceCommand(self.commandform).then(res => {
								self.$message.success("发送成功");
								self.command_uuid = '';
								self.command = '';
								self.url = '';
								self.dialogCommand = false;
								self.getCommands();
							})
							break;
						case 'setScreenSave':
							console.log(self.screenFrom)
							console.log(self.submitChanner)
							if (self.submitChanner) {
								self.$refs.upload.submit();
								API.sendDeviceCommand(self.screenFrom).then(res => {
									self.$message.success("发送成功");
									self.command_uuid = '';
									self.command = '';
									self.screenTime = '',
										self.intervalTime = 0, // 间隔时间
										self.leaveTime = '',
										self.screenFrom = {},
										self.screenSaverList = [],
										self.dialogCommand = false;
									self.getCommands();
								})
							} else {
								API.sendDeviceCommand(self.screenFrom).then(res => {
									self.$message.success("发送成功");
									self.command_uuid = '';
									self.command = '';
									self.screenTime = '',
										self.intervalTime = 0, // 间隔时间
										self.leaveTime = '',
										self.screenFrom = {},
										self.dialogCommand = false;
									self.getCommands();
								})
							}
							break;
							// case 'getSoftVersion':
							// 	API.sendDeviceCommand(self.commandform).then(res => {
							// 		self.$message.success("发送成功");
							// 		self.command_uuid = '';
							// 		self.command = '';
							// 		self.dialogCommand = false;
							// 		self.getCommands();
							// 	})
							// 	break;
							// case 'openDoor':
							// 	API.sendDeviceCommand(self.commandform).then(res => {
							// 		self.$message.success("发送成功");
							// 		self.command_uuid = '';
							// 		self.command = '';
							// 		self.dialogCommand = false;
							// 		self.getCommands();
							// 	})
							// 	break;

							// case 'deleteAll':
							// 	API.sendDeviceCommand(self.commandform).then(res => {
							// 		self.$message.success("发送成功");
							// 		self.command_uuid = '';
							// 		self.command = '';
							// 		self.dialogCommand = false;
							// 		self.getCommands();
							// 	})
							// 	break;
							// case 'restart':
							// 	API.sendDeviceCommand(self.commandform).then(res => {
							// 		self.$message.success("发送成功");
							// 		self.uuid = '';
							// 		self.command = '';
							// 		self.dialogCommand = false;
							// 		self.getCommands();
							// 	})
							// 	break;
						default:
							API.sendDeviceCommand(self.def_commandform).then(res => {
								self.$message.success("发送成功");
								self.command_uuid = '';
								self.command = '';
								self.type = '';
								self.dialogCommand = false;
								self.getCommands();
							})
					}
				} else {
					self.$message.warning('请选择指令！');
				}
			},
			// 关闭指令uuid
			closeCommands() {
				var self = this;
				self.command_uuid = '';
				self.command = '';
			},

			// 上传屏保图片
			getQiniuToken() {
				var self = this;
				axios.get('https://api.fengniaotuangou.cn/api/upload/token').then(res => {
					self.imgData.token = res.data.uptoken;
				})
			},
			// 移除照片
			handleRemove(file, fileList) {
				console.log(file, fileList)
				if (fileList.length == 0) {
					self.submitChanner = false;
				}
			},
			// 改变图片
			handleChange(file, fileList) {
				var self = this;
				console.log(file, fileList)
				if (fileList.length > 0) {
					self.submitChanner = true;
				}
			},
			// 上传前
			beforeAvatarUpload(file, fileList) {
				var self = this;
				console.log(file, fileList)
				self.getQiniuToken();
				// self.familyForm.href = file.name;
				self.fileName = md5(file.name);
				self.suffix = file.name.substring(file.name.lastIndexOf('.') + 1);
				self.imgData.key = `tmp_${self.fileName}.${self.suffix}`
				// 上传之前后,把图片推进screenSaverList
				var _screenSaverList = [];
				if (self.imgData.key) {
					self.screenSaverList.push(`${self.qiniuaddr}/${self.imgData.key}`)
					for (var i = 0; i < self.screenSaverList.length; i++) {
						if (_screenSaverList.indexOf(self.screenSaverList[i]) === -1) {
							_screenSaverList.push(self.screenSaverList[i])
						}
					}
				}
				for (let i = 0; i < _screenSaverList.length; i++) {
					if (i == 0) {
						self.screenFrom.image_1 = self.screenSaverList[i]
					} else if (i == 1) {
						self.screenFrom.image_2 = self.screenSaverList[i]
					} else if (i == 2) {
						self.screenFrom.image_3 = self.screenSaverList[i]
					} else if (i == 3) {
						self.screenFrom.image_4 = self.screenSaverList[i]
					} else if (i == 4) {
						self.screenFrom.image_5 = self.screenSaverList[i]
					}
					console.log(self.screenFrom)
				}
			},
			// 上传成功
			handleAvatarSuccess(res, file, fileList) {
				var self = this;
				console.log(111, res)
				console.log(222, fileList)

				// for (let i = 0; i < self.screenSaverList.length; i++) {
				// 	if (i == 0) {
				// 		self.screenFrom.image_1 = self.screenSaverList[i]
				// 	} else if (i == 1) {
				// 		self.screenFrom.image_2 = self.screenSaverList[i]
				// 	} else if (i == 2) {
				// 		self.screenFrom.image_3 = self.screenSaverList[i]
				// 	} else if (i == 3) {
				// 		self.screenFrom.image_4 = self.screenSaverList[i]
				// 	} else if (i == 4) {
				// 		self.screenFrom.image_5 = self.screenSaverList[i]
				// 	}
				// 	console.log(self.screenFrom)
				// 	debugger
				// }
				// API.sendDeviceCommand(self.screenFrom).then(res => {
				// 	debugger
				// 	self.$message.success("发送成功");
				// 	self.command_uuid = '';
				// 	self.command = '';
				// 	self.screenTime = '',
				// 	self.intervalTime = 0, // 间隔时间
				// 	self.leaveTime = '',
				// 	self.screenFrom = {},
				// 	self.dialogCommand = false;
				// 	self.getCommands();
				// })
			},
			// 上传数量
			handleExceed() {
				var self = this;
				self.$message.error('上传图片不能超过5张');
			},

			// 重新筛选
			resetSelect() {
				window.location.reload();
			},
			// 分页
			currentPage(val) {
				var self = this;
				self.loading = true;
				self.current = val;
				API.deviceCommands(val, self.size, self.uuid).then(res => {
					self.loading = false;
					self.commandsData = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
			},
			// 每页显示条数
			sizePage(val) {
				var self = this;
				self.loading = true;
				self.size = val;
				API.deviceCommands(self.current, val, self.uuid).then(res => {
					self.loading = false;
					self.commandsData = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
			}
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
