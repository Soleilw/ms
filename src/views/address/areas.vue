<template>
	<div>
		<div class="handle-box">
			<div class="btn">
				<el-button type="primary" @click="addArea">添加地区</el-button>
			</div>
		</div>

		<el-dialog title="添加地区" :visible.sync="dialogArea" :close-on-click-modal="false" width="80%">
			<div class="box">
				<el-form :model="form" label-width="120px">
					<el-form-item label="地区名称">
						<el-input v-model="form.title" placeholder="请输入地区名称"></el-input>
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
					</el-form-item>
					<el-form-item label="是否社区">
						<el-radio-group v-model="form.is_community">
							<el-radio :label="1">是</el-radio>
							<el-radio :label="2">否</el-radio>
						</el-radio-group>
					</el-form-item>

					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="newArea">提交</el-button>
						</el-form-item>
					</div>
				</el-form>
			</div>
		</el-dialog>

		<el-table :data="tableDate" border :header-cell-style="{background:'#f0f0f0', color: '#2a9f93'}" max-height="620">
			<el-table-column prop="id" label="ID"></el-table-column>
			<el-table-column prop="title" label="名称"></el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<div class="block">
			<el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-sizes="[10, 20, 50, 100, 150, 200, 250, 300]"
			 :page-size="pageSize" layout="sizes, prev, pager, next, jumper" @size-change="handleSizeChange" :total="totalPage">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	import API from '@/api/index.js'

	export default {
		data() {
			return {
				dialogArea: false,
				projectList: [],
				typeList: [],
				form: {
					title: '',
					parent_id: '',
					is_community: ''
				},

				proList: [], // 省级列表
				pro_id: '',
				cityList: [], // 市级列表
				city_id: '',
				communityList: [], // 区级列表
				community_id: '',
				areaList: [], //  社区列表
				areas_id: '',

				tableDate: [],
				currentPage: 1,
				pageSize: 10,
				totalPage: 0,
				showMap: '' // 地图显示
			}
		},
		mounted() {
			this.getPro();
		},
		methods: {
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
			addArea() {
				var self = this;
				self.dialogArea = true;
				self.pro_id = '';
				self.city_id = '';
				self.community_id = '';
				self.form = {
					title: '',
					parent_id: '',
					is_community: 1
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
				// this.form.address = mapData.poiname;
				this.showMap = false;
			},
			newArea() {
				var self = this;
				API.area(self.form).then(res => {
					self.dialogArea = false;
					self.$message.success("提交成功");
					self.getPro();
					self.currentPage = 1
					self.form = {}
				})
			},
			// 操作
			handleEdit(index, row) {

			},
			handleDel() {},


			// 获取社区列表（省市区选中）
			getPro() {
				var self = this;
				API.areas(self.currentPage, 100).then(res => {
					self.proList = res.data;
					self.tableDate = res.data;
				})
			},
			proChange(val) {
				this.getCity(val)
				this.form.parent_id = val;
			},
			getCity(val) {
				var self = this;
				API.areas(self.currentPage, 100, val).then(res => {
					self.cityList = res.data;
				})
			},
			cityChange(val) {
				this.getAreas(val)
				this.form.parent_id = val;
			},

			getAreas(val) {
				var self = this;
				API.areas(self.currentPage, 100, val).then(res => {
					self.areaList = res.data;
				})
			},

			areasChange(val) {
				this.getCommunity(val)
				this.form.parent_id = val;
			},


			getCommunity(val) {
				var self = this;
				API.areas(self.currentPage, 100, val).then(res => {
					self.communityList = res.data;
				})
			},

			communityChange(val) {
				console.log(val)
				this.form.parent_id = val;
			},

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
