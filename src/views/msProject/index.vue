<template>
	<div class="main">
		<div class="btn">
			<el-button type="primary" icon="el-icon-delete" @click="delSelection()" :disabled="disabledDel">全部删除</el-button>
			<el-button type="primary" icon="el-icon-edit" @click="dialogFormVisible = true">添加</el-button>
		</div>
		<el-table :data="tableDate" ref="multipleTable" @selection-change="handleSelectionChange" class="aip-table">
			<el-table-column label="名称" type="selection" align="center"></el-table-column>
			<el-table-column prop="id" label="ID" align="center"></el-table-column>
			<el-table-column prop="name" label="名称" align="center"></el-table-column>
			<el-table-column prop="state" label="State" align="center"></el-table-column>
			<el-table-column prop="app_id" label="AppId" align="center"></el-table-column>
			<el-table-column prop="aip_id" label="AipId" align="center"></el-table-column>
			<el-table-column prop="secret" label="Sectet" align="center"></el-table-column>
			<el-table-column label="操作" align="center">
				<template slot-scope="scope">
					<el-button size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<div class="block">
			<el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage"
			:page-size="10" layout="prev, pager, next, jumper" :total="totalPage">
			</el-pagination>
		</div>


		<el-dialog :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="name">
					<el-input v-model="form.aip_id"></el-input>
				</el-form-item>
				<el-form-item label="AppId">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-button type="primary" @click="newProject">添加</el-button>
			</el-form>
		</el-dialog>
	</div>
</template>

<script>
	import API from '../../api/modules/project.js'

	export default {
		data() {
			return {
				dialogFormVisible: false,
				form: {
					name: '小黄',
					aip_id: '1'
				},
				tableDate: [],
				multipleSelection: [],
				disabledDel: true,
				currentPage: 1,
				totalPage: 0
			}
		},
		mounted() {
			this.getProject();
		},
		methods: {
			handleDelete(index, row) {
				console.log(index, row);

			},
			// 获取AIP
			getProject() {
				var self = this;
				API.projects(self.currentPage).then(response => {
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

			// 添加新的AIP			
			newProject() {
				var self = this;
				var formData = new FormData();
				formData.append('name', self.form.name),
				formData.append('aip_id', self.form.aip_id)
				API.project(formData).then(response => {
					self.dialogFormVisible = false;
					self.tableDate.push(formData);
					self.getProject();
					self.currentPage = 1
				})
			},
			// 分页
			handleCurrentChange(val) {
				var self = this;
				self.getProject();
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