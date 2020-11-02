<template>
	<div v-loading="loading" element-loading-text="获取数据中">
		<div class="handle-box">
			<div class="btn">
				<el-input :placeholder="type == 1 ? '请输入姓名' : type == 2 ? '请输入身份证号' : ''" v-model="student" @keyup.enter.native="search(student)"
				 class="input-with-select">
					<el-select v-model="type" placeholder="请选择搜索方式" slot="prepend" @change="changeType" style="width: 150px">
						<el-option v-for="item in typeList" :key="item.value" :label="item.label" :value="item.value"></el-option>
					</el-select>
					<el-button slot="append" icon="el-icon-search" @click="search(student)"></el-button>
				</el-input>
			</div>
			<div class="btn">
				<el-button @click="openExcel">生成Excel表</el-button>
			</div>
		</div>

		<el-dialog title="设置表格参数" :visible.sync="dialogExcel">
			<div class="box">
				<el-form :model="excelForm" label-width="100px">
					<el-form-item label="表格名字">
						<el-input v-model="excelForm.name" placeholder="请输入表格名字"></el-input>
					</el-form-item>
					<el-form-item label="设置条数">
						<el-input v-model="excelForm.number" placeholder="请输入生成的数据条数"></el-input>
					</el-form-item>
					<el-form-item label="请选择表头">
						<div class="facebox">
							<el-checkbox-group v-model="excelForm.head" @change="headChange">
								<div v-for="(item,index) in headList" :key="index" style="display: flex;">
									<el-checkbox :label="item">{{item.label}}</el-checkbox>
								</div>
							</el-checkbox-group>
						</div>
					</el-form-item>
					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="exportToExcel">生成表格</el-button>
						</el-form-item>
					</div>
				</el-form>
			</div>


		</el-dialog>

		<el-dialog title="设置搜索条件" :visible.sync="dialogDoubtable" :close-on-click-modal="false" width="800px">
			<div class="box">
				<el-form :model="excelForm" label-width="100px">
					<el-form-item label="姓名">
						<el-input v-model="excelForm.number" placeholder="请输入姓名"></el-input>
					</el-form-item>
					<el-form-item label="身份证">
						<el-input v-model="excelForm.name" placeholder="请输入身份证"></el-input>
					</el-form-item>
					<el-form-item label="相似度">
						<el-input v-model="excelForm.name" placeholder="请输入相似度"></el-input>
					</el-form-item>
					<el-form-item label="请选择表头">
						<el-upload action="https://upload-z2.qiniup.com" ref="upload" :limit="1" :before-upload="beforeAvatarUpload"
						 :auto-upload="false" :on-success="handleAvatarSuccess" :on-remove="handleRemove" :on-exceed="handleExceed"
						 :on-change="handleChange" :data="imgData" list-type="picture-card">
							<el-button size="small" type="primary">选择图片</el-button>
						</el-upload>
					</el-form-item>
					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="exportToExcel">生成表格</el-button>
						</el-form-item>
					</div>
				</el-form>
			</div>
		</el-dialog>

		<el-table :data="tableDate" border :header-cell-style="{background:'#f0f0f0', color: '#003366'}" max-height="620">
			<el-table-column prop="id" label="ID"></el-table-column>
			<el-table-column prop="name" label="设备类型"></el-table-column>
			<el-table-column prop="notify_score" label="设备地址"></el-table-column>
			<el-table-column prop="name" label="姓名"></el-table-column>
			<el-table-column prop="number" label="身份证"></el-table-column>
			<el-table-column prop="created_at" label="记录时间"></el-table-column>
			<el-table-column prop="href" label="人脸库照片">
				<template slot-scope="scope"><img :src="scope.row.href" style="max-width:180px;max-height:80px;" /></template>
			</el-table-column>
			<el-table-column prop="href" label="记录照片">
				<template slot-scope="scope"><img :src="scope.row.href" style="max-width:180px;max-height:80px;" /></template>
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

				tableDate: [],
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
				headList: [{
						index: 1,
						value: 'id',
						label: 'ID'
					},
					{
						index: 2,
						value: 'name',
						label: '设备类型'
					},
					{
						index: 3,
						value: 'notify_score',
						label: '设备地址'
					},
					{
						index: 4,
						value: 'notify_user',
						label: '姓名'
					},
					{
						index: 5,
						value: 'number',
						label: '身份证'
					},
					{
						index: 6,
						value: 'created_at',
						label: '记录时间'
					}
				],
				list: [], // 整个数据
				checkHead: [], // 表头数组
				checkParam: [], // 字段数组

			}
		},
		mounted() {
			this.getDangerFaces();
			this.getQiniuToken();
		},
		methods: {
			openExcel() {
				let self = this;
				self.dialogExcel = true;
			},
			// 排序
			order(a, b) {
				if (a.index < b.index) {
					return -1;
				} else if (a.index > b.index) {
					return 1;
				} else if (a.index == b.index) {
					return 0;
				}
			},
			// 选择表头
			headChange(val) {
				let self = this;
				val.sort(this.order);
				console.log(val);
				// 表头数组
				for (let i = 0; i < val.length; i++) {
					if (self.checkHead.indexOf(val[i].label) == -1) {
						self.checkHead.push(val[i].label)
					} else {
						self.checkHead = []
						for (let i = 0; i < val.length; i++) {
							if (self.checkHead.indexOf(val[i].label) == -1) {
								self.checkHead.push(val[i].label)
							}
						}
					}
					// 字段参数
					if (self.checkParam.indexOf(val[i].value) == -1) {
						self.checkParam.push(val[i].value)
					} else {
						self.checkParam = []
						for (let i = 0; i < val.length; i++) {
							if (self.checkParam.indexOf(val[i].value) == -1) {
								self.checkParam.push(val[i].value)
							}
						}
					}
				}
			},
			exportToExcel() {
				var self = this
				if (!self.excelForm.name) {
					self.$message.warning('请输入表格名字');
					return false;
				} else if (!self.excelForm.number) {
					self.$message.warning('请设置数据条数');
					return false;
				} else if (!self.excelForm.head.length) {
					self.$message.warning('请选择表头');
					return false;
				} else {
					API.dangerFaces(self.current, self.excelForm.number).then(res => {
						self.$message.success('正在生成表格');
						self.list = res.data;
						self.excelForm = {
							number: '',
							head: [],
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

			getDangerFaces() {
				var self = this;
				API.dangerFaces(self.current).then(res => {
					self.loading = false;
					self.tableDate = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
			},
			// 根据搜索类型去搜索
			changeType(val) {
				var self = this;
				switch (val) {
					case 1:
						break;
					case 2:
						break;
					default:
						self.dialogDoubtable = true;
				}
			},
			// 更换人脸
			searchFace() {
				var self = this;
				self.dialogDoubtable = true;
				self.form = {
					href: '',
					name: '',
					number: '',
					notify_score: '',
					notify_user: ''
				};
				self.change_href = '';
			},

			// 人脸信息
			handleChange(file) {
				var self = this;
				self.change_href = URL.createObjectURL(file.raw);
				self.hasNewImage = true;
			},
			handleRemove(file, fileList) {
				var self = this;
				self.change_href = '';
				self.hasNewImage = false;
				console.log(file, fileList)
			},
			beforeAvatarUpload(file, fileList) {
				var self = this;
				console.log(file, fileList)
				// self.familyForm.href = file.name;
				self.fileName = md5(file.name);
				self.suffix = file.name.substring(file.name.lastIndexOf('.') + 1);
				self.imgData.key = `tmp_${self.fileName}.${self.suffix}`
			},
			newDoubtablet() {
				var self = this;
				if (self.change_href === '') {
					self.form.href = self.old_href;
					API.dangerFace(self.form).then(res => {
						self.$message.success('上传成功');
						self.current = 1;
						self.form.href = '';
						self.dialogDoubtable = false;
						API.dangerFaces(self.current).then(res => {
							self.tableDate = res.data;
							self.total = res.total;
						})
					})
				} else {
					this.$refs.upload.submit();
				}
			},
			handleAvatarSuccess(res, file, fileList) {
				var self = this;
				if (self.imgList) {
					file.url = `${self.qiniuaddr}/${res.key}`;
					self.imgList.push({
						href: file.url
					})
				} else {
					file.url = `${self.qiniuaddr}/${res.key}`;
					self.imgList.push({
						href: file.url
					})
				}
				console.log(22, self.imgList)
				// file.url = `${self.qiniuaddr}/${res.key}`;
				// self.form.href = file.url;
				API.dangerFace(self.form).then(res => {
					self.$message.success('上传成功');
					self.current = 1;
					self.dialogStudent = true;
					API.dangerFaces(self.current).then(res => {
						self.tableDate = res.data;
						self.total = res.total;
					})
					self.$refs.upload.clearFiles()
					self.form.href = '';
					self.change_href = '';
					self.old_href = '';
					self.imgData.key = '';
					self.dialogDoubtable = false;
				})
			},
			handleExceed(file, fileList) { //图片上传超过数量限制
				var self = this;
				self.$message.error('上传图片不能超过1张!重新上传');
				self.$refs.upload.clearFiles()
				self.form.href = '';
				self.imgData.key = '';
			},
			// 操作
			handleDel(index, row) {
				var self = this;
				// API.delDangerFace(self.id).then(res => {
				// 	self.$message.success('删除成功')
				// 	self.dialogDel = false;
				// 	self.getDangerFaces();
				// 	self.currentPage = 1;
				// })
			},

			getQiniuToken() {
				var self = this;
				axios.get('https://api.fengniaotuangou.cn/api/upload/token').then(res => {
					self.imgData.token = res.data.uptoken;
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
