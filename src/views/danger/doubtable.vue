<template>
	<div v-loading="loading" element-loading-text="获取数据中">
		<div class="handle-box">
			<div class="btn">
				<el-button type="primary" @click="addDoubtable">添加可疑人脸</el-button>
			</div>
		</div>


		<el-dialog title="添加可疑人脸" :visible.sync="dialogDoubtable" :close-on-click-modal="false">
			<div class="box">
				<el-form :model="form" label-width="100px">
					<el-form-item label="姓名">
						<el-input v-model="form.name" placeholder="请输入姓名"></el-input>
					</el-form-item>
					<el-form-item label="身份证号">
						<el-input v-model="form.number" placeholder="请输入身份证号"></el-input>
					</el-form-item>
					<el-form-item label="通知相似度">
						<el-input v-model="form.notify_score" placeholder="请输入通知相似度(保留一位小数点,例如78.9)"></el-input>
					</el-form-item>
					<el-form-item label="通知列表">
						<el-input type="textarea" v-model="form.notify_user" placeholder="请输入手机号码,多个手机号用逗号分隔(例如: +8613212341234,8613212341234)"></el-input>
					</el-form-item>
					<div class="tips">
						<p><span>提示：</span>如有人脸照片会覆盖掉原有的人脸照片！</p>
					</div>
					<el-form-item label="上传人脸图片">
						<el-upload action="https://upload-z2.qiniup.com" ref="upload" :limit="1" :before-upload="beforeAvatarUpload"
						 :auto-upload="false" :on-success="handleAvatarSuccess" :on-remove="handleRemove" :on-exceed="handleExceed"
						 :on-change="handleChange" :data="imgData">
							<el-button size="small" type="primary">选择图片</el-button>
						</el-upload>
						<div v-if="hasNewImage" style="color: red; font-size: 12px;">* 点击文件名可删除所选图片</div>

						<div class="up-img" v-if="old_href">
							<span style="display: flex;justify-items: center;color: #409eff;">原人脸图片</span>
							<img class="pic-box" :src="old_href">
						</div>
						<div class="up-img" v-if="form.href">
							<span style="display: flex;justify-items: center;color: #67C23A;">新人脸图片</span>
							<img class="pic-box" :src="form.href">
						</div>
						<div class="up-img" v-else>
							<img class="pic-box" :src="change_href">
						</div>
					</el-form-item>
					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="newDoubtablet">提交</el-button>
						</el-form-item>
					</div>
				</el-form>
			</div>
		</el-dialog>

		<el-table :data="tableDate" border :header-cell-style="{background:'#f0f0f0', color: '#2a9f93'}" max-height="620">
			<el-table-column prop="id" label="ID"></el-table-column>
			<el-table-column prop="name" label="姓名"></el-table-column>
			<el-table-column prop="number" label="身份证号"></el-table-column>
			<el-table-column prop="href" label="人脸图片">
				<template slot-scope="scope"><img :src="scope.row.href" style="max-width:180px;max-height:80px;" /></template>
			</el-table-column>
			<!-- <el-table-column label="操作">
				<template slot-scope="scope">
					<el-popconfirm title="是否要删除该条数据" @onConfirm="handleDel(scope.$index, scope.row)" cancelButtonType="primary">
						<el-button slot="reference" size="mini" type="danger">删除</el-button>
					</el-popconfirm>
				</template>
			</el-table-column> -->
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
				loading: true,
				dialogDoubtable: false,
				// 上传人脸
				imgData: {
					key: '',
					token: ''
				},
				fileName: '',
				suffix: '',
				qiniuaddr: "https://tu.fengniaotuangou.cn", // 七牛云图片外链地址
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
				// 分页
				current: 1, // 当前页
				size: 10, // 每页出现几条
				total: 0 // 总页数
			}
		},
		mounted() {
			this.getDangerFaces();
			this.getQiniuToken();
		},
		methods: {
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
			// 更换人脸
			addDoubtable() {
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
			handleRemove(file) {
				var self = this;
				self.change_href = '';
				self.hasNewImage = false;
			},
			beforeAvatarUpload(file) {
				var self = this;
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
			handleAvatarSuccess(res, file) {
				var self = this;
				file.url = `${self.qiniuaddr}/${res.key}`;
				self.form.href = file.url;
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
