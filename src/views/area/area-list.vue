<template>
	<div v-loading="loading" element-loading-text="获取数据中">
		<div class="handle-box">
			<div class="btn">
				<el-button type="primary" size="medium" @click="addPoliceArea">添加公安辖区</el-button>
			</div>
		</div>

		<el-dialog title="添加公安辖区" :visible.sync="dialogPoliceArea" width="50%">
			<div class="box">
				<el-form :model="form" label-width="80px">
					<el-form-item label="辖区名字">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="newPoliceArea">提交</el-button>
						</el-form-item>
					</div>
				</el-form>
			</div>
		</el-dialog>


		<!-- 树形呈现数据 -->
		<el-tree class="tree-container" :data="tableData" node-key="id" default-expand-all :expand-on-click-node="false" :props="treeProps">
			<div class="tree-item" slot-scope="{ node, data }">
				<div class="tree-name">{{ node.label }}</div>
				<div>
					<el-button type="text" size="mini" @click="() => edit(node, data)">
						编辑
					</el-button>
					<el-button type="text" size="mini" @click="() => append(node, data)">
						新增下级辖区
					</el-button>
					<el-popconfirm title="是否要删除该条数据" @confirm="remove(node, data)" style="margin-left: 10px;" cancelButtonType="primary">
						<el-button slot="reference" size="mini" type="text">删除</el-button>
					</el-popconfirm>
				</div>
			</div>
		</el-tree>

		<!-- <div class="block">
			<el-pagination @current-change="currentChange" :current-page.sync="current" :page-sizes="[10, 20, 50, 100, 150, 200, 250, 300]"
			 :page-size="size" layout="sizes, prev, pager, next, jumper" @size-change="sizeChange" :total="total">
			</el-pagination>
		</div> -->
	</div>
</template>

<script>
	import API from '@/api/index.js'
	export default {
		name: 'gradems',
		data() {
			return {
				loading: true,
				dialogPoliceArea: false,
				form: {
					name: '',
					parent_id: 0,
				},

				tableData: [],
				treeProps: {
					label: 'name'
				},
				// // 分页
				// current: 1, // 当前页
				// size: 10, // 每页出现几条
				// total: 0 // 总页数
			}
		},
		mounted() {
			this.getPoliceStation();
		},
		methods: {
			getPoliceStation() {
				var self = this;
				API.getpoliceStationSTree().then(res => {
					self.loading = false;
					self.tableData = res;
					console.log(self.tableData)
					self.total = res.total;
				}).catch(err => {
					this.loading = false;
				})
			},

			// 新增节点
			append(node, data) {
				console.log(node, data)
				const newChild = {
					parent_id: data.id,
					name: '请点击编辑输入名字',
					children: []
				};
				if (!data.children) {
					this.$set(data, 'children', []);
				}
				data.children.push(newChild);
			},

			// 删除节点
			remove(node) {
				console.log(node)
				var self = this;
				var id = node.data.id;
				console.log(id)
				API.delPoliceStation(id).then(res => {
					self.$message.success('删除成功');
					self.getPoliceStation();
					self.current = 1;
				}).catch(err => {
					self.loading = false;
				})
			},

			// 编辑节点名字
			edit(node) {
				var self = this;
				self.dialogPoliceArea = true;
				self.form = {
					name: '',
					parent_id: 0,
				}
				self.form.id = node.data.id;
				self.form.parent_id = node.data.parent_id;
				self.form.name = node.data.name;
				console.log(self.form)
			},

			// 添加新的AIP
			addPoliceArea() {
				var self = this;
				self.dialogPoliceArea = true;
				self.form = {
					name: '',
					parent_id: 0,
				}
			},

			newPoliceArea() {
				var self = this;
				API.policeStation(self.form).then(res => {
					self.dialogPoliceArea = false;
					self.$message.success("提交成功");
					self.getPoliceStation();
					self.current = 1;
					self.form = {};
				}).catch(err => {})
			},
			// 操作
			handleDel(index, row) {
				var self = this;
				console.log(row)
				var id = row.id
				API.delPoliceStation(id).then(res => {
					self.$message.success('删除成功');
					self.getPoliceStation();
					self.current = 1;
				}).catch(err => {
					self.loading = false;
				})
			},

			// 编辑
			handleEdit(index, row) {
				var self = this;
				self.pro_id = '';
				self.city_id = '';
				self.areas_id = '';
				self.hasCurrentArea = true;
				var edit_id = row.id;
				API.onePoliceStation(edit_id).then(res => {
					self.dialogPoliceArea = true;
					self.form.name = res.name;
					self.form.id = edit_id;
					self.form.parent_id = res.parent_id;
					if (res.parent) {
						self.currentArea = res.parent.name;
					} else {
						self.currentArea = '无';
					}
					this.getFather();
				}).catch(err => {
					self.loading = false;
				})
			},




			// 分页
			// currentChange(val) {
			// 	var self = this;
			// 	self.loading = true;
			// 	self.current = val;
			// 	API.getpoliceStationSTree(val, self.size).then(res => {
			// 		self.loading = false;
			// 		self.tableData = res;
			// 		self.total = res.total;
			// 	}).catch(err => {
			// 		self.loading = false;
			// 	})
			// },
			// // 每页显示条数
			// sizeChange(val) {
			// 	var self = this;
			// 	self.loading = true;
			// 	self.size = val;
			// 	API.getpoliceStationSTree(self.current, val).then(res => {
			// 		self.loading = false;
			// 		self.tableData = res;
			// 		self.total = res.total;
			// 	}).catch(err => {
			// 		self.loading = false;
			// 	})
			// },
		}
	}
</script>

<style scoped lang="scss">
	.tree-container {
		display: flex;
		flex-direction: column;
		font-size: 20px;
		
		.tree-item {
			width: 100%;
			display: flex;
			align-items: center;
			margin: 50px 0;
			
			.tree-name {
				width: 15vw;
			}
		}
	}
	
	
</style>

