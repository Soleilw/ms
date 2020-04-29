<template>
	<div>
		<!-- 粒子背景 -->
		<div id="particle">
			<canvas class="particles-js-canvas-el" style="'width: 100%; height: 100%;"></canvas>
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
	</div>
</template>

<script>
import particles from './particles/particles.js'
import particlesConfig from './particles/particles.json'



export default {
	name: 'Login',
	data() {
		return {
			loginForm: {
				username: 'admin',
				password: '123456'
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
	mounted() {
		particlesJS("particle", particlesConfig);
	},
	methods: {
		submitForm() {
			var self = this;
			self.$router.push('/')
		}
	}
}
</script>

<style scoped lang="scss">
body {
	position: absolute;
	width: 100%;
	height: 100%;
	min-width: 760px;
	overflow: hidden;
}

#particle {
	position: relative;
	width: 100%;
	height: 100%;
	background-color: #000;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 50% 50%;

	canvas {
		display: block;
		vertical-align: bottom;
	}
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
