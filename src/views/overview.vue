<template>
	<div>
		<div class="welcome">
			管理员：
			<span style="color: #2a9f93;">{{username}}</span>
			当前时间：
			<span style="color: #F56C6C;">{{ nowDate + ' ' + nowTime + ' ' + nowWeek }}</span>
		</div>

		<!-- 	<div class="view">
			<div class="view-box">
				<div class="title"><span>学校总览</span></div>
			</div>
			<div class="view-box">
				<div class="title"><span>出租屋总览</span></div>
			</div>
		</div> -->
		<div class="view">
			<el-tabs v-model="activeName" @tab-click="changeActive">
				<el-tab-pane label="学校总览" name="school">
					<div class="view-box">
						<div class="col">
							dd
						</div>
						<div class="col">
							dd
						</div>
						<div class="col">
							ddddd
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="出租屋总览" name="rent">
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
	import API from "@/api/index.js";
	export default {
		data() {
			return {
				username: localStorage.getItem("username"),
				nowDate: "", // 当前日期
				nowTime: "", // 当前时间
				nowWeek: "", // 当前星期

				activeName: 'school'
			};
		},
		mounted() {
			this.currentTime();
		},
		methods: {
			currentTime() {
				setInterval(this.getTime, 500);
			},
			getTime() {
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
		},
		// 销毁定时器
		beforeDestroy: function() {
			if (this.getTime) {
				clearInterval(this.getTime);
			}
		}
	};
</script>

<style scoped lang="scss">
	.welcome {
		padding: 20px 10px;
		box-shadow: 1px 1px 5px #ccc;
		font-size: 16px;
	}

	.welcome span {
		padding: 20px 5px;
	}

	.view {
		margin-top: 20px;
		height: 1000px;

		.view-box {
			display: flex;
			justify-content: space-around;
			
			
			.col {
				width: 33%;
				border: 1px red solid;
			}
		}
	}
</style>
