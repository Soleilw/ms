<template>
	<div v-loading="loading" element-loading-text="获取数据中">
		<div class="handle-box">
			<div class="btn">
				<el-button type="primary" @click="addAddress">添加地址</el-button>
			</div>
		</div>

		<el-dialog title="添加地址" :visible.sync="dialogAddress" :close-on-click-modal="false" width="80%">
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
					<el-form-item label="选择社区">
						<el-select v-model="pro_id" placeholder="请选择省份" @change="proChange" style="margin-right: 10px;">
							<el-option v-for="item in proList" :key="item.id" :label="item.title" :value="item.id">
							</el-option>
						</el-select>
						<el-select v-model="city_id" placeholder="请选择市级" @change="cityChange" style="margin-right: 10px;">
							<el-option v-for="item in cityList" :key="item.id" :label="item.title" :value="item.id">
							</el-option>
						</el-select>
						<el-select v-model="community_id" placeholder="请选择区级" @change="areasChange" style="margin-right: 10px;">
							<el-option v-for="item in areaList" :key="item.id" :label="item.title" :value="item.id">
							</el-option>
						</el-select>
						<el-select v-model="areas_id" placeholder="请选择社区" @change="communityChange" style="margin-right: 10px;">
							<el-option v-for="item in communityList" :key="item.id" :label="item.title" :value="item.id">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="地址">
						<div class="address-info">
							<el-input v-model="form.address" placeholder="地址显示" style="margin-right: 10px;"></el-input>
							<el-input v-model="form.lng" placeholder="经度显示" style="margin-right: 10px;"></el-input>
							<el-input v-model="form.lat" placeholder="纬度显示" style="margin-right: 10px;"></el-input>
						</div>
					</el-form-item>
					<el-form-item label="地图显示">
						<el-switch v-model="showMap" active-color="#2a9f93">
						</el-switch>
						<div v-if="showMap">
							<v-map @callback="getLoc"></v-map>
						</div>
					</el-form-item>
					<el-form-item label="联系方式">
						<el-input v-model="form.contact"></el-input>
					</el-form-item>
					<div v-for="(item,index) in form.face_groups" :key="index">
						<el-form-item label="人脸分组姓名">
							<el-input v-model="item.name"></el-input>
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
					<el-form-item label="选择公安辖区">
						<el-checkbox v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
						<div class="facebox">
							<el-checkbox-group v-model="form.stations" class="facebox-item">
								<div v-for="(item,index) in stationList" :key="index">
									<el-checkbox :label="item.id" @change="checkOneChange">{{item.name}}</el-checkbox>
								</div>
							</el-checkbox-group>
						</div>
					</el-form-item>
					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="newProject">提交</el-button>
						</el-form-item>
					</div>
				</el-form>
			</div>
		</el-dialog>

		<el-table :data="tableData" border :header-cell-style="{background:'#f0f0f0', color: '#2a9f93'}" max-height="620">
			<el-table-column prop="id" label="ID"></el-table-column>
			<el-table-column prop="project_id" label="项目ID"></el-table-column>
			<el-table-column prop="address" label="地址"></el-table-column>
			<el-table-column prop="contact" label="联系方式"></el-table-column>
			<el-table-column prop="address_uuid" label="address_uuid"></el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-popconfirm title="是否要删除该条数据" @onConfirm="handleDel(scope.$index, scope.row)" cancelButtonType="primary" style="margin-left: 10px;">
						<el-button slot="reference" size="mini" type="danger">删除</el-button>
					</el-popconfirm>
				</template>
			</el-table-column>
		</el-table>

		<div class="block">
			<el-pagination @current-change="currentChange" :current-page.sync="current" :page-sizes="[10, 20, 50, 100, 150, 200, 250, 300]"
			 :page-size="size" layout="sizes, prev, pager, next, jumper" @size-change="sizeChange" :total="total">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	import API from '@/api/index.js'
	import vMap from '@/components/map/map-iframe.vue'
	let facebox = [];
	export default {
		components: {
			vMap
		},
		data() {
			return {
				loading: true,
				dialogAddress: false,
				projectList: [],
				typeList: [],
				form: {
					project_id: '',
					type: '',
					address: '',
					contact: '',
					face_groups: [],
					lng: '',
					lat: '',
					area_id: '',
					stations: []
				},

				proList: [], // 省级列表
				pro_id: '',
				cityList: [], // 市级列表
				city_id: '',
				communityList: [], // 区级列表
				community_id: '',
				areaList: [], //  社区列表
				areas_id: '',
				showMap: false, // 地图显示
				
				checkAll: false, // 选择公安辖区
				stationList: [], // 公安辖区列表

				tableData: [],
				current: 1,
				size: 10,
				total: 0,
			}
		},
		mounted() {
			this.getAddress();
			this.getProject();
			this.getAddressType();
			this.getPro();
		},
		methods: {
			getProject() {
				var self = this;
				API.projects(1, 100).then(res => {
					self.projectList = res.data;
				})
			},
			getAddressType() {
				var self = this;
				API.addressTypes(self.current).then(res => {
					self.typeList = res;
				})
			},
			getAddress() {
				var self = this;
				API.addresses(1, 100).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
			},
			addAddress() {
				var self = this;
				self.getPoliceStation();
				self.dialogAddress = true;
				self.pro_id = '';
				self.city_id = '';
				self.community_id = '';
				self.form = {
					project_id: '',
					type: '',
					address: '',
					contact: '',
					face_groups: [],
					lng: '',
					lat: '',
					area_id: '',
					stations: []
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
			getLoc(mapData) {
				this.form.lng = mapData.latlng.lng;
				this.form.lat = mapData.latlng.lat;
				this.showMap = false;
			},
			// 获取公安辖区列表
			getPoliceStation() {
				var self = this;
				API.policeStations(self.current, 1000).then(res => {
					self.stationList = res.data;
				})
			},
			// 全选
			handleCheckAllChange(val) {
				if (val === true) {
					facebox = [];
					this.stationList.forEach(item => {
						facebox.push(item.id)
					})
					this.form.stations = facebox;
				} else if (val === false) {
					facebox = [];
					this.form.stations = [];
				}
			},
			newProject() {
				var self = this;
				API.address(self.form).then(res => {
					self.dialogAddress = false;
					self.$message.success("提交成功");
					self.getAddress();
					self.current = 1
					self.form = {}
				})
			},
			// 操作
			handleEdit(index, row) {
				var self = this;
				self.getPoliceStation();
				self.dialogAddress = true;
				self.checkAll = false;
				self.pro_id = '';
				self.city_id = '';
				self.community_id = '';
				API.getaddress(row.id).then(res => {
					self.form = {
						id: row.id,
						project_id: res.project_id,
						area_id: res.area_id,
						type: res.type,
						address: res.address,
						contact: res.contact,
						face_groups: res.face_groups,
						stations: res.stations,
						lng: res.lng,
						lat: res.lat,
					}
					if(self.form.stations.length == self.stationList.length) {
						self.checkAll = true;
					}
				})
			},
			handleDel() {},


			// 获取社区列表（省市区选中）
			getPro() {
				var self = this;
				API.areas(1, 100, 0).then(res => {
					self.proList = res.data;
				})
			},
			proChange(val) {
				this.getCity(val)
			},
			getCity(val) {
				var self = this;
				API.areas(1, 100, val).then(res => {
					self.cityList = res.data;
				})
			},
			cityChange(val) {
				this.getAreas(val)
			},

			getAreas(val) {
				var self = this;
				API.areas(1, 100, val).then(res => {
					self.areaList = res.data;
				})
			},

			areasChange(val) {
				this.getCommunity(val)
			},


			getCommunity(val) {
				var self = this;
				API.areas(1, 100, val).then(res => {
					self.communityList = res.data;
				})
			},

			communityChange(val) {
				this.form.area_id = val;
			},

			// 分页
			currentChange(val) {
				var self = this;
				self.loading = true;
				self.current = val;
				API.addresses(val, self.size).then(res => {
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
				API.addresses(self.current, val).then(res => {
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
	.map {
		border: solid 1px #ccc;
	}

	.address-info {
		display: flex;
	}
</style>
