<template>
	<div v-loading="loading" element-loading-text="获取数据中">
		<div class="handle-box">
			<div class="btn">
				<el-button type="primary" @click="addDoubtable">添加可疑人脸</el-button>
			</div>
		</div>



		<el-dialog title="添加可疑人脸" :visible.sync="dialogDoubtable" :close-on-click-modal="false" width="80%" @close="clearForm">
			<div class="box">
				<el-tabs v-model="activeName" @change="tabChange">
					<el-tab-pane label="上传单个可疑人脸" name="oneDoubtable">
						<el-form :model="form" label-width="120px">
							<el-form-item label="姓名">
								<el-input v-model="form.name" placeholder="请输入姓名"></el-input>
							</el-form-item>
							<el-form-item label="身份证号">
								<el-input v-model="form.number" placeholder="请输入身份证号"></el-input>
							</el-form-item>
							<el-form-item label="可疑性质">
								<el-select v-model="form.type" placeholder="请选择可疑性质" @change="changeNatureType">
									<el-option v-for="(name, value) in dangerNatureList" :key="name" :label="name" :value="value"></el-option>
								</el-select>
							</el-form-item>
							<div v-if="form.type == 'other'">
								<el-form-item label="自定义可疑性质">
									<el-input v-model="form.other_string" placeholder="请输入可疑性质"></el-input>
								</el-form-item>
							</div>

							<el-form-item label="可疑分类">
								<el-select v-model="form.alert_type" placeholder="请选择可疑分类" @change="alertTypeChange">
									<el-option v-for="(name, value) in dangerTypeList" :key="name" :label="name" :value="value"></el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="通知相似度">
								<el-input v-model="form.notify_score" placeholder="请输入通知相似度(保留一位小数点,例如78.9)"></el-input>
							</el-form-item>
							<el-form-item label="通知列表">
								<el-input type="textarea" @change="changeNotifyUser" v-model="form.notify_user" placeholder="请输入手机号码,多个手机号用逗号分隔(例如: +8613212341234,8613212341234)"></el-input>
							</el-form-item>
							<el-form-item label="选择警员">
								<!-- 根据辖区/部门/姓名去选择 -->
								<el-select v-model="way" placeholder="请选择方式" @change="methodChange">
									<el-option v-for="(item, index) in methodList" :key="index" :label="item.name" :value="item.value"></el-option>
								</el-select>
							</el-form-item>
							<!-- 根据辖区选择 -->
							<div v-if="way == 1">
								<el-form-item>
									<el-select v-model="station" placeholder="请选择辖区" @change="changeArea">
										<el-option v-for="(item, index) in areaList" :key="index" :label="item.name" :value="item.id"></el-option>
									</el-select>
								</el-form-item>
							</div>
							<div v-if="way == 1 && station">
								<el-form-item>
									<el-transfer filterable v-model="policeNameList" :data="policeList" :titles="['姓名', '选中警员']" :button-texts="['取消', '确定']"
									 @change="policeNameChange">
										<span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
									</el-transfer>
								</el-form-item>
							</div>
							<!-- 根据部门选择 -->
							<div v-if="way == 2">
								<el-form-item>
									<el-select v-model="department_one" placeholder="请选择所属的一级部门" @change="ChangeLevelOne" style="margin-right: 10px;">
										<el-option v-for="(item, index)  in levelOneList" :key="index" :label="item.title" :value="item.id">
										</el-option>
									</el-select>
									<el-select v-model="department_two" placeholder="请选择所属的二级部门" @change="ChangeLevelTwo" style="margin-right: 10px;">
										<el-option v-for="(item, index)  in levelTwoList" :key="index" :label="item.title" :value="item.id">
										</el-option>
									</el-select>
									<el-select v-model="department_three" placeholder="请选择所属的三级部门" @change="ChangeLevelThree" style="margin-right: 10px;">
										<el-option v-for="(item, index)  in levelThreeList" :key="index" :label="item.title" :value="item.id">
										</el-option>
									</el-select>
									<el-select v-model="department_four" placeholder="请选择所属的四级部门" @change="ChangeLevelFour" style="margin-right: 10px;">
										<el-option v-for="(item, index)  in levelFourList" :key="index" :label="item.title" :value="item.id">
										</el-option>
									</el-select>
									<el-button type="primary" @click="resetSelect">重新筛选</el-button>
								</el-form-item>
							</div>
							<div v-if="way == 2 && department">
								<el-form-item>
									<el-transfer filterable v-model="policeNameList" :data="policeList" :titles="['姓名', '选中警员']" :button-texts="['取消', '确定']"
									 @change="policeNameChange">
										<span slot-scope="{ option }">
											{{ option.key }} - {{ option.label }}</span>
									</el-transfer>
								</el-form-item>
							</div>
							<!-- 根据姓名选择 -->
							<div v-if="way == 3">
								<el-form-item>
									<el-transfer v-model="policeNameList" :data="policeList" filterable :titles="['姓名', '选中警员']" :button-texts="['到左边', '到右边']"
									 @change="policeNameChange">
										<span slot-scope="{ option }">
											<span> {{ option.key }} - {{ option.label }}</span>
										</span>
									</el-transfer>
								</el-form-item>
							</div>
							<!-- 	<div class="tips">
								<p><span>提示：</span>如有人脸照片会覆盖掉原有的人脸照片！</p>
							</div> -->
							<el-form-item label="上传人脸图片">
								<el-upload action="https://upload-z2.qiniup.com" ref="upload" :limit="1" :before-upload="beforeAvatarUpload"
								 :auto-upload="false" :on-success="handleAvatarSuccess" :on-change="handleChange" :on-exceed="handleExceed"
								 :data="imgData" list-type="picture-card">
									<img v-if="form.href" style="max-width:150px;max-height:150px;" :src="form.href" />
									<el-button v-else size="small" type="primary">选择图片</el-button>
								</el-upload>
							</el-form-item>
							<div class="submit">
								<el-form-item>
									<el-button type="primary" @click="newDoubtablet">提交</el-button>
								</el-form-item>
							</div>
						</el-form>
					</el-tab-pane>
					<el-tab-pane label="批量上传可疑人脸" name="allDoubtable">
						<el-form :model="form" label-width="100px">
							<el-form-item label="上传压缩包">
								<el-upload action="https://api.fengniaotuangou.cn/import/danger/faces" ref="piliangUpload" :limit="1"
								 :before-upload="piliangBeforeAvatarUpload" :on-success="piliangAvatarSuccess" :on-remove="piliangRemove"
								 :on-exceed="piliangExceed" :on-error="piliangErr">
									<el-button type="primary">选择压缩包上传</el-button>
								</el-upload>
								<!-- <el-progress v-if="hasFile === true" :text-inside="true" :stroke-width="15" :percentage="percentage"></el-progress> -->
								<!-- 				<el-upload action="https://upload-z2.qiniup.com" ref="upload" :before-upload="beforeAvatarUpload" :auto-upload="false"
								 :on-success="handleAvatarSuccess" :on-remove="handleRemove" :on-exceed="handleExceed" :on-change="handleChange"
								 :data="imgData" :file-list="fileList" multiple list-type="picture-card">
									<el-button size="small" type="primary">选择图片</el-button>
								</el-upload> -->
								<!-- <div v-if="hasNewImage" style="color: red; font-size: 12px;">* 点击文件名可删除所选图片</div>
						
								<div class="up-img" v-if="old_href">
									<span style="display: flex;justify-items: center;color: #409eff;">原人脸图片</span>
									<img class="pic-box" :src="old_href">
								</div>
								<div class="up-img" v-if="form.href">
									<span style="display: flex;justify-items: center;color: #67C23A;">新人脸图片</span>
									<img class="pic-box" :src="form.href">
								</div>
								<div class="up-img" v-else>
									<img class="pic-box" :src="change_href">
								</div> -->
							</el-form-item>
							<el-form-item label="上传记录">
								<el-button type="primary" @click="changeHistory">查看上传记录</el-button>
							</el-form-item>

							<div class="box" v-show="history">
								<div style="margin-bottom: 10px;">
									<el-select v-model="historyState" placeholder="请选择处理状态" filterable @change="stateChange">
										<el-option v-for="(item, index) in stateList" :key="index" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</div>
								<el-table :data="historyDate" border :header-cell-style="{background:'#f0f0f0', color: '#003366'}" max-height="620">
									<el-table-column prop="id" label="ID"></el-table-column>
									<el-table-column prop="file_name" label="文件名"></el-table-column>
									<el-table-column prop="state" label="上传状态">
										<template slot-scope="scope">
											<span v-if="scope.row.state == 1">待执行</span>
											<span v-if="scope.row.state == 2">成功</span>
											<span v-if="scope.row.state == 3">失败</span>
										</template>
									</el-table-column>
									<el-table-column prop="type" label="类型"></el-table-column>
								</el-table>
								<div class="block">
									<el-pagination @current-change="historyCurrentChange" :current-page.sync="historyCurrent" :page-sizes="[10, 20, 50, 100, 150, 200, 250, 300]"
									 :page-size="historySize" layout="sizes, prev, pager, next, jumper" @size-change="historySizeChange" :total="historyTotal">
									</el-pagination>
								</div>
							</div>
							<!-- <div class="submit">
								<el-form-item>
									<el-button type="primary" @click="newDoubtablet">提交</el-button>
								</el-form-item>
							</div> -->
						</el-form>
					</el-tab-pane>
				</el-tabs>



			</div>
		</el-dialog>

		<el-table :data="tableData" border :header-cell-style="{background:'#f0f0f0', color: '#003366'}" max-height="620">
			<el-table-column prop="id" label="ID"></el-table-column>
			<el-table-column prop="name" label="姓名"></el-table-column>
			<el-table-column prop="number" label="身份证号"></el-table-column>
			<el-table-column prop="danger_type_string" label="告警分类"></el-table-column>
			<el-table-column prop="alert_type_string" label="告警性质"></el-table-column>
			<el-table-column prop="href" label="人脸图片">
				<template slot-scope="scope">
					<el-popover placement="bottom" title="" trigger="click">
						<img :src="scope.row.href" style="max-width:800px;max-height:800px;" />
						<img slot="reference" :src="scope.row.href" style="max-width:180px;max-height:80px;">
					</el-popover>
				</template>
			</el-table-column>
			<el-table-column prop="alert_type_string" label="告警状态">
				<template slot-scope="scope">
					<el-switch v-model="scope.row.notify" active-color="#003366" @change="notifyChange(scope.row.notify,scope.$index, scope.row)">
					</el-switch>
				</template>
			</el-table-column>
			<el-table-column label="操作" width="500px">
				<template slot-scope="scope">
					<el-button type="text"  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button type="text"  @click="noticeList(scope.$index, scope.row)">通知列表</el-button>
					<!-- <el-button type="primary" size="mini" @click="handleReset(scope.$index, scope.row)">通知记录</el-button> -->
					<el-button type="text"  @click="snapLogs(scope.$index, scope.row)">抓拍记录</el-button>
				</template>
			</el-table-column>
		</el-table>

		<div class="block">
			<el-pagination @current-change="currentChange" :current-page.sync="current" :page-sizes="[10, 20, 50, 100, 150, 200, 250, 300]"
			 :page-size="size" layout="sizes, prev, pager, next, jumper" @size-change="sizeChange" :total="total">
			</el-pagination>
		</div>

		<!-- 通知列表 -->
		<el-dialog title="通知列表" :visible.sync="dialogNotice" :close-on-click-modal="false" width="80%">
			<el-table :data="noticeTableData" border :header-cell-style="{background:'#f0f0f0', color: '#003366'}" max-height="620">
				<el-table-column prop="id" label="ID"></el-table-column>
				<el-table-column prop="danger.name" label="姓名"></el-table-column>
				<el-table-column prop="danger.number" label="身份证号"></el-table-column>
				<el-table-column prop="handler_name" label="处理人"></el-table-column>

			</el-table>
			<div class="block">
				<el-pagination @current-change="noticeCurrentChange" :current-page.sync="noticeCurrent" :page-sizes="[10, 20, 50, 100, 150, 200, 250, 300]"
				 :page-size="noticeSize" layout="sizes, prev, pager, next, jumper" @size-change="noticeSizeChange" :total="noticeTotal">
				</el-pagination>
			</div>
		</el-dialog>

		<!-- 抓拍记录 -->
		<el-dialog title="抓拍记录" :visible.sync="dialogSnapLogs" :close-on-click-modal="false" width="80%">
			<el-table :data="snapLogsData" border :header-cell-style="{background:'#f0f0f0', color: '#003366'}" max-height="620">
				<el-table-column prop="id" label="ID"></el-table-column>
				<el-table-column prop="danger.name" label="姓名"></el-table-column>
				<el-table-column prop="danger.number" label="身份证号"></el-table-column>
				<el-table-column prop="danger.href" label="照片">
					<template slot-scope="scope">
						<el-popover placement="top-start" title="" trigger="click">
							<img :src="scope.row.danger.href" style="max-width:800px;max-height:800px;" />
							<img slot="reference" :src="scope.row.danger.href" style="max-width:180px;max-height:80px;">
						</el-popover>
					</template>
				</el-table-column>
				<el-table-column prop="log.image" label="抓拍照片">
					<template slot-scope="scope">
						<el-popover placement="top-start" title="" trigger="click">
							<img :src="scope.row.log.image" style="max-width:800px;max-height:800px;" />
							<img slot="reference" :src="scope.row.log.image" style="max-width:180px;max-height:80px;">
						</el-popover>
					</template>
				</el-table-column>
				<el-table-column prop="score" label="相似度">
				</el-table-column>
				<el-table-column prop="address" label="抓拍地点">
				</el-table-column>
				<el-table-column prop="log.timestamp" label="抓拍时间">
				</el-table-column>

			</el-table>
			<div class="block">
				<el-pagination @current-change="snapLogsCurrentChange" :current-page.sync="snapLogsCurrent" :page-sizes="[10, 20, 50, 100, 150, 200, 250, 300]"
				 :page-size="snapLogsSize" layout="sizes, prev, pager, next, jumper" @size-change="snapLogsSizeChange" :total="snapLogsTotal">
				</el-pagination>
			</div>
		</el-dialog>

	</div>
</template>

<script>
	import API from '@/api/index.js'
	import md5 from 'blueimp-md5'
	import axios from 'axios'
	import DATE from '@/utils/date.js'
	import Reg from '@/utils/Reg.js'

	export default {
		name: 'gradems',
		data() {
			return {
				loading: true,
				dialogDoubtable: false,
				// 上传人脸
				imgData: {
					key: '',
					token: ''
				},
				fileList: [],
				imgList: [], // 图片列表
				fileName: '',
				suffix: '',
				qiniuaddr: "https://tu.fengniaotuangou.cn", // 七牛云图片外链地址
				change_href: '', // 上传的本地图片
				activeName: 'oneDoubtable',
				form: {
					href: '',
					name: '',
					number: '',
					type: '',
					alert_type: '',
					other_string: '',
					notify_score: '',
					notify_user: '',
				},
				arr_police_name: '',
				arr_notify_user: [], // 清空数组
				tableData: [],
				notify: false,
				id: '',
				dialogDel: false,
				// 分页
				current: 1, // 当前页
				size: 10, // 每页出现几条
				total: 0, // 总页数

				dialogSnapLogs: false, // 抓拍记录
				snapLogsData: [], // 抓拍记录
				snapLogsCurrent: 1, // 当前页
				snapLogsSize: 10, // 每页出现几条
				snapLogsTotal: 0, // 总页数

				dialogNotice: false, // 通知列表
				noticeTableData: [],
				noticeCurrent: 1, // 当前页
				noticeSize: 10, // 每页出现几条
				noticeTotal: 0, // 总页数
				dangers: [], // 可疑人脸id字符串数组

				dangerNatureList: {}, // 可疑性质
				nature: '',
				dangerTypeList: {}, // 可疑分类

				methodList: [{
						name: '根据辖区选择',
						value: 1
					},
					{
						name: '根据部门选择',
						value: 2
					},
					{
						name: '根据姓名搜索',
						value: 3
					}
				], // 根据辖区/部门/搜索姓名选择警员
				way: '',
				areaList: [], // 获取辖区
				station: '',

				departmentList: [], // 获取部门
				levelOneList: [], //  选择二级部门,获取一级部门列表
				levelTwoList: [],
				levelThreeList: [],
				levelFourList: [],
				department: '',
				department_one: '',
				department_two: '',
				department_three: '',
				department_four: '',

				policeList: [], // 获取警员列表
				policeNameList: [], // 选中的警员

				// 批量上传
				history: false, // 查看上传记录
				historyDate: [],
				historyCurrent: 1,
				historySize: 10,
				historyTotal: 0,

				historyState: 0,
				stateList: [{
						label: '全部',
						value: 0
					},
					{
						label: '待执行',
						value: 1
					},
					{
						label: '成功',
						value: 2
					},
					{
						label: '失败',
						value: 3
					}
				],
			}
		},
		mounted() {
			this.getDangerFaces();
			this.getLevelOne(); // 获取一级部门
			// 获取辖区
			API.policeStations(1, 100).then(res => {
				this.areaList = res.data;
			})

		},
		methods: {
			getDangerFaces() {
				var self = this;
				API.dangerFaces(self.current, 10).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.total;
					res.data.forEach(item => {
						item.notify == 1 ? item.notify = true : item.notify = false;
					})
				}).catch(err => {
					self.loading = false;
				})
			},

			// 改变告警状态
			notifyChange(val, index, row) {
				var self = this;
				console.log(val, index, row)
				let notifyData = {}
				if (val == true) {
					notifyData = {
						id: row.id,
						notify: 1
					}
					API.notifyChange(notifyData).then(res => {
						self.$message.success("提交成功");
						self.getDangerFaces();
					})
				} else {
					notifyData = {
						id: row.id,
						notify: 2
					}
					API.notifyChange(notifyData).then(res => {
						self.$message.success("提交成功");
						self.getDangerFaces();
					})
				}
			},
			// 根据辖区/部门/姓名选择
			methodChange(val) {
				var self = this;
				self.station = '';
				self.department = '';
				self.department_one = '';
				self.department_two = '';
				self.department_three = '';
				self.department_four = '';
				self.policeList = [];
				self.policeNameList = [];
				if (val == 3) {
					this.getPolice(); // 获取警员列表
				}
			},
			// 根据辖区获取警员列表
			changeArea(val) {
				var self = this;
				self.policeList = [];
				self.policeNameList = [];
				API.policemen(1, 1000000, val).then(res => {
					var policeData = res.data;
					for (let i = 0; i < policeData.length; i++) {
						self.policeList.push({
							key: '+86' + policeData[i].phone,
							label: policeData[i].name
						});
					}
					return self.policeList;
				})
			},
			// 获取警员列表
			getPolice() {
				var self = this;
				API.policemen(1, 1000000).then(res => {
					var policeData = res.data;
					for (let i = 0; i < policeData.length; i++) {
						self.policeList.push({
							key: '+86' + policeData[i].phone,
							label: policeData[i].name,
						});
					}
					return self.policeList;
				})
			},
			// 获取一级部门
			getLevelOne() {
				var self = this
				API.policeLevels(1, 10, 1, 1).then(res => {
					self.levelOneList = res.data;
				})
			},
			ChangeLevelOne(val) {
				var self = this;
				self.department = val;
				self.policeList = [];
				self.policeNameList = [];
				API.policemen(1, 1000000, '', val).then(res => {
					var policeData = res.data;
					for (let i = 0; i < policeData.length; i++) {
						self.policeList.push({
							key: '+86' + policeData[i].phone,
							label: policeData[i].name
						});
					}
					return self.policeList;
				})
				API.policeLevels(1, 10, 2, val).then(res => {
					self.levelTwoList = res.data;
					self.department_two = ''
					self.department_three = ''
					self.department_four = ''
				})
			},
			ChangeLevelTwo(val) {
				var self = this;
				self.department = val;
				self.policeList = [];
				self.policeNameList = [];
				API.policemen(1, 1000000, '', val).then(res => {
					var policeData = res.data;
					for (let i = 0; i < policeData.length; i++) {
						self.policeList.push({
							key: '+86' + policeData[i].phone,
							label: policeData[i].name
						});
					}
					return self.policeList;
				})
				API.policeLevels(1, 10, 3, val).then(res => {
					self.levelThreeList = res.data;
					self.department_three = '';
					self.department_four = '';
				})
			},
			ChangeLevelThree(val) {
				var self = this;
				self.department = val;
				self.policeList = [];
				self.policeNameList = [];
				API.policemen(1, 1000000, '', val).then(res => {
					var policeData = res.data;
					for (let i = 0; i < policeData.length; i++) {
						self.policeList.push({
							key: '+86' + policeData[i].phone,
							label: policeData[i].name
						});
					}
					return self.policeList;
				})
				API.policeLevels(1, 10, 4, val).then(res => {
					self.levelFourList = res.data;
					self.department_four = ''
				})
			},
			ChangeLevelFour(val) {
				var self = this;
				self.department = val;
				self.policeList = [];
				self.policeNameList = [];
				API.policemen(1, 1000000, '', val).then(res => {
					var policeData = res.data;
					for (let i = 0; i < policeData.length; i++) {
						self.policeList.push({
							key: '+86' + policeData[i].phone,
							label: policeData[i].name
						});
					}
					return self.policeList;
				})
			},
			// 重新筛选
			resetSelect() {
				var self = this;
				self.department = '';
				self.department_one = '';
				self.department_two = '';
				self.department_three = '';
				self.department_four = '';
			},

			// 切换tab
			tabChange(val) {
				this.getQiniuToken();
			},

			// 添加人脸
			addDoubtable() {
				var self = this;
				self.getQiniuToken();
				self.dialogDoubtable = true;
				API.dangerTypes().then(res => {
					self.dangerNatureList = res.type;
					self.dangerTypeList = res.alert_type;
				})
				self.form = {
					href: '',
					name: '',
					number: '',
					type: '',
					alert_type: '',
					other_string: '',
					notify_score: '',
					notify_user: '',
				};
				self.arr_notify_user = '';
			},

			// 选择可疑性质
			changeNatureType(val) {
				if (val != 'other') {
					this.form.other_string = '';
				}
			},
			// 选择可疑分类
			alertTypeChange(val) {
				console.log(val)
			},

			// 人脸信息
			handleChange(file) {
				var self = this;
				self.change_href = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file, fileList) {
				var self = this;
				console.log(file, fileList)
				// self.familyForm.href = file.name;
				self.fileName = md5(file.name);
				self.suffix = file.name.substring(file.name.lastIndexOf('.') + 1);
				self.imgData.key = `tmp_${self.fileName}.${self.suffix}`
			},
			handleAvatarSuccess(res, file) {
				var self = this;
				file.url = `${self.qiniuaddr}/${res.key}`;
				self.form.href = file.url;
				if (self.form.href) {
					// if(self.form.number) {
					// 	Reg.reg(self.form.number)
					// }
					self.form.notify_user = self.arr_notify_user + ',' + self.arr_police_name;
					console.log(self.form.notify_user)
					API.dangerFace(self.form).then((res) => {
						self.$refs.upload.clearFiles()
						self.$message.success("提交成功");
						self.dialogDoubtable = false;
						self.getDangerFaces();
						self.form = {};
						self.arr_notify_user = '';
						self.way = '';
						self.station = '';
						self.department = '';
						self.department_one = '';
						self.department_two = '';
						self.department_three = '';
						self.department_four = '';
						self.policeList = [];
						self.policeNameList = [];
					});
				}
			},
			// 选中警员
			policeNameChange(val) {
				this.arr_police_name = val.join(',')
			},
			// 输入文本域的值
			changeNotifyUser(val) {
				console.log(val, this.form.notify_user)
				this.arr_notify_user = this.form.notify_user;
			},
			newDoubtablet() {
				var self = this;
				if (self.form.href) {
					self.form.notify_user = self.arr_notify_user + ',' + self.arr_police_name;
					console.log(self.form.notify_user)
					API.dangerFace(self.form).then((res) => {
						self.$refs.upload.clearFiles()
						self.$message.success("提交成功");
						self.dialogDoubtable = false;
						self.getDangerFaces();
						self.form = {};
						self.arr_notify_user = '';
						self.way = '';
						self.station = '';
						self.department = '';
						self.department_one = '';
						self.department_two = '';
						self.department_three = '';
						self.department_four = '';
						self.policeList = [];
						self.policeNameList = [];
					});
				} else {
					// if(self.form.number) {
					// 	Reg.reg(self.form.number)
					// }
					if (self.change_href) {
						self.$refs.upload.submit();
					} else {
						self.$message.error("请补充完整信息");
					}
				}

			},
			handleExceed(file, fileList) { //图片上传超过数量限制
				var self = this;
				self.$message.error('上传图片不能超过1张!重新上传');
				self.$refs.upload.clearFiles()
				self.form.href = '';
				self.imgData.key = '';
			},

			// 关闭表单
			clearForm() {
				var self = this;
				self.$refs.upload.clearFiles();
				self.way = '';
				self.station = '';
				self.department = '';
				self.department_one = '';
				self.department_two = '';
				self.department_three = '';
				self.department_four = '';
				self.policeList = [];
				self.policeNameList = [];
			},
			// 操作
			// 编辑
			handleEdit(index, row) {
				var self = this;
				self.dialogDoubtable = true;
				API.dangerTypes().then(res => {
					self.dangerNatureList = res.type;
					self.dangerTypeList = res.alert_type;
				})
				self.form = {
					id: row.id,
					href: row.href,
					name: row.name,
					number: row.number,
					type: row.type,
					alert_type: row.alert_type,
					other_string: row.other_string,
					notify_score: row.notify_score,
					notify_user: row.notify_user,
				};
				self.arr_notify_user = row.notify_user
			},

			// 通知列表
			noticeList(index, row) {
				var self = this;
				self.dangers = [];
				self.dialogNotice = true;
				self.noticeCurrent = 1;
				self.noticeSize = 10;
				self.dangers.push(row.danger_id);
				API.alert(1, 10, 2, '', self.dangers).then(res => {
					self.noticeTableData = res.data;
					self.noticeTotal = res.total;
				})
			},
			// 抓拍记录
			snapLogs(index, row) {
				var self = this;
				self.dialogSnapLogs = true;
				self.id = row.danger_id;
				self.snapLogsCurrent = 1;
				self.snapLogsSize = 10;
				API.dangerLogs(1, 10, row.danger_id).then(res => {
					self.snapLogsData = res.data;
					self.snapLogsTotal = res.total;
					self.snapLogsData.forEach(item => {
						item.log.timestamp = DATE.formatTime(item.log.timestamp, 'Y-M-D h:m:s');
					})
				})
			},


			handleDel(index, row) {
				var self = this;
				// API.delDangerFace(self.id).then(res => {
				// 	self.$message.success('删除成功')
				// 	self.dialogDel = false;
				// 	self.getDangerFaces();
				// 	self.currentPage = 1;
				// })
			},

			// 批量上传
			piliangRemove(file, fileList) {
				var self = this;
				self.hasFile = false;
				self.percentage = 0;
			},
			piliangBeforeAvatarUpload(file) {
				var self = this;
				// self.fileName = md5(file.name);
				// self.suffix = file.name.substring(file.name.lastIndexOf('.') + 1);
			},
			piliangAvatarSuccess(res, file) {
				var self = this;
				self.$message.success('上传成功')
				API.importHistory(1, 10).then(res => {
					this.historyDate = res.data;
					this.historyTotal = res.total;
				})
			},
			piliangExceed(file, fileList) { //图片上传超过数量限制
				var self = this;
				self.$message.error('只能上传一个文件');
				self.hasFile = false;
				self.percentage = 0
				self.$refs.piliangUpload.clearFiles()
			},
			piliangErr(err, file, fileList) {
				var self = this;
				// self.hasFile = true;
				let msg = JSON.parse(err.toString().replace(/Error:/, ''))
				self.$message.error(msg.msg)
				// self.percentage = (event.loaded / event.total * 100 | 0);
			},

			// 查看批量上传历史开关
			changeHistory() {
				this.history = !this.history;
				this.historyState = 0;
				API.importHistory(1, 10, 0).then(res => {
					this.historyDate = res.data;
					this.historyTotal = res.total;
				})
			},

			stateChange(val) {
				API.importHistory(1, 10, val).then(res => {
					this.historyDate = res.data;
					this.historyTotal = res.total;
				})
			},

			historyCurrentChange(val) {
				var self = this;
				self.historyCurrent = val;
				API.importHistory(val, self.historySize, self.historyState).then(res => {
					self.historyDate = res.data;
					self.historyTotal = res.total;
				})
			},

			historySizeChange(val) {
				var self = this;
				self.historySize = val;
				API.importHistory(self.historyCurrent, val, self.historyState).then(res => {
					self.historyDate = res.data;
					self.historyTotal = res.total;
				})
			},

			getQiniuToken() {
				var self = this;
				axios.get('https://api.fengniaotuangou.cn/api/upload/token').then(res => {
					self.imgData.token = res.data.uptoken;
				})
			},


			// 分页
			currentChange(val) {
				var self = this;
				self.loading = true;
				self.current = val;
				API.dangerFaces(val, self.size).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.total;
					res.data.forEach(item => {
						item.notify == 1 ? item.notify = true : item.notify = false;
					})
				}).catch(err => {
					self.loading = false;
				})
			},
			// 每页显示条数
			sizeChange(val) {
				var self = this;
				self.loading = true;
				self.size = val;
				API.dangerFaces(self.current, val).then(res => {
					self.loading = false;
					self.tableData = res.data;
					self.total = res.total;
					res.data.forEach(item => {
						item.notify == 1 ? item.notify = true : item.notify = false;
					})
				}).catch(err => {
					self.loading = false;
				})
			},

			// 通知列表
			noticeCurrentChange(val) {
				var self = this;
				self.noticeCurrent = val;
				API.alert(val, self.noticeSize, 2, '', self.dangers).then(res => {
					self.noticeTableData = res.data;
					self.noticeTotal = res.total;
				})
			},

			noticeSizeChange(val) {
				var self = this;
				self.noticeSize = val;
				API.alert(self.noticeCurrent, val, 2, '', self.dangers).then(res => {
					self.noticeTableData = res.data;
					self.noticeTotal = res.total;
				})
			},

			// 抓拍记录分页
			snapLogsCurrentChange(val) {
				var self = this;
				self.snapLogsCurrent = val;
				API.dangerLogs(val, self.snapLogsSize, self.id).then(res => {
					self.snapLogsData = res.data;
					self.snapLogsTotal = res.total;
				})
			},
			// 每页显示条数
			snapLogsSizeChange(val) {
				var self = this;
				self.snapLogsSize = val;
				API.dangerLogs(self.snapLogsCurrent, self.id).then(res => {
					self.snapLogsData = res.data;
					self.snapLogsTotal = res.total;
				})
			},
		}
	}
</script>

<style scoped>
	.upload-btn {
		margin-top: 10px;
	}

	.up-img {
		display: inline-block;
		margin: 0 50px;
	}

	.pic-box {
		max-width: 100%;
		height: 200px;
	}

	.tips {
		margin-bottom: 20px;
		color: red;
	}
</style>
