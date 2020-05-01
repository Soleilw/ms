<template>
	<div class="main">
		<div class="btn">
			<el-button type="primary" icon="el-icon-delete" @click="delSelection()" :disabled="disabledDel">全部删除</el-button>
			<el-button type="primary" icon="el-icon-edit" @click="dialogFormVisible = true">添加</el-button>
		</div>
		<el-table :data="tableDate" ref="multipleTable" @selection-change="handleSelectionChange" class="aip-table">
			<el-table-column label="名称" type="selection" align="center"></el-table-column>
			<el-table-column prop="id" label="ID" align="center"></el-table-column>
			<el-table-column prop="address_id" label="地址ID" align="center"></el-table-column>
			<el-table-column prop="uuid" label="uuid" align="center"></el-table-column>
			<el-table-column prop="type" label="类型" align="center"></el-table-column>
			<el-table-column prop="remark" label="ReMark" align="center"></el-table-column>
			<el-table-column label="操作" align="center">
				<template slot-scope="scope">
					<el-button size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<div class="block">
			<el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage"
			layout="prev, pager, next, jumper" :total="totalPage">
			</el-pagination>
		</div>


		<el-dialog :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="地址ID">
					<el-input v-model="form.address_id"></el-input>
				</el-form-item>
				<el-form-item label="类型">
					<el-input v-model="form.type"></el-input>
				</el-form-item>
				<el-form-item label="uuid">
					<el-input v-model="form.uuid"></el-input>
				</el-form-item>
				<el-form-item label="remark">
					<el-input v-model="form.remark"></el-input>
				</el-form-item>
				<el-button type="primary" @click="newDevice">添加</el-button>
			</el-form>
		</el-dialog>
	</div>
</template>

<script>
	import API from '../../api/modules/device.js'

	export default {
		data() {
			return {
				dialogFormVisible: false,
				form: {
					address_id: '',
					type: '',
					uuid: '',
					remark: ''
				},
				tableDate: [],
				multipleSelection: [],
				disabledDel: true,
				currentPage: 1,
				totalPage: 0
			}
		},
		mounted() {
			this.getDevice();
		},
		methods: {
			handleDelete(index, row) {
				console.log(index, row);

			},
			// 获取AIP
			getDevice() {
				var self = this;
				API.devices(this.currentPage).then(response => {
					var res = response.data.data
					this.tableDate = res.data;
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
			newDevice() {
				var self = this;
				var formData = new FormData();
				formData.append('address_id', self.form.address_id),
					formData.append('type', self.form.type),
					formData.append('uuid', self.form.uuid),
					formData.append('remark', self.form.remark)
				API.device(formData).then(response => {
					self.dialogFormVisible = false;
					self.tableDate.push(formData);
					self.getDevice();
					self.currentPage = 1
				})
			},
			// 分页
			handleCurrentChange(val) {
				var self = this;
				self.getDevice();
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