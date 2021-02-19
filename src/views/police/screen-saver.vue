<template>
	<div v-loading="loading" element-loading-text="获取数据中">
		<div class="handle-box">
			<div class="btn">
				<el-button type="primary" @click="addScreenSaver">添加屏保</el-button>
			</div>
		</div>


		<el-table :data="tableData" stripe border :header-cell-style="{background:'#f0f0f0', color: '#003366'}">
			<el-table-column prop="id" label="ID"></el-table-column>
			<el-table-column prop="title" label="屏保描述"></el-table-column>
			<el-table-column prop="remark" label="屏保备注"></el-table-column>
			<el-table-column prop="images" label="屏保图片" width="500px">
				<template slot-scope="scope">
					<div style="display: flex;flex-wrap: wrap;">
						<div v-for="(item,index) in scope.row.images" :key="index">
							<div style="margin: 0 20px;">
								<el-popover placement="top-start" title="" trigger="click">
									<img :src="item" style="max-width:800px; max-height:800px;" />
									<img slot="reference" :src="item" style="max-width:50px;max-height:50px;">
								</el-popover>
							</div>
						</div>
					</div>
				</template>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" type="primary" @click="sendScreen(scope.$index, scope.row)">发布此屏保</el-button>
					<el-popconfirm title="是否要删除该条数据" @confirm="handleDel(scope.$index, scope.row)" cancelButtonType="primary" style="margin-left: 10px;">
						<el-button slot="reference" size="mini" type="danger">删除</el-button>
					</el-popconfirm>
				</template>
			</el-table-column>
		</el-table>

		<el-dialog title="添加屏保" :visible.sync="dialogScreen">
			<div class="box">
				<el-form :model="form" label-width="100px">
					<el-form-item label="屏保描述">
						<el-input v-model="form.title"></el-input>
					</el-form-item>
					<el-form-item label="屏保备注">
						<el-input v-model="form.remark"></el-input>
					</el-form-item>
					<el-form-item label="上传屏保图片">
						<el-upload action="https://upload-z2.qiniup.com" ref="upload" :limit="5" :before-upload="beforeAvatarUpload"
						 :auto-upload="false" :on-success="handleAvatarSuccess" :on-remove="handleRemove" :on-exceed="handleExceed"
						 :on-change="handleChange" :data="imgData" multiple list-type="picture-card">
							<el-button size="small" type="primary">选择图片</el-button>
						</el-upload>
					</el-form-item>
					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="newScreenSaver">提交</el-button>
						</el-form-item>
					</div>
				</el-form>

			</div>
		</el-dialog>

		<el-dialog title="发布" :visible.sync="dialogSend" :modal="false" width="80%" >
			<div class="box">
				<el-form :model="sendForm" label-width="100px">
					<!-- <el-form-item label="选择APK">
						<el-select v-model="form.apkName">
							<el-option v-for="(item, index) in apkList" :label="item.name" :value="item.id" :key="index"></el-option>
						</el-select>
					</el-form-item> -->
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
					<el-form-item label="选择类型">
						<el-select v-model="sendForm.type" @change="typeChange">
							<el-option v-for="(item, index) in typeList" :label="item.label" :value="item.value" :key="index"></el-option>
						</el-select>
					</el-form-item>
					<div v-if="sendForm.type === 2">
						<el-form-item label="选择项目">
							<el-select v-model="project_id" placeholder="请选择项目" @change="changeProject">
								<el-option v-for="(item,index) in projectList" :key="index" :label="item.name" :value="item.id">
								</el-option>
							</el-select>
						</el-form-item>
					</div>
					<div v-if="sendForm.type === 2 && hasAddress">
						<el-form-item label="选择地址">
							<!-- <el-checkbox v-model="checkAll" @change="handleCheckAllAddress">全选</el-checkbox> -->
							<el-transfer filterable v-model="sendForm.addresses" :data="addressList" :titles="['id-地址', '选中地址']" :button-texts="['取消', '确定']"  @change="handleCheckAllAddress">
								<span slot-scope="{ option }">
									{{ option.key }} - {{ option.label }}</span>
							</el-transfer>
							<!-- <div class="facebox">
								
								<div v-for="(item,index) in addressList" :key="index">
									<el-checkbox-group v-model="sendForm.addresses" class="facebox-item">
										<el-checkbox :label="item.id" @change="handleCheckAllAddress">{{item.address}}</el-checkbox>
									</el-checkbox-group>
								</div>
							</div> -->
						</el-form-item>
					</div>
					<div v-if="sendForm.type === 3">
						<el-form-item label="选择项目">
							<el-select v-model="project_id" placeholder="请选择项目" @change="changeProject">
								<el-option v-for="(item,index) in projectList" :key="index" :label="item.name" :value="item.id">
								</el-option>
							</el-select>
						</el-form-item>
					</div>
					<div v-if="sendForm.type === 3 && hasAddress">
						<el-form-item label="选择地址">
							<el-transfer v-loading="dialogLoading" element-loading-text="获取数据中" filterable v-model="sendForm.addresses" :data="addressList" :titles="['id-地址', '选中地址']" :button-texts="['取消', '确定']"  @change="handleCheckAllAddress">
								<span slot-scope="{ option }">
									{{ option.key }} - {{ option.label }}</span>
							</el-transfer>
							<!-- <el-checkbox v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox> -->
							<div class="facebox">
							<!-- 	<el-transfer filterable v-model="sendForm.addresses" :data="addressList" :titles="['姓名', '选中警员']" :button-texts="['取消', '确定']">
									<span slot-scope="{ option }">
										{{ option.id }} - {{ option.address }}</span>
								</el-transfer>
 -->

								<!-- 	<div v-for="(item,index) in addressList" :key="index">
									<el-checkbox-group v-model="sendForm.addresses" class="facebox-item">
										<el-checkbox :label="item.id" @change="handleCheckAllAddress">{{item.address}}</el-checkbox>
									</el-checkbox-group>
								</div> -->
							</div>
						</el-form-item>
					</div>
					<div v-if="hasType">
						<el-form-item label="选择方向">
							<el-select v-model="sendForm.direction" @change="handleCheckeddirection">
								<el-option v-for="(item, index) in directionList" :label="item.name" :value="item.value" :key="index"></el-option>
							</el-select>
						</el-form-item>

						<el-form-item label="选择设备">
							<div class="facebox">
								<el-transfer v-loading="dialogLoading" element-loading-text="获取数据中" filterable v-model="sendForm.devices" :data="deviceList" :titles="['uuid-备注', '选中地址']" :button-texts="['取消', '确定']">
									<span slot-scope="{ option }">
										{{ option.key }} - {{ option.label }}</span>
								</el-transfer>
							<!-- 	<div v-for="(item,index) in deviceList" :key="index">
									<el-checkbox-group v-model="sendForm.devices" class="facebox-item">
										<el-checkbox :label="item.id">{{item.uuid}} / {{item.remark ? item.remark : '无'}}</el-checkbox>
									</el-checkbox-group>
								</div> -->
							</div>
						</el-form-item>
					</div>

					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="newSend">发布</el-button>
						</el-form-item>
					</div>
				</el-form>
			</div>
		</el-dialog>


		<div class="block">
<el-pagination @current-change="currentChange" :current-page.sync="current" :page-sizes="[10, 20, 50, 100, 150, 200, 250, 300]"
			 :page-size="size" layout="sizes, prev, pager, next, jumper" @size-change="sizeChange" :total="total">
			</el-pagination>
		</div>
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
				loading: false,
				tableData: [{}],
				dialogScreen: false,

				form: {
					title: '',
					remark: '',
					images: []
				},
				// 上传人脸
				submitChanner: false, // 提交通道
				imgData: {
					key: '',
					token: ''
				},
				fileName: '',
				suffix: '',
				qiniuaddr: "https://tu.fengniaotuangou.cn", // 七牛云图片外链地址
				screenSaverList: [], // 上传屏保,
				// 屏保开始时间
				screenTime: '',
				timeScreen: 'HH:mm', // 时间格式
				intervalTime: 0, // 间隔时间
				leaveTime: '',

				screenFrom: {}, // 指令为屏保时候输入
				// 发布屏保
				dialogSend: false,
				projectList: [],
				hasAddress: false,
				typeList: [{
					value: 1,
					label: '全部设备'
				}, {
					value: 2,
					label: '按地址选择'
				}, {
					value: 3,
					label: '自定义'
				}],
				directionList: [{
					value: 'out',
					name: '出'
				}, {
					value: 'in',
					name: '进'
				}],
				// 发布
				sendForm: {
					saver_id: '',
					type: '',
					addresses: [], // 地址id
					devices: [], // 设备id
					start: '',
					end: '',
					interval_time: '',
					start_time: '',
					direction: ''
				},
				project_id: '', // 项目id
				addressList: [],
				addresses: [],
				checkAll: false,
				hasType: false,
				deviceList: [],
				dialogLoading: false, // 加载地址设备时
				
				// 分页
				current: 1, // 当前页
				size: 10, // 每页出现几条
				total: 0, // 总页数
			}
		},
		mounted() {
			this.getScreenSaver();
			this.getQiniuToken();
		},
		methods: {
			// 获取屏保
			getScreenSaver() {
				API.screenSavers(1, 10).then(res => {
					this.tableData = res.data;
					this.total = res.total;
				})
			},


			// 添加屏保
			addScreenSaver() {
				let self = this;
				self.dialogScreen = true;
				self.form.title = '';
				self.form.remark = '';
				self.form.images = [];
				self.screenSaverList = [],
					self.$refs.upload.clearFiles();
			},

			// 提交
			newScreenSaver() {
				var self = this;
				if (self.submitChanner) {
					self.$refs.upload.submit();
					// 接口
					API.screenSaver(self.form).then(res => {
						self.$message.success('提交成功');
						self.dialogScreen = false;
						self.getScreenSaver();
						self.$refs.upload.clearFiles();
						self.form = {
							title: '',
							remark: '',
							images: []
						}
					})
				} else {
					// 接口
					console.log(self.form)
					self.form.images = ['']
					API.screenSaver(self.form).then(res => {
						self.$message.success('提交成功');
						self.dialogScreen = false;
						self.getScreenSaver();
						self.form = {
							title: '',
							remark: '',
							images: []
						}
					}).catch(err => {})
				}
			},
			// 上传屏保图片
			getQiniuToken() {
				var self = this;
				axios.get('https://api.fengniaotuangou.cn/api/upload/token').then(res => {
					console.log(res.data.uptoken)
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
				if (fileList.length > 0) {
					self.submitChanner = true;
				}
				for (let i = 0; i < fileList.length; i++) {
					console.log(fileList)
					if (fileList[i].name.substring(fileList[i].name.lastIndexOf('.') + 1) === 'png') {
						console.log(11, fileList[i].name)
					} else {
						self.$message.error('该图片类型错误,请上传后缀为png的图片');
						fileList.pop(fileList[i]);
						return false;
					}
				}
			},
			// 上传前
			beforeAvatarUpload(file) {
				var self = this;
				self.getQiniuToken();
				// 上传之前,把图片推进screenSaverList
				self.fileName = md5(file.name);
				self.suffix = file.name.substring(file.name.lastIndexOf('.') + 1);
				self.imgData.key = `tmp_${self.fileName}.${self.suffix}`
				// 上传之前后,把图片推进screenSaverList
				var _screenSaverList = [];
				if (self.imgData.key) {
					self.screenSaverList.push(`${self.qiniuaddr}/${self.imgData.key}`)
					for (var i = 0; i < self.screenSaverList.length; i++) {
						if (_screenSaverList.indexOf(self.screenSaverList[i]) === -1 && self.screenSaverList[i].substring(self.screenSaverList[
								i].lastIndexOf('.') + 1) === 'png') {
							_screenSaverList.push(self.screenSaverList[i])
						}
					}
					self.form.images = _screenSaverList;
				}

			},
			// 上传成功
			handleAvatarSuccess(res, file, fileList) {
				var self = this;
				console.log(111, res)
				console.log(222, fileList)
				this.getQiniuToken();
			},
			// 上传数量
			handleExceed() {
				var self = this;
				self.$message.error('上传图片不能超过5张');
			},

			// 发布屏保
			sendScreen(index, row) {
				let self = this;
				self.dialogSend = true;
				self.sendForm = {
					saver_id: '',
					type: '',
					addresses: [], // 地址id
					devices: [], // 设备id
					start: '',
					end: '',
					interval_time: '',
					start_time: ''
				}
				self.sendForm.saver_id = row.id;
				console.log(this.sendForm.saver_id)
			},
			// 选中时间
			chooseTime(val) {
				console.log(this.userAuthTime)
			},

			screenTimeChange(val) {
				var self = this;
				self.sendForm.start = val[0];
				self.sendForm.end = val[1];
			},

			intervalTimeChange(val) {
				var self = this;
				self.sendForm.interval_time = val;
			},
			leaveTimeChange(val) {
				var self = this;
				self.sendForm.start_time = val;
			},
			typeChange(val) {
				var self = this;
				console.log(self.sendForm.addresses)
				if (self.sendForm.type === 1) {
					self.addressList = [];
					self.project_id = '';
					self.sendForm.addresses = [];
					self.hasAddress = false;
					self.hasType = false;
				}
				if (self.sendForm.type === 3) {
					self.addressList = [];
					self.project_id = '';
					self.sendForm.addresses = [];
					self.hasAddress = false;
					self.hasType = false;
					self.getProject()
				}
				if (self.sendForm.type === 2) {
					self.addressList = [];
					self.project_id = '';
					self.sendForm.addresses = [];
					self.hasAddress = false;
					self.hasType = false;
					self.getProject()
				}
			},
			getProject() {
				var self = this;
				API.projects(1, 100000).then(res => {
					self.projectList = res.data;
				})
			},

			changeProject(val) {
				var self = this;
				self.sendForm.addresses = [];
				self.getAddress(val);
				self.hasAddress = true;
			},

			// 获取地址
			getAddress(val) {
				var self = this;
				self.dialogLoading = true;
				API.addresses(1, 100000, val).then(res => {
					let _addressList = res.data;
					for (let i = 0; i < _addressList.length; i++) {
						self.addressList.push({
							key: _addressList[i].id,
							label: _addressList[i].address
						});
					}
					console.log(self.addressList)
					self.dialogLoading = false;
					return self.addressList;
				}).catch(err => {
					self.dialogLoading = false;
				})
			},

			handleCheckAllAddress(val) {
				var self = this;
				console.log(self.sendForm.addresses)
				if (self.sendForm.type === 3) {
					self.hasType = true;
				}
			},

			handleCheckeddirection(val) {
				var self = this;
				self.getDevice(val);
			},
			getDevice(val) {
				var self = this;
				self.dialogLoading = true;
				API._devices(val, self.sendForm.addresses, 10000000).then(res => {
					self.deviceList = [];
					let _deviceList = res.data;
					for (let i = 0; i < _deviceList.length; i++) {
						self.deviceList.push({
							key: _deviceList[i].id,
							label: _deviceList[i].uuid + _deviceList[i].remark
						});
					}
					console.log(self.deviceList)
					self.dialogLoading = false;
					return self.deviceList;
				}).catch(err => {
					self.dialogLoading = false;
				})
			},
			newSend() {
				var self = this;
				var type = self.sendForm.type;
				switch (type) {
					case 1:
						var formData_1 = {
							saver_id: self.sendForm.saver_id,
							type: 1,
							start: self.sendForm.start,
							end: self.sendForm.end,
							interval_time: self.sendForm.interval_time,
							start_time: self.sendForm.start_time,
						}
						console.log(formData_1)
						API.issueScreenSaver(formData_1).then(res => {
							self.$message.success("发布成功");
							this.dialogSend = false;
						})
						break;
					case 2:
						var formData_2 = {
							saver_id: self.sendForm.saver_id,
							type: 2,
							addresses: self.sendForm.addresses,
							start: self.sendForm.start,
							end: self.sendForm.end,
							interval_time: self.sendForm.interval_time,
							start_time: self.sendForm.start_time,
						}
						console.log(formData_2)
						API.issueScreenSaver(formData_2).then(res => {
							self.$message.success("发布成功");
							this.dialogSend = false;
						})
						break;
					case 3:
						console.log(self.sendForm)
						API.issueScreenSaver(self.sendForm).then(res => {
							self.$message.success("发布成功");
							this.dialogSend = false;
						});
				}
			},
			// 操作
			handleDel(index, row) {
				var self = this;
				console.log(row)
				var id = row.id
				API.delScreenSaver(id).then(res => {
					self.$message.success('删除成功');
					self.getScreenSaver();
					self.current = 1;
				}).catch(err => {
					self.loading = false;
				})
			},
			
			// 分页
			currentChange(val) {
				var self = this;
				self.loading = true;
				self.current = val;
				API.screenSavers(val, self.size).then(res => {
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
				API.screenSavers(self.current, val).then(res => {
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
