<template>
	<div v-loading="loading" element-loading-text="获取数据中">
		<div class="content-box">
			<div class="content-box-left" style=" width: 15%;">
				<div class="btn">
					<el-button type="primary" @click="addFace">添加人脸</el-button>
				</div>
				<div class="btn">
				<div class="tip">根据姓名筛选：</div>
				</div>
				<div class="btn">
					<el-input placeholder="请输入姓名" v-model="name" class="input-with-select" @keyup.enter.native="search(name)">
						<el-button slot="append" icon="el-icon-search" @click="search(name)"></el-button>
					</el-input>
				</div>
				<div class="btn">
					<el-button @click="resetSelect" type="primary">重新筛选</el-button>
				</div>
			</div>
		
			<div class="content-box-right" style=" width: 84%;">
				
				<el-table :data="tableData" stripe border :header-cell-style="{background:'#f0f0f0', color: '#003366'}" max-height="700">
					<el-table-column prop="id" label="ID"></el-table-column>
					<el-table-column prop="name" label="名字"></el-table-column>
					<el-table-column prop="face_id" label="人脸ID"></el-table-column>
					<el-table-column prop="group" label="人脸组" width="200px"></el-table-column>
					<el-table-column prop="number" label="学号/身份证号"></el-table-column>
					<el-table-column prop="href" label="人脸图片">
						<template slot-scope="scope">
							<el-popover placement="top-start" title="" trigger="click">
								<img :src="scope.row.href" style="max-width:800px;max-height:800px;" />
								<img slot="reference" :src="scope.row.href" style="max-width:180px;max-height:80px;">
							</el-popover>
						</template>
					</el-table-column>
					<el-table-column prop="type" label="类型"></el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-popconfirm title="是否要删除该条数据" @onConfirm="handleDel(scope.$index, scope.row)" cancelButtonType="primary">
								<el-button slot="reference" type="text">删除</el-button>
							</el-popconfirm>
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
		
		<el-dialog title="添加人脸" :visible.sync="dialogFace">
			<div class="box">
				<el-form :model="form" label-width="100px">
					<el-form-item label="选择地址">
						<el-select v-model="form.address_id" filterable @change="addressChange">
							<el-option v-for="(item, index) in addressList" :label="item.address" :value="item.id" :key="index"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="选择人脸组">
						<el-select v-model="form.group_id">
							<el-option v-for="(item, index) in faceGroupList" :label="item.group_name" :value="item.id" :key="index"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="姓名">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="学号">
						<el-input v-model="form.number"></el-input>
					</el-form-item>
					<el-form-item label="上传人脸">
						<el-upload action="https://api.fengniaotuangou.cn/api/upload" list-type="picture-card" ref="upload" :auto-upload="false"
						 :limit="1" :on-success="handleAvatarSuccess" :on-exceed="handleExceed">
							<i slot="default" class="el-icon-plus"></i>
							<div slot="file" slot-scope="{file}">
								<img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
								<span class="el-upload-list__item-actions">
									<span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
										<i class="el-icon-delete"></i>
									</span>
								</span>
							</div>
						</el-upload>
						<!-- <div class="upload-btn">
							<el-button type="primary" @click="upload">上传图片</el-button>
						</div> -->
					</el-form-item>
					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="newFace">提交</el-button>
						</el-form-item>
					</div>
				</el-form>
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
				dialogFace: false,
				name: '', // 搜索
				addressList: [],
				faceGroupList: [],
				disabled: false, // 上传图片
				form: {
					address_id: '',
					group_id: '',
					name: '',
					number: '',
					href: ''
				},
				tableData: [],
				current: 1,
				size: 10,
				total: 0
			}
		},
		mounted() {
			this.getAddress();
			this.getFace();
		},
		methods: {
			search() {
				var self = this;
				API.faces(self.current, self.size, self.name).then(res => {
					
					self.loading = false;
					self.tableData = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
			},
			getFace() {
				var self = this;
				API.faces(self.current).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
			},
			getAddress() {
				var self = this;
				API.addresses(1, 10000).then(res => {
					self.addressList = res.data;
				})
			},
			addressChange(val) {
				this.getFaceGroup(val)
			},
			// 获取人脸组
			getFaceGroup(address_id) {
				var self = this;
				API.faceGroup(address_id).then(res => {
					self.faceGroupList = res.data;
				})

			},
			addFace() {
				var self = this;
				self.dialogFace = true;
				self.form = {
					address_id: '',
					group_id: '',
					name: '',
					number: '',
					href: ''
				}
			},
			// 添加新的AIP
			newFace() {
				var self = this;
				self.$refs.upload.submit();
				API.face(self.form).then(res => {
					self.dialogFace = false;
					self.$message.success("提交成功");
					self.getAddress();
					self.current = 1
					self.form = {}
				})
			},
			// 操作
			handleDel() {},
			// 上传图片
			// upload() {
			// 	this.$refs.upload.submit();
			// },
			handleRemove(file, fileList) { //移除图片
			},
			beforeAvatarUpload(file) { //文件上传之前调用做一些拦截限制
				const isLt2M = file.size / 1024 / 1024 < 2;
				if (!isLt2M) {
					this.$message.error('上传图片大小不能超过 2MB!');
				}
				return isLt2M;
			},
			handleAvatarSuccess(res, file) { //图片上传成功
				this.imageUrl = URL.createObjectURL(file.raw);
				this.$message.success('上传成功');
				this.dialogBanner = false;
				this.form.href = file.url;

			},
			handleExceed(files, fileList) { //图片上传超过数量限制
				this.$message.error('上传图片不能超过1张!');
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
				API.faces(val, self.size).then(res => {
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
				API.faces(self.current, val).then(res => {
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
