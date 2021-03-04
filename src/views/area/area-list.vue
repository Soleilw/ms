<template>
	<div v-loading="loading" element-loading-text="获取数据中">
		<div class="handle-box">
			<div class="btn">
				<el-button type="primary" size="medium" @click="addPoliceArea">添加公安辖区</el-button>
			</div>
		</div>

		<el-dialog title="添加公安辖区" :visible.sync="dialogPoliceArea" width="50%">
			<div class="box">
				<el-form :model="form" label-width="80px">
					<!-- <el-form-item label="辖区名字">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="newPoliceArea">提交</el-button>
						</el-form-item>
					</div> -->
					<el-form-item label="辖区名称">
						<el-input v-model="form.name" placeholder="请输入地区名称"></el-input>
						<div v-show="hasCurrentArea">当前辖区属于：{{currentArea}}</div>
					</el-form-item>
					<el-form-item label="选择辖区">
						<el-select v-model="pro_id" placeholder="请选择辖区" @change="proChange" style="margin-right: 10px;">
							<el-option v-for="item in proList" :key="item.id" :label="item.name" :value="item.id">
							</el-option>
						</el-select>
						<div v-if="cityList.length > 0">
							<el-select v-model="city_id" placeholder="请选择辖区" @change="cityChange" style="margin-right: 10px;">
								<el-option v-for="item in cityList" :key="item.id" :label="item.name" :value="item.id">
								</el-option>
							</el-select>
						</div>
						<div v-if="areaList.length > 0">
							<el-select v-model="areas_id" placeholder="请选择辖区" @change="areasChange" style="margin-right: 10px;">
								<el-option v-for="item in areaList" :key="item.id" :label="item.name" :value="item.id">
								</el-option>
							</el-select>
						</div>
					</el-form-item>
					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="newPoliceArea">提交</el-button>
						</el-form-item>
					</div>
				</el-form>
			</div>
		</el-dialog>

		<el-table :data="tableData" stripe border :header-cell-style="{background:'#f0f0f0', color: '#003366'}" max-height="620">
			<el-table-column prop="id" label="ID"></el-table-column>
			<el-table-column prop="name" label="名称"></el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button type="text" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-popconfirm title="是否要删除该条数据" @confirm="handleDel(scope.$index, scope.row)" style="margin-left: 10px;"
					 cancelButtonType="primary">
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

	export default {
		name: 'gradems',
		data() {
			return {
				loading: true,
				dialogPoliceArea: false,
				form: {
					name: '',
					parent_id: '',
				},

				proList: [],
				pro_id: '',
				cityList: [],
				city_id: '',
				areaList: [],
				areas_id: '',

				tableData: [],
				currentArea: '', // 当前辖区属于
				hasCurrentArea: false,
				// 分页
				current: 1, // 当前页
				size: 10, // 每页出现几条
				total: 0 // 总页数
			}
		},
		mounted() {
			this.getPoliceStation();
			// 获取parent_id
			this.getFather();
		},
		methods: {
			getPoliceStation() {
				var self = this;
				API.policeStations(self.current).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.total;
				}).catch(err => {
					this.loading = false;
				})
			},


			// 添加新的AIP
			addPoliceArea() {
				var self = this;
				self.hasCurrentArea = false;
				self.dialogPoliceArea = true;
				self.pro_id = '';
				self.city_id = '';
				self.areas_id = '';
				self.proList = [];
				self.cityList = [];
				self.areaList = [];
				self.form = {
					name: '',
					parent_id: 0,
				}
				// 获取parent_id
				this.getFather();
			},

			newPoliceArea() {
				var self = this;
				API.policeStation(self.form).then(res => {
					self.dialogPoliceArea = false;
					self.$message.success("提交成功");
					self.getPoliceStation();
					self.current = 1;
					self.form = {};
				}).catch(err => {})
			},
			// 操作
			handleDel(index, row) {
				var self = this;
				console.log(row)
				var id = row.id
				API.delPoliceStation(id).then(res => {
					self.$message.success('删除成功');
					self.getPoliceStation();
					self.current = 1;
				}).catch(err => {
					self.loading = false;
				})
			},

			// 编辑
			handleEdit(index, row) {
				var self = this;
				self.pro_id = '';
				self.city_id = '';
				self.areas_id = '';
				self.hasCurrentArea = true;
				var edit_id = row.id;
				API.onePoliceStation(edit_id).then(res => {
					self.dialogPoliceArea = true;
					self.form.name = res.name;
					self.form.id = edit_id;
					self.form.parent_id = res.parent_id;
					if(res.parent) {
						self.currentArea = res.parent.name;
					} else {
						self.currentArea = '无';
					}
					this.getFather();
				}).catch(err => {
					self.loading = false;
				})
			},


			// 获取辖区父级列表
			getFather() {
				var self = this;
				API.getParentPoliceStations(1, 100000, 0).then(res => {
					self.proList = res.data;
				}).catch(err => {
					this.loading = false;
				})
			},
			proChange(val) {
				this.getCity(val)
				this.form.parent_id = val;
			},
			getCity(val) {
				var self = this;
				API.getParentPoliceStations(1, 100000, val).then(res => {
					self.cityList = res.data;
				})
			},
			cityChange(val) {
				this.getAreas(val)
				this.form.parent_id = val;
			},

			getAreas(val) {
				var self = this;
				API.getParentPoliceStations(1, 100000, val).then(res => {
					self.areaList = res.data;
				})
			},

			areasChange(val) {
				this.form.parent_id = val;
			},



			// 分页
			currentChange(val) {
				var self = this;
				self.loading = true;
				self.current = val;
				API.policeStations(val, self.size).then(res => {
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
				API.policeStations(self.current, val).then(res => {
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
