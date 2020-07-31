<template>
	<div id="wrap">
		<div style="display: flex; justify-content: space-between;">
			<div class="weather">
				<div class="item">
					广州市[选择城市]
				</div>
				<div class="item">
					温度 38°C
				</div>
				<div class="item">
					多云
				</div>
			</div>
			<div class="canvas">
				<!-- 获取天气 -->
				<canvas id="myCanvas" width="450px" height="150px" style="border:0">
				</canvas>
				<div class="head">
					<div class="title">图巴诺安全总控系统</div>
				</div>
				<div class="button">
					<el-button size="mini" type="primary">学校</el-button>
					<el-button size="mini" type="primary">出租屋</el-button>
					<el-button size="mini" type="primary" @click="toManage">进入后台管理</el-button>
				</div>
			</div>
			<div class="user">
				<div class="item">
					2020-07-28 00:00:00 星期六
				</div>
				<div class="item">
					管理员：{{username}}
				</div>
				<div class="item">
					<img src="../assets/image/admin.png" alt="">
				</div>
			</div>
		</div>
		<div class="summary">
			<!-- 地图分布数据显示 -->
			<div class="show-map">
				<div class="title"><i class="el-icon-d-arrow-right" style="color: #4c9bfd;padding-right: 5px;font-weight: 1000;"><span
						 style="color: #4c9bfd;">出租屋分布</span></i></div>
				<div id="container"></div>
			</div>
			<div class="data">
				<div class="data-1">
					<div style="width: 12%;display: flex; flex-wrap: wrap;">
						<div class="card">
							出租屋数 <span class="number">10</span>(间)
						</div>
						<div class="card">
							设备个数 <span class="number">100</span>(个)
						</div>
						<div class="card">
							户主个数 <span class="number">100000</span>(人)
						</div>
						<div class="card">
							租客个数 <span class="number">10</span>(人)
						</div>
					</div>
					<div style="width: 30%;border: 1px solid #2A9F93;margin: 10px 0;">
						<div class="title">
							<i class="el-icon-d-arrow-right" style="color: #2A9F93;padding-right: 5px;font-weight: 1000;"><span style="color: #4c9bfd;">实时出租屋预览</span></i>
							<div class="search-input">
								<input type="text" style="color: #fff;padding-right: 5px;font-weight: 1000;" placeholder="请输入查询的出租屋">
								<i class="el-icon-search" style="color: #fff;"></i>
							</div>

						</div>
					</div>
					<div style="width: 50%;border: 1px solid #2A9F93;margin: 10px;">
						<div class="title">
							<i class="el-icon-d-arrow-right" style="color: #2A9F93;padding-right: 5px;font-weight: 1000;"><span style="color: #4c9bfd;">人数统计</span></i>
							<div class="search-input">
								<input type="text" style="color: #fff;padding-right: 5px;font-weight: 1000;" placeholder="请输入查询的出租屋">
								<i class="el-icon-search" style="color: #fff;"></i>
							</div>
						</div>
						<div style="display: flex;justify-content: space-between;">
							<div id="people-summary"></div>
							<div id="one-people-summary"></div>
						</div>
					</div>
				</div>
				<div class="data-2">
					<div style="width: 100%;display: flex; justify-content: space-between;">
						<div style="width: 50%;border: 1px solid #2A9F93;margin: 0 10px;">
							<div class="title">
								<i class="el-icon-d-arrow-right" style="color: #2A9F93;padding-right: 5px;font-weight: 1000;"><span style="color: #4c9bfd;">实时出租屋预览</span></i>
								<div class="search-input">
									<input type="text" style="color: #fff;padding-right: 5px;font-weight: 1000;" placeholder="请输入查询的出租屋">
									<i class="el-icon-search" style="color: #fff;"></i>
								</div>
							</div>
						</div>
						<div style="width: 50%;border: 1px solid #2A9F93;margin: 0 10px;">
							<div class="title">
								<i class="el-icon-d-arrow-right" style="color: #2A9F93;padding-right: 5px;font-weight: 1000;"><span style="color: #4c9bfd;">实时出租屋预览</span></i>
								<div class="search-input">
									<input type="text" style="color: #fff;padding-right: 5px;font-weight: 1000;" placeholder="请输入查询的出租屋">
									<i class="el-icon-search" style="color: #fff;"></i>
								</div>
							</div>
						</div>
						<div style="width: 50%;border: 1px solid #2A9F93;margin: 0 10px;">
							<div class="title">
								<i class="el-icon-d-arrow-right" style="color: #2A9F93;padding-right: 5px;font-weight: 1000;"><span style="color: #4c9bfd;">实时出租屋预览</span></i>
								<div class="search-input">
									<input type="text" style="color: #fff;padding-right: 5px;font-weight: 1000;" placeholder="请输入查询的出租屋">
									<i class="el-icon-search" style="color: #fff;"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- 地图分布数据显示 -->
		<!-- <div class="show-map">
			<span style="color: #fff;">地图分布</span>
		</div>

		<div class="summary">
			<div style="width: 70%; height: 400px;border: 1px solid #2A9F93;box-shadow: 1px 3px 3px #2A9F93;"><span style="color: #fff;">数据</span></div>
			<div style="width: 29%;height: 400px;	border: 1px solid #2A9F93;box-shadow: 1px 3px 3px #2A9F93;"><span style="color: #fff;">数据</span></div>
		</div> -->


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
				username: localStorage.getItem('username'),
				rent: '总',
			}
		},
		mounted() {
			this.initCanvas();
			this.init();
			// 人数统计
			this.peopleSummary()
		},
		methods: {
			// 进入后台管理系统
			toManage() {
				this.$router.replace("/");
			},
			// 地图
			init() {
				var center = new TMap.LatLng(22.51595, 113.3926);
				//初始化地图
				var map = new TMap.Map("container", {
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

			// 人数统计
			peopleSummary() {
				var self = this;
				self.$nextTick(function() {
					let people = self.$echarts.init(document.getElementById('people-summary'));
					let onePeople = self.$echarts.init(document.getElementById('one-people-summary'));
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
										color: '#2A9F93' // 设置颜色
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
			},

			// 绘制图形
			initCanvas() {
				let canvas = document.getElementById('myCanvas');
				let ctx = canvas.getContext('2d');
				// 开始一条路径
				ctx.beginPath();
				ctx.moveTo(3, 0);
				ctx.lineTo(70, 60);
				ctx.lineTo(70, 60);
				ctx.lineTo(80, 60);
				ctx.lineTo(90, 50);
				ctx.lineTo(370, 50);
				ctx.lineTo(380, 60);
				ctx.lineTo(390, 60);
				ctx.lineTo(447, 0);
				ctx.strokeStyle = "#2a9f93";
				ctx.stroke();

				// 再绘制一条路径
				ctx.beginPath();
				ctx.moveTo(0, 0);
				ctx.lineTo(70, 63);
				ctx.lineTo(70, 63);
				ctx.lineTo(80, 63);
				ctx.lineTo(90, 53);
				ctx.lineTo(370, 53);
				ctx.lineTo(380, 63);
				ctx.lineTo(390, 63);
				ctx.lineTo(450, 0);
				ctx.strokeStyle = "#2a9f93";
				ctx.stroke();

				// 再再绘制一条路径
				ctx.beginPath();
				ctx.moveTo(90, 53);
				ctx.lineTo(90, 100);
				ctx.lineTo(370, 100);
				ctx.lineTo(370, 53);
				ctx.stroke();
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

	.canvas {
		width: 33%;
		height: 120px;
		display: flex;
		justify-content: space-around;
		position: relative;
	}

	.weather {
		width: 33%;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 20px;
		padding-left: 20px;
		border-bottom: 1px solid #4c9bfd;
		box-shadow: 1px 3px 3px #4c9bfd;
		color: #fff;
		font-size: 20px;

		.item {
			padding-left: 10px;
		}
	}

	.user {
		width: 33%;
		height: 40px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		margin-top: 20px;
		padding-right: 20px;
		border-bottom: 1px solid #4c9bfd;
		color: #fff;
		font-size: 20px;

		.item {
			padding-right: 10px;

			img {
				width: 30px;
				height: 30px;
				border-radius: 50%;
				border: 2px #fff solid;
			}
		}
	}

	.head {
		position: absolute;
		top: 5px;
		font-size: 30px;
		color: #4c9bfd;
	}

	.button {
		position: absolute;
		top: 39%;
	}

	.summary {
		display: flex;
		justify-content: space-between;
		color: #fff;

		.title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 30px;
			line-height: 30px;
			padding-left: 10px;
			background-color: rgba(0, 0, 0, .2);
			border-bottom: solid 1px #2A9F93;
			font-weight: 1000;

			.search-input {
				position: relative;
				margin-right: 30px;

				input {
					height: 20px;
					line-height: 20px;
					padding: 0 40px 0 5px;
					border: solid 1px #4c9bfd;
					background-color: rgba(0, 0, 0, .2);
				}

				.el-icon-search {
					position: absolute;
					top: 4px;
					height: 20px;
					line-height: 20px;
					padding: 0 5px;
					border: solid 1px #4c9bfd;
				}
			}
		}

		.show-map {
			width: 35%;
			height: 750px;
			border: solid 1px #2A9F93;
			// box-shadow: 1px 3px 3px #2A9F93;
			border-radius: 10px;

			#container {
				// width: 100%;
				height: 710px;
				margin: 3px;
				// border-radius: 0 0 10px 10px;
				border: solid 1px #2A9F93;
			}
		}

		.data {
			width: 64.5%;
			height: 750px;
			display: flex;
			flex-wrap: wrap;

			.data-1 {
				width: 100%;
				height: 300px;
				display: flex;
				justify-content: space-around;
				// border: 1px solid #2A9F93;
				// box-shadow: 1px 3px 3px #2A9F93;
				border-radius: 10px;
				margin-bottom: 10px;

				.card {
					width: 160px;
					margin: 5px;
					padding: 5px;
					// border: 1px solid #bdc3c7;
					border-radius: 5px;
				}

				.number {
					padding: 0 10px 10px;
					font-size: 35px;
				}

				#people-summary, #one-people-summary {
					width: 300px;
					height: 230px;
					margin-top: 10px;
					margin-left: 10px;
					// border: solid 1px #2A9F93;
				}
			}

			.data-2 {
				width: 100%;
				height: 440px;
				display: flex;
				justify-content: space-between;
			}
		}


	}
</style>
