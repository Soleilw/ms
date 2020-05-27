<template>
	<div>
		<div class="btn">
			<el-button type="primary" @click="dialogAPK = true">添加APK</el-button>
		</div>

		<el-dialog title="添加APK" :visible.sync="dialogAPK">
			<div class="box">
				<el-form :model="form" label-width="100px">
					<el-form-item label="APK名字">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="APK描述">
						<el-input v-model="form.description"></el-input>
					</el-form-item>
					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="newApk">添加</el-button>
						</el-form-item>
					</div>
				</el-form>

			</div>
		</el-dialog>

		<el-table :data="tableDate" ref="multipleTable">
			<el-table-column label="名称" type="selection" align="center"></el-table-column>
			<el-table-column prop="id" label="APKID" align="center"></el-table-column>
			<el-table-column prop="name" label="名称" align="center"></el-table-column>
			<el-table-column prop="description" label="描述" align="center"></el-table-column>
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
	</div>
</template>

<script>
	import API from '@/api/index.js'

	export default {
		name: 'gradems',
		data() {
			return {
				dialogAPK: false,
				form: {
					name: '',
					description: '',
				},
				tableDate: [],
				currentPage: 1,
				totalPage: 0
			}
		},
		mounted() {
			this.getApk();
		},
		methods: {
			getAip() {
				var self = this;
				API.aips(self.currentPage).then(res => {
					self.apiList = res.data;
				})
			},
			getApk() {
				var self = this;
				API.apks(self.currentPage).then(res => {
					self.tableDate = res.data;
					self.totalPage = res.total;
				})
			},
			// 添加新的AIP
			newApk() {
				var self = this;
				API.apk(self.form).then(res => {
					self.$message.success("提交成功");
					this.getApk();
					self.ApkForm = false;
					self.currentPage = 1;
					self.form = {};
				})
			},
			// 操作
			handleDel() {},

			// 分页
			handleCurrentChange(val) {
				var self = this;
				self.getApk();
			},
		}
	}
</script>

<style>
</style>
