<template>
	<div v-loading="loading" element-loading-text="加载中">
		<div class="content-box">
			<div class="content-box-left">
				<div class="btn">
					<div class="tip">根据设备号筛选：</div>
				</div>
				<div class="btn">
					<el-input placeholder="输入设备号" v-model="uuid" class="input-with-select" @keyup.enter.native="search(uuid)">
						<el-button slot="append" icon="el-icon-search" @click="search(uuid)"></el-button>
					</el-input>
				</div>
				<div class="btn">
					<div class="tip">根据姓名或身份证筛选：</div>
				</div>
				<div class="btn">
					<el-input placeholder="输入姓名" v-model="name" class="input-with-select" @keyup.enter.native="search(name)">
						<el-button slot="append" icon="el-icon-search" @click="search(name)"></el-button>
					</el-input>
				</div>
				<div class="btn">
					<div class="tip">根据省市区筛选地址设备号：</div>
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
				<div class="btn">
					<el-select v-model="address_uuid" placeholder="请选择设备号" filterable @change="addressUUIDChange">
						<el-option v-for="(item, index) in address_uuid_list" :key="index" :label="item.uuid + '/' + item.remark" :value="item.uuid">
						</el-option>
					</el-select>
				</div>
				<div class="btn">
					<el-button type="primary" @click="resetSelect">重新筛选</el-button>
				</div>
			</div>

			<div class="content-box-right">
				<el-table :data="faceLogsTable" stripe border :header-cell-style="{background:'#f0f0f0', color: '#003366'}" max-height="700">
					<el-table-column prop="id" label="ID" width="100px"></el-table-column>
					<el-table-column prop="device_uuid" label="设备ID" width="300px"></el-table-column>
					<el-table-column prop="device.remark" label="备注" width="200px"></el-table-column>
					<el-table-column prop="face.name" label="名称" width="150px"></el-table-column>
					<el-table-column prop="time" label="时间" width="200px"></el-table-column>
					<el-table-column prop="temp" label="温度" width="100px"></el-table-column>
					<el-table-column prop="face_id" label="人脸ID" width="200px"></el-table-column>
					<el-table-column prop="image" label="人脸图片" width="200px">
						<template slot-scope="scope">
							<el-popover placement="top-start" title="" trigger="click">
								<img :src="scope.row.image" style="max-width:800px; max-height:800px;" />
								<img slot="reference" :src="scope.row.image" style="max-width:180px;max-height:80px;">
							</el-popover>
						</template>
					</el-table-column>
					<el-table-column label="操作" fixed="right" width="100px">
						<template slot-scope="scope">
							<el-button type="text" @click="handleCatchFace(scope.$index, scope.row)">查看人像</el-button>
						</template>
					</el-table-column>
				</el-table>

				<div class="block">
					<el-pagination @current-change="currentPage" :current-page.sync="current" :page-sizes="[10, 20, 50, 100, 150, 200, 250, 300]"
					 :page-size="size" layout="sizes, prev, pager, next, jumper" @size-change="sizePage" :total="total">
					</el-pagination>
				</div>
			</div>
		</div>

		<el-dialog title="查看人像" :visible.sync="dialogCatchFace" width="400px">
			<div class="box" style="display: flex; flex-wrap: wrap;">
				<div v-for="(item, index) in catchFaceList" :key="index">
					<img :src="item.face_img" style="max-width:200px; max-height:200px;margin-left: 20px;" />
				</div>
			</div>
		</el-dialog>
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

				dialogCatchFace: false, // 查看人像
				catchFaceList: [],
				// 分页
				current: 1, // 当前页
				size: 10, // 每页出现几条
				total: 0, // 总页数


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
				area_address_id: '',
				address_uuid: '',
				address_uuid_list: [], // 根据地址获取设备

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
				self.current = 1;
				self.loading = true;
				self.pro_city_area_id = val[3];
				API.deviceFaceLogs(1, self.size, self.uuid, self.name, self.pro_city_area_id, self.area_address_id).then(res => {
					self.loading = false;
					self.faceLogsTable = res.data;
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
				self.current = 1;
				self.loading = true;
				API.deviceFaceLogs(1, self.size, self.uuid, self.name, self.pro_city_area_id, val).then(res => {
					self.faceLogsTable = res.data;
					self.total = res.total;
					self.loading = false;
				}).catch(err => {
					self.loading = false;
				})
				self.getDeviceList(val);
			},
			// 设备号下拉
			getDeviceList(val) {
				var self = this;
				self.loading = true;
				self.current = 1;
				API.devices(1, self.size, '', '', '', self.area_address_id).then(res => {
					self.loading = false;
					self.address_uuid_list = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
			},

			addressUUIDChange(val) {
				var self = this;
				self.loading = true;
				self.current = 1;
				API.deviceFaceLogs(1, self.size, val, self.name, self.pro_city_area_id, self.area_address_id).then(res => {
					self.loading = false;
					self.faceLogsTable = res.data;
					self.total = res.total;
					self.$message.success('搜索成功！');
				}).catch(err => {
					self.loading = false;
				})
			},

			// 搜索
			search() {
				var self = this;
				self.loading = true;
				self.current = 1;
				API.deviceFaceLogs(1, self.size, self.uuid, self.name, self.pro_city_area_id, self.area_address_id).then(res => {
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

			// 查看人像
			handleCatchFace(index, row) {
				let self = this;
				API.catchFace(row.id).then(res => {
					self.catchFaceList = res
					if (self.catchFaceList.length == 0) {
						self.$message.info('暂无人像图片！');
					} else {
						self.dialogCatchFace = true;
					}
				})
			},
			
			// 重新筛选
			resetSelect() {
				window.location.reload();
			},

			// 分页
			currentPage(val) {
				var self = this;
				self.loading = true;
				self.current = val;
				API.deviceFaceLogs(val, self.size, self.uuid, self.name, self.pro_city_area_id, self.area_address_id).then(res => {
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
				API.deviceFaceLogs(self.current, val, self.uuid, self.name, self.pro_city_area_id, self.area_address_id).then(res => {
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
