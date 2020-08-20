<template>
	<div v-loading="loading" element-loading-text="获取数据中">
		<div class="handle-box">
			<div class="btn">
				<el-button type="primary" @click="dialogCommand = true">发送指令</el-button>
			</div>
			<el-dialog title="发送指令" :visible.sync="dialogCommand" @close="closeCommands">
				<div class="btn">
					<el-form :model="commandform" label-width="100px">
						<el-form-item label="设备uuid">
							<el-input v-model="command_uuid" placeholder="请输入uuid"></el-input>
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
						<div style="margin-left: 100px;">
							<el-button type="primary" @click="sendCommand">发送指令</el-button>
						</div>
					</el-form>
				</div>

			</el-dialog>
			<div class="btn">
				<el-input placeholder="输入设备号" v-model="uuid" class="input-with-select" @keyup.enter.native="search(uuid)">
					<el-button slot="append" icon="el-icon-search" @click="search(uuid)"></el-button>
				</el-input>
			</div>
		</div>
		<el-table :data="commandsData" border :header-cell-style="{background:'#f0f0f0', color: '#2a9f93'}" :max-height="480">
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
			<el-table-column label="操作" prop="data" width="200px">
				<template slot-scope="scope">
					<el-popover placement="right" width="800" trigger="click">
						<el-row v-for="(value,name) in JSON.parse(scope.row.data)" :key="name" style="padding: 10px;">
							{{name}}: {{value}}
						</el-row>
						<el-button slot="reference">查看内容</el-button>
					</el-popover>
				</template>
			</el-table-column>
		</el-table>
		<div class="block">
			<el-pagination @current-change="currentPage" :current-page.sync="current" :page-sizes="[10, 20, 50, 100, 150, 200, 250, 300]"
			 :page-size="size" layout="sizes, prev, pager, next, jumper" @size-change="sizePage" :total="total" @prev-click="prevChange"
			 @next-click="nextChange">
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
				dialogCommand: false,
				uuid: '',
				command_uuid: '',
				command: '',
				commandform: {},
				commandsData: [],
				more_data: '', // 查看更多内容的数据
				commandList: [],
				// 分页
				current: 1, // 当前页
				size: 10, // 每页出现几条
				total: 0 // 总页数
			}
		},
		mounted() {
			this.getCommands()
			this.getCommandType()
		},
		methods: {
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
							self.command_uuid = '';
							self.command = '';
							self.dialogCommand = false
						})
						break;
					case 'deleteUser':
						API.sendDeviceCommand(self.commandform).then(res => {
							self.$message.success("发送成功");
							self.command_uuid = '';
							self.command = '';
							self.dialogCommand = false
						})
						break;
					case "addUser":
						API.sendDeviceCommand(self.commandform).then(res => {
							self.$message.success("发送成功");
							self.command_uuid = '';
							self.command = '';
							self.dialogCommand = false
						})
						break;
					case 'getSoftVersion':
						API.sendDeviceCommand(self.commandform).then(res => {
							self.$message.success("发送成功");
							self.command_uuid = '';
							self.command = '';
							self.dialogCommand = false
						})
						break;
					case 'restart':
						API.sendDeviceCommand(self.commandform).then(res => {
							self.$message.success("发送成功");
							self.uuid = '';
							self.command = '';
							self.dialogCommand = false
						})
				}
			},
			// 关闭指令uuid
			closeCommands() {
				var self = this;
				console.log('111uuid', self.command_uuid)
				self.command_uuid = '';
				self.command = '';
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
			},
			// 上一页
			prevChange(val) {
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
			// 下一页
			nextChange(val) {
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
