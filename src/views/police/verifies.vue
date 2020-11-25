<template>
	<div v-loading="loading" element-loading-text="加载中">
		<div class="handle-box">
			<div class="btn">
				<div class="tip">根据检索状态筛选：</div>
				<el-select v-model="searchState" placeholder="请选择检索状态" @change="changeSearch">
					<el-option v-for="item in searchList" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
			</div>
			<div class="btn">
				<div class="tip">搜索名称或身份证号：</div>
				<div>
					<el-input placeholder="输入姓名或身份证号" v-model="searchName" class="input-with-select" @keyup.enter.native="search(searchName)">
						<el-button slot="append" icon="el-icon-search" @click="search(searchName)"></el-button>
					</el-input>
				</div>
			</div>
		</div>

		<el-table :data="tableData" border :header-cell-style="{background:'#f0f0f0', color: '#003366'}" max-height="620">
			<el-table-column prop="id" label="ID"></el-table-column>
			<el-table-column prop="name" label="姓名"></el-table-column>
			<el-table-column prop="number" label="身份证号"></el-table-column>
			<el-table-column prop="remark" label="备注" width="400px"></el-table-column>
			<el-table-column prop="number" label="工号"></el-table-column>
			<el-table-column prop="state" label="检索状态">
				<template slot-scope="scope">
					<span v-if="scope.row.state == 0">不检索</span>
					<span v-if="scope.row.state == 1">检索通过</span>
					<span v-if="scope.row.state == 2">检索不通过</span>
				</template>
			</el-table-column>
			<el-table-column prop="image" label="人脸照片">
				<template slot-scope="scope">
					<el-popover placement="top-start" title="" trigger="click">
						<img :src="scope.row.image" style="max-width:800px; max-height:800px;" />
						<img slot="reference" :src="scope.row.image" style="max-width:150px;max-height:80px;">
					</el-popover>
				</template>
			</el-table-column>
		</el-table>


		<div class="block">
			<el-pagination @current-change="handleCurrentChange" :current-page.sync="current" :page-sizes="[10, 20, 50, 100, 150, 200, 250, 300]"
			 :page-size="size" layout="sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange">
			</el-pagination>
		</div>

	</div>
</template>

<script>
	import API from '@/api//index.js'

	export default {
		data() {
			return {
				loading: true,
				dialogDepartment: false,
				searchName: '', // 搜索
				searchState: '',
				searchList: [{
						value: 0,
						label: "全部",
					},
					{
						value: 1,
						label: "检索通过",
					},
					{
						value: 2,
						label: "检索不通过",
					}
				],
				tableData: [{}],

				// 分页
				current: 1,
				size: 10,
				total: 0,

			}
		},
		mounted() {
			this.getPersonVerifies();
		},
		methods: {
			// 获取部门列表
			getPersonVerifies() {
				var self = this;
				API.personVerifies(1, 10).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
			},
			// 搜索
			search(val) {
				var self = this;
				self.loading = true;
				API.personVerifies(1, 10, val, self.searchState).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
			},
			changeSearch(val) {
				var self = this;
				self.loading = true;
				API.personVerifies(1, 10, self.searchName, val).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
			},

			// 分页
			handleCurrentChange(val) {
				var self = this;
				self.current = val;
				self.loading = true;
				API.personVerifies(val, self.size, self.searchName, self.searchState).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
			},
			// 每页多少条
			handleSizeChange(val) {
				var self = this;
				self.size = val;
				self.loading = true;
				API.personVerifies(self.current, val, self.searchName, self.searchState).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
			}
		}
	}
</script>

<style scoped>
</style>
