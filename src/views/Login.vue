<template>
	<div class="login-wrap">
		<div class="login">
			<div class="title">图巴诺总控管理后台</div>
			<div class="form-info">
				<div class="form-info-item">
					<el-input v-model="adminForm.username" placeholder="username"></el-input>
				</div>
				<div class="form-info-item">
					<el-input type="password" v-model="adminForm.password" placeholder="password" @keyup.enter.native="submitForm"></el-input>
				</div>
				<div class="form-info-item">
					<el-button class="login_btn" type="primary" @click="submitForm('loginForm')">登录</el-button>
				</div>
			</div>

			<!-- <el-form :model="loginForm" ref="loginForm" label-width="40px" class="form_info">
				<el-form-item prop="username" label="账号">
					<el-input v-model="loginForm.username" placeholder="username"></el-input>
				</el-form-item>
				<el-form-item prop="password" label="密码">
					<el-input type="password" v-model="loginForm.password" placeholder="password"></el-input>
				</el-form-item>
				<el-form-item class="login_btn">
					<el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
				</el-form-item>
      </el-form>-->
		</div>
	</div>
</template>

<script>
	import API from "@/api/login.js";
	import cookies from "@/utils/cookies.js";
	var Qs = require("qs");

	export default {
		name: "login",
		data() {
			return {
				adminForm: {
					username: "admin",
					password: "123456"
				}
			};
		},
		methods: {
			submitForm() {
				var self = this;
				localStorage.setItem("username", self.adminForm.username);
				localStorage.setItem("password", self.adminForm.password);
				// var arr = ['baiduaip', 'overview','address','device'];
				// localStorage.setItem("permissions", arr);
				self.$router.replace("/overview");
			}
		}
	};
</script>

<style scoped lang="scss">
	.login-wrap {
		width: 100%;
		height: 100%;
		min-width: 760px;
		background-image: url(../assets/image/earth.jpg);
		background-color: #000;
		overflow: hidden;
	}

	.login {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
		width: 25vw;
		height: 18vw;
		background-color: #fff;
		border-radius: 1vw;
		color: #000;
		text-align: center;
		overflow-x: auto;

		.title {
			padding-top: 2vw;
			font-size: 1.4vw;
		}

		.form-info {
			margin-top: 1vw;
		}

		.form-info-item {
			margin: 0 1vw;
			padding-top: 1vw;
		}

		.login_btn {
			width: 100%;
		}
	}
</style>
