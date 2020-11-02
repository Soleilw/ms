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
					<el-form-item label="辖区名字">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="newPoliceArea">提交</el-button>
						</el-form-item>
					</div>
				</el-form>
			</div>
		</el-dialog>

		<el-table :data="tableData" border :header-cell-style="{background:'#f0f0f0', color: '#003366'}" max-height="620">
			<el-table-column prop="id" label="ID"></el-table-column>
			<el-table-column prop="name" label="名称"></el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-popconfirm title="是否要删除该条数据" @onConfirm="handleDel(scope.$index, scope.row)" cancelButtonType="primary">
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
				},
				tableData: [],
				 form1: {
					 switch_title: '人脸开关',
					 version: '1.0.1',
					 switch_value: '2'
				 },
				// 分页
				current: 1, // 当前页
				size: 10, // 每页出现几条
				total: 0 // 总页数
			}
		},
		mounted() {
			this.getPoliceStation();
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
				self.dialogPoliceArea = true;
				self.form = {
					name: '',
				}
			},

			newPoliceArea() {
				var self = this;
				API.policeStation(self.form).then(res => {
					self.dialogPoliceArea = false;
					self.$message.success("提交成功");
					self.getPoliceStation();
					self.current = 1;
					self.form = {};
				}).catch(err => {
				})
			},
			// 操作
			handleDel(index, row) {
				var self = this;
				console.log(row)
				var id = row.id
				API.delAip(id).then(res => {
					self.$message.success('删除成功');
					self.getPoliceStation();
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
