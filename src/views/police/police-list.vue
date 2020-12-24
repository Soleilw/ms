<template>
	<div v-loading="loading" element-loading-text="加载中">
		<div class="content-box">
			<div class="content-box-left" style=" width: 15%;">
				<div class="btn">
					<el-button type="primary" @click="addPolice">添加警员</el-button>
				</div>
				<div class="btn">
					<div class="tip">根据状态筛选：</div>
				</div>
				<div class="btn">
					<el-select v-model="auditState" placeholder="请选择审核状态" @change="changeAudit">
						<el-option v-for="item in auditList" :key="item.value" :label="item.label" :value="item.value"></el-option>
					</el-select>
				</div>
				<div class="btn">
					<div class="tip">根据辖区筛选：</div>
				</div>
				<div class="btn">
					<el-select v-model="station" placeholder="请选择辖区" @change="changeArea">
						<el-option v-for="(item, index) in areaList" :key="index" :label="item.name" :value="item.id"></el-option>
					</el-select>
				</div>
				<div class="btn">
					<div class="tip">根据部门筛选：</div>
				</div>
				<div class="btn">
					<el-select v-model="department_one" placeholder="请选择所属的一级部门" @change="ChangeLevelOne" style="margin-right: 10px;">
						<el-option v-for="(item, index)  in levelOneList" :key="index" :label="item.title" :value="item.id">
						</el-option>
					</el-select>
				</div>
				<div class="btn">
					<el-select v-model="department_two" placeholder="请选择所属的二级部门" @change="ChangeLevelTwo" style="margin-right: 10px;">
						<el-option v-for="(item, index)  in levelTwoList" :key="index" :label="item.title" :value="item.id">
						</el-option>
					</el-select>
				</div>
				<div class="btn">
					<el-select v-model="department_three" placeholder="请选择所属的三级部门" @change="ChangeLevelThree" style="margin-right: 10px;">
						<el-option v-for="(item, index)  in levelThreeList" :key="index" :label="item.title" :value="item.id">
						</el-option>
					</el-select>
				</div>
				<div class="btn">
					<el-select v-model="department_four" placeholder="请选择所属的四级部门" @change="ChangeLevelFour" style="margin-right: 10px;">
						<el-option v-for="(item, index)  in levelFourList" :key="index" :label="item.title" :value="item.id">
						</el-option>
					</el-select>
				</div>
				<div class="btn">
					<el-button @click="resetSelect" type="primary">重新筛选</el-button>
				</div>
			</div>

			<div class="content-box-right" style=" width: 84%;">
				<el-table :data="tableData" stripe="" border :header-cell-style="{background:'#f0f0f0', color: '#003366'}" max-height="750">
					<el-table-column prop="station.name" label="所属辖区"></el-table-column>
					<el-table-column prop="department.title" label="所属部门"></el-table-column>
					<el-table-column prop="name" label="姓名"></el-table-column>
					<el-table-column prop="phone" label="手机号" width="200px"></el-table-column>
					<el-table-column prop="id_card" label="身份证号" width="200px"></el-table-column>
					<el-table-column prop="number" label="工号"></el-table-column>
					<el-table-column prop="state" label="审核状态">
						<template slot-scope="scope">
							<span v-if="scope.row.state == 1">待审核</span>
							<span v-if="scope.row.state == 2" style="color: green;">已通过</span>
							<span v-if="scope.row.state == 3" style="color: red;">未通过</span>
						</template>
					</el-table-column>
					<el-table-column prop="face_image" label="人脸照片">
						<template slot-scope="scope">
							<el-popover placement="top-start" title="" trigger="click">
								<img :src="scope.row.face_image" style="max-width:800px; max-height:800px;" />
								<img slot="reference" :src="scope.row.face_image" style="max-width:150px;max-height:80px;">
							</el-popover>
						</template>
					</el-table-column>
					<el-table-column label="操作" width="200px" fixed="right">
						<template slot-scope="scope">
							<el-button type="text" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
							<el-button v-if="scope.row.state == 1" type="text" @click="handleAudit(scope.$index, scope.row)">审核</el-button>
							<!-- <el-button type="primary" size="mini" @click="handleReset(scope.$index, scope.row)">短信推送结果</el-button> -->
							<el-popconfirm title="是否要删除该警员信息" @onConfirm="handleDel(scope.$index, scope.row)" cancelButtonType="primary" style="margin-left: 10px;">
								<el-button slot="reference" type="text">删除</el-button>
							</el-popconfirm>
						</template>
					</el-table-column>
				</el-table>



				<div class="block">
					<el-pagination @current-change="handleCurrentChange" :current-page.sync="current" :page-sizes="[10, 20, 50, 100, 150, 200, 250, 300]"
					 :page-size="size" layout="sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange">
					</el-pagination>
				</div>
			</div>

		</div>


		<el-dialog :visible.sync="dialogAudit" title="审核" width="20%" align="center">
			<div style="font-size: 20px; margin-bottom: 30px">是否通过审核</div>
			<span>
				<el-button type="primary" @click="toAudit">通过</el-button>
				<el-button type="danger" @click="unAudit">不通过</el-button>
			</span>
		</el-dialog>



		<el-dialog title="添加警员" :visible.sync="dialogPolice" width="60%" :close-on-click-modal="false" @close="clearForm">
			<div class="box">
				<el-form :model="form" label-width="80px">
					<el-form-item label="姓名">
						<el-input v-model="form.name" placeholder="请输入姓名"></el-input>
					</el-form-item>
					<el-form-item label="手机号">
						<el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
					</el-form-item>
					<el-form-item label="身份证号">
						<el-input v-model="form.id_card" placeholder="请输入身份证号"></el-input>
					</el-form-item>
					<el-form-item label="选择辖区">
						<el-select v-model="form.station_id" placeholder="请选择辖区">
							<el-option v-for="item in areaList" :key="item.id" :label="item.name" :value="item.id">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="选择部门">
						<el-select v-model="level.one" placeholder="请选择所属的一级部门" @change="levelOneChange" style="margin-right: 10px;">
							<el-option v-for="(item, index)  in levelOneList" :key="index" :label="item.title" :value="item.id">
							</el-option>
						</el-select>
						<el-select v-model="level.two" placeholder="请选择所属的二级部门" @change="levelTwoChange" style="margin-right: 10px;">
							<el-option v-for="(item, index)  in levelTwoList" :key="index" :label="item.title" :value="item.id">
							</el-option>
						</el-select>
						<el-select v-model="level.three" placeholder="请选择所属的三级部门" @change="levelThreeChange" style="margin-right: 10px;">
							<el-option v-for="(item, index)  in levelThreeList" :key="index" :label="item.title" :value="item.id">
							</el-option>
						</el-select>
						<el-select v-model="level.four" placeholder="请选择所属的四级部门" @change="levelFourChange" style="margin-right: 10px;">
							<el-option v-for="(item, index)  in levelFourList" :key="index" :label="item.title" :value="item.id">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="工号">
						<el-input v-model="form.number" placeholder="请输入工号"></el-input>
					</el-form-item>
					<el-form-item label="上传人脸">
						<div style="display: flex;">
							<el-image v-if="form.face_image" style="margin: 0 10px; max-width:150px;max-height:150px;" :src="form.face_image"></el-image>
							<el-upload action="https://upload-z2.qiniup.com" ref="upload" :limit="1" :before-upload="beforeUpload"
							 :auto-upload="false" :on-success="successUpload" :on-exceed="handleExceed" :data="imgData" list-type="picture-card">
								<el-button v-if="form.face_image" size="small" type="primary">更改照片</el-button>
								<el-button v-else size="small" type="primary">上传照片</el-button>
							</el-upload>
						</div>
					</el-form-item>
					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="newPolice">提交</el-button>
						</el-form-item>
					</div>
				</el-form>
			</div>
		</el-dialog>

	</div>
</template>

<script>
	import md5 from 'blueimp-md5'
	import axios from 'axios'
	import API from '@/api//index.js'

	export default {
		data() {
			return {
				loading: true,
				dialogPolice: false,
				imgData: {
					key: '',
					token: ''
				},
				fileName: '',
				suffix: '',
				qiniuaddr: "https://tu.fengniaotuangou.cn", // 七牛云图片外链地址
				areaList: [], // 获取辖区
				departmentList: [], // 获取部门
				levelOneList: [], //  选择二级部门,获取一级部门列表
				levelTwoList: [],
				levelThreeList: [],
				levelFourList: [],
				level: {
					one: '',
					two: '',
					three: '',
					four: ''
				},
				form: {
					name: '',
					phone: '',
					id_card: '',
					number: '',
					station_id: '',
					department_id: '',
					face_image: ''
				},
				auditList: [{
						value: 0,
						label: "全部",
					},
					{
						value: 1,
						label: "待审核",
					},
					{
						value: 2,
						label: "已通过",
					},
					{
						value: 3,
						label: "未通过",
					}
				],
				auditState: '',
				station: '', // 搜索辖区

				tableData: [{}],
				// 操作
				dialogAudit: false, // 审核
				police_id: '',

				department: '',
				department_one: '',
				department_two: '',
				department_three: '',
				department_four: '',

				dialogDel: false,
				id: '', // 删除id

				// 分页
				current: 1,
				size: 10,
				total: 0,

			}
		},
		mounted() {
			this.getPolice();
			this.getLevelOne(); // 获取一级部门
			this.getQiniuToken();
			// 获取辖区
			API.policeStations(1, 100).then(res => {
				this.areaList = res.data;
			})
		},
		methods: {
			// 获取警员列表
			getPolice() {
				var self = this;
				API.policemen(1, 10).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
			},
			// 搜索
			// 根据审核状态搜索
			changeAudit(val) {
				var self = this;
				self.loading = true;
				API.policemen(1, 10, self.station, self.department, val).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})

			},

			// 根据辖区搜索
			changeArea(val) {
				var self = this;
				self.loading = true;
				API.policemen(1, 10, val, self.department, self.auditState).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
			},

			// 根据部门搜索
			ChangeLevelOne(val) {
				var self = this;
				self.department = val;
				self.loading = true;
				API.policemen(1, 10, self.station, val, self.auditState).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
				API.policeLevels(1, 10, 2, val).then(res => {
					self.levelTwoList = res.data;
					self.department_two = ''
					self.department_three = ''
					self.department_four = ''
				})
			},
			ChangeLevelTwo(val) {
				var self = this;
				self.department = val;
				API.policemen(1, 10, self.station, val, self.auditState).then(res => {
					self.tableData = res.data;
				});
				API.policeLevels(1, 10, 3, val).then(res => {
					self.levelThreeList = res.data;
					self.department_three = '';
					self.department_four = '';
				})
			},
			ChangeLevelThree(val) {
				var self = this;
				self.department = val;
				API.policemen(1, 10, self.station, val, self.auditState).then(res => {
					self.tableData = res.data;
				});
				API.policeLevels(1, 10, 4, val).then(res => {
					self.levelFourList = res.data;
					self.department_four = ''
				})
			},
			ChangeLevelFour(val) {
				var self = this;
				self.department = val;
				API.policemen(1, 10, self.station, val, self.auditState).then(res => {
					self.tableData = res.data;
				});
			},

			// 重新筛选
			resetSelect() {
				window.location.reload();
			},

			addPolice() {
				var self = this
				self.dialogPolice = true;
				self.form = {
					name: '',
					phone: '',
					id_card: '',
					number: '',
					station_id: '',
					department_id: '',
					face_image: '',
					password: '123456'
				}
				self.level = {
					one: '',
					two: '',
					three: '',
					four: ''
				}
			},
			// 获取一级部门
			getLevelOne() {
				var self = this
				API.policeLevels(1, 10, 1, 1).then(res => {
					self.levelOneList = res.data;
				})
			},
			// 选择部门
			levelOneChange(val) {
				var self = this
				self.form.department_id = val;
				API.policeLevels(1, 10, 2, val).then(res => {
					self.levelTwoList = res.data;
					self.level.two = '';
					self.level.three = '';
					self.level.four = '';
				})
			},
			levelTwoChange(val) {
				var self = this;
				self.form.department_id = val;
				API.policeLevels(1, 10, 3, val).then(res => {
					self.levelThreeList = res.data;
					self.level.three = '';
					self.level.four = '';
				})
			},
			levelThreeChange(val) {
				var self = this;
				self.form.department_id = val;
				API.policeLevels(1, 10, 4, val).then(res => {
					self.levelFourList = res.data;
					self.level.four = '';
				})
			},
			levelFourChange(val) {
				var self = this;
				self.form.department_id = val;
			},
			// 人脸信息
			beforeUpload(file, fileList) {
				var self = this;
				console.log(file, fileList)
				// self.familyForm.href = file.name;
				self.fileName = md5(file.name);
				self.suffix = file.name.substring(file.name.lastIndexOf('.') + 1);
				self.imgData.key = `tmp_${self.fileName}.${self.suffix}`
			},
			successUpload(res, file) {
				var self = this;
				file.url = `${self.qiniuaddr}/${res.key}`;
				self.form.face_image = file.url;
				API.policeman(self.form).then((res) => {
					self.$message.success("提交成功");
					self.dialogPolice = false;
					self.form = {};
					self.$refs.upload.clearFiles();
					self.getPolice();
				});
			},
			newPolice() {
				this.$refs.upload.submit();
			},
			handleExceed(file, fileList) { //图片上传超过数量限制
				var self = this;
				self.$message.error('上传图片不能超过1张!重新上传');
				self.$refs.upload.clearFiles()
				self.form.href = '';
				self.imgData.key = '';
			},
			// 操作
			// 编辑
			handleEdit(index, row) {
				var self = this;
				// 获取辖区
				API.policeStations(1).then(res => {
					self.areaList = res.data;
				})
				// 获取部门
				this.getLevelOne();
				self.dialogPolice = true;
				self.form = {
					id: row.id,
					name: row.name,
					phone: row.phone,
					id_card: row.id_card,
					number: row.number,
					station_id: row.station_id,
					department_id: row.department_id,
					face_image: row.face_image,
					password: '123456'
				}
			},
			// 操作
			handleDel(index, row) {
				var self = this;
				console.log(row)
				var id = row.id
				API.delPolice(id).then(res => {
					self.$message.success('删除成功');
					self.getPolice();
					self.current = 1;
				}).catch(err => {
					self.loading = false;
				})
			},

			// 关闭表单
			clearForm() {
				this.$refs.upload.clearFiles()
			},

			getQiniuToken() {
				var self = this;
				axios.get('https://api.fengniaotuangou.cn/api/upload/token').then(res => {
					self.imgData.token = res.data.uptoken;
				})
			},

			// 审核
			handleAudit(index, row) {
				var self = this;
				self.police_id = row.id;
				console.log(self.police_id);
				self.dialogAudit = true;
			},
			toAudit() {
				var self = this;
				var policeId1 = {
					state: 2,
					id: self.police_id,
				};
				API.audit(policeId1).then((res) => {
					self.dialogAudit = false;
					self.$message.success("提交成功");
					self.getPolice();
				});
			},
			unAudit() {
				var self = this;
				var policeId2 = {
					state: 3,
					id: self.police_id,
				};
				API.audit(policeId2).then((res) => {
					self.dialogAudit = false;
					self.$message.success("提交成功");
					self.getPolice();
				});
			},


			// 分页
			handleCurrentChange(val) {
				var self = this;
				self.current = val;
				self.loading = true;
				API.policemen(val, self.size, self.station, self.department, self.auditState).then(res => {
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
				API.policemen(self.current, val, self.station, self.department, self.auditState).then(res => {
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
