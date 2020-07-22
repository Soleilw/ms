<template>
	<div>
		<div class="btn">
			<el-button type="primary" @click="addProject">添加地址</el-button>
		</div>

		<el-dialog title="添加地址" :visible.sync="dialogProject" :close-on-click-modal="false">
			<div class="box">
				<el-form :model="form" label-width="120px">
					<el-form-item label="选择项目">
						<el-select v-model="form.project_id">
							<el-option v-for="(item, index) in projectList" :label="item.name" :value="item.id" :key="index"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="地址">
						<el-input v-model="form.address"></el-input>
					</el-form-item>
					<el-form-item label="联系方式">
						<el-input v-model="form.contact"></el-input>
					</el-form-item>
					<div v-for="(item,index) in form.face_groups" :key="index">
						<el-form-item label="人脸分组姓名">
							<el-input v-model="item.name"></el-input>
						</el-form-item>
						<el-form-item label="是否默认分组">
							<el-radio-group v-model="item.is_default">
								<el-radio :label="1">是</el-radio>
								<el-radio :label="2">否</el-radio>
							</el-radio-group>
							<!-- <el-input v-model="item.is_default"></el-input> -->
						</el-form-item>
						<el-form-item label="是否为在线分组">
							<el-radio-group v-model="item.online">
								<el-radio :label="1">是</el-radio>
								<el-radio :label="2">否</el-radio>
							</el-radio-group>
							<!-- <el-input v-model="item.is_default"></el-input> -->
						</el-form-item>
					</div>
					<el-form-item label="操作">
						<el-button size="mini" type="success" @click="addFace">添加人脸姓名</el-button>
						<el-button size="mini" type="danger" @click="delFace">删除人脸姓名</el-button>
					</el-form-item>
					
					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="newProject">提交</el-button>
						</el-form-item>
					</div>
				</el-form>
			</div>
		</el-dialog>

		<el-table :data="tableDate">
			<el-table-column prop="id" label="ID" align="center"></el-table-column>
			<el-table-column prop="project_id" label="项目ID" align="center"></el-table-column>
			<el-table-column prop="address" label="地址" align="center"></el-table-column>
			<el-table-column prop="contact" label="联系方式" align="center"></el-table-column>
			<el-table-column prop="address_uuid" label="address_uuid" align="center"></el-table-column>
			<el-table-column label="操作" align="center">
				<template slot-scope="scope">
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<div class="block">
			<el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-sizes="[10, 20, 30, 40, 50]"
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
				dialogProject: false,
				projectList: [],
				form: {
					project_id: '',
					address: '',
					contact: '',
					face_groups: []
				},
				tableDate: [],
				currentPage: 1,
				pageSize: 10,
				totalPage: 0
			}
		},
		mounted() {
			this.getAddress();
			this.getProject();
		},
		methods: {
			getProject() {
				var self = this;
				API.projects(self.currentPage).then(res => {
					self.projectList = res.data;
				})
			},
			getAddress() {
				var self = this;
				API.addresses(self.currentPage).then(res => {
					self.tableDate = res.data;
					self.totalPage = res.total;
				})
			},
			addProject() {
				var self = this;
				self.dialogProject = true;
				self.form = {
					project_id: '',
					address: '',
					contact: '',
					face_groups: []
				}
			},
			// 添加人脸分组名称
			addFace() {
				var self = this;
				self.form.face_groups.push({})
			},
			delFace() {
				var self = this;
				self.form.face_groups.pop({})
			},
			// 添加新的AIP
			newProject() {
				var self = this;
				API.address(self.form).then(res => {
					self.dialogProject = false;
					self.$message.success("提交成功");
					self.getAddress();
					self.currentPage = 1
					self.form = {}
				})
			},
			// 操作
			handleDel() {},

			// 分页
			handleCurrentChange(val) {
				var self = this;
				self.currentPage = val;
				API.addresses(val, self.pageSize).then(res => {
					self.tableDate = res.data;
					self.totalPage = res.total;
				})
			},
			// 每页显示条数
			handleSizeChange(val) {
				var self = this;
				self.pageSize = val;
				API.addresses(self.currentPage, val).then(res => {
					self.tableDate = res.data;
					self.totalPage = res.total;
				})
			}
		}
	}
</script>

<style>
</style>
