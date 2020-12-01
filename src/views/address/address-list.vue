<template>
	<div v-loading="loading" element-loading-text="获取数据中">
		<div class="content-box">
			<div class="content-box-left">
				<div class="btn">
					<el-button type="primary" @click="addAddress">添加地址</el-button>
				</div>
				<div class="btn">
					<div class="tip">根据地址筛选：</div>
				</div>
				<div class="btn">
					<el-input placeholder="输入姓名" v-model="name" class="input-with-select" @keyup.enter.native="search(name)">
						<el-button slot="append" icon="el-icon-search" @click="search(name)"></el-button>
					</el-input>
				</div>
				<div class="btn">
					<div class="tip">根据地区筛选：</div>
				</div>
				<div class="btn">
					<el-cascader v-model="pro_city_area" placeholder="请选择省市区" :options="cascaderData" @change="areaProChange" :props="props"></el-cascader>
				</div>
				<div class="btn">
					<el-button @click="resetSelect" type="primary">重新筛选</el-button>
				</div>
			</div>

			<div class="content-box-right">
				<el-table :data="tableData" border :header-cell-style="{background:'#f0f0f0', color: '#003366'}" max-height="700">
					<el-table-column prop="id" label="ID" width="100px"></el-table-column>
					<el-table-column prop="project_id" label="项目ID" width="100px"></el-table-column>
					<el-table-column prop="address" label="地址" width="400px"></el-table-column>
					<el-table-column prop="stations" label="所在辖区" width="200px"></el-table-column>
					<el-table-column prop="contact" label="联系方式" width="400px"></el-table-column>
					<el-table-column prop="address_uuid" label="address_uuid" width="200px"></el-table-column>
					<el-table-column label="操作" width="200px" fixed="right">
						<template slot-scope="scope">
							<el-button type="text" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
							<el-popconfirm title="是否要删除该条数据" @onConfirm="handleDel(scope.$index, scope.row)" cancelButtonType="primary"
							 style="margin-left: 10px;">
								<el-button slot="reference" type="text">删除</el-button>
							</el-popconfirm>
						</template>
					</el-table-column>
				</el-table>

				<div class="block">
					<el-pagination @current-change="currentChange" :current-page.sync="current" :page-sizes="[20, 50, 100, 150, 200, 250, 300]"
					 :page-size="size" layout="sizes, prev, pager, next, jumper" @size-change="sizeChange" :total="total">
					</el-pagination>
				</div>

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
									<el-checkbox :label="item.id">{{item.name}}</el-checkbox>
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
				name: '', // 用于搜索

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
				size: 20,
				total: 0,

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
			}
		},
		mounted() {
			this.getAddress();
			this.getProject();
			this.getAddressType();
			this.getPro();
			// 省市区数据
			this.getProArae();
		},
		methods: {
			// 获取社区列表（省市区选中）
			getProArae() {
				var self = this;
				API.areas(1, 100, 0).then(res => {
					self.cascaderData = res.data;
				})
			},
			// 获取地址
			areaProChange(val) {
				var self = this;
				self.pro_city_area_id = val[3];
				console.log(self.pro_city_area_id)
				self.loading = true;
				API.addresses(1, self.size, '', self.pro_city_area_id, self.name).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.total;
					self.$message.success('搜索成功!');
				}).catch(err => {
					self.loading = false;
				})
			},
			// 搜索
			search() {
				var self = this;
				self.loading = true;
				API.addresses(1, self.size, '', self.pro_city_area_id, self.name).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.total;
					self.$message.success('搜索成功!');
				}).catch(err => {
					self.loading = false;
				})
			},
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
				API.addresses(1, 20).then(res => {
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
				API.policeStations(1, 1000).then(res => {
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
					if (self.form.stations.length == self.stationList.length) {
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
			
			// 重新筛选
			resetSelect() {
				window.location.reload();
			},

			// 分页
			currentChange(val) {
				var self = this;
				self.loading = true;
				self.current = val;
				API.addresses(val, self.size, '', self.pro_city_area_id, self.name).then(res => {
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
				API.addresses(self.current, val, '', self.pro_city_area_id, self.name).then(res => {
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
