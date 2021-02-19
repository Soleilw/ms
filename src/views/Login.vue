<template>
	<div class="login-wrap">
		<div class="login">
			<div class="title">
				<img class="logo" src="../assets/image/badges-2.png" alt="">
				<div>中山市沙溪镇人脸识别乡村安防公安系统</div>
			</div>
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
		<div class="footer"><span>中山市沙溪公安分局联合研发</span> </div>
	</div>
</template>

<script>
	import API from "@/api/login.js";

	export default {
		name: "login",
		data() {
			return {
				adminForm: {
					username: "",
					password: ""
				}
			};
		},
		methods: {
			submitForm() {
				var self = this;
				API.login(self.adminForm).then(res => {
					localStorage.setItem('username', self.adminForm.username)
					self.$router.replace("/");
				}).catch(err => {
					self.$message.error(err.response.data.msg)
				})
				// localStorage.setItem('username', 'admin')
				// self.$router.replace("/overview");
			}
		}
	};
</script>

<style scoped lang="scss">
	.login-wrap {
		width: 100%;
		height: 100%;
		min-width: 760px;
		// background-image: url(../assets/image/earth.jpg);
		background-color: #000066;
		overflow: hidden;
	}

	.login {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
		width: 30vw;
		height: 16vw;
		background-color: #fff;
		border-radius: 1vw;
		color: #000;
		text-align: center;
		overflow-x: auto;

		.logo {
			width: 50px;
			height: 50px;
		}

		.title {
			padding-top: 1vw;
			font-size: 1.5rem;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.form-info {
			margin-top: 1.25rem;
		}

		.form-info-item {
			margin: 0 1.25rem;
			padding-top: 1rem;
		}

		.login_btn {
			width: 100%;
		}
	}

	.footer {
		clear: both;
		display: block;
		text-align: center;
		margin: 0px auto;
		position: absolute;
		bottom: 50px;
		width: 100%;
		color: #fff;
		font-size: 20px;
	}
</style>
