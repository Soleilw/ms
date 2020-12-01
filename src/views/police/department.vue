<template>
	<div v-loading="loading" element-loading-text="加载中">
		<div class="content-box">
			<div class="content-box-left" style=" width: 15%;">
				<div class="btn">
					<el-button type="primary" @click="addDepartment">添加部门</el-button>
				</div>
				<div class="btn">
					<div class="tip">根据部门筛选：</div>
				</div>
				<div class="btn">
					<el-select v-model="search_level" placeholder="请选择部门等级" @change="search">
						<el-option v-for="(item, index) in levelList" :key="index" :label="item.name" :value="item.id">
						</el-option>
					</el-select>
				</div>
				<div class="btn">
					<el-button @click="resetSelect" type="primary">重新筛选</el-button>
				</div>
			</div>

			<div class="content-box-right" style=" width: 84%;">
				<el-table :data="tableData" border :header-cell-style="{background:'#f0f0f0', color: '#003366'}" max-height="700">
					<el-table-column prop="level" label="部门等级">
						<template slot-scope="scope">
							<span v-if="scope.row.level == 1">一级部门</span>
							<span v-if="scope.row.level == 2">二级部门</span>
							<span v-if="scope.row.level == 3">三级部门</span>
							<span v-if="scope.row.level == 4">四级部门</span>

						</template>
					</el-table-column>
					<el-table-column prop="title" label="部门名称"></el-table-column>
					<el-table-column label="操作" width="600px">
						<template slot-scope="scope">
							<el-button type="text" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
							<el-button type="text" @click="getBindPolice(scope.$index, scope.row)">查看绑定警员</el-button>
							<!-- <el-button type="primary" size="mini" @click="handleReset(scope.$index, scope.row)">编辑名称</el-button> -->
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

		<el-dialog :visible.sync="dialogDel" title="删除角色" width="20%" align="center" :close-on-click-modal="false">
			<div style="font-size: 20px; margin-bottom: 30px;">是否删除该账号</div>
			<span>
				<el-button type="primary" @click="toDel">删除</el-button>
				<el-button type="danger" @click="dialogDel = false">取消</el-button>
			</span>
		</el-dialog>
		<!-- 查看绑定警员 -->
		<el-dialog :visible.sync="dialogBindPolice" title="该部门绑定的警员" width="80%" :close-on-click-modal="false">
			<el-table :data="policeData" border :header-cell-style="{background:'#f0f0f0', color: '#003366'}" max-height="620">
				<el-table-column prop="station.name" label="所属辖区"></el-table-column>
				<el-table-column prop="department.title" label="所属部门"></el-table-column>
				<el-table-column prop="name" label="姓名"></el-table-column>
				<el-table-column prop="phone" label="手机号"></el-table-column>
				<el-table-column prop="id_card" label="身份证号" width="200px"></el-table-column>
				<el-table-column prop="number" label="工号"></el-table-column>
				<el-table-column prop="state" label="审核状态">
					<template slot-scope="scope">
						<span v-if="scope.row.state == 1">待审核</span>
						<span v-if="scope.row.state == 2">已通过</span>
						<span v-if="scope.row.state == 3">未通过</span>
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
			</el-table>

			<div class="block">
				<el-pagination @current-change="policeCurrentChange" :current-page.sync="policeCurrent" :page-sizes="[10, 20, 50, 100, 150, 200, 250, 300]"
				 :page-size="policeSize" layout="sizes, prev, pager, next, jumper" :total="policeTotal" @size-change="policeSizeChange">
				</el-pagination>
			</div>
		</el-dialog>



		<el-dialog title="添加部门" :visible.sync="dialogDepartment" width="60%" :close-on-click-modal="false">
			<div class="box">
				<el-form ref="form" :model="form" label-width="120px">
					<el-form-item label="部门等级">
						<el-select v-model="form.level" placeholder="请选择部门等级" @change="levelChange">
							<el-option v-for="(item, index) in levelList" :key="index" :label="item.name" :value="item.id">
							</el-option>
						</el-select>
					</el-form-item>
					<!-- 填写二级部门 -->
					<div v-if="form.level == 2">
						<el-form-item label="所属的一级部门">
							<el-select v-model="level.one" placeholder="请选择所属的一级部门" @change="levelOneChange">
								<el-option v-for="(item, index)  in levelOneList" :key="index" :label="item.title" :value="item.id">
								</el-option>
							</el-select>
						</el-form-item>
					</div>
					<!-- 填写三级部门 -->
					<div v-if="form.level == 3">
						<el-form-item label="所属的一级部门">
							<el-select v-model="level.one" placeholder="请选择所属的一级部门" @change="levelOneChange">
								<el-option v-for="(item, index)  in levelOneList" :key="index" :label="item.title" :value="item.id">
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="所属的二级部门">
							<el-select v-model="level.two" placeholder="请选择所属的二级部门" @change="levelTwoChange">
								<el-option v-for="(item, index)  in levelTwoList" :key="index" :label="item.title" :value="item.id">
								</el-option>
							</el-select>
						</el-form-item>
					</div>
					<div v-if="form.level == 4">
						<el-form-item label="所属的一级部门">
							<el-select v-model="level.one" placeholder="请选择所属的一级部门" @change="levelOneChange">
								<el-option v-for="(item, index)  in levelOneList" :key="index" :label="item.title" :value="item.id">
								</el-option>
							</el-select>
						</el-form-item>

						<el-form-item label="所属的二级部门">
							<el-select v-model="level.two" placeholder="请选择所属的二级部门" @change="levelTwoChange">
								<el-option v-for="(item, index)  in levelTwoList" :key="index" :label="item.title" :value="item.id">
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="所属的三级部门">
							<el-select v-model="level.three" placeholder="请选择所属的三级部门" @change="levelThreeChange">
								<el-option v-for="(item, index)  in levelThreeList" :key="index" :label="item.title" :value="item.id">
								</el-option>
							</el-select>
						</el-form-item>

					</div>
					<el-form-item label="部门名称">
						<el-input v-model="form.title" placeholder="请输入部门名称"></el-input>
					</el-form-item>
					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="newDepartment">提交</el-button>
						</el-form-item>
					</div>
				</el-form>
			</div>
		</el-dialog>

	</div>
</template>

<script>
	import API from '@/api//index.js'

	export default {
		data() {
			return {
				loading: true,
				dialogDepartment: false,
				search_level: '', // 搜索
				levelList: [{
						id: 1,
						name: '一级部门'
					},
					{
						id: 2,
						name: '二级部门'
					},
					{
						id: 3,
						name: '三级部门'
					},
					{
						id: 4,
						name: '四级部门'
					}
				],
				levelOneList: [], //  选择二级部门,获取一级部门列表
				levelTwoList: [], //选择三级部门,获取一二级部门列表
				levelThreeList: [], //选择三级部门,获取一二三级部门列表
				level: {
					one: '',
					two: '',
					three: ''
				},
				form: {
					title: '',
					parent_id: '',
					level: '', // 部门等级
				},
				tableData: [{}],

				dialogBindPolice: false, // 查看绑定的警员
				policeData: [],
				policeCurrent: 1,
				policeSize: 10,
				policeTotal: 0,
				department_id: '',

				dialogDel: false,
				id: '', // 删除id

				// 分页
				current: 1,
				size: 10,
				total: 0,

			}
		},
		mounted() {
			this.getDepartment();
		},
		methods: {
			// 获取部门列表
			getDepartment() {
				var self = this;
				API.policeLevels(1, 10).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
			},
			// 搜索
			search(val) {
				var self = this;
				self.loading = true;
				API.policeLevels(1, 10, val).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
			},
			addDepartment() {
				var self = this;
				self.dialogDepartment = true;
				self.form = {
					title: '',
					parent_id: '',
					level: '' // 部门等级
				}
				self.level = {
					one: '',
					two: '',
					three: ''
				}
			},
			// 选择部门等级
			levelChange(val) {
				var self = this
				switch (val) {
					case 1:
						self.form.parent_id = 1;
						break;
					case 2:
						self.form.parent_id = 2;
						// 获取一级部门
						API.policeLevels(1, 1000, 1, 1).then(res => {
							self.levelOneList = res.data
						})
						break;
					case 3:
						self.form.parent_id = 3;
						// 获取一级部门
						API.policeLevels(1, 1000, 1, 1).then(res => {
							self.levelOneList = res.data
						})
						break;
					case 4:
						// 获取一级部门
						API.policeLevels(1, 1000, 1, 1).then(res => {
							self.levelOneList = res.data
						})
						self.form.parent_id = 4;
				}
			},
			levelOneChange(val) {
				var self = this
				self.form.parent_id = val;
				API.policeLevels(1, 1000, 2, val).then(res => {
					self.levelTwoList = res.data;
					self.level.two = '';
					self.level.three = '';
				})
			},
			levelTwoChange(val) {
				var self = this;
				self.form.parent_id = val;
				API.policeLevels(1, 1000, 3, val).then(res => {
					self.levelThreeList = res.data;
					self.level.three = '';
				})
			},
			levelThreeChange(val) {
				var self = this;
				self.form.parent_id = val;
			},
			newDepartment() {
				var self = this;
				API.policeLevel(self.form).then(res => {
					self.dialogDepartment = false;
					self.$message.success('提交成功');
					self.getDepartment();
					self.form = {};
				})
			},

			// 操作
			handleEdit(index, row) {
				var self = this;
				self.dialogDepartment = true;
				self.form = {
					id: row.id,
					title: row.title,
					parent_id: row.parent_id,
					level: row.level // 部门等级
				}
			},

			// 查看绑定警员
			getBindPolice(index, row) {
				let self = this;
				self.dialogBindPolice = true;
				self.policeCurrent = 1;
				self.policeSize = 10;
				self.department_id = row.id;
				API.policemen(1, 10, '', row.id, '').then(res => {
					self.policeData = res.data;
					self.policeTotal = res.total;
				})
			},

			handleDel(index, row) {
				var self = this;
				self.dialogDel = true;
				self.id = row.id;
			},
			toDel() {
				var self = this;
				API.delUser(self.id).then(res => {
					self.$message.success('删除成功')
					self.dialogDel = false;
					self.getUsers();
					self.current = 1
				})
			},
			
			// 重新筛选
			resetSelect() {
				window.location.reload();
			},

			// 分页
			handleCurrentChange(val) {
				var self = this;
				self.current = val;
				self.loading = true;
				API.policeLevels(val, self.size, self.search_level).then(res => {
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
				API.policeLevels(self.current, val, self.search_level).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.total;
				}).catch(err => {
					self.loading = false;
				})
			},

			// 查看警员的分页
			policeCurrentChange(val) {
				let self = this;
				self.policeCurrent = val;
				API.policemen(val, self.policeSize, '', self.department_id, '').then(res => {
					self.policeData = res.data;
					self.policeTotal = res.total;
				})
			},

			policeSizeChange(val) {
				let self = this;
				self.policeSize = val;
				API.policemen(self.policeCurrent, val, '', self.department_id, '').then(res => {
					self.policeData = res.data;
					self.policeTotal = res.total;
				})
			}
		}
	}
</script>

<style scoped>
</style>
