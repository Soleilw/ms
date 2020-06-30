<template>
	<div>
		<div class="btn">
			<el-button type="primary" @click="dialogDevice = true">添加设备</el-button>
		</div>
		<div class="btn">
			<el-input v-model="uuid" placeholder="输入设备号" class="search" @keyup.enter.native="search(uuid)"></el-input>
		</div>
		<div class="btn">
			<el-button type="primary" @click="search(uuid)">搜索</el-button>
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

		<el-table :data="tableDate">
			<el-table-column prop="id" label="ID" align="center" width="80px"></el-table-column>
			<el-table-column prop="address_id" label="地址ID" align="center" width="80px"></el-table-column>
			<el-table-column prop="uuid" label="uuid" align="center" width="300px"></el-table-column>
			<el-table-column prop="type" label="类型" align="center"></el-table-column>
			<el-table-column prop="direction" label="方向" align="center"></el-table-column>
			<el-table-column prop="version" label="版本" align="center" width="80px"></el-table-column>
			<el-table-column prop="remark" label="备注" align="center" width="400px"></el-table-column>
			<el-table-column prop="last_login" label="最后登录时间" align="center" width="200px"></el-table-column>
			<el-table-column label="操作" align="center" width="200px">
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
								<el-button size="mini" type="primary" @click="handleShowRecord(scope.$index, scope.row)">查看进出记录</el-button>
							</el-dropdown-item>
							<el-dropdown-item>
								<el-button size="mini" type="primary" @click="handleShowFace(scope.$index, scope.row)">查看人脸组</el-button>
							</el-dropdown-item>
							<el-dropdown-item>
								<el-button size="mini" type="primary" @click="handleShowLog(scope.$index, scope.row)">查看指令</el-button>
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
			<el-table :data="logstable">
				<el-table-column prop="id" label="ID" align="center"></el-table-column>
				<el-table-column prop="uuid" label="设备ID" align="center"></el-table-column>
				<el-table-column prop="time" label="时间" align="center"></el-table-column>
				<el-table-column prop="logCat" label="消息" align="center" width="400px">
					<template slot-scope="scope">
						<div class="logcat">{{scope.row.logCat}} </div>
						<div v-if="scope.row.logCat" style="text-align: left;">
							<el-button size="mini" @click="showlogcat(scope.$index, scope.row)">查看更多</el-button>
						</div>
					</template>
				</el-table-column>
				<el-table-column prop="type" label="状态" align="center">
					<template slot-scope="scope">
						<span v-text="scope.row.type == 1 ? '正常' : '异常' "></span>
					</template>
				</el-table-column>
				<el-table-column prop="created_at" label="创建时间" align="center"></el-table-column>

				<!-- 	<el-table-column label="操作" align="center">
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
			<el-table :data="faceLogsTable">
				<el-table-column prop="id" label="ID" align="center"></el-table-column>
				<el-table-column prop="device_uuid" label="设备ID" align="center"></el-table-column>
				<el-table-column prop="face.name" label="名称" align="center"></el-table-column>
				<el-table-column prop="time" label="时间" align="center"></el-table-column>
				<el-table-column prop="temp" label="温度" align="center"></el-table-column>
				<el-table-column prop="face_id" label="人脸ID" align="center"></el-table-column>
				<el-table-column prop="image" label="人脸图片" align="center">
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
			<el-table :data="facetable">
				<el-table-column prop="id" label="ID" align="center"></el-table-column>
				<el-table-column prop="device_id" label="设备ID" align="center"></el-table-column>
				<el-table-column prop="group_id" label="人脸组ID" align="center"></el-table-column>
				<el-table-column prop="group_name" label="人脸组名字" align="center"></el-table-column>
				<!-- 	<el-table-column label="操作" align="center">
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
			<el-table :data="arr">
				<el-table-column prop="id" label="ID" align="center"></el-table-column>
				<el-table-column prop="device_uuid" label="设备ID" align="center"></el-table-column>
				<el-table-column prop="time" label="时间" align="center"></el-table-column>
				<el-table-column prop="updated_at" label="更新时间" align="center"></el-table-column>
			</el-table>
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
				label: '',
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
				arr: [],
				currentFaceLogsPage: 1,
				totalFaceLogsPage: 0,
				currentLogsPage: 1,
				totalLogsPage: 0,
				currentPage: 1,
				pageSize: 10,
				totalPage: 0
			}
		},
		mounted() {
			this.getDevice();
			this.getAddress();
			this.getUuid();
			this.getApk();
			this.getTypes();
		},
		methods: {
			// 搜索
			search() {
				var self = this;
				API.search(self.uuid).then(res => {
					self.tableDate = res.data;
					self.totalPage = 1;
					self.uuid = '';
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

			// 获取地址
			getAddress() {
				var self = this;
				API.addresses(self.currentPage, 1000).then(res => {
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
				self.$nextTick(function() {
					self.drawLine()
				})
				API.deviceHeart(self.uuid).then(res => {
					self.arr = res.originData;
					self.arr.forEach(item => {
						item.time = DATE.formatTime(item.time, 'Y-M-D h:m:s')
					})
				});
			},
			drawLine() {
				var self = this;
				let heartChart = self.$echarts.init(self.$refs.heartChart);
				heartChart.setOption({
					title: {
						text: '网络心跳图',
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
						data: []
					}]
				});
				heartChart.showLoading();
				API.deviceHeart(self.uuid).then(res => {
					heartChart.hideLoading();
					var x_formatData_value = [];
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
