<template>
	<div id="wrap">
		<div style="display: flex; justify-content: space-around;">
			<div class="weather">
				<div class="item">
					2020-07-28 00:00:00 星期六
				</div>
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
			<div class="user"></div>
		</div>


		<!-- 地图分布数据显示 -->
		<div class="show-map">
			<span style="color: #fff;">地图分布</span>
		</div>

		<div class="summary">
			<div style="width: 70%; height: 400px;		border: 1px solid #2A9F93;"><span style="color: #fff;">数据</span></div>
			<div style="width: 29%; 	height: 400px;	border: 1px solid #2A9F93;"><span style="color: #fff;">数据</span></div>
		</div>


	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		mounted() {
			this.initCanvas()
		},
		methods: {
			// 进入后台管理系统
			toManage() {
				this.$router.replace("/");
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
		background-image: url(../assets/image/earth2.jpg);
	}

	.canvas {
		width: 33%;
		height: 160px;
		display: flex;
		justify-content: space-around;
		position: relative;
	}

	.weather {
		width: 33%;
		height: 40px;
		display: flex;
		margin-top: 20px;
		padding-left: 20px;
		border-bottom: 1px solid #2A9F93;
		box-shadow: 5px 5px 5px #2A9F93;
		color: #fff;
		font-size: 20px;
		
		.item {
			padding-left: 10px;
		}
	}

	.user {
		width: 33%;
		height: 60px;
		border-bottom: 1px solid #2A9F93;
	}

	.head {
		position: absolute;
		top: 10px;
		font-size: 30px;
		color: #fff;
	}

	.button {
		position: absolute;
		top: 43%;
		
	}

	.show-map {
		height: 350px;
		margin: 0 20px;
		border: 1px solid #2A9F93;
	}

	.summary {
		display: flex;
		justify-content: space-between;
		margin: 10px 20px;
	}
</style>
