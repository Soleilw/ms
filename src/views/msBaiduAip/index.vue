<template>
	<div class="main">
		<el-table :data="tableDate" ref="multipleTable" @selection-change="handleSelectionChange" class="aip-table">
			<el-table-column label="名称" type="selection" align="center"></el-table-column>
			<el-table-column prop="name" label="名称" align="center"></el-table-column>
			<el-table-column prop="app_id" label="AppId" align="center"></el-table-column>
			<el-table-column prop="api_key" label="ApiKey" align="center"></el-table-column>
			<el-table-column prop="secret_key" label="SectetKey" align="center"></el-table-column>
			<el-table-column label="操作" align="center">
				<template slot-scope="scope">
					<el-button size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<div class="btn">
			<el-button type="primary" icon="el-icon-delete" @click="delSelection()" :disabled="disabledDel">全部删除</el-button>
			<el-button type="primary" icon="el-icon-edit" @click="dialogFormVisible = true">添加</el-button>
			<el-button type="primary" icon="el-icon-download" @click="open">获取</el-button>
		</div>
		
		<el-dialog :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="name">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="AppId">
					<el-input v-model="form.aip_id"></el-input>
				</el-form-item>
		<!-- 		<el-form-item label="ApiKey">
					<el-input v-model="form.api_key"></el-input>
				</el-form-item>
				<el-form-item label="SectetKey">
					<el-input v-model="form.secret_key"></el-input>
				</el-form-item> -->
				<el-button type="primary" @click="newAip">添加</el-button>
			</el-form>
		</el-dialog>
	</div>
</template>

<script>
	import aip from '../../api/modules/aip.js'
	
	export default {
		data() {
			return {
				dialogFormVisible: false,
				// form: {
				// 	name: '小黄',
				// 	app_id: '250',
				// 	api_key: '250',
				// 	secret_key: '250'
				// },
				// form: {
				// 	name: '小黄',
				// 	aip_id: '1',
				// },
				form: {
					 project_id: "1",
					    address: "et",
					    contact: "ut",
					    face_groups: [
					        {
					            name: "vitae",
					            is_default: "1"
					        }
					    ]
				},
				tableDate: [{
						name: '1',
						app_id: '1',
						api_key: '1',
						secret_key: '1'
					},
					{
						name: '2',
						app_id: '2',
						api_key: '2',
						secret_key: '2'
					},
					{
						name: '3',
						app_id: '3',
						api_key: '3',
						secret_key: '3'
					},
					{
						name: '4',
						app_id: '4',
						api_key: '4',
						secret_key: '4'
					}
				],
				multipleSelection: [],
				disabledDel: true,
				value: ''
			}
		},
		methods: {
			handleDelete(index, row) {
				console.log(index, row);

			},
			// 获取AIP
			open() {
				this.$prompt('请输入页数', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					// inputPattern:/^\d{1,4}$/,
					// inputErrorMessage: '请输入页数'
					inputType: 'Select',
					inputValue: this.value
				}).then((inputValue) => {
					// aip.aips(inputValue).then(response => {
					// 	console.log(response)
					// })
					
					aip.projects(1).then(response => {
						console.log(response)
					})
				}).catch(() => {})
			},
			// 选择表格行
			handleSelectionChange (val) {
				this.multipleSelection = val;
				this.disabledDel = false;
				
				if (this.multipleSelection == '' ) {
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
				// var self = this;
				// var formData = new FormData();
				// formData.append('name', self.form.name),
				// formData.append('app_id', self.form.app_id),
				// formData.append('api_key', self.form.api_key),
				// formData.append('secret_key', self.form.secret_key)
				// aip.aip(formData).then(response => {
				// 	console.log(111)
				// })
				// 项目
				// var self = this;
				// var formData = new FormData();
				// formData.append('name', self.form.name),
				// formData.append('aip_id', self.form.aip_id)
				// aip.project(formData).then(response => {
				// 	console.log(111)
				// })
				var self = this;
				var Qs = require('qs');
				var body = Qs.stringify(this.form);
				// for(var i = 0; i < this.form.face_groups.length; i++) {
					
				// 	formData.append(`face_groups[${i}].name`, this.form.face_groups[i].name),
				// 	formData.append(`face_groups[${i}].is_default`, this.form.face_groups[i].is_default)
				// }
				aip.address(body).then(response => {
					console.log(111)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.btn {
		margin-top: 1vw;
	}
	
	.el-table {
		border: 1px solid #dfe6ec;
	}
</style>
