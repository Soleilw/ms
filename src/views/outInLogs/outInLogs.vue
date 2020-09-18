<template>
	<div v-loading="loading" element-loading-text="加载中">
		<div class="handle-box">
			<div class="btn">
				<el-input placeholder="输入设备号" v-model="uuid" class="input-with-select" @keyup.enter.native="search(uuid)">
					<el-button slot="append" icon="el-icon-search" @click="search(uuid)"></el-button>
				</el-input>
			</div>
			<div class="btn">
				<el-input placeholder="输入姓名" v-model="name" class="input-with-select" @keyup.enter.native="search(name)">
					<el-button slot="append" icon="el-icon-search" @click="search(name)"></el-button>
				</el-input>
			</div>
			<div class="btn">
				<el-cascader v-model="pro_city_area" placeholder="请选择省市区" :options="cascaderData" @change="proChange" :props="props"></el-cascader>
			</div>
			<div class="btn">
				<el-select v-model="area_address_id" placeholder="请选择地址" filterable @change="areaAddressChange">
					<el-option v-for="(item, index) in area_address_List" :key="index" :label="item.address" :value="item.id">
					</el-option>
				</el-select>
			</div>
		</div>
		<el-table :data="faceLogsTable" border :header-cell-style="{background:'#f0f0f0', color: '#2a9f93'}" max-height="620">
			<el-table-column prop="id" label="ID"></el-table-column>
			<el-table-column prop="device_uuid" label="设备ID"></el-table-column>
			<el-table-column prop="face.name" label="名称"></el-table-column>
			<el-table-column prop="time" label="时间"></el-table-column>
			<el-table-column prop="temp" label="温度"></el-table-column>
			<el-table-column prop="face_id" label="人脸ID"></el-table-column>
			<el-table-column prop="image" label="人脸图片">
				<template slot-scope="scope">
					<el-popover placement="top-start" title="" trigger="click">
						<img :src="scope.row.image" style="max-width:800px; max-height:800px;" />
						<img slot="reference" :src="scope.row.image" style="max-width:180px;max-height:80px;">
					</el-popover>
				</template>
			</el-table-column>
		</el-table>
		<div class="block">
			<el-pagination @current-change="currentPage" :current-page.sync="current" :page-sizes="[10, 20, 50, 100, 150, 200, 250, 300]"
			 :page-size="size" layout="sizes, prev, pager, next, jumper" @size-change="sizePage" :total="total">
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
				uuid: '',
				name: '',
				faceLogsTable: [],
				// 分页
				current: 1, // 当前页
				size: 10, // 每页出现几条
				total: 0 ,// 总页数
				
				
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
				area_address_List: [], //选择省市区后获取地址列表
				area_address_id: ''
			}
		},
		mounted() {
			this.getLogs();
			this.getPro();
		},
		methods: {
			// 获取社区列表（省市区选中）
			getPro() {
				var self = this;
				API.areas(1, 100, 0).then(res => {
					self.cascaderData = res.data;
				})
			},
			// 获取地址
			proChange(val) {
				var self = this;
				self.pro_city_area_id = val[3];
				API.deviceFaceLogs(1, self.size, self.uuid, self.name, self.pro_city_area_id, self.area_address_id).then(res => {
					self.loading = false;
					self.tableDate = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
				API.addresses(1, 100, '', self.pro_city_area_id).then(res => {
					self.loading = false;
					self.area_address_List = res.data;
				}).catch(err => {
					self.loading = false;
				})
			},
			
			areaAddressChange(val) {
				var self = this;
				console.log(self.area_address_id)
				API.deviceFaceLogs(1, self.size, self.uuid, self.name, self.pro_city_area_id, val).then(res => {
					self.loading = false;
					self.tableDate = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
			},
			// 搜索
			search() {
				var self = this;
				self.loading = true;
				API.deviceFaceLogs(1, self.size, self.uuid, self.name, self.pro_city_area_id,self.area_address_id).then(res => {
					self.loading = false;
					self.faceLogsTable = res.data;
					self.total = res.total;
					self.$message.success('搜索成功！');
				}).catch(err => {
					self.loading = false;
				})
			},
			getLogs() {
				API.deviceFaceLogs(1, 10).then(res => {
					this.loading = false;
					this.faceLogsTable = res.data;
					this.total = res.total;
				}).catch(err => {
					this.loading = false;
				})
			},
			// 分页
			currentPage(val) {
				var self = this;
				self.loading = true;
				self.current = val;
				API.deviceFaceLogs(val, self.size, self.uuid, self.name, self.pro_city_area_id,self.area_address_id).then(res => {
					self.loading = false;
					self.faceLogsTable = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
			},
			// 每页显示条数
			sizePage(val) {
				var self = this;
				self.loading = true;
				self.size = val;
				API.deviceFaceLogs(self.current, val, self.uuid, self.name, self.pro_city_area_id,self.area_address_id).then(res => {
					self.loading = false;
					self.faceLogsTable = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
			},
		},
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

	.logcat {
		text-align: left;
		/* width: 300px; */
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.temp {
		width: 700px;
		height: 650px;
		font-size: 16px;
		padding: 10px;
	}
</style>
