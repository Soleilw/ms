<template>
	<div v-loading="loading" element-loading-text="获取数据中">
		<div class="statisical-box">
			<div class="data-box">
				<!-- 社区男女比例-->
				<div id="total-area-sex"></div>
				<!-- 房屋男女比例 -->
				<div id="total-rent-sex"></div>
				<!-- 社区审核比例-->
				<div id="total-area-audit"></div>
				<!-- 房屋审核比例 -->
				<div id="total-rent-audit"></div>
			</div>

			<div class="table-box">
				<div class="handle-box">
					<div class="btn">
						<el-button @click="openExcel" type="primary">生成Excel表</el-button>
					</div>
				</div>
				<el-table :data="tableDate" border :header-cell-style="{background:'#f0f0f0', color: '#003366'}" max-height="620" style="width: 100%">
					<el-table-column prop="id" label="ID"></el-table-column>
					<el-table-column prop="name" label="社区地址"></el-table-column>
					<el-table-column prop="notify_score" label="人口总数"></el-table-column>
					<el-table-column prop="name" label="男性人数"></el-table-column>
					<el-table-column prop="number" label="女性人数"></el-table-column>
					<el-table-column prop="created_at" label="待审核人数"></el-table-column>
					<el-table-column prop="href" label="通过审核人数"></el-table-column>
					<el-table-column prop="href" label="记录照片" width="150px">
						<template slot-scope='scope'>
							<el-button>房屋地址列表</el-button>
						</template>
					</el-table-column>
				</el-table>
				<div class="block">
					<el-pagination @current-change="currentChange" :current-page.sync="current" :page-sizes="[10, 20, 50, 100, 150, 200, 250, 300]"
					 :page-size="size" layout="sizes, prev, pager, next, jumper" @size-change="sizeChange" :total="total">
					</el-pagination>
				</div>
			</div>
		</div>

		<el-dialog title="设置表格名字" :visible.sync="dialogExcel">
			<div class="box">
				<el-form :model="excelForm" label-width="100px">
					<el-form-item label="表格名字">
						<el-input v-model="excelForm.name" placeholder="请输入表格名字"></el-input>
					</el-form-item>
					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="exportToExcel">生成表格</el-button>
						</el-form-item>
					</div>
				</el-form>
			</div>


		</el-dialog>

	</div>
</template>

<script>
	import API from '@/api/index.js'
	import md5 from 'blueimp-md5'
	import axios from 'axios'

	export default {
		name: 'gradems',
		data() {
			return {
				loading: false,
				dialogDoubtable: false,
				// 上传人脸
				imgData: {
					key: '',
					token: ''
				},
				fileList: [],
				imgList: [], // 图片列表
				fileName: '',
				suffix: '',
				qiniuaddr: "https://tu.fengniaotuangou.cn", // 七牛云图片外链地址
				activeName: 'natureDoubtable',
				natureForm: {
					name: ''
				}, // 可疑性质
				form: {
					href: '',
					name: '',
					number: '',
					notify_score: '',
					notify_user: ''
				},

				old_href: '', // 原人脸图片
				change_href: '',
				hasNewImage: false,

				tableDate: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
				id: '',
				dialogDel: false,

				type: 1,
				typeList: [{
						// 搜索方式
						value: 1,
						label: "按姓名搜索",
					},
					{
						value: 2,
						label: "按身份证搜索",
					},
					{
						value: 3,
						label: "上传照片搜索",
					}
				],

				// 分页
				current: 1, // 当前页
				size: 10, // 每页出现几条
				total: 0, // 总页数


				dialogExcel: false, // 生成表格
				excelForm: {
					number: '',
					head: [],
					name: ''
				},
				list: [], // 整个数据
				checkHead: ['ID', '社区地址', '人口总数', '男性人数', '女性人数', '待审核人数', '通过审核人数'], // 表头数组
				checkParam: [], // 字段数组
			}
		},
		mounted() {
			this.renterSummary(); 
		},
		methods: {
			openExcel() {
				let self = this;
				self.dialogExcel = true;
			},
			exportToExcel() {
				var self = this
				if (!self.excelForm.name) {
					self.$message.warning('请输入表格名字');
					return false;
				}  else {
					API.dangerFaces(self.current, self.total).then(res => {
						self.$message.success('正在生成表格');
						self.list = res.data;
						self.excelForm = {
							name: ''
						}
						self.dialogExcel = false;
						self.export2Excel();
					})
				}
			},
			export2Excel() {
				var self = this
				require.ensure([], () => {
					const {
						export_json_to_excel
					} = require('@/utils/Export2Excel.js') // js文件的位置
					const data = self.formatJson(self.checkParam, self.list)
					console.log(self.list)
					export_json_to_excel(self.checkHead, data, self.excelForm.name) // 导出的表格名称，根据需要自己命名
				})
			},
			formatJson(filterVal, jsonData) {
				return jsonData.map(v => filterVal.map(j => v[j]))
			},
			// 出租屋人数比例
			renterSummary() {
				var self = this;
				self.$nextTick(function() {
					// 总社区男女比例
					let areaSex = self.$echarts.init(document.getElementById('total-area-sex'));
					var areaSexOption = {
						// 标题
						title: {
							text: '社区男女比例',
							textStyle: {
								fontSize: 20,
								color: "#003366"
							}
						},
						tooltip: {
							trigger: 'item',
							formatter: '{a} <br/>{b}: {c} ({d}%)'
						},
						legend: {
							orient: 'vertical',
							bottom: 0,
							right: 40,
							data: [{
								name: '男',
								textStyle: {
									color: '#336699', // 图例项文本样式
								}
							}, {
								name: '女',
								textStyle: {
									color: '#ff6666'
								}
							}]
						},
						series: [{
							name: '男女比例',
							type: 'pie',
							radius: ['50%', '70%'], // 控制圆心
							avoidLabelOverlap: false,
							label: {
								show: false,
								position: 'outside'
							},
							labelLine: {
								show: false
							},
							itemStyle: {

							},
							data: [{
									value: 1000,
									name: '男',
									itemStyle: {
										color: '#336699' // 设置颜色
									}
								},
								{
									value: 310,
									name: '女',
									itemStyle: {
										color: '#ff6666',
									}
								},
							]
						}]
					};
					areaSex.setOption(areaSexOption);
					// 总社区男女比例
					let rentSex = self.$echarts.init(document.getElementById('total-rent-sex'));
					var rentSexOption = {
						// 标题
						title: {
							text:  '出租屋男女比例',
							textStyle: {
								fontSize: 20,
								color: "#003366"
							}
						},
						tooltip: {
							trigger: 'item',
							formatter: '{a} <br/>{b}: {c} ({d}%)'
						},
						legend: {
							orient: 'vertical',
							bottom: 0,
							right: 40,
							data: [{
								name: '男',
								textStyle: {
									color: '#336699', // 图例项文本样式
								}
							}, {
								name: '女',
								textStyle: {
									color: '#ff6666'
								}
							}]
						},
						series: [{
							name: '男女比例',
							type: 'pie',
							radius: ['50%', '70%'], // 控制圆心
							avoidLabelOverlap: false,
							label: {
								show: false,
								position: 'outside'
							},
							labelLine: {
								show: false
							},
							itemStyle: {
					
							},
							data: [{
									value: 1000,
									name: '男',
									itemStyle: {
										color: '#336699' // 设置颜色
									}
								},
								{
									value: 310,
									name: '女',
									itemStyle: {
										color: '#ff6666',
									}
								},
							]
						}]
					};
					rentSex.setOption(rentSexOption);
					// 总社区审核比例
					let areaAudit = self.$echarts.init(document.getElementById('total-area-audit'));
					var areaAuditOption = {
						// 标题
						title: {
							text: '社区审核人数比例',
							textStyle: {
								fontSize: 20,
								color: "#003366"
							}
						},
						tooltip: {
							trigger: 'item',
							formatter: '{a} <br/>{b}: {c} ({d}%)'
						},
						legend: {
							orient: 'vertical',
							bottom: 0,
							right: 40,
							data: [{
								name: '待审核',
								textStyle: {
									color: '#336699', // 图例项文本样式
								}
							}, {
								name: '已通过',
								textStyle: {
									color: '#ff6666'
								}
							}]
						},
						series: [{
							name: '男女比例',
							type: 'pie',
							radius: ['50%', '70%'], // 控制圆心
							avoidLabelOverlap: false,
							label: {
								show: false,
								position: 'outside'
							},
							labelLine: {
								show: false
							},
							itemStyle: {
					
							},
							data: [{
									value: 1000,
									name: '待审核',
									itemStyle: {
										color: '#336699' // 设置颜色
									}
								},
								{
									value: 310,
									name: '已通过',
									itemStyle: {
										color: '#ff6666',
									}
								},
							]
						}]
					};
					areaAudit.setOption(areaAuditOption);
					// 总出租屋审核人数比例比例
					let rentAudit = self.$echarts.init(document.getElementById('total-rent-audit'));
					var rentAuditOption = {
						// 标题
						title: {
							text: '出租屋审核人数比例',
							textStyle: {
								fontSize: 20,
								color: "#003366"
							}
						},
						tooltip: {
							trigger: 'item',
							formatter: '{a} <br/>{b}: {c} ({d}%)'
						},
						legend: {
							orient: 'vertical',
							bottom: 0,
							right: 40,
							data: [{
								name: '待审核',
								textStyle: {
									color: '#336699', // 图例项文本样式
								}
							}, {
								name: '已通过',
								textStyle: {
									color: '#ff6666'
								}
							}]
						},
						series: [{
							name: '男女比例',
							type: 'pie',
							radius: ['50%', '70%'], // 控制圆心
							avoidLabelOverlap: false,
							label: {
								show: false,
								position: 'outside'
							},
							labelLine: {
								show: false
							},
							itemStyle: {
					
							},
							data: [{
									value: 1000,
									name: '待审核',
									itemStyle: {
										color: '#336699' // 设置颜色
									}
								},
								{
									value: 310,
									name: '已通过',
									itemStyle: {
										color: '#ff6666',
									}
								},
							]
						}]
					};
					rentAudit.setOption(rentAuditOption);
				})
			},

			// 分页
			currentChange(val) {
				var self = this;
				self.loading = true;
				self.current = val;
				API.dangerFaces(val, self.size).then(res => {
					self.loading = false;
					self.tableDate = res.data;
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
				API.dangerFaces(self.current, val).then(res => {
					self.loading = false;
					self.tableDate = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
			},
		}
	}
</script>

<style scoped>
	.statisical-box {
		display: flex;
		justify-content: space-between;
	}

	.data-box {
		width: 40%;
		display: flex;
		flex-wrap: wrap;
		padding: 1.25rem;
		background: #f0f0f0;
		border-radius: 5px;

	}

	.table-box {
		width: 57%;
	}

	/* 数据统计 */
	#total-area-sex {
		width: 13rem;
		height: 15.625rem;
		padding: 0 3.125rem;
	}

	#total-area-audit {
		width: 13rem;
		height: 15.625rem;
		padding: 0 3.125rem;
	}

	#total-rent-sex {
		width: 13rem;
		height: 15.625rem;
		padding: 0 3.125rem;
	}

	#total-rent-audit {
		width: 13rem;
		height: 15.625rem;
		padding: 0 3.125rem;
	}



	.upload-btn {
		margin-top: 10px;
	}

	.up-img {
		display: inline-block;
		margin: 0 50px;
	}

	.pic-box {
		max-width: 100%;
		height: 200px;
	}

	.tips {
		margin-bottom: 20px;
		color: red;
	}
</style>
