<template>
	<div>
		<div class="handle-box">
			<div class="btn">
				<el-button type="primary" @click="dialogFace = true">添加人脸</el-button>
			</div>
		</div>


		<el-dialog title="添加人脸" :visible.sync="dialogFace">
			<div class="box">
				<el-form :model="form" label-width="100px">
					<el-form-item label="选择地址">
						<el-select v-model="form.address_id" @change="addressChange">
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

		<el-table :data="tableDate" border :header-cell-style="{background:'#f0f0f0', color: '#2a9f93'}" max-height="620">
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
				<template slot-scope=" scope">
				<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
</template>
</el-table-column>
</el-table>

<div class="block">
	<el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-sizes="[10, 20, 50, 100, 150, 200, 250, 300]"
	 :page-size="pageSize" layout="sizes, prev, pager, next, jumper" @size-change="handleSizeChange" :total="totalPage">
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
				dialogFace: false,
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
				tableDate: [],
				currentPage: 1,
				pageSize: 10,
				totalPage: 0
			}
		},
		mounted() {
			this.getAddress();
			this.getFace();
		},
		methods: {
			getFace() {
				var self = this;
				API.faces(self.currentPage).then(res => {
					self.tableDate = res.data;
					self.totalPage = res.total;
				})
			},
			getAddress() {
				var self = this;
				API.addresses(self.currentPage).then(res => {
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
			// 添加新的AIP
			newFace() {
				var self = this;
				self.$refs.upload.submit();
				API.face(self.form).then(res => {
					self.dialogFace = false;
					self.$message.success("提交成功");
					self.getAddress();
					self.currentPage = 1
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
			// 分页
			handleCurrentChange(val) {
				var self = this;
				self.currentPage = val;
				API.faces(val, self.pageSize).then(res => {
					self.tableDate = res.data;
					self.totalPage = res.total;
				})
			},
			// 每页显示条数
			handleSizeChange(val) {
				var self = this;
				self.pageSize = val;
				API.faces(self.currentPage, val).then(res => {
					self.tableDate = res.data;
					self.totalPage = res.total;
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
