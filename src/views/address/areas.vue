<template>
	<div v-loading="loading" element-loading-text="获取数据中">
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

		<el-table :data="tableData" border :header-cell-style="{background:'#f0f0f0', color: '#2a9f93'}" max-height="620">
			<el-table-column prop="id" label="ID"></el-table-column>
			<el-table-column prop="title" label="名称"></el-table-column>
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
			 :page-size="size" layout="sizes, prev, pager, next, jumper" @size-change="sizeChange" :total="total" @prev-click="prevChange" @next-click="nextChange">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	import API from '@/api/index.js'

	export default {
		data() {
			return {
				loading: true,
				dialogArea: false,
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

				tableData: [],
				current: 1,
				size: 10,
				total: 0,
			}
		},
		mounted() {
			this.getProvice();
		},
		methods: {
			// 获取社区列表（省市区选中）
			getProvice() {
				var self = this;
				API.areas(self.current, 10).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.count;
				}).catch(err => {
					self.loading = false;
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
				self.getPro();
			},
			newArea() {
				var self = this;
				API.area(self.form).then(res => {
					self.dialogArea = false;
					self.$message.success("提交成功");
					self.getProvice();
					self.current = 1
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
				API.areas(1, 100, 0).then(res => {
					self.proList = res.data;
				})
			},
			proChange(val) {
				this.getCity(val)
				this.form.parent_id = val;
			},
			getCity(val) {
				var self = this;
				API.areas(1, 100, val).then(res => {
					self.cityList = res.data;
				})
			},
			cityChange(val) {
				this.getAreas(val)
				this.form.parent_id = val;
			},

			getAreas(val) {
				var self = this;
				API.areas(1, 100, val).then(res => {
					self.areaList = res.data;
				})
			},

			areasChange(val) {
				this.getCommunity(val)
				this.form.parent_id = val;
			},


			getCommunity(val) {
				var self = this;
				API.areas(1, 100, val).then(res => {
					self.communityList = res.data;
				})
			},

			communityChange(val) {
				this.form.parent_id = val;
			},

			// 分页
			currentChange(val) {
				var self = this;
				self.loading = true;
				self.current = val;
				API.areas(val, self.size).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.count;
				}).catch(err => {
					self.loading = false;
				})
			},
			// 每页显示条数
			sizeChange(val) {
				var self = this;
				self.loading = true;
				self.size = val;
				API.areas(self.current, val).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.count;
				}).catch(err => {
					self.loading = false;
				})
			},
			// 上一页
			prevChange(val) {
				var self = this;
				self.loading = true;
				self.current = val;
				API.areas(val, self.size).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.count;
				}).catch(err => {
					self.loading = false;
				})
			},
			// 下一页
			nextChange(val) {
				var self = this;
				self.loading = true;
				self.current = val;
				API.areas(val, self.size).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.count;
				}).catch(err => {
					self.loading = false;
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
