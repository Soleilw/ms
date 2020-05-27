<template>
	<div>
		<div class="btn">
			<el-button type="primary" @click="dialogApk = true">添加AIP</el-button>
		</div>

		<el-dialog title="添加年级" :visible.sync="dialogApk">
			<div class="box">
				<el-form :model="form" label-width="80px">
					<el-form-item label="APK名字">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="APPID">
						<el-input v-model="form.app_id"></el-input>
					</el-form-item>
					<el-form-item label="ApiKEY">
						<el-input v-model="form.api_key"></el-input>
					</el-form-item>
					<el-form-item label="SectetKey">
						<el-input v-model="form.secret_key"></el-input>
					</el-form-item>
					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="newAip">提交</el-button>
						</el-form-item>
					</div>
				</el-form>
			</div>
		</el-dialog>

		<el-table :data="tableDate" ref="multipleTable">
			<el-table-column label="名称" type="selection" align="center"></el-table-column>
			<el-table-column prop="id" label="ID" align="center"></el-table-column>
			<el-table-column prop="name" label="名称" align="center"></el-table-column>
			<el-table-column prop="remark" label="备注" align="center"></el-table-column>
			<el-table-column prop="state" label="State" align="center"></el-table-column>
			<el-table-column prop="app_id" label="AppId" align="center"></el-table-column>
			<el-table-column prop="api_key" label="ApiKey" align="center" width="300px"></el-table-column>
			<el-table-column prop="secret_key" label="SectetKey" align="center" width="300px"></el-table-column>
			<el-table-column label="操作" align="center">
				<template slot-scope="scope">
					<el-button size="mini" type="danger" @click="handleDel(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<div class="block">
			<el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="10" layout="prev, pager, next, jumper"
			 :total="totalPage">
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
				dialogApk: false,
				form: {
					name: '',
					app_id: '',
					api_key: '',
					secret_key: ''
				},
				tableDate: [],
				currentPage: 1,
				totalPage: 0
			}
		},
		mounted() {
			this.getAip();
		},
		methods: {
			getAip() {
				var self = this;
				API.aips(self.currentPage).then(res => {
					self.tableDate = res.data;
					self.totalPage = res.total;
				})
			},
			// 添加新的AIP
			newAip() {
				var self = this;
				API.aip(self.form).then(res => {
					self.dialogApk = false;
					self.$message.success("提交成功");
					self.getAip();
					self.currentPage = 1
					self.form = {}
				})
			},
			// 操作
			handleDel(index, row) {
				var self = this;
				console.log(row)
				var id = row.id
				API.delAip(id).then(res => {
					self.$message.success('删除成功');
					self.getAip();
					self.currentPage = 1;
				})
			},

			// 分页
			handleCurrentChange(val) {
				var self = this;
				self.getAip();
			},
		}
	}
</script>

<style>
</style>
