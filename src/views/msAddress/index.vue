<template>
	<div class="main">
		<div class="btn">
			<el-button type="primary" icon="el-icon-delete" @click="delSelection()" :disabled="disabledDel">全部删除</el-button>
			<el-button type="primary" icon="el-icon-edit" @click="dialogFormVisible = true">添加</el-button>
		</div>
		<el-table :data="tableDate" ref="multipleTable" @selection-change="handleSelectionChange" class="aip-table">
			<el-table-column label="名称" type="selection" align="center"></el-table-column>
			<el-table-column prop="id" label="ID" align="center"></el-table-column>
			<el-table-column prop="project_id" label="项目ID" align="center"></el-table-column>
			<el-table-column prop="address" label="地址" align="center"></el-table-column>
			<el-table-column prop="contact" label="联系方式" align="center"></el-table-column>
			<el-table-column prop="address_uuid" label="address_uuid" align="center"></el-table-column>
			<el-table-column label="操作" align="center">
				<template slot-scope="scope">
					<el-button size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<div class="block">
			<el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="10" layout="prev, pager, next, jumper"
			 :total="totalPage">
			</el-pagination>
		</div>


		<el-dialog :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="项目ID">
					<el-input v-model="form.project_id"></el-input>
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
				</div>
				<el-button @click="addFace">添加人脸姓名</el-button>
				<el-button @click="delFace">删除人脸姓名</el-button>
				<el-button type="primary" @click="newAddress">添加</el-button>
			</el-form>
		</el-dialog>
	</div>
</template>

<script>
	import API from '../../api/modules/address.js'

	export default {
		data() {
			return {
				dialogFormVisible: false,
				form: {
					project_id: '1',
					address: '奥园广场',
					contact: '123456789',
					face_groups: []
				},
				face_groups_name: '2516',
				tableDate: [],
				multipleSelection: [],
				disabledDel: true,
				currentPage: 1,
				totalPage: 0
			}
		},
		mounted() {
			this.getAddress();
		},
		methods: {
			handleDelete(index, row) {
				console.log(index, row);

			},
			// 获取AIP
			getAddress() {
				var self = this;
				API.addresses(self.currentPage).then(response => {
					var res = response.data.data
					self.tableDate = res.data;
					self.totalPage = res.total;
				})
			},
			// 选择表格行
			handleSelectionChange(val) {
				this.multipleSelection = val;
				this.disabledDel = false;

				if (this.multipleSelection == '') {
					this.disabledDel = true;
				}
			},
			// 删除多行
			delSelection(rows) {
				if (rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.delSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			// handleChange() {
			// 	var self = this;
			// 	for (var i = 0; i < self.form.face_groups.length; i++) {
			// 		if (self.is_default === true) {
			// 			self.form.face_groups[i].is_default = 1
			// 		} else if (self.is_default === false) {
			// 			self.form.face_groups[i].is_default = 0
			// 		}
			// 	}
			// },
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
			newAddress() {
				var self = this;
				// for (var i = 0; i < self.form.face_groups.length; i++) {
				// 	if (self.face_groups_name) {
				// 		self.form.face_groups[i].name = self.face_groups_name
				// 	}
				// 	if (self.is_default === false) {
				// 		self.form.face_groups[i].is_default = 0
				// 	}
				// }
				var Qs = require('qs');
				var body = Qs.stringify(this.form);
				API.address(body).then(response => {
					self.dialogFormVisible = false;
					self.tableDate.push(body);
					self.getAddress();
					self.currentPage = 1
				})
			},
			// 分页
			handleCurrentChange(val) {
				var self = this;
				self.getAddress();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.btn {
		margin-bottom: 1vw;
	}

	.el-table {
		border: 1px solid #dfe6ec;
	}

	.block {
		text-align: center;
		margin-top: 1vw;
	}
</style>
