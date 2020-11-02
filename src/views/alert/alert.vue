<template>
	<div>
		<div class="handle-box">
			<div class="btn">
				<div class="tip">
					根据姓名筛选：
				</div>
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
				<el-select v-model="state" placeholder="请选择处理状态" filterable @change="stateChange">
					<el-option v-for="(item, index) in stateList" :key="index" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div>
			<div class="btn">
				<el-button type="primary" @click="batchOpen">批量处理</el-button>
			</div>
		</div>

		<el-table :data="tableData" border :header-cell-style="{background:'#f0f0f0', color: '#003366'}" max-height="620" ref="multipleTable"
		 @selection-change="handleSelectionChange" :row-key="(row) => row.id">
			<el-table-column type="selection" width="55" :reserve-selection="true"></el-table-column>
			<el-table-column prop="id" label="ID" width="100px"></el-table-column>
			<el-table-column prop="danger.name" label="姓名" width="200px"></el-table-column>
			<el-table-column prop="address.address" label="所出现地址"></el-table-column>
			<el-table-column prop="alert_type" label="告警分类" width="100px"></el-table-column>
			<el-table-column prop="danger_type" label="危险类型" width="100px"></el-table-column>
			<el-table-column prop="state" label="处理状态" width="100px">
				<template slot-scope="scope">
					<span v-if="scope.row.state == 1">未处理</span>
					<span v-if="scope.row.state == 2">已处理</span>
				</template>
			</el-table-column>
			<el-table-column label="操作" width="300px">
				<template slot-scope="scope">
					<el-button type="primary" @click="handleProcess(scope.$index, scope.row)">立即处理</el-button>
					<el-button type="primary" @click="handleDetail(scope.$index, scope.row)">查看详情</el-button>
				</template>
			</el-table-column>
		</el-table>

		<el-dialog :visible.sync="dialogProcess" title="告警处理" :close-on-click-modal="false">
			<div class="box">
				<el-form :model="processForm" label-width="100px">
					<el-form-item label="处理人">
						<el-input v-model="processForm.name" disabled></el-input>
					</el-form-item>
					<!-- 	<el-form-item label="处理状态">
						<el-radio-group v-model="processForm.state" @change="stateRadio">
							<el-radio :label="1">待处理</el-radio>
							<el-radio :label="2">已处理</el-radio>
						</el-radio-group>
					</el-form-item> -->
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
					<el-table-column prop="danger.href" label="人脸库照片" >
						<template slot-scope="scope">
							<el-popover placement="top-start" title="" trigger="click">
								<img :src="scope.row.danger.href" style="max-width:800px;max-height:800px;" />
								<img slot="reference" :src="scope.row.danger.href" style="max-width:180px;max-height:80px;">
							</el-popover>
						</template>
					</el-table-column>
					<el-table-column prop="log.image" label="抓拍原图" >
						<template slot-scope="scope">
							<el-popover placement="top-start" title="" trigger="click">
								<img :src="scope.row.log.image" style="max-width:800px;max-height:800px;" />
								<img slot="reference" :src="scope.row.log.image" style="max-width:180px;max-height:80px;">
							</el-popover>
						</template>
					</el-table-column>
					
					<el-table-column prop="log.catch_faces[0].face_img" label="抓拍照片">
						<template slot-scope="scope">
							<el-popover placement="top-start" title="" trigger="click">
								<img :src="'data:image/png;base64,' + scope.row.log.catch_faces[0].face_img" style="max-width:800px;max-height:800px;" />
								<img slot="reference" :src="'data:image/png;base64,' +scope.row.log.catch_faces[0].face_img" style="max-width:180px;max-height:80px;">
							</el-popover>
						</template>
					</el-table-column>
					<el-table-column prop="log.timestamp" label="抓拍时间">
					</el-table-column>
				</el-table>
			</div>
		</el-dialog>

		<div class="block">
			<el-pagination @current-change="handleCurrentChange" :current-page.sync="current" :page-sizes="[10, 20, 50, 100, 150, 200, 250, 300]"
			 :page-size="size" layout="sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange">
			</el-pagination>
		</div>


	</div>
</template>

<script>
	import API from '@/api//index.js'
	import DATE from '@/utils/date.js'

	export default {
		data() {
			return {
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


				// 分页
				current: 1,
				size: 10,
				total: 0,

			}
		},
		mounted() {
			this.getAlerts();
		},
		methods: {
			getAlerts() {
				var self = this;
				API.alert(self.current, 10, self.state).then(res => {
					self.$refs.multipleTable.clearSelection();
					self.tableData = res.data;
					self.total = res.total;
				})
			},
			stateChange(val) {
				var self = this;
				API.alert(1, 10, val).then(res => {
					self.tableData = res.data;
					self.total = res.total;
				})
			},

			// 搜索
			search() {
				var self = this;
				API.alert(1, 10, self.state, self.name).then(res => {
					self.tableData = res.data;
					self.total = res.total;
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
				this.dialogDetail = true;
				console.log([row])
				this.DetailForm = [row];
				this.DetailForm.forEach(item => {
					item.log.timestamp = DATE.formatTime(item.log.timestamp, 'Y-M-D h:m:s')
				})
			},

			// 分页
			handleCurrentChange(val) {
				var self = this;
				self.current = val;
				API.alert(val, self.size, self.state, self.name).then(res => {
					self.tableData = res.data;
					self.total = res.total;
				})
			},
			// 每页多少条
			handleSizeChange(val) {
				var self = this;
				self.size = val;
				API.alert(self.current, val, self.state, self.name).then(res => {
					self.tableData = res.data;
					self.total = res.total;
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
