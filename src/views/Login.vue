<template>
	<div class="login-wrap">
		<div class="login">
			<div class="title">
				图巴诺校园安全管理后台(小学版)
			</div>
			<el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="3vw" class="form_info">
				<el-form-item prop="username" label="账号">
					<el-input v-model="loginForm.username" placeholder="username"></el-input>
				</el-form-item>
				<el-form-item prop="password" label="密码">
					<el-input type="password" v-model="loginForm.password" placeholder="password"></el-input>
				</el-form-item>
				<el-form-item class="login_btn">
					<el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	import API from '@/api/login.js'


	export default {
		name: 'login',
		data() {
			return {
				loginForm: {
					username: '',
					password: ''
				},
				loginRules: {
					username: [{
						required: true,
						message: '请输入账号',
						trigger: 'blur'
					}],
					password: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}]
				}
			}
		},
		methods: {
			submitForm() {
				var self = this;
				localStorage.setItem('token', '12345678')
				localStorage.setItem('role', 'super')
				localStorage.setItem('username', '总控')
				var permissions = ['baiduaip', 'package', 'project', 'address', 'face', 'device']
				localStorage.setItem('permissions', permissions)
				self.$router.replace('/')
				// if (self.loginForm.username && self.loginForm.password) {
				// 	API.login(self.loginForm).then(res => {
				// 		localStorage.setItem('crl-token', res.token)
				// 		localStorage.setItem('username', self.loginForm.username)
				// 		self.$router.replace('/')
				// 	})
				// }
			}
		}
	}
</script>

<style scoped lang="scss">
	.login-wrap {
		width: 100%;
		height: 100%;
		min-width: 760px;
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
		width: 30vw;
		height: 20vw;
		background-color: #fff;
		border-radius: 1vw;
		color: #000;
		text-align: center;
		overflow-x: auto;

		.title {
			padding-top: 3vw;
			font-size: 1.4vw;
		}

		.form_info {
			padding: 3vw 2vw 0 2vw;
		}

		.login_btn button {
			width: 100%;
		}
	}
</style>
