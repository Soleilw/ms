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
			<el-table-column prop="remark" label="ReMark" align="center"></el-table-column>
			<el-table-column prop="state" label="State" align="center"></el-table-column>
			<el-table-column prop="app_id" label="AppId" align="center"></el-table-column>
			<el-table-column prop="api_key" label="ApiKey" align="center"></el-table-column>
			<el-table-column prop="secret_key" label="SectetKey" align="center"></el-table-column>
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
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="AppId">
					<el-input v-model="form.app_id"></el-input>
				</el-form-item>
				<el-form-item label="ApiKey">
					<el-input v-model="form.api_key"></el-input>
				</el-form-item>
				<el-form-item label="SectetKey">
					<el-input v-model="form.secret_key"></el-input>
				</el-form-item>
				<el-button type="primary" @click="newAip">添加</el-button>
			</el-form>
		</el-dialog>

	</div>
</template>

<script>
	import API from '../../api/modules/aip.js'

	export default {
		data() {
			return {
				dialogFormVisible: false,
				dialogFormAip: false,
				aipPage: '',
				form: {
					name: '小黄',
					app_id: '250',
					api_key: '250',
					secret_key: '250'
				},
				tableDate: [],
				multipleSelection: [],
				disabledDel: true,
				currentPage: 1,
				totalPage: 0
			}
		},
		mounted() {
			this.getAip();
		},
		methods: {
			handleDelete(index, row) {
				console.log(index, row);

			},
			// 获取AIP
			getAip() {
				var self = this;
				API.aips(self.currentPage).then(response => {
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
			newAip() {
				var self = this;
				var formData = new FormData();
				formData.append('name', self.form.name),
					formData.append('app_id', self.form.app_id),
					formData.append('api_key', self.form.api_key),
					formData.append('secret_key', self.form.secret_key)
				API.aip(formData).then(response => {
					self.dialogFormVisible = false;
					self.tableDate.push(formData);
					self.getAip();
					self.currentPage = 1
				})
			},
			// 分页
			handleCurrentChange(currentPage) {
				var self = this;
				self.getAip();
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
