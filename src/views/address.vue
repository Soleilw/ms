<template>
	<div>
		<div class="handle-box">
			<div class="btn">
				<el-button type="primary" @click="addProject">添加地址</el-button>
			</div>
		</div>

		<el-dialog title="添加地址" :visible.sync="dialogProject" :close-on-click-modal="false" width="80%">
			<div class="box">
				<el-form :model="form" label-width="120px">
					<el-form-item label="选择项目">
						<el-select v-model="form.project_id">
							<el-option v-for="(item, index) in projectList" :label="item.name" :value="item.id" :key="index"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="选择类型">
						<el-select v-model="form.type">
							<el-option v-for="(value, name) in typeList" :label="value" :value="name" :key="name"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="地址">
						<div class="address-info">
							<el-input v-model="form.address" placeholder="地址显示"></el-input>
							<el-input v-model="form.lng" placeholder="经度显示"></el-input>
							<el-input v-model="form.lat" placeholder="纬度显示"></el-input>
						</div>
						<el-button type="primary" @click="openMap">点击选择地址</el-button>
						<el-button type="danger" @click="closeMap">关闭选择地址</el-button>
						<div v-if="showMap">
							<v-map @callback="getLoc"></v-map>
						</div>
					</el-form-item>
					<el-form-item label="联系方式">
						<el-input v-model="form.contact"></el-input>
					</el-form-item>
					<div v-for="(item,index) in form.face_groups" :key="index">
					<el-form-item label="人脸分组姓名">
						<el-input v-model="item.group_name"></el-input>
					</el-form-item>
						<el-form-item label="是否默认分组">
							<el-radio-group v-model="item.is_default">
								<el-radio :label="1">是</el-radio>
								<el-radio :label="2">否</el-radio>
							</el-radio-group>
						</el-form-item>
						<el-form-item label="是否为在线分组">
							<el-radio-group v-model="item.online">
								<el-radio :label="1">是</el-radio>
								<el-radio :label="2">否</el-radio>
							</el-radio-group>
						</el-form-item>
					</div>
					<el-form-item label="操作">
						<el-button size="mini" type="primary" @click="addFace">添加人脸姓名</el-button>
						<el-button size="mini" type="danger" @click="delFace">删除人脸姓名</el-button>
					</el-form-item>

					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="newProject">提交</el-button>
						</el-form-item>
					</div>
				</el-form>
			</div>
		</el-dialog>

		<el-table :data="tableDate"  border :header-cell-style="{background:'#f0f0f0', color: '#2a9f93'}">
			<el-table-column prop="id" label="ID"></el-table-column>
			<el-table-column prop="project_id" label="项目ID"></el-table-column>
			<el-table-column prop="address" label="地址"></el-table-column>
			<el-table-column prop="contact" label="联系方式"></el-table-column>
			<el-table-column prop="address_uuid" label="address_uuid"></el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<div class="block">
			<el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-sizes="[10, 20, 30, 40, 50]"
			 :page-size="pageSize" layout="sizes, prev, pager, next, jumper" @size-change="handleSizeChange" :total="totalPage">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	import API from '@/api/index.js'
	import vMap from '@/components/map/map-iframe.vue'

	export default {
		components: {
			vMap
		},
		data() {
			return {
				dialogProject: false,
				projectList: [],
				typeList: [],
				form: {
					project_id: '',
					type: '',
					address: '',
					contact: '',
					face_groups: [],
					lng: '',
					lat: ''
				},
				tableDate: [],
				currentPage: 1,
				pageSize: 10,
				totalPage: 0,
				showMap: '' // 地图显示
			}
		},
		mounted() {
			this.getAddress();
			this.getProject();
			this.getAddressType();
		},
		methods: {
			
			getProject() {
				var self = this;
				API.projects(self.currentPage).then(res => {
					self.projectList = res.data;
				})
			},
			getAddressType() {
				var self = this;
				API.addressTypes(self.currentPage).then(res => {
					self.typeList = res;
				})
			},
			getAddress() {
				var self = this;
				API.addresses(self.currentPage).then(res => {
					self.tableDate = res.data;
					self.totalPage = res.total;
				})
			},
			addProject() {
				var self = this;
				self.dialogProject = true;
				self.mapAddress = '中山市';
				self.form = {
					project_id: '',
					type: '',
					address: '',
					contact: '',
					face_groups: [],
					lng: '',
					lat: ''
				}
			},
			// 添加人脸分组名称
			addFace() {
				var self = this;
				self.form.face_groups.push({})
			},
			delFace() {
				var self = this;
				self.form.face_groups.pop({})
			},
			// 添加新的AIP
			openMap() {
				this.showMap = true;
			},
			closeMap() {
				this.showMap = false;
			},
			getLoc(mapData) {
				this.form.lng = mapData.latlng.lng;
				this.form.lat = mapData.latlng.lat;
				this.form.address = mapData.poiname;
				this.showMap = false;
			},
			newProject() {
				var self = this;
				API.address(self.form).then(res => {
					self.dialogProject = false;
					self.$message.success("提交成功");
					self.getAddress();
					self.currentPage = 1
					self.form = {}
				})
			},
			// 操作
			handleEdit(index, row) {
				var self = this;
				self.dialogProject = true;
				API.getaddress(row.id).then(res => {
					debugger
					self.form = {
						project_id: res.project_id,
						type: res.type,
						address: res.address,
						contact: res.contact,
						face_groups: res.groups,
						lng: res.lng,
						lat: res.lat
					}
				})
			},
			handleDel() {},

			// 分页
			handleCurrentChange(val) {
				var self = this;
				self.currentPage = val;
				API.addresses(val, self.pageSize).then(res => {
					self.tableDate = res.data;
					self.totalPage = res.total;
				})
			},
			// 每页显示条数
			handleSizeChange(val) {
				var self = this;
				self.pageSize = val;
				API.addresses(self.currentPage, val).then(res => {
					self.tableDate = res.data;
					self.totalPage = res.total;
				})
			}
		}
	}
</script>

<style>
	.map {
		border: solid 1px #ccc;
	}

	.address-info {
		display: flex;
		margin-bottom: 10px;
	}
</style>
