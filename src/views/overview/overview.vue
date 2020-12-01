<template>
	<div id="wrap">
		<div class="viewport">
			<div class="column">
				<div class="overview panel">
					<div class="inner">
						<div class="item">
							<span>
								<i class="icon-dot" style="color: #006cff"></i>
								设备总数
							</span>
							<h4>{{deviceCount}}</h4>
						</div>
						<div class="item">
							<span>
								<i class="icon-dot" style="color: #006cff"></i>
								出租屋总数
							</span>
							<h4>{{CZWCount}}</h4>
						</div>
						<div class="item">
							<span>
								<i class="icon-dot" style="color: #006cff"></i>
								学校总数
							</span>
							<h4>{{XXCount}}</h4>
						</div>
						<div class="item">
							<span>
								<i class="icon-dot" style="color: #006cff"></i>
								抓拍点数
							</span>
							<h4>{{ZPDCount}}</h4>
						</div>
						<div class="item">
							<span>
								<i class="icon-dot" style="color: #006cff"></i>
								租客总数
							</span>
							<h4>{{tenantCount}}</h4>
						</div>
						<div class="item">
							<span>
								<i class="icon-dot" style="color: #006cff"></i>
								户主总数
							</span>
							<h4>{{householderCount}}</h4>
						</div>
						<div class="item">
							<span>
								<i class="icon-dot" style="color: #006cff"></i>
								男租客数
							</span>
							<h4>{{tenantMenCount}}</h4>
						</div>
						<div class="item">
							<span>
								<i class="icon-dot" style="color: #006cff"></i>
								女租客数
							</span>
							<h4>{{tenantWomenCount}}</h4>
						</div>
						<div class="item">
							<span>
								<i class="icon-dot" style="color: #006cff"></i>
								人脸总数
							</span>
							<h4>{{faceCount}}</h4>
						</div>
					</div>
				</div>
				<div class="summary">
					<!-- 单个出租屋男女比例 -->
					<div class="rent-people panel">
						<div class="inner">
							<!-- 		<div class="search-input">
								<el-input placeholder="请输入要查询的出租屋" size="mini">
									<el-button slot="append" icon="el-icon-search"></el-button>
								</el-input>
							</div> -->
							<div id="rents"></div>
						</div>
					</div>
				</div>
				<h3>重点关注人员进出记录</h3>
				<div class="record panel">
					<div class="inner">
						<div style="display: flex;justify-content: center;align-items: center">
							<div style="width: 25vw;padding: 10px 0;color: #fff">姓名</div>
							<div style="width: 25vw;padding: 10px 0;color: #fff;">告警类型</div>
							<div style="width: 25vw;padding: 10px 0;color: #fff;">告警类型</div>
							<div style="width: 25vw;padding: 10px 0;color: #fff;">告警类型</div>
						</div>
						<div style="height: 320px; overflow: hidden;" :class-option="recordDataStyle">
							<vue-seamless-scroll :data="callData">
								<div style="display: flex;justify-content: center;align-items: center" v-for="(item, index) in callData" :key="index">
									<div style="width: 25vw;padding: 10px 0;color: #68d8fe;">{{item.danger.name}}</div>
									<div style="width: 25vw;padding: 10px 0;color: #68d8fe;">{{item.alert_type}}</div>
									<div style="width: 25vw;padding: 10px 0;color: #68d8fe;"><span v-if="item.state == 1">未处理</span>
										<span v-if="item.state == 2">已处理</span></div>
									<div style="width: 25vw;padding: 10px 0;color: #68d8fe;">{{item.danger_type}}</div>
								</div>
							</vue-seamless-scroll>
						</div>

					</div>
				</div>
			</div>
			<div class="column">
				<!-- 地图 -->
				<div class="map">
					<h3>出租屋地图分布</h3>
					<div class="chart" v-loading="loading" element-loading-text="加载地图中">
						<div id="geo" ref="geo"></div>
					</div>
				</div>
			</div>
			<div class="column">
				<div class="manage panel">
					<div class="inner user">
						<!-- 操作 -->
						<div class="operation">
							<!-- 天气 -->
							<div>
								<span style="color: #68d8fe;">{{ nowDate + ' ' + nowTime + ' ' + nowWeek }}</span>
							</div>
						</div>
						<!-- 用户列表 -->
						<div class="image">
							<img src="../../assets/image/admin.png" alt="">
							<div class="name">{{username}}</div>
							<div>
								<span>
									<el-button size="mini" @click="toManage" type="primary">进入后台管理</el-button>
								</span>
								<span>
									<el-button size="mini" @click="loginOut" type="primary">重新登录</el-button>
								</span>
							</div>
						</div>
					</div>
				</div>
				<h3>实时告警记录</h3>
				<div class="police panel">
					<div class="inner">
						<div style="height: 600px; overflow: hidden;">
							<vue-seamless-scroll :data="recordData" :class-option="recordDataStyle">
								<div style="display: flex;justify-content: center;color: #fff;padding: 10px 0;" v-for="(item, index) in recordData"
								 :key="index">
									<div style="width: 20vw">
										<el-popover placement="top-start" title="" trigger="click">
											<img :src="item.log.image" style="max-width:800px;max-height:800px;">
											<img slot="reference" :src="item.log.image" style="max-width:150px;max-height:150px;margin-right: 10px;">
										</el-popover>
									</div>
									<div style="display: flex;flex-direction: column; justify-content: space-between; margin-right: 10px; width: 80vw;">
										<div><span style="color: #68d8fe;">姓名: {{item.danger.name}}</span></div>
										<div><span>设备名: {{item.log.device_uuid}}</span></div>
										<div> <span style="color: #68d8fe;">抓拍地址: {{item.address}}</span></div>
										<div><span> 抓拍时间: {{item.log.timestamp}} </span> </div>
									</div>
								</div>
							</vue-seamless-scroll>
						</div>
					</div>
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

				username: localStorage.getItem('username'),
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
			this.getData();
			// this.init();
			this.getDangerLogs();
			this.currentTime();

		},
		methods: {
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
			},

			// 表格透明化
			getRowClass({
				row,
				column,
				rowIndex,
				columnIndex
			}) {
				return "background-color: rgba(255, 255, 255, 0.05); color: #006cff";
			},
			getCellClass({
				row,
				column,
				rowIndex,
				columnIndex
			}) {
				return "background-color: rgba(255, 255, 255, 0.05); color: #fff";
			},
			// 地图
			init() {
				console.log(2)
				var self = this;
				var center = new TMap.LatLng(22.51595, 113.3926);
				//初始化地图
				var map = new TMap.Map("geo", {
					zoom: 10, //设置地图缩放级别
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
							right: 40,
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
			}
		}
	}
</script>

<style scoped lang="scss">
	#wrap {
		width: 100%;
		height: 100%;
		background-color: #101129;
	}

	.viewport {
		/* 限定大小 */
		display: flex;
		min-width: 1024px;
		max-width: 1920px;
		min-height: 780px;
		margin: 0 auto;
		padding: 3.667rem 0.833rem 0;
		background: url(../../assets/image/bg-img.png) no-repeat 0 0 / contain;
		background-color: #101129;
	}

	// 概览区域
	.overview {
		height: 9rem;

		.inner {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
		}

		h4 {
			text-align: center;
			font-size: 1.167rem;
			padding-left: 0.2rem;
			color: #fff;
			margin-top: 0.333rem
		}

		span {
			font-size: 1rem;
			color: #4c9bfd;
		}
	}

	.column {
		flex: 3;
		position: relative;

		h3 {
			font-size: 24px;
			color: #fff;
		}
	}

	.column:nth-child(2) {
		flex: 4;
		margin: 1.333rem 0.833rem 0;
	}

	.panel {
		/* 边框 */
		box-sizing: border-box;
		border: 2px solid red;
		border-image: url(../../assets/image/border.png) 51 38 21 132;
		border-width: 2.125rem 1.583rem 0.875rem 5.5rem;
		position: relative;
		margin-bottom: 0.833rem;
	}

	.panel .inner {
		/* 装内容 */
		/* height: 60px; */
		position: absolute;
		top: -2.125rem;
		right: -1.583rem;
		bottom: -0.875rem;
		left: -5.5rem;
		padding: 1rem 1.5rem;
	}

	// 重点人员进出记录
	.record {
		height: 24rem;
		margin-top: 1rem;
	}

	// 地图
	.map {
		margin-top: 2.5rem;
		margin-bottom: 1rem;


		.chart {
			flex: 1;
			background-color: rgba(255, 255, 255, 0.05);
			margin-top: .5rem;

			#geo {
				width: 100%;
				height: 49rem;
			}
		}
	}

	// 人数统计
	.summary {
		display: flex;
		justify-content: space-around;
		align-items: flex-start;


		.rent-people {
			width: 100%;
			height: 19rem;
			margin-top: 10px;


			#total-rent-sex,
			#single-rent-sex {
				width: 100%;
				height: 15rem;
				margin-top: 10px;
			}

			// 出租屋已租/空置
			#rents {
				width: 100%;
				height: 15rem;
			}

			// 人员进出流量
			#out-in {
				width: 100%;
				height: 15rem;
				margin-top: 10px;
			}
		}
	}

	// 进入后台管理
	.manage {
		height: 10rem;

		.user {
			display: flex;
			justify-content: space-between;

			.name {
				font-size: 30px;
				color: #006cff;
			}

			.image {
				text-align: center;
				// margin-top: 20px;
			}

			img {
				width: 50px;
				height: 50px;
				border-radius: 50%;
				border: 2px #006cff solid;
			}

			// 操作
			.operation {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;


				span {
					font-size: 25px;
					color: #fff;
				}
			}
		}
	}

	// 报警
	.police {
		height: 40rem;
		margin-top: 1rem;
	}

	// 表格样式
	.table /deep/ .el-table,
	.el-table__expanded-cell {
		background-color: transparent;
	}

	.table /deep/ .el-table tr {
		background-color: transparent !important;
	}

	.table /deep/ .el-table--enable-row-transition .el-table__body td,
	.el-table .cell {
		background-color: transparent;
	}
</style>
