<template>
	<div v-loading="loading" element-loading-text="获取数据中">
		<div class="content-box">
			<div class="content-box-left" style=" width: 15%;">
				<div class="btn">
					<div class="tip">根据姓名筛选：</div>
				</div>
				<div class="btn">
					<el-input placeholder="请输入姓名" v-model="name" class="input-with-select" @keyup.enter.native="search(name)">
						<el-button slot="append" icon="el-icon-search" @click="search(name)"></el-button>
					</el-input>
				</div>
				<div class="btn">
					<div class="tip">根据地址筛选：</div>
				</div>
				<div class="btn">
					<el-input placeholder="请填写地址" autosize type="textarea" v-model="address" @keyup.enter.native="addressSearch(address)">
					</el-input>
				</div>
				<div class="btn">
					<el-button @click="resetSelect" type="primary">重新筛选</el-button>
				</div>
			</div>

			<div class="content-box-right" style=" width: 84%;">
				<el-table :data="tableData" stripe border :header-cell-style="{background:'#f0f0f0', color: '#003366'}" max-height="700">
					<el-table-column prop="face_id" label="人脸ID" width="200px"></el-table-column>
					<el-table-column prop="group" label="人脸组" width="200px"></el-table-column>
					<el-table-column prop="face.name" label="姓名" width="100px"></el-table-column>
					<el-table-column prop="address.address" label="地址" width="200px"></el-table-column>
					<el-table-column prop="face.href" label="人脸图片" width="200px">
						<template slot-scope="scope">
							<el-popover placement="top-start" title="" trigger="click">
								<img :src="scope.row.face.href" style="max-width:800px;max-height:800px;" />
								<img slot="reference" :src="scope.row.face.href" style="max-width:180px;max-height:80px;">
							</el-popover>
						</template>
					</el-table-column>
					<el-table-column prop="result" label="结果" width="300px"></el-table-column>
					<el-table-column prop="type" label="类型" width="200px"></el-table-column>
					<el-table-column prop="offline" label="在线状态">
						<template slot-scope="scope">
							<span v-if="scope.row.offline == 1">离线</span>
							<span v-if="scope.row.offline == 0">在线</span>
						</template>
					</el-table-column>
					<el-table-column prop="created_at" label="创建时间" width="200px"></el-table-column>
					<el-table-column prop="updated_at" label="完成时间" width="200px"></el-table-column>
					<el-table-column label="操作" width="200px" fixed="right">
						<template slot-scope="scope">
							<el-popover placement="right" width="800" trigger="click">
								<el-row v-for="(item, index) in detailList" :key="index" style="padding: 10px;">
									<div>设备号：{{item.device_uuid}}</div>
									<div>设备名：{{item.device.remark}}</div>
									<div v-if="item.state == 1">状态：待下发</div>
									<div v-if="item.state == 2">状态：待执行</div>
									<div v-if="item.state == 3">状态：已完成</div>
									<div v-if="item.state == 4">状态：失败</div>
								</el-row>
								<el-button type="text" slot="reference" @click="showDetail(scope.$index, scope.row)" style="margin-right: 10px;">查看详情</el-button>
							</el-popover>
							<el-button type="text" @click="againPush(scope.$index, scope.row)">重新推送</el-button>
						</template>
					</el-table-column>
				</el-table>

				<div class="block">
					<el-pagination @current-change="currentChange" :current-page.sync="current" :page-sizes="[10, 20, 50, 100, 300, 500, 700, 900]"
					 :page-size="size" layout="sizes, prev, pager, next, jumper" @size-change="sizeChange" :total="total">
					</el-pagination>
				</div>
			</div>
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
				name: '',
				address: '', // 搜索地址
				tableData: [],
				detailList: [],
				current: 1,
				size: 10,
				total: 0
			}
		},
		mounted() {
			this.getPushRecords();
		},
		methods: {
			getPushRecords() {
				var self = this;
				API.pushRecords(self.current).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
			},
			// 搜索
			search() {
				var self = this;
				self.loading = true;
				API.pushRecords(1, 10, self.name).then(res => {
					console.log(res)
					self.loading = false;
					self.tableData = res.data;
					self.total = res.total;
					self.$message.success('搜索成功!');
				}).catch(err => {
					self.loading = false;
				})
			},
			// 搜索地址
			addressSearch(val) {
				var self = this;
				self.loading = true;
				API.pushRecords(1, 10, self.name, val).then(res => {
					console.log(res)
					self.loading = false;
					self.tableData = res.data;
					self.total = res.total;
					self.$message.success('搜索成功!');
				}).catch(err => {
					self.loading = false;
				})
			},
			// 查看详情
			showDetail(index, row) {
				var self = this;
				API.pushRecordCommands(row.id).then(res => {
					self.detailList = res
				})
			},
			againPush(index, row) {
				var self = this;
				let again_id = {
					id: row.id
				}
				API.againPush(again_id).then(res => {
					self.$message.success("推送成功");
					self.getPushRecords();
				})
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
				API.pushRecords(val, self.size, self.name, self.address).then(res => {
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
				API.pushRecords(self.current, val, self.name, self.address).then(res => {
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
	.upload-btn {
		margin-top: 10px;
	}
</style>
