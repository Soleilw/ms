<template>
	<div>
		<div class="btn">
			<el-button type="primary" @click="dialogDevice = true">添加设备</el-button>
		</div>

		<el-dialog title="添加设备" :visible.sync="dialogDevice">
			<div class="box">
				<el-form :model="form" label-width="100px">
					<el-form-item label="设备名称">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="类型">
						<el-input v-model="form.type"></el-input>
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
							<el-option v-for="item in uuidList" :key="item.id" :label="item.uuid" :value="item.id">
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
					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="newDevice">提交</el-button>
						</el-form-item>
					</div>
				</el-form>
			</div>
		</el-dialog>

		<el-table :data="tableDate" ref="multipleTable">
			<el-table-column label="名称" type="selection" align="center"></el-table-column>
			<el-table-column prop="id" label="ID" align="center"></el-table-column>
			<el-table-column prop="address_id" label="地址ID" align="center"></el-table-column>
			<el-table-column prop="uuid" label="uuid" align="center"></el-table-column>
			<el-table-column prop="type" label="类型" align="center"></el-table-column>
			<el-table-column prop="direction" label="方向" align="center"></el-table-column>
			<el-table-column prop="version" label="版本" align="center"></el-table-column>
			<el-table-column prop="remark" label="ReMark" align="center"></el-table-column>
			<el-table-column label="操作" align="center">
				<template slot-scope="scope">
					<el-button size="mini" type="success" @click="handleShowFace(scope.$index, scope.row)">查看人脸组</el-button>
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		
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

		<div class="block">
			<el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="10" layout="prev, pager, next, jumper"
			 :total="totalPage">
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
				dialogDevice: false,
				addressList: [],
				faceGroupList: [],
				checkAll: false, // 全选人脸组
				uuidList: [],
				apkList: [],
				versionList: [],
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
				},
				tableDate: [],
				dialogFaceGroup: false,
				facetable: [], // 人脸组表格
				currentPage: 1,
				totalPage: 0
			}
		},
		mounted() {
			this.getDevice();
			this.getAddress();
			this.getUuid();
			this.getApk();
		},
		methods: {
			getDevice() {
				var self = this;
				API.devices(this.currentPage).then(res => {
					this.tableDate = res.data;
					self.totalPage = res.total;
				})
			},
			// 获取地址
			getAddress() {
				var self = this;
				API.addresses(self.currentPage).then(res => {
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
				API.uuid(self.currentPage, 100).then(res => {
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
				switch(self.hotness) {
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
				var self = this;
				API.device(self.form).then(res => {
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
					}
				})
			},
			// 操作
			handleShowFace(index,row) {
				console.log(row.groups)
				this.dialogFaceGroup = true;
				this.facetable = row.groups;
			},
			handleDel() {},

			// 分页
			handleCurrentChange(val) {
				var self = this;
				self.getDevice();
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
