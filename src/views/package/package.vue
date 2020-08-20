<template>
	<div v-loading="loading" element-loading-text="获取数据中">
		<div class="handle-box">
			<div class="btn">
				<el-button type="primary" @click="dialogAPK = true">添加APK</el-button>
			</div>
		</div>


		<el-table :data="tableDate" border :header-cell-style="{background:'#f0f0f0', color: '#2a9f93'}">
			<el-table-column prop="id" label="APKID"></el-table-column>
			<el-table-column prop="name" label="名称"></el-table-column>
			<el-table-column prop="description" label="描述"></el-table-column>
			<el-table-column prop="created_at" label="创建日期"></el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" type="primary" @click="handleShowVersion(scope.$index, scope.row)">查看版本</el-button>
					<el-popconfirm title="是否要删除该条数据" @onConfirm="handleDel(scope.$index, scope.row)" cancelButtonType="primary" style="margin-left: 10px;">
						<el-button slot="reference" size="mini" type="danger">删除</el-button>
					</el-popconfirm>
				</template>
			</el-table-column>
		</el-table>

		<el-dialog title="添加APK" :visible.sync="dialogAPK">
			<div class="box">
				<el-form :model="form" label-width="100px">
					<el-form-item label="APK名字">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="APK描述">
						<el-input v-model="form.description"></el-input>
					</el-form-item>
					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="newApk">添加</el-button>
						</el-form-item>
					</div>
				</el-form>

			</div>
		</el-dialog>


		<el-dialog title="查看版本" :visible.sync="dialogShowVersion" :modal="false" width="80%" :close-on-click-modal="false">
			<div>
				<div class="handle-box">
					<div class="btn">
						<el-button type="primary" @click="addVersion">添加版本</el-button>
					</div>
				</div>

				<el-dialog title="添加版本" :visible.sync="dialogVersion" :close-on-click-modal="false" :modal="false">
					<div class="box">
						<el-form :model="versionForm" label-width="100px">
							<!-- <el-form-item label="选择APK">
								<el-select v-model="versionForm.apk_id">
									<el-option v-for="(item, index) in apkList" :label="item.name" :value="item.id" :key="index"></el-option>
								</el-select>
							</el-form-item> -->
							<el-form-item label="版本名字">
								<el-input v-model="versionForm.version"></el-input>
							</el-form-item>
							<!-- <el-form-item label="版本描述">
								<el-input v-model="form.version"></el-input>
							</el-form-item> -->
							<el-form-item label="上传版本">
								<el-upload action="https://upload-z2.qiniup.com" ref="upload" :limit="1" :before-upload="beforeAvatarUpload"
								 :on-success="handleAvatarSuccess" :on-remove="handleRemove" :on-exceed="handleExceed" :on-progress="uploadProcess"
								 :data="versionData">
									<el-button size="small" type="primary">选择包</el-button>
								</el-upload>
								<el-progress v-if="hasFile === true" :text-inside="true" :stroke-width="15" :percentage="percentage"></el-progress>
							</el-form-item>
							<el-form-item label="版本链接">
								<el-input v-model="versionForm.href"></el-input>
							</el-form-item>
							<div class="submit">
								<el-form-item>
									<el-button type="primary" @click="newApkVersion">添加</el-button>
								</el-form-item>
							</div>
						</el-form>
					</div>
				</el-dialog>

				<el-table :data="versionTableData" border :header-cell-style="{background:'#f0f0f0', color: '#2a9f93'}" max-height="620"
				 v-loading="versionLoading" element-loading-text="获取数据中">
					<el-table-column prop="id" label="ID" align="center"></el-table-column>
					<el-table-column prop="apk_id" label="APKID" align="center"></el-table-column>
					<el-table-column prop="version" label="版本" align="center"></el-table-column>
					<el-table-column prop="created_at" label="创建日期" align="center"></el-table-column>
					<el-table-column label="操作" align="center">
						<template slot-scope="scope">
							<el-button size="mini" type="primary" @click="handleSend(scope.$index, scope.row)">发布</el-button>
							<el-button size="mini" type="primary" class="copy" v-clipboard:copy="scope.row.href" v-clipboard:success="onCopy"
							 v-clipboard:error="onError">复制链接</el-button>
							<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>

				<el-dialog title="发布" :visible.sync="dialogSend" :modal="false">
					<div class="box">
						<el-form :model="sendForm" label-width="100px">
							<!-- <el-form-item label="选择APK">
								<el-select v-model="form.apkName">
									<el-option v-for="(item, index) in apkList" :label="item.name" :value="item.id" :key="index"></el-option>
								</el-select>
							</el-form-item> -->
							<el-form-item label="选择类型">
								<el-select v-model="sendForm.type" @change="typeChange">
									<el-option v-for="(item, index) in typeList" :label="item.label" :value="item.value" :key="index"></el-option>
								</el-select>
							</el-form-item>
							<div v-if="sendForm.type === 2">
								<el-form-item label="选择项目">
									<el-select v-model="sendForm.project_id" placeholder="请选择项目" @change="changeProject">
										<el-option v-for="(item,index) in projectList" :key="index" :label="item.name" :value="item.id">
										</el-option>
									</el-select>
								</el-form-item>
							</div>
							<div v-if="sendForm.type === 2 && hasAddress">
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
								<el-form-item label="选择项目">
									<el-select v-model="sendForm.project_id" placeholder="请选择项目" @change="changeProject">
										<el-option v-for="(item,index) in projectList" :key="index" :label="item.name" :value="item.id">
										</el-option>
									</el-select>
								</el-form-item>
							</div>
							<div v-if="sendForm.type === 3 && hasAddress">
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
									<el-select v-model="sendForm.direction" @change="handleCheckeddirection">
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
									<el-button type="primary" @click="newSend">发布</el-button>
								</el-form-item>
							</div>
						</el-form>
					</div>
				</el-dialog>

				<div class="block">
					<el-pagination @current-change="versionCurrentChange" :current-page.sync="currentVersion" :page-sizes="[10, 20, 50, 100, 150, 200, 250, 300]"
					 :page-size="sizeVersion" layout="sizes, prev, pager, next, jumper" @size-change="versionSizeChange" :total="totalVersion"
					 @prev-click="prevVersion" @next-click="nextVersion">
					</el-pagination>
				</div>
			</div>
		</el-dialog>

		<div class="block">
			<el-pagination @current-change="currentChange" :current-page.sync="current" :page-sizes="[10, 20, 50, 100, 150, 200, 250, 300]"
			 :page-size="size" layout="sizes, prev, pager, next, jumper" @size-change="sizeChange" :total="total" @prev-click="prevChange"
			 @next-click="nextChange">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	import API from '@/api/index.js'
	import axios from 'axios'
	import md5 from 'blueimp-md5'
	import Clipboard from 'clipboard'

	export default {
		name: 'gradems',
		data() {
			return {
				loading: true,
				dialogAPK: false,
				form: {
					name: '',
					description: '',
				},
				dialogVersion: false,
				tableDate: [],
				// 分页
				current: 1, // 当前页
				size: 10, // 每页出现几条
				total: 0, // 总页数

				dialogShowVersion: false,
				apkList: [],
				qiniuaddr: "https://tu.fengniaotuangou.cn", // 七牛云图片外链地址
				fileName: '',
				suffix: '', // 后缀
				percentage: 0,
				hasFile: '', // 进度条显示
				versionData: {
					key: '',
					token: ''
				},
				versionForm: {
					apk_id: '',
					version: '',
					href: ''
				},
				// 发布
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
				versionTableData: [],
				versionLoading: true,
				// 发布
				sendForm: {
					type: '',
					addresses: [],
					direction: '',
					devices: [],
					version_id: '',
					project_id: ''
				},
				addressList: [],
				addresses: [],
				checkAll: false,
				hasType: false,
				deviceList: [],
				// 分页
				currentVersion: 1, // 当前页
				sizeVersion: 10, // 每页出现几条
				totalVersion: 0, // 总页数
			}
		},
		mounted() {
			this.getApk();
			// this.getApkVersion();
			this.getAddress();
			this.getQiniuToken();
		},
		methods: {
			getApk() {
				var self = this;
				API.apks(self.current).then(res => {
					self.loading = false;
					self.tableDate = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
			},
			// 添加新的AIP
			newApk() {
				var self = this;
				API.apk(self.form).then(res => {
					self.$message.success("提交成功");
					this.getApk();
					self.ApkForm = false;
					self.current = 1;
					self.form = {};
				})
			},
			// 操作
			handleDel() {},
			handleShowVersion(index, row) {
				var self = this;
				self.dialogShowVersion = true;
				self.versionForm.apk_id = row.id
				API.apkVersions(self.current, 10, self.versionForm.apk_id).then(res => {
					self.versionLoading = false;
					self.versionTableData = res.data;
					self.totalVersionPage = res.total;
				}).catch(err => {
					self.versionLoading = false;
				})
			},

			// 分页
			currentChange(val) {
				var self = this;
				self.loading = true;
				self.current = val;
				API.apks(val, self.size).then(res => {
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
				API.apks(self.current, val).then(res => {
					self.loading = false;
					self.tableDate = res.data;
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
				API.apks(val, self.size).then(res => {
					self.loading = false;
					self.tableData = res.data;
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
				API.apks(val, self.size).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
			},

			getApkVersion() {
				var self = this;
				API.apkVersions(self.currentPage, 10, self.versionForm.apk_id).then(res => {
					self.versionTableData = res.data;
					self.totalVersionPage = res.total;
				})
			},

			addVersion() {
				var self = this;
				self.dialogVersion = true;
				self.versionForm = {
					apk_id: self.versionForm.apk_id,
					version: '',
					href: ''
				};
			},
			// 添加新的ApkVersion
			newApkVersion() {
				var self = this;
				API.apkVersion(self.versionForm).then(res => {
					self.$message.success("提交成功");
					API.apkVersions(self.currentPage, 10, self.versionForm.apk_id).then(res => {
						self.versionTableData = res.data;
						self.totalVersionPage = res.total;
					})
					self.dialogVersion = false;
					self.currentPage = 1;
					self.versionForm = {
						apk_id: '',
						version: '',
						href: ''
					};
				})
			},
			// 操作
			handleSend(index, row) {
				this.dialogSend = true;
				this.sendForm = {
					type: '',
					addresses: [],
					direction: '',
					devices: [],
					version_id: '',
					project_id: ''
				}
				this.sendForm.version_id = row.id;
			},
			typeChange(val) {
				var self = this;
				console.log(self.sendForm.addresses)
				if (self.sendForm.type === 1) {
					self.addressList = [];
					self.sendForm.project_id = '';
					self.sendForm.addresses = [];
					self.hasAddress = false;
					self.hasType = false;
				}
				if (self.sendForm.type === 3) {
					self.addressList = [];
					self.sendForm.project_id = '';
					self.sendForm.addresses = [];
					self.hasAddress = false;
					self.hasType = false;
					self.getProject()
				}
				if (self.sendForm.type === 2) {
					self.addressList = [];
					self.sendForm.project_id = '';
					self.sendForm.addresses = [];
					self.hasAddress = false;
					self.hasType = false;
					self.getProject()
				}
			},
			getProject() {
				var self = this;
				API.projects(self.currentPage).then(res => {
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
				API.addresses(self.currentPage, 1000, val).then(res => {
					self.addressList = res.data;
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
						});
				}
			},

			// 复制链接
			onCopy(e) {
				var self = this;
				self.$message.success("复制成功");
			},
			onError(e) {
				var self = this;
				self.$message.warning("复制失败");
			},

			// 人脸信息
			handleRemove(file, fileList) {
				var self = this;
				self.hasFile = false;
				self.percentage = 0;
				self.versionForm.href = '';
			},
			beforeAvatarUpload(file) {
				var self = this;
				self.fileName = md5(file.name);
				self.suffix = file.name.substring(file.name.lastIndexOf('.') + 1);
				self.versionData.key = `${self.fileName}.${self.suffix}`;
			},
			handleAvatarSuccess(res, file) {
				var self = this;
				self.versionForm.href = `${self.qiniuaddr}/${res.key}`;
				self.$message.success('上传成功')
				console.log(self.versionForm.href)
			},
			handleExceed(file, fileList) { //图片上传超过数量限制
				var self = this;
				self.$message.error('只能上传一个文件');
				self.hasFile = false;
				self.percentage = 0
				self.$refs.upload.clearFiles()
				self.versionData.key = '';
				self.versionForm.href = '';
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

			// 分页
			versionCurrentChange(val) {
				var self = this;
				self.versionLoading = true;
				self.currentVersion = val;
				API.apkVersions(val, self.sizeVersion, self.versionForm.apk_id).then(res => {
					self.versionLoading = false;
					self.versionTableData = res.data;
					self.totalVersion = res.total;
				}).catch(err => {
					self.versionLoading = false;
				})
			},
			// 每页显示条数
			versionSizeChange(val) {
				var self = this;
				self.versionLoading = true;
				self.sizeVersion = val;
				API.apkVersions(self.currentVersion, val, self.versionForm.apk_id).then(res => {
					self.versionLoading = false;
					self.versionTableData = res.data;
					self.totalVersion = res.total;
				}).catch(err => {
					self.versionLoading = false;
				})
			},
			// 上一页
			prevVersion(val) {
				var self = this;
				self.versionLoading = true;
				self.currentVersion = val;
				API.apkVersions(val, self.sizeVersion, self.versionForm.apk_id).then(res => {
					self.versionLoading = false;
					self.versionTableData = res.data;
					self.totalVersion = res.total;
				}).catch(err => {
					self.versionLoading = false;
				})
			},
			// 下一页
			nextVersion(val) {
				var self = this;
				self.versionLoading = true;
				self.currentVersion = val;
				API.apkVersions(val, self.sizeVersion, self.versionForm.apk_id).then(res => {
					self.versionLoading = false;
					self.versionTableData = res.data;
					self.totalVersion = res.total;
				}).catch(err => {
					self.versionLoading = false;
				})
			},
		}
	}
</script>

<style>
</style>
