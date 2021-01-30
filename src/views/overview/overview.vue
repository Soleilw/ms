<template>
	<div id="wrap">
		<div class="o-header">
			<div class="logo">
				<!-- logo -->
				<div class="o-logo">
					<img src="../../assets/image/badges-2.png" alt="">
				</div>
				<div class="o-title">
					公安安全管理系统
				</div>
			</div>
			<div class="o-user">
				<!-- 时间 -->
				<div class="o-time">
					{{ nowDate + ' ' + nowTime + ' ' + nowWeek }}
				</div>
				<el-button size="mini" @click="toManage" type="primary">进入后台管理</el-button>
				<el-button size="mini" @click="loginOut" type="primary">重新登录</el-button>
				<!-- 用户名 -->
				<div style="margin-left: 10px;">{{username}}</div>
			</div>
		</div>
		<div class="o-main">
			<div class="o-main-left">
				<div class="o-box">
					<div class="o-tabs">
						<div class="o-tabs-item">
							<img :src="active == 'ditu' ? require(`@/assets/image/map2.png`) : require(`@/assets/image/map1.png`)" alt=""
							 @click="clickTab('ditu')">
						</div>
						<div class="o-tabs-item">
							<img :src="active == 'gaojing' ? require(`@/assets/image/gaojing2.png`) : require(`@/assets/image/gaojing1.png`)"
							 alt="" @click="clickTab('gaojing')">
						</div>
						<div class="o-tabs-item">
							<img :src="active == 'kaimen' ? require(`@/assets/image/kaimen2.png`) : require(`@/assets/image/kaimen1.png`)"
							 alt="" @click="clickTab('kaimen')">
						</div>
						<div class="o-tabs-item">
							<img :src="active == 'stranger' ? require(`@/assets/image/storage2.png`) : require(`@/assets/image/storage1.png`)"
							 alt="" @click="clickTab('stranger')">
						</div>
					</div>
				</div>
				<!-- 数据显示 -->
				<!-- 地图 -->
				<div v-if="active == 'ditu'" class="o-chart" v-loading="loading" element-loading-text="加载地图中">
					<div id="geo" ref="geo"></div>
				</div>
				<!-- 重点人员进出记录 -->
				<div class="render" v-show="active == 'gaojing'">
					<div class="alert-box">
						<vue-seamless-scroll :data="recordData" :class-option="recordDataStyle">
							<div class="alert-box-item" v-for="(item, index) in recordData" :key="index">
								<div class="item-image">
									<el-popover placement="top-start" title="" trigger="click">
										<img :src="item.log.image" style="max-width:800px;max-height:800px;">
										<img slot="reference" :src="item.log.image" style="max-width:150px;max-height:150px;margin-right: 10px;">
									</el-popover>
								</div>
								<div class="item-info">
									<div><span style="color: #68d8fe;">姓名: {{item.danger.name}}</span></div>
									<div><span>设备名: {{item.log.device_uuid}}</span></div>
									<div> <span style="color: #68d8fe;">抓拍地址: {{item.address}}</span></div>
									<div><span> 抓拍时间: {{item.log.timestamp}} </span> </div>
								</div>
							</div>
						</vue-seamless-scroll>
					</div>
					<div class="in-out">
						<div class="in-out-title">
							<div>姓名</div>
							<div>告警类型</div>
							<div>处理情况</div>
							<div>危险类型</div>
							<div>所出现地址</div>
						</div>
						<div style="height: 80vh; overflow: hidden;" :class-option="recordDataStyle">
							<vue-seamless-scroll :data="callData">
								<div style="display: flex;justify-content: center;align-items: center" v-for="(item, index) in callData" :key="index">
									<div style="width: 12vw;padding: 10px 0;color: #68d8fe;">{{item.danger.name}}</div>
									<div style="width: 12vw;padding: 10px 0;color: #68d8fe;">{{item.alert_type}}</div>
									<div style="width: 12vw;padding: 10px 0;color: #68d8fe;"><span v-if="item.state == 1">未处理</span>
										<span v-if="item.state == 2">已处理</span></div>
									<div style="width: 11vw;padding: 10px 0;color: #68d8fe;">{{item.danger_type}}</div>
									<div style="width: 12vw;padding: 10px 0;color: #68d8fe;">{{item.address.address}}</div>
								</div>
							</vue-seamless-scroll>
						</div>
					</div>
				</div>
				<!-- 开门记录 -->
				<div class="render" v-show="active == 'kaimen'">
					<div class="render-table">
						<el-table :data="currentDayOpen" max-height="760">
							<el-table-column prop="id" label="ID" width="100px"></el-table-column>
							<el-table-column prop="address" label="地址"></el-table-column>
							<el-table-column prop="records.length" label="开门的次数" width="100px"></el-table-column>
							<el-table-column label="操作" width="100px">
								<template slot-scope="scope">
									<el-button type="text" @click="showSpecific(scope.$index, scope.row)">具体查看</el-button>
								</template>
							</el-table-column>
						</el-table>
					</div>
					<div class="render-table render-table-right">
						<el-table :data="specificOpen" max-height="760">
							<el-table-column prop="id" label="ID"></el-table-column>
							<el-table-column prop="name" label="姓名"></el-table-column>
							<el-table-column prop="number" label="身份证" width="200px"></el-table-column>
							<el-table-column prop="sex" label="性别">
								<template slot-scope="scope">
									<span v-if="scope.row.sex == 1">男</span>
									<span v-if="scope.row.sex == 2">女</span>
								</template>
							</el-table-column>
							<el-table-column prop="href" label="人脸图片">
								<template slot-scope="scope">
									<el-popover placement="top-start" title="" trigger="click">
										<img :src="scope.row.href" style="max-width:800px; max-height:800px;" />
										<img slot="reference" :src="scope.row.href" style="max-width:180px;max-height:80px;">
									</el-popover>
								</template>
							</el-table-column>
						</el-table>
					</div>
				</div>
				<!-- 陌生人记录 -->
				<div class="render" v-show="active == 'stranger'">
					<div class="render-table">
						<div class="o-search">
							<el-input placeholder="请输入地址" v-model="addressStranger" @keyup.enter.native="search(addressStranger)" class="input-with-select">
								  <el-button slot="prepend" style="color: #000000;" @click="addressRefer">刷新</el-button>
							    <el-button slot="append" icon="el-icon-search" @click="search(addressStranger)"></el-button>
							  </el-input>
						</div>
						<el-table :data="strangerData" max-height="710">
							<el-table-column prop="id" label="ID" width="100px"></el-table-column>
							<el-table-column prop="address" label="地址"></el-table-column>
							<el-table-column prop="strangerCount" label="陌生人总数" width="100px"></el-table-column>
							<el-table-column label="操作" width="100px">
								<template slot-scope="scope">
									<el-button type="text" @click="showStranger(scope.$index, scope.row)">具体查看</el-button>
								</template>
							</el-table-column>
						</el-table>
					</div>
					<div class="render-table render-table-right" v-loading="StrangerLoading" element-loading-text="正在获取数据">
						<el-table :data="addressStrangerData" max-height="760">
							<el-table-column prop="stranger_id" label="ID"></el-table-column>
							<el-table-column prop="time" label="时间"></el-table-column>
							<el-table-column prop="face_img" label="人脸图片">
								<template slot-scope="scope">
									<el-popover placement="top-start" title="" trigger="click">
										<img :src="scope.row.face_img" style="max-width:800px; max-height:800px;" />
										<img slot="reference" :src="scope.row.face_img" style="max-width:180px;max-height:80px;">
									</el-popover>
								</template>
							</el-table-column>
						</el-table>
					</div>
				</div>
			</div>
			<div class="o-main-right">
				<!-- 面板显示 -->
				<div class="o-panels">
					<div class="panel">
						<span>
							<i class="icon-dot" style="color: #006cff"></i>
							设备总数
						</span>
						<h4>{{deviceCount}}</h4>
					</div>
					<div class="panel">
						<span>
							<i class="icon-dot" style="color: #006cff"></i>
							出租屋总数
						</span>
						<h4>{{CZWCount}}</h4>
					</div>
					<div class="panel">
						<span>
							<i class="icon-dot" style="color: #006cff"></i>
							学校总数
						</span>
						<h4>{{XXCount}}</h4>
					</div>
					<div class="panel">
						<span>
							<i class="icon-dot" style="color: #006cff"></i>
							抓拍点数
						</span>
						<h4>{{ZPDCount}}</h4>
					</div>
					<div class="panel">
						<span>
							<i class="icon-dot" style="color: #006cff"></i>
							租客总数
						</span>
						<h4>{{tenantCount}}</h4>
					</div>
					<div class="panel">
						<span>
							<i class="icon-dot" style="color: #006cff"></i>
							户主总数
						</span>
						<h4>{{householderCount}}</h4>
					</div>
					<div class="panel">
						<span>
							<i class="icon-dot" style="color: #006cff"></i>
							男租客数
						</span>
						<h4>{{tenantMenCount}}</h4>
					</div>
					<div class="panel">
						<span>
							<i class="icon-dot" style="color: #006cff"></i>
							女租客数
						</span>
						<h4>{{tenantWomenCount}}</h4>
					</div>
					<div class="panel">
						<span>
							<i class="icon-dot" style="color: #006cff"></i>
							人脸总数
						</span>
						<h4>{{faceCount}}</h4>
					</div>
				</div>
				<!-- 出租屋统计 -->
				<div class="rent-chart">
					<div id="rents"></div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import API from '@/api/index.js'
	import DATE from '@/utils/date.js'
	import axios from 'axios'
	import TMap from 'TMap'

	var dotData = [{
			lng: 113.341355,
			lat: 22.525103
		},
		{
			lng: 113.341355,
			lat: 22.525103
		},
	];
	export default {
		data() {
			return {
				loading: true,
				recordData: [],
				callData: [],

				deviceCount: '',
				CZWCount: '',
				XXCount: '',
				ZPDCount: '',
				householderCount: '',
				tenantCount: '',
				tenantMenCount: '',
				tenantWomenCount: '',
				faceCount: '',

				nowDate: "", // 当前日期
				nowTime: "", // 当前时间
				nowWeek: "", // 当前星期

				currentDayOpen: [],
				specificOpen: [],

				username: localStorage.getItem('username'),

				// 标签导航
				active: 'gaojing',

				strangerData: [] ,// 陌生人记录
				addressStrangerData: [],
				StrangerLoading: false,
				addressStranger: '' // 搜索
			}
		},
		computed: {
			recordDataStyle() {
				return {
					step: .7,
					hoverStop: true
				}
			}
		},
		mounted() {
			this.getAlerts();
			this.getDangerLogs();
			this.getData();
			this.currentTime();
		},
		methods: {
			// 切换tab
			clickTab(val) {
				console.log(val)
				this.loading = true;
				if (val == 'ditu') {
					this.active = 'ditu';
					this.$nextTick(function() {
						var type = ['CZW'];
						API.addressesMap(1, 1000, type).then(res => {
							res.data.forEach(item => {
								if (item.lat && item.lng) {
									dotData.push({
										lat: item.lat,
										lng: item.lng,
										address: item.address
									})
								}
							})
							this.init();
							this.loading = false;
						}).catch(err => {
							this.loading = false;
						})
					})
				}
				if (val == 'kaimen') {
					this.active = 'kaimen';
					this.getCurrentDay();
				}
				if (val == 'gaojing') {
					this.active = 'gaojing';
					this.getAlerts();
					this.getDangerLogs();
				}
				if (val == 'stranger') {
					this.active = 'stranger';
					this.getStranger();
				}
			},
			// 进入后台
			toManage() {
				this.$router.replace("/alert");
			},
			// 重新登录
			loginOut() {
				window.location.reload()
				localStorage.removeItem('username')
				this.$router.replace('/login')
			},
			// handleCommand(command) {
			// 	var self = this;
			// 	if (command == 'toManage') {
			// 		// 进入后台
			// 		this.$router.replace("/alert");
			// 	}
			// 	if (command == 'loginOut') {
			// 		// 重新登录
			// 		window.location.reload()
			// 		localStorage.removeItem('username')
			// 		this.$router.replace('/login')
			// 	}
			// },

			currentTime() {
				setInterval(this.getDate, 500);
			},
			getDate() {
				var self = this;
				let yy = new Date().getFullYear();
				let mm = new Date().getMonth() + 1;
				let dd = new Date().getDate();
				let week = new Date().getDay();
				let hh = new Date().getHours();
				let mf =
					new Date().getMinutes() < 10 ?
					"0" + new Date().getMinutes() :
					new Date().getMinutes();
				let ss = new Date().getSeconds();
				switch (week) {
					case 1:
						self.nowWeek = "星期一";
						break;
					case 2:
						self.nowWeek = "星期二";
						break;
					case 3:
						self.nowWeek = "星期三";
						break;
					case 4:
						self.nowWeek = "星期四";
						break;
					case 5:
						self.nowWeek = "星期五";
						break;
					case 6:
						self.nowWeek = "星期六";
						break;
					case 7:
						self.nowWeek = "星期日";
				}
				self.nowTime = hh + ":" + mf + ":" + ss;
				self.nowDate = yy + "-" + mm + "-" + dd;
			},
			// 获取告警处理
			getAlerts() {
				var self = this;
				API.alert(1, 30).then(res => {
					self.callData = res.data;
					self.total = res.total;

				})
			},
			// 获取重点人员进出记录
			getDangerLogs() {
				var self = this;
				API.dangerLogs(1, 30).then(res => {
					self.recordData = res.data;
					self.total = res.total;
					self.recordData.forEach(item => {
						item.log.timestamp = DATE.formatTime(item.log.timestamp, 'Y-M-D h:m:s')
					})
				})

			},
			// 获取后台的统计数据
			getData() {
				console.log(1)
				API.statistical().then(res => {
					this.CZWCount = res.CZWCount;
					this.XXCount = res.XXCount;
					this.ZPDCount = res.ZPDCount;
					this.deviceCount = res.deviceCount;
					this.householderCount = res.householderCount;
					this.tenantCount = res.tenantCount;
					this.tenantMenCount = res.tenantMenCount;
					this.tenantWomenCount = res.tenantWomenCount;
					this.faceCount = res.faceCount;
					this.renterSummary();
				})

			},

			// 地图
			init() {
				var self = this;
				self.$nextTick(function() {
					console.log(2)
					var self = this;
					var center = new TMap.LatLng(22.51595, 113.3926);
					//初始化地图
					var map = new TMap.Map("geo", {
						zoom: 13, //设置地图缩放级别
						center: center, //设置地图中心点坐标
						mapStyleId: "style2" //个性化样式
					});
					//初始化散点图并添加至map图层
					var dot = new TMap.visualization.Dot({
							faceTo: "screen", //散点固定的朝向
						})
						.addTo(map)
						.setData(dotData); //设置数据

					// 绑定点击事件
					dot.on("click", function(evt) {
						if (evt.detail.dot) {
							self.$message.success("当前点击地址为：" + evt.detail.dot.address)
						}
					})
				})
			},
			// 出租屋人数比例
			renterSummary() {
				var self = this;
				self.$nextTick(function() {
					let rents = self.$echarts.init(document.getElementById('rents'));
					var option = {
						// 标题
						title: {
							text: '出租屋男女比例',
							textStyle: {
								fontSize: 20,
								color: "#fff"
							}
						},
						tooltip: {
							trigger: 'item',
							formatter: '{a} <br/>{b}: {c} ({d}%)'
						},
						legend: {
							orient: 'vertical',
							bottom: 0,
							right: 60,
							data: [{
								name: '男',
								textStyle: {
									color: '#fff', // 图例项文本样式
								}
							}, {
								name: '女',
								textStyle: {
									color: '#fff'
								}
							}]
						},
						series: [{
							name: '男女比例',
							type: 'pie',
							radius: ['50%', '70%'], // 控制圆心
							avoidLabelOverlap: false,
							label: {
								show: false,
								position: 'outside'
							},
							labelLine: {
								show: false
							},
							itemStyle: {

							},
							data: [{
									value: self.tenantMenCount,
									name: '男',
									itemStyle: {
										color: '#006cff' // 设置颜色
									}
								},
								{
									value: self.tenantWomenCount,
									name: '女',
									itemStyle: {
										color: '#ddd',
									}
								},
							]
						}]
					};
					rents.setOption(option);
				})
			},

			// 当天开门记录
			getCurrentDay() {
				API.currentDay().then(res => {
					this.currentDayOpen = res.countData;
				})
			},

			// 具体查看
			showSpecific(index, row) {
				this.specificOpen = row.records;
				console.log(row.records)
			},
			
			// 获取陌生人
			getStranger() {
				API.strangerRecord().then(res => {
					this.strangerData = res.countData;
				})
			},
			// 查看具体陌生人
			showStranger(index, row) {
				this.StrangerLoading = true;
				API.addressStrangerRecord(row.id).then(res => {
					console.log(res)
					this.addressStrangerData = res;
					this.StrangerLoading = false;
				}).catch(err => {
					this.StrangerLoading = false;
				})
			},
			
			// 搜索
			search(val) {
				API.searchStrangerRecord(val).then(res => {
					this.strangerData = res.countData;
				})
			},
			
			// 刷新
			addressRefer() {
				API.strangerRecord().then(res => {
					this.strangerData = res.countData;
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	#wrap {
		height: 100vh;
		background-color: #171E3A;

		.o-header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 7vh;
			padding: 0 10px;
			background-color: #1E2746;
			font-size: 28px;
			color: #3E65FC;

			.logo {
				display: flex;
				align-items: center;

				.o-logo img {
					width: 50px;
					height: 50px;
				}
			}

			.o-user {
				display: flex;
				align-items: center;

				.o-time {
					padding-right: 20px;
				}
			}

		}

		.o-main {
			display: flex;

			.o-main-left {
				display: flex;
				flex-direction: column;
				position: relative;
				width: 77vw;
				padding: 0 20px 20px 20px;

				.o-box {
					position: absolute;
					left: 40px;
					right: 40px;

					.o-tabs {
						display: flex;
						justify-content: center;
						align-items: center;
						padding: 5px 0;
						border-radius: 0 0 20px 20px;
						background-color: #1E2746;

						.o-tabs-item {
							margin: 0 20px;

							img {
								width: 35px;
								height: 35px;
							}
						}
					}
				}

				.render {
					display: flex;
					width: 77vw;
					margin-top: 60px;

					.render-table {
						width: 38vw;
						margin-right: 10px;
					}
					
					.o-search {
						margin-bottom: 10px;
						
						/deep/ .el-input__inner {
							background: transparent;
							color: #ffffff;
						}
						
						
					}
					
					.render-table-right {
						width: 38vw;
					}

					// 告警记录
					.alert-box {
						width: 30vw;
						height: 80vh;
						overflow: hidden;
						margin-right: 10px;
						padding: 10px 50px;
						border-radius: 10px;
						background-color: #1E2746;

						.alert-box-item {
							display: flex;
							justify-content: center;
							color: #fff;
							padding: 10px 0;

							.item-image {
								width: 10vw;
							}

							.item-info {
								display: flex;
								flex-direction: column;
								justify-content: space-between;
								width: 20vw;
								margin-right: 10px;
							}
						}
					}

					// 进出记录
					.in-out {
						width: 46vw;
						height: 80vh;
						overflow: hidden;
						padding: 10px 80px;
						border-radius: 10px;
						background-color: #1E2746;

						.in-out-title {
							display: flex;
							justify-content: center;
							align-items: center;

							div {
								width: 11vw;
								padding: 10px 0;
								color: #fff;
							}
						}

					}
				}

				// 地图
				.o-chart {
					margin-top: 60px;

					#geo {
						width: 77vw;
						height: 80vh;
					}
				}
			}

			.o-main-right {
				width: 20vw;

				.o-panels {
					display: flex;
					flex-wrap: wrap;
					margin: 10px;
					font-size: 20px;

					.panel {
						display: flex;
						flex-direction: column;
						align-items: center;
						width: 140px;
						margin: 5px;
						padding: 15px;
						border-radius: 10px;
						background-color: #1E2746;

						span {
							color: #4c9bfd;
						}

						h4 {
							text-align: center;
							font-size: 1.167rem;
							padding-left: 0.2rem;
							color: #fff;
							margin-top: 0.333rem
						}
					}
				}

				.rent-chart {
					margin: 10px;
					padding: 50px 15px;
					border-radius: 10px;
					background-color: #1E2746;

					// 出租屋已租/空置
					#rents {
						height: 28vh;
					}
				}
			}
		}




	}

	.render-table /deep/ .el-table,
	.el-table__expanded-cell {
		background-color: transparent;
	}

	.render-table /deep/ .el-table th {
		background-color: transparent !important;
		border-bottom: 1px solid #5078fc;
		color: #fefefe;
	}

	.render-table /deep/ .el-table tr {
		background-color: transparent !important;
	}

	.render-table /deep/ .el-table--enable-row-transition .el-table__body td,
	/deep/.el-table .cell {
		border: none;
		color: #5078fc;
	}


	.render-table /deep/.el-table th>.cell {
		color: rgba(254, 254, 254, 1);
		font-weight: 700;
	}

	.render-table /deep/ .el-table {
		// border: none;
	}

	.render-table /deep/ .el-table__fixed-right-patch {
		display: none;
	}

	.el-table::before {
		left: 0;
		bottom: 0;
		width: 100%;
		height: 0px;
	}
</style>
