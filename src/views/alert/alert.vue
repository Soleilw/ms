<template>
	<div v-loading="loading" element-loading-text="获取数据中">
		<div class="content-box">
			<div class="content-box-left" style=" width: 25%; border-right: 1px #ccc solid;">
				<div class="btn">
					<div class="tip">
						根据姓名筛选：
					</div>
				</div>
				<div class="btn">
					<div>
						<el-input placeholder="输入姓名" v-model="name" class="input-with-select" @keyup.enter.native="search(name)">
							<el-button slot="append" icon="el-icon-search" @click="search(name)"></el-button>
						</el-input>
					</div>
				</div>
				<div class="btn">
					<div class="tip">
						根据处理状态筛选：
					</div>
				</div>
				<div class="btn">
					<el-select v-model="state" placeholder="请选择处理状态" filterable @change="stateChange">
						<el-option v-for="(item, index) in stateList" :key="index" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
				<div class="btn">
					<div class="tip">
						根据告警分类和时间筛选：
					</div>
				</div>
				<div class="btn">
					<el-select v-model="alert_type" placeholder="请选择可疑分类" @change="alertTypeChange">
						<el-option v-for="(name, value) in dangerTypeList" :key="name" :label="name" :value="value"></el-option>
					</el-select>
				</div>
				<div class="btn">
					<el-date-picker v-model="date" @change="dateChange" :value-format="valueFormatTime" type="datetimerange"
					 range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
					</el-date-picker>
				</div>
				<div class="btn">
					<el-button type="primary" @click="resetSelect">重新筛选</el-button>
				</div>
			</div>

			<div class="content-box-right">
				<el-table :data="tableData" stripe border :header-cell-style="{background:'#f0f0f0', color: '#003366'}" max-height="680"
				 ref="multipleTable" @selection-change="handleSelectionChange" :row-key="(row) => row.id">
					<el-table-column type="selection" width="55" :reserve-selection="true"></el-table-column>
					<el-table-column prop="id" label="ID"></el-table-column>
					<el-table-column prop="danger.name" label="姓名" width="100px"></el-table-column>
					<el-table-column prop="danger.number" label="身份证号" width="200px"></el-table-column>
					<el-table-column prop="danger.href" label="照片">
						<template slot-scope="scope">
							<div v-if="scope.row.danger" class="leftaa">
								<el-popover placement="left" title="" trigger="click">
									<img :src="scope.row.danger.href" style="max-width:800px;max-height:800px;" />
									<img slot="reference" :src="scope.row.danger.href" style="max-width:180px;max-height:80px;">
								</el-popover>
							</div>
							<div v-else>
								<span>--暂无图片--</span>
							</div>
						</template>
					</el-table-column>
					<el-table-column prop="address.address" label="所出现地址" width="300px"></el-table-column>
					<el-table-column prop="alert_type" label="告警分类"></el-table-column>
					<el-table-column prop="danger_type" label="危险类型"></el-table-column>
					<el-table-column prop="state" label="处理状态">
						<template slot-scope="scope">
							<span v-if="scope.row.state == 1">未处理</span>
							<span v-if="scope.row.state == 2">已处理</span>
						</template>
					</el-table-column>
					<el-table-column label="操作" width="200px" fixed="right">
						<template slot-scope="scope">
							<el-button type="text" @click="handleProcess(scope.$index, scope.row)">立即处理</el-button>
							<el-button type="text" @click="handleDetail(scope.$index, scope.row)">查看详情</el-button>
						</template>
					</el-table-column>
				</el-table>

				<div class="btn">
					<el-button type="primary" @click="batchOpen">批量处理</el-button>
				</div>

				<div class="block">
					<el-pagination @current-change="handleCurrentChange" :current-page.sync="current" :page-sizes="[10, 20, 50, 100, 150, 200, 250, 300]"
					 :page-size="size" layout="sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange">
					</el-pagination>
				</div>
			</div>

		</div>


		<el-dialog :visible.sync="dialogProcess" title="告警处理" :close-on-click-modal="false">
			<div class="box">
				<el-form :model="processForm" label-width="100px">
					<el-form-item label="处理人">
						<el-input v-model="processForm.name" disabled></el-input>
					</el-form-item>
					<el-form-item label="备注">
						<el-input type="textarea" v-model="processForm.remark" placeholder="非必填"></el-input>
					</el-form-item>
					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="processed">提交</el-button>
						</el-form-item>
					</div>
				</el-form>
			</div>
		</el-dialog>

		<!-- 查看详情 -->
		<el-dialog :visible.sync="dialogDetail" title="查看详情" :close-on-click-modal="false" width="80%">
			<div class="box">
				<el-table :data="DetailForm" border :header-cell-style="{background:'#f0f0f0', color: '#003366'}" max-height="620">
					<el-table-column prop="id" label="ID"></el-table-column>
					<el-table-column prop="danger.name" label="姓名"></el-table-column>
					<el-table-column prop="log.score" label="相似度"></el-table-column>
					<el-table-column prop="danger.href" label="人脸库照片">
						<template slot-scope="scope">
							<div v-if="scope.row.danger.href" class="leftaa">
								<el-image fit="fill" :src="scope.row.danger.href" :preview-src-list="hrefList" @load="compareImage(scope.row.danger.href)"
								 style="width: 100%; height: 100%"></el-image>
								<!-- <el-popover placement="top-start" title="" trigger="click">
									<img :src="scope.row.danger.href" style="max-width:800px;max-height:800px;" />
									<img slot="reference" :src="scope.row.danger.href" style="max-width:180px;max-height:80px;">
								</el-popover> -->
							</div>
							<div v-else>
								<span>--暂无图片--</span>
							</div>
						</template>
					</el-table-column>
					<el-table-column prop="log.image" label="抓拍原图">
						<template slot-scope="scope">
							<div v-if="scope.row.log.image" class="leftbb">
								<!-- 	<el-popover placement="top-start" title="" trigger="click">
									<img :src="scope.row.log.image" style="max-width:800px;max-height:800px;" />
									<img slot="reference" :src="scope.row.log.image" style="max-width:180px;max-height:80px;">
								</el-popover> -->
								<el-image fit="fill" :src="scope.row.log.image" :preview-src-list="imageList" @load="compareImage2(scope.row.log.image)"
								style="width: 100%; height: 100%"></el-image>
							</div>
							<div v-else>
								<span>--暂无图片--</span>
							</div>
						</template>
					</el-table-column>

					<el-table-column prop="log.catch_faces[0].face_img" label="抓拍照片">
						<template slot-scope="scope">
							<div v-if="scope.row.log.catch_faces.length > 0" class="leftbb">
								<el-image fit="fill" :src="scope.row.log.catch_faces[0].face_img" :preview-src-list="catchFacesList" @load="compareImage3(scope.row.log.catch_faces[0].face_img)"
								 style="width: 100%; height: 100%"></el-image>
								<!-- <el-popover placement="top-start" title="" trigger="click">
									<img :src="scope.row.log.catch_faces[0].face_img" style="max-width:800px;max-height:800px;" />
									<img slot="reference" :src="scope.row.log.catch_faces[0].face_img" style="max-width:180px;max-height:80px;">
								</el-popover> -->
							</div>
							<div v-else>
								<span>--暂无图片--</span>
							</div>
						</template>
					</el-table-column>
					<el-table-column prop="log.timestamp" label="抓拍时间">
					</el-table-column>
				</el-table>
			</div>
		</el-dialog>



	</div>
</template>

<script>
	import API from '@/api//index.js'
	import DATE from '@/utils/date.js'

	export default {
		data() {
			return {
				loading: true,
				name: '', // 搜索
				state: 1,
				stateList: [{
						label: '全部',
						value: 0
					},
					{
						label: '未处理',
						value: 1
					},
					{
						label: '已处理',
						value: 2
					}
				],
				tableData: [],

				dangerTypeList: [], // 告警分类列表
				alert_type: '',
				date: '', //时间选中
				start_date: '',
				end_date: '',
				valueFormatTime: 'yyyy-MM-dd HH:mm:ss',

				dangers: [],

				dialogProcess: false,
				processForm: {
					name: localStorage.getItem('username'),
					// state: false,
					remark: '',
				},
				id: '',
				multipleSelection: [], // 全选中的值

				dialogDetail: false, // 查看详情
				DetailForm: [],


				hrefList: [],
				imageList: [],
				catchFacesList: [],

				// 分页
				current: 1,
				size: 10,
				total: 0,

			}
		},
		mounted() {
			this.getAlerts();
			this.getAlertType();
		},
		methods: {
			getAlerts() {
				var self = this;
				API.alert(self.current, 10, self.state).then(res => {
					self.$refs.multipleTable.clearSelection();
					self.tableData = res.data;
					self.total = res.total;
					self.loading = false;
				}).catch(err => {
					self.loading = false;
				})
			},
			// 获取告警分类
			getAlertType() {
				var self = this;
				self.loading = true;
				API.dangerTypes().then(res => {
					self.dangerTypeList = res.alert_type;
					self.loading = false;
				}).catch(err => {
					self.loading = false;
				})
			},
			alertTypeChange(val) {
				var self = this;
				self.loading = true;
				API.alert(1, 10, self.state, self.name, self.dangers, val, self.start_date, self.end_date).then(res => {
					self.tableData = res.data;
					self.total = res.total;
					self.loading = false;
				}).catch(err => {
					self.loading = false;
				})
			},

			// 时间选中
			dateChange(val) {
				var self = this;
				self.loading = true;
				self.start_date = val[0];
				self.end_date = val[1];
				API.alert(1, 10, self.state, self.name, self.dangers, self.alert_type, val[0], val[1]).then(res => {
					self.tableData = res.data;
					self.total = res.total;
					self.loading = false;
				}).catch(err => {
					self.loading = false;
				})
			},

			stateChange(val) {
				var self = this;
				self.loading = true;
				API.alert(1, 10, val, self.name, self.dangers, self.alert_type, self.start_date, self.end_date).then(res => {
					self.tableData = res.data;
					self.total = res.total;
					self.loading = false;
				}).catch(err => {
					self.loading = false;
				})
			},

			// 搜索
			search() {
				var self = this;
				self.loading = true;
				API.alert(1, 10, self.state, self.name, self.dangers, self.alert_type, self.start_date, self.end_date).then(res => {
					self.tableData = res.data;
					self.total = res.total;
					self.loading = false;
				}).catch(err => {
					self.loading = false;
				})
			},
			// 处理告警
			handleProcess(index, row) {
				this.dialogProcess = true;
				console.log(row)
				this.id = row.id;
				this.processForm = {
					name: localStorage.getItem('username'),
					// state: row.state,
					remark: ''
				}
			},

			// 改变处理状态
			stateRadio(val) {
				console.log(val)
			},

			// 批量处理
			handleSelectionChange(val) {
				this.multipleSelection = val;
				console.log(123, this.multipleSelection)
			},
			// 批量处理
			batchOpen() {
				if (this.multipleSelection.length > 0) {
					this.dialogProcess = true;
				} else {
					this.$message.warning("请选择要处理的数据");
				}
			},

			// 提交处理
			processed() {
				let self = this,
					results = [];
				if (this.multipleSelection.length > 0) {
					this.multipleSelection.forEach(item => {
						results.push({
							id: item.id,
							remark: this.processForm.remark
						})
					})
					API.handleAlerts(results).then(res => {
						self.$message.success('提交成功！');
						self.dialogProcess = false;
						self.getAlerts();
					})
				} else {
					results.push({
						id: self.id,
						remark: this.processForm.remark
					});
					API.handleAlerts(results).then(res => {
						self.$message.success('提交成功！');
						self.dialogProcess = false;
						self.getAlerts();
					})
				}

			},




			// 查看详情
			handleDetail(index, row) {
				console.log([row])
				this.DetailForm = [row];
				this.DetailForm.forEach(item => {
					item.log.timestamp = DATE.formatTime(item.log.timestamp, 'Y-M-D h:m:s')
				})
				this.dialogDetail = true;
			},

			// 对比图片
			compareImage(href) {
				var self = this;
				self.hrefList.push(href)
			},

			compareImage2(image) {
				var self = this;
				self.imageList.push(image)
			},

			compareImage3(val) {
				var self = this;
				self.catchFacesList.push(val)
			},
			
			// 重新筛选
			resetSelect() {
				window.location.reload();
			},
			// 分页
			handleCurrentChange(val) {
				var self = this;
				self.loading = true;
				self.current = val;
				API.alert(val, self.size, self.state, self.name, self.dangers, self.alert_type, self.start_date, self.end_date).then(
					res => {
						self.tableData = res.data;
						self.total = res.total;
						self.loading = false;
					}).catch(err => {
					self.loading = false;
				})
			},
			// 每页多少条
			handleSizeChange(val) {
				var self = this;
				self.loading = true;
				self.size = val;
				API.alert(self.current, val, self.state, self.name, self.dangers, self.alert_type, self.start_date, self.end_date).then(
					res => {
						self.tableData = res.data;
						self.total = res.total;
						self.loading = false;
					}).catch(err => {
					self.loading = false;
				})
			},
		}
	}
</script>

<style scoped>
	.permission {
		display: flex;
		flex-wrap: wrap;
	}

	.permission-item {
		margin: 10px;
		padding: 0 10px;
	}
</style>
