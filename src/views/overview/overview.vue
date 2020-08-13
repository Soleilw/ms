<template>
	<div id="wrap">
		<div class="viewport">
			<div class="column">
				<div class="overview panel">
					<div class="inner">
						<div class="item">
							<h4>10000000</h4>
							<span>
								<i class="icon-dot" style="color: #006cff"></i>
								出租屋数
							</span>
						</div>
						<div class="item">
							<h4>10000000</h4>
							<span>
								<i class="icon-dot" style="color: #006cff"></i>
								设备总数
							</span>
						</div>
						<div class="item">
							<h4>10000000</h4>
							<span>
								<i class="icon-dot" style="color: #006cff"></i>
								户主总数
							</span>
						</div>
						<div class="item">
							<h4>10000000</h4>
							<span>
								<i class="icon-dot" style="color: #006cff"></i>
								租客总数
							</span>
						</div>
					</div>
				</div>
				<div class="summary">
					<!-- 出租屋已租/空置情况 -->
					<div class="rent-people panel">
						<div class="inner">
							<div id="out-in"></div>
						</div>
					</div>
					<!-- 单个出租屋男女比例 -->
					<div class="rent-people panel">
						<div class="inner">
							<div class="search-input">
								<el-input placeholder="请输入要查询的出租屋" size="mini">
									<el-button slot="append" icon="el-icon-search"></el-button>
								</el-input>
							</div>
							<div id="rents"></div>
						</div>
					</div>
				</div>
				<h3>重点关注人员进出记录</h3>
				<div class="record panel">
					<div class="inner">
						<div class="table">
							<el-table :data="recordData" max-height="350" border :cell-style="getCellClass" :header-cell-style="getRowClass">
								<el-table-column prop="id" label="ID"></el-table-column>
								<el-table-column prop="id" label="ID"></el-table-column>
								<el-table-column prop="id" label="ID"></el-table-column>
								<el-table-column prop="id" label="ID"></el-table-column>
							</el-table>
						</div>

					</div>
				</div>
			</div>
			<div class="column">
				<!-- 地图 -->
				<div class="map">
					<h3>出租屋地图分布</h3>
					<div class="chart">
						<div id="geo"></div>
					</div>
				</div>
				<!-- 出租屋人数统计 -->
				<h3>出租屋人数统计</h3>
				<div class="summary">
					<!-- 总出租屋男女比例 -->
					<div class="rent-people panel">
						<div class="inner">
							<div id="total-rent-sex"></div>
						</div>
					</div>
					<!-- 单个出租屋男女比例 -->
					<div class="rent-people panel">
						<div class="inner">
							<div class="search-input">
								<el-input placeholder="请输入要查询的出租屋"  size="mini">
									<el-button slot="append" icon="el-icon-search"></el-button>
								</el-input>
							</div>
							<div id="single-rent-sex"></div>
						</div>
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
								<span>
									广州市[选择城市]
								</span>
								<span>
									温度 38°C
								</span>
								<span>
									多云
								</span>
							</div>
							<!-- 切换页面 -->
							<div class="change">
								<el-button size="mini">查看学校数据</el-button>
								<el-button size="mini">查看出租屋数据</el-button>
								<el-button size="mini" @click="toManage">进入后台管理</el-button>
							</div>
						</div>
						<!-- 用户列表 -->
						<div class="image">
							<img src="../../assets/image/admin.png" alt="">
							<div class="name">{{username}}</div>
						</div>
					</div>
				</div>
				<h3>实时报警记录</h3>
				<div class="police panel">
					<div class="inner">
						<div class="table">
							<el-table :data="callData" max-height="610" border :cell-style="getCellClass" :header-cell-style="getRowClass">
								<el-table-column prop="id" label="ID"></el-table-column>
								<el-table-column prop="id" label="ID"></el-table-column>
								<el-table-column prop="id" label="ID"></el-table-column>
								<el-table-column prop="id" label="ID"></el-table-column>
							</el-table>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	var dotData = [{
			lat: 22.527279,
			lng: 113.371349
		},
		{
			lat: 22.528672,
			lng: 113.399731
		},
		{
			lat: 22.50969,
			lng: 113.3964
		},
		{
			lat: 43.943310,
			lng: 81.042140
		},
		{
			lat: 22.67037,
			lng: 113.35359
		}
	]
	export default {
		data() {
			return {
				recordData: [{
					id: 1
				}, {
					id: 1
				}, {
					id: 1
				}],
				callData: [{
					id: 1
				}, {
					id: 1
				}, {
					id: 1
				}],
				username: localStorage.getItem('username'),
				rent: '总',
			}
		},
		mounted() {
			this.init();
			this.renterSummary();
		},
		methods: {
			// 进入后台
			toManage() {
				this.$router.replace("/");
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
				var center = new TMap.LatLng(22.51595, 113.3926);
				//初始化地图
				var map = new TMap.Map("geo", {
					zoom: 10, //设置地图缩放级别
					center: center, //设置地图中心点坐标
					mapStyleId: "style1" //个性化样式
				});
				//初始化散点图并添加至map图层
				new TMap.visualization.Dot({
						faceTo: "screen", //散点固定的朝向

					})
					.addTo(map)
					.setData(dotData); //设置数据
			},
			// 出租屋人数比例
			renterSummary() {
				var self = this;
				self.$nextTick(function() {
					let people = self.$echarts.init(document.getElementById('total-rent-sex'));
					let onePeople = self.$echarts.init(document.getElementById('single-rent-sex'));
					let rents = self.$echarts.init(document.getElementById('rents'));
					let outIn = self.$echarts.init(document.getElementById('out-in'));
					var option = {
						// 标题
						title: {
							text: self.rent + '出租屋男女比例',
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
									value: 1000,
									name: '男',
									itemStyle: {
										color: '#006cff' // 设置颜色
									}
								},
								{
									value: 310,
									name: '女',
									itemStyle: {
										color: '#ddd',
									}
								},
							]
						}]
					};
					var outOption = {
						xAxis: {
							type: 'category',
							boundaryGap: false
						},
						yAxis: {
							type: 'value',
							boundaryGap: [0, '30%']
						},
						visualMap: {
							type: 'piecewise',
							show: false,
							dimension: 0,
							seriesIndex: 0,
							pieces: [{
								gt: 1,
								lt: 3,
								// color: 'rgba(0, 180, 0, 0.5)'
							}, {
								gt: 5,
								lt: 7,
								// color: 'rgba(0, 180, 0, 0.5)'
							}]
						},
						series: [{
							type: 'line',
							smooth: 0.6,
							symbol: 'none',
							lineStyle: {
								color: '#fff',
								width: 5
							},
							markLine: {
								symbol: ['none', 'none'],
								label: {
									show: false
								},
								data: [{
										xAxis: 1
									},
									{
										xAxis: 3
									},
									{
										xAxis: 5
									},
									{
										xAxis: 7
									}
								]
							},
							areaStyle: {},
							data: [
								['2019-10-10', 200],
								['2019-10-11', 400],
							]
						}]
					};
					people.setOption(option);
					onePeople.setOption(option);
					rents.setOption(option);
					outIn.setOption(outOption);
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
		height: 5rem;

		.inner {
			display: flex;
			justify-content: space-between;
		}

		h4 {
			font-size: 1.167rem;
			padding-left: 0.2rem;
			color: #fff;
			margin-bottom: 0.333rem
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
				height: 25rem;
			}
		}
	}

	// 人数统计
	.summary {
		display: flex;
		justify-content: space-around;
		align-items: flex-start;


		.rent-people {
			width: 49%;
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
				margin-top: 20px;
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
				flex-wrap: wrap;
				align-items: center;

				span {
					font-size: 28px;
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
