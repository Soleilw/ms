<template>
	<div id="wrap">
		<div class="viewport">
			<div class="column">
				<div class="overview panel">
					<div class="inner">
						<div class="item">
							<h4>11111</h4>
							<span>
								<i class="icon-dot" style="color: #006cff"></i>
								出租屋数
							</span>
						</div>
						<div class="item">
							<h4>11111</h4>
							<span>
								<i class="icon-dot" style="color: #006cff"></i>
								设备总数
							</span>
						</div>
						<div class="item">
							<h4>11111</h4>
							<span>
								<i class="icon-dot" style="color: #006cff"></i>
								户主总数
							</span>
						</div>
						<div class="item">
							<h4>11111</h4>
							<span>
								<i class="icon-dot" style="color: #006cff"></i>
								租客总数
							</span>
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
				<div class="people panel">
					<div class="inner">
						<h3>人数统计</h3>
						<div style="display: flex; flex-wrap: wrap;">
							<div class="summary">
								<!-- 总出租屋男女比例 -->
								<div id="total-rent-sex"></div>
							</div>
							<!-- 分割线 -->
							<el-divider></el-divider>
							<div class="summary">
								<div class="search-input">
									<el-input placeholder="请输入要查询的出租屋">
										<el-button slot="append" plain icon="el-icon-search"></el-button>
									</el-input>
								</div>
								<!-- 单个出租屋男女比例 -->
								<div id="single-rent-sex"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="column">
				<div class="manage panel">
					<!-- 用户列表 -->
					<div class="user">
						<div>
							<el-button size="mini" type="primary" @click="toManage">进入后台管理</el-button>
						</div>
						<div class="image">
							<img src="../assets/image/admin.png" alt="">
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
				rent: '总'
			}
		},
		mounted() {
			this.init();
			this.renterSummary();
		},
		methods: {
			toManage() {
				this.$router.replace("/");
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
					var option = {
						// 标题
						title: {
							text: self.rent + '出租屋男女比例',
							textStyle: {
								fontSize: 14,
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
					people.setOption(option);
					onePeople.setOption(option);
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
		background: url(../assets/image/bg-img.png) no-repeat 0 0 / contain;
		background-color: #101129;
	}

	// 概览区域
	.overview {
		height: 4.583rem;

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
	}

	.column {
		flex: 3;
		position: relative;
	}

	.column:nth-child(2) {
		flex: 4;
		margin: 1.333rem 0.833rem 0;
	}

	.panel {
		/* 边框 */
		box-sizing: border-box;
		border: 2px solid red;
		border-image: url(../assets/image/border.png) 51 38 21 132;
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


	// 地图
	.map .chart {
		flex: 1;
		background-color: rgba(255, 255, 255, 0.05);

		#geo {
			width: 100%;
			height: 100%;
		}

	}

	// 人数统计
	.people {
		height: 35rem;

		.summary {
			width: 100%;
			// height: 15rem;
			margin-bottom: 0.833rem;

			.search-input {
				padding: .5rem 8rem .5rem .5rem;
			}

			#total-rent-sex,
			#single-rent-sex {
				width: 300px;
				height: 10rem;
				margin-top: 10px;
				margin-left: 10px;
			}

		}
	}

	// 进入后台管理
	.manage {
		.user {
			display: flex;
			justify-content: flex-end;
			justify-items: center;

			img {
				width: 50px;
				height: 50px;
				border-radius: 50%;
				border: 2px #006cff solid;
			}
		}
	}
</style>
