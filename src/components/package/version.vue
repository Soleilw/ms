<template>
	<div>
		<div class="btn">
			<el-button type="primary" @click="dialogVersion = true">添加版本</el-button>
		</div>

		<el-dialog title="添加版本" :visible.sync="dialogVersion" :close-on-click-modal="false">
			<div class="box">
				<el-form :model="form" label-width="100px">
					<el-form-item label="选择APK">
						<el-select v-model="form.apk_id">
							<el-option v-for="(item, index) in apkList" :label="item.name" :value="item.id" :key="index"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="版本名字">
						<el-input v-model="form.version"></el-input>
					</el-form-item>
					<!-- <el-form-item label="版本描述">
						<el-input v-model="form.version"></el-input>
					</el-form-item> -->
					<el-form-item label="上传版本">
						<el-upload action="https://upload-z2.qiniup.com" ref="upload" :limit="1" :before-upload="beforeAvatarUpload" :on-success="handleAvatarSuccess"
						 :on-remove="handleRemove" :on-exceed="handleExceed" :on-progress="uploadProcess" :data="versionData">
							<el-button size="small" type="primary">选择包</el-button>
						</el-upload>
						<el-progress v-if="hasFile === true" :text-inside="true" :stroke-width="15" :percentage="percentage"></el-progress>
					</el-form-item>
					<el-form-item label="版本链接">
						<el-input v-model="form.href"></el-input>
					</el-form-item>
					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="newApkVersion">添加</el-button>
						</el-form-item>
					</div>
				</el-form>
			</div>
		</el-dialog>

		<el-table :data="tableDate" ref="multipleTable">
			<el-table-column label="名称" type="selection" align="center"></el-table-column>
			<el-table-column prop="id" label="ID" align="center"></el-table-column>
			<el-table-column prop="apk_id" label="APKID" align="center"></el-table-column>
			<el-table-column prop="version" label="版本" align="center"></el-table-column>
			<el-table-column label="操作" align="center">
				<template slot-scope="scope">
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
					<el-button size="mini" type="primary" @click="handleSend(scope.$index, scope.row)">发布</el-button>
				</template>
			</el-table-column>
		</el-table>

		<el-dialog title="发布" :visible.sync="dialogSend">
			<div class="box">
				<el-form :model="sendForm" label-width="100px">
					<!-- <el-form-item label="选择APK">
						<el-select v-model="form.apkName">
							<el-option v-for="(item, index) in apkList" :label="item.name" :value="item.id" :key="index"></el-option>
						</el-select>
					</el-form-item> -->
					<el-form-item label="选择类型">
						<el-select v-model="sendForm.type">
							<el-option v-for="(item, index) in typeList" :label="item.label" :value="item.value" :key="index"></el-option>
						</el-select>
					</el-form-item>
					<div v-if="sendForm.type === 2">
						<el-form-item label="选择地址">
							<!-- <el-checkbox v-model="checkAll" @change="handleCheckAllAddress">全选</el-checkbox> -->
							<div class="facebox">
								<div v-for="(item,index) in addressList" :key="index">
									<el-checkbox-group v-model="sendForm.addresses" class="facebox-item">
										<el-checkbox :label="item.id" @change="handleCheckAllAddress">{{item.address}}</el-checkbox>
									</el-checkbox-group>
								</div>
							</div>
						</el-form-item>
					</div>
					<div v-if="sendForm.type === 3">
						<el-form-item label="选择地址">
							<!-- <el-checkbox v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox> -->
							<div class="facebox">
								<div v-for="(item,index) in addressList" :key="index">
									<el-checkbox-group v-model="sendForm.addresses" class="facebox-item">
										<el-checkbox :label="item.id" @change="handleCheckAllAddress">{{item.address}}</el-checkbox>
									</el-checkbox-group>
								</div>
							</div>
						</el-form-item>
					</div>
					<div v-if="hasType">
						<el-form-item label="选择方向">
							<el-select v-model="form.direction" @change="handleCheckeddirection">
								<el-option v-for="(item, index) in directionList" :label="item.name" :value="item.value" :key="index"></el-option>
							</el-select>
						</el-form-item>

						<el-form-item label="选择设备">
							<div class="facebox">
								<div v-for="(item,index) in deviceList" :key="index">
									<el-checkbox-group v-model="sendForm.devices" class="facebox-item">
										<el-checkbox :label="item.id">{{item.remark ? item.remark : item.uuid}}</el-checkbox>
									</el-checkbox-group>
								</div>
							</div>
						</el-form-item>
					</div>

					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="newSend">提交</el-button>
						</el-form-item>
					</div>
				</el-form>
			</div>
		</el-dialog>

		<div class="block">
			<el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="10" layout="prev, pager, next, jumper"
			 :total="totalPage">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	import API from '@/api/index.js'
	import axios from 'axios'

	export default {
		name: 'gradems',
		data() {
			return {
				dialogVersion: false,
				apkList: [],
				qiniuaddr: "https://tu.fengniaotuangou.cn", // 七牛云图片外链地址
				suffix: '', // 后缀
				percentage: 0,
				hasFile: '', // 进度条显示
				versionData: {
					key: '',
					token: ''
				},
				form: {
					apk_id: '',
					version: '',
					href: ''
				},
				// 发布
				dialogSend: false,
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
				tableDate: [{}],
				// 发布
				sendForm: {
					type: '',
					addresses: [],
					direction: '',
					devices: [],
					version_id: '',
				},
				addressList: [],
				addresses: [],
				checkAll: false,
				hasType: false,
				deviceList: [],


				currentPage: 1,
				totalPage: 0
			}
		},
		mounted() {
			this.getApkVersion();
			this.getApk();
			this.getAddress();
			this.getQiniuToken();
		},
		methods: {
			getApk() {
				var self = this;
				API.apks(self.currentPage).then(res => {
					self.apkList = res.data;
				})
			},
			getApkVersion() {
				var self = this;
				API.apkVersions(self.currentPage).then(res => {
					self.tableDate = res.data;
					self.totalPage = res.total;
				})
			},
			// 添加新的AIP
			newApkVersion() {
				var self = this;
				API.apkVersion(self.form).then(res => {
					self.$message.success("提交成功");
					this.getApkVersion();
					self.dialogVersion = false;
					self.currentPage = 1;
					self.form = {};
				})
			},
			// 操作
			handleSend(index, row) {
				this.dialogSend = true;
				this.sendForm.version_id = row.id;
			},
			// 获取地址
			getAddress() {
				var self = this;
				API.addresses(self.currentPage).then(res => {
					self.addressList = res.data;
				})
				console.log(self.addressList)
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
				API._devices(val, self.sendForm.addresses, 100).then(res => {
					self.deviceList = res.data
				})
			},
			newSend() {
				var self = this;
				var type = self.sendForm.type;
				switch (type) {
					case 1:
						var formData_1 = {
							type: 1
						}
						API.publishApk(formData_1).then(res => {
							self.$message.success("发布成功");
							this.dialogSend = false;
						})
						break;
					case 2:
						var formData_2 = {
							type: 2,
							addresses: self.sendForm.addresses
						}
						API.publishApk(formData_2).then(res => {
							self.$message.success("发布成功");
							this.dialogSend = false;
						})
						break;
					case 3:
						API.publishApk(self.sendForm).then(res => {
							self.$message.success("发布成功");
							this.dialogSend = false;
						})
				}
			},
			handleDel() {},

			// 分页
			handleCurrentChange(val) {
				var self = this;
				self.getApk();
			},

			// 人脸信息
			handleRemove(file, fileList) {
				var self = this;
				self.hasFile = false;
				self.percentage = 0;
				self.form.href = '';
			},
			beforeAvatarUpload(file) {
				var self = this;
				self.versionData.key = `${file.name}`;
			},
			handleAvatarSuccess(res, file) {
				var self = this;
				self.form.href = `${self.qiniuaddr}/${res.key}`;
				console.log(self.form.href)
			},
			handleExceed(file, fileList) { //图片上传超过数量限制
				var self = this;
				self.$message.error('只能上传一个文件');
				self.hasFile = false;
				self.percentage = 0
				self.$refs.upload.clearFiles()
				self.versionData.key = '';
			},
			uploadProcess(event, file, fileList) {
				var self = this;
				self.hasFile = true;
				self.percentage = (event.loaded / event.total * 100 | 0);
			},


			// 七牛云token
			getQiniuToken() {
				var self = this;
				axios.get('https://api.fengniaotuangou.cn/api/upload/token').then(res => {
					self.versionData.token = res.data.uptoken;
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
</style>
