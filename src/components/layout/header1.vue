<template>
	<div>
		<div class="header">
			<div class="logo">
				<img src="../../assets/image/badges-2.png" alt="">
			</div>
			<div class="title">公安后台系统</div>
			<div class="type">
				<el-menu :default-active="activeIndex" mode="horizontal" background-color="#003366" text-color="#fff"
				 active-text-color="#fff" @select="handleSelect">
					<el-menu-item index="police-list">日常管理</el-menu-item>
					<el-menu-item index="upload">安防布控</el-menu-item>
					<el-menu-item index="data">数据统计</el-menu-item>
					<el-menu-item index="alert">告警处理</el-menu-item>
				</el-menu>
			</div>
			<!-- 折叠按钮 -->
			<div class="collapse-btn" @click="collapseChage">
				<i v-if="!collapse" class="el-icon-s-unfold icon"></i>
				<i v-else class="el-icon-s-fold icon"></i>
			</div>

			<!-- 用户 -->
			<div class="info">
				<!-- 告警通知 -->
				<div class="alert">
					<audio id="audio" src="../../assets/media/alert.mp3" />
					<el-badge :is-dot="alertListLength > 0 ? true : false" class="item"><img src="../../assets/image/alert.png" alt=""
						 @click="toAlert"></el-badge>
				</div>
				<el-dropdown @command="handleCommand">
					<span class="el-dropdown-link">
						{{username}}
						<i class="el-icon-caret-bottom"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item divided command="loginout">切换账号</el-dropdown-item>
						<el-dropdown-item divided command="resetPassword">修改密码</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
			<!-- 退出 -->
			<div class="logout">
				<img src="../../assets/image/exit.png" @click="logout" alt="">
			</div>

		</div>
		<el-dialog title="修改密码" :visible.sync="dialogResetPassWord" width="500px" :close-on-click-modal="false">
			<div class="box">
				<el-form :model="pwdForm" label-width="120px">
					<el-form-item label="旧密码">
						<el-input v-model="pwdForm.old_password"></el-input>
					</el-form-item>
					<el-form-item label="新密码">
						<el-input v-model="pwdForm.new_password"></el-input>
					</el-form-item>
					<el-form-item label="再次确认新密码">
						<el-input v-model="pwdForm.confirm_password"></el-input>
					</el-form-item>
					<div class="submit">
						<el-form-item>
							<el-button type="primary" @click="ChangePassword">提交</el-button>
						</el-form-item>
					</div>
				</el-form>
			</div>
		</el-dialog>


	<!-- 	<el-dialog title="告警提示" :visible.sync="dialogAlert" width="600px" :close-on-click-modal="false">
			<div class="box">
				<div class="alert-info">您有 <span style="color: #ff6666;">{{alertListLength}}</span> 条告警信息未处理, <span class="link"
					 @click="toAlert">立即处理</span></div>
			</div>
		</el-dialog> -->
	</div>

</template>

<script>
	import bus from './bus'
	import LOGIN from '@/api/login.js'
	import API from '@/api/index.js'

	import {
		mapState
	} from 'vuex'

	export default {
		data() {
			return {
				dialogResetPassWord: false,
				pwdForm: {
					new_password: '',
					old_password: '',
					confirm_password: ''
				},
				alertList: [], // 告警列表
				alertListLength: 0, // 告警列表的长度变化就提示
				username: localStorage.getItem('username'),
				hasAlert: true, // 如果有告警信息就显示小红点
			}
		},
		computed: {
			activeIndex() {
				let self = this;
				console.log(112, self.$route.path.split('/'))
				if (self.$route.path.split('/')[1] == 'police-list') {
					self.index = 'police-list';
					return 'police-list'
				}
				if (self.$route.path.split('/')[1] == 'department') {
					self.index = 'police-list';
					return 'police-list'
				}
				if (self.$route.path.split('/')[1] == 'account') {
					self.index = 'police-list';
					return 'police-list'
				}
				if (self.$route.path.split('/')[1] == 'address-list') {
					self.index = 'police-list';
					return 'police-list'
				}
				if (self.$route.path.split('/')[1] == 'areas') {
					self.index = 'police-list';
					return 'police-list'
				}
				if (self.$route.path.split('/')[1] == 'outInLogs') {
					self.index = 'police-list';
					return 'police-list'
				}
				if (self.$route.path.split('/')[1] == 'area-list') {
					self.index = 'police-list';
					return 'police-list'
				}
				if (self.$route.path.split('/')[1] == 'upload') {
					self.index = 'upload'
					return 'upload'
				}
				if (self.$route.path.split('/')[1] == 'search') {
					self.index = 'upload'
					return 'upload'
				}
				if (self.$route.path.split('/')[1] == 'dangerlogs') {
					self.index = 'upload'
					return 'upload'
				}
				if (self.$route.path.split('/')[1] == 'data') {
					self.index = 'data'
					return 'data'
				}
				if (self.$route.path.split('/')[1] == 'generate') {
					self.index = 'data'
					return 'data'
				}
				if (self.$route.path.split('/')[1] == 'alert') {
					self.index = 'alert'
					return 'alert'
				}
			},
			...mapState(['collapse', 'crumbList'])
		},
		watch: {
			'alertListLength': function() {
				let tip = '<div class="alert-info">您有 <span style="color: #ff6666;">' + this.alertListLength +
					'</span> 条告警信息未处理, <a style="cursor: pointer; text-decoration: underline; color: #3399cc;">立即处理</a></div> '
				let notify = this.$notify({
					title: '告警提示',
					dangerouslyUseHTMLString: true,
					message: tip,
					duration: 5000,
					offset: 100,
					type: 'warning'
				});
				notify.$el.querySelector('a').onclick = () => {
					this.toAlert();
					// 点击后关闭notify 不需要的话可删掉
					notify.close();
				};
				this.aplayAudio();
			}
		},
		mounted() {
			API.alert(1, 10, 1).then(res => {
				console.log(12121)
				// this.alertList = res.data
				this.alertListLength = res.total;
			})
			this.getAlert()
		},
		methods: {
			// 获取告警信息
			getAlert() {
				setInterval(() => {
					console.log(232323)
					API.alert(1, 10, 1).then(res => {
						// this.alertList = res.data
						this.alertListLength = res.total;
					})
				}, 30000)
			},
			// 去告警页面
			toAlert() {
				// this.dialogAlert = false;
				this.$router.push('/alert')
			},
			// 语音播放
			aplayAudio() {
				const audio = document.getElementById('audio')
				audio.play()
			},
			handleCommand(command) {
				var self = this;
				if (command == 'loginout') {
					LOGIN.logout().then(res => {
						localStorage.removeItem('username')
						window.location.reload()
						self.$router.replace('/login')
					})
				}
				if (command == 'resetPassword') {
					self.dialogResetPassWord = true;
				}
			},
			ChangePassword() {
				var self = this;
				if (self.pwdForm.new_password === self.pwdForm.confirm_password) {
					LOGIN.resetPassword(self.pwdForm).then(res => {
						self.dialogResetPassWord = false;
						self.$message.success('修改成功');
						self.pwdForm = {};
						localStorage.removeItem('username')
						window.location.reload()
						self.$router.replace('/login')
					})
				} else {
					self.$message.error('新密码与确认密码不一致');
				}
			},
			collapseChage() {
				this.$store.commit('collapseChage')
			},
			logout() {
				var self = this;
				window.location.reload()
				localStorage.removeItem('username')
				self.$router.replace('/login')
			},
			handleSelect(val) {
				console.log(val)
				bus.$emit('path', val)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.header {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		height: 3.75rem;
		font-size: 1.25rem;
		// background-image: linear-gradient(to right, #4CA1AF , #4CA1AF);
		background: #003366;
		color: #fff;
		z-index: 100;
		color: #fff;
		font-size: 1.375rem;

	}

	.logo {
		position: absolute;
		top: 1rem;
		left: 0.9375rem;
	}

	.logo img {
		width: 1.6rem;
		height: 1.6rem;
		border-radius: 0.3125rem;
	}

	.title {
		height: 3.75rem;
		line-height: 3.75rem;
		margin-left: 2.8125rem;
	}

	.collapse-btn {
		position: absolute;
		top: 1.25rem;
		left: 13.125rem;
		background: rgba(255, 255, 255, .1);

	}

	.collapse-btn .icon {
		font-size: 20px;
		cursor: pointer;
	}

	.type {
		position: absolute;
		top: 0;
		left: 15.625rem;
		display: flex;
		justify-content: center;
	}

	.type .item {
		display: flex;
		justify-content: center;
		width: 6.25rem;
		height: 100%;
		color: #fff;
		font-size: 1.25rem;
	}


	.alert {
		margin-right: 1rem;
	}

	.alert img {
		width: 1.25rem;
		height: 1.25rem;
		border-radius: 0.3125rem;
	}

	.info {
		position: absolute;
		top: 1.25rem;
		right: 1.875rem;
		padding-right: 0.625rem;

		.el-dropdown-link {
			font-size: 1.375rem;
			color: #fff;
		}

		display: flex;
		justify-content: space-between;
	}

	.logout {
		position: absolute;
		top: 1.25rem;
		right: 0.625rem;
	}

	.logout img {
		width: 1.3rem;
		height: 1.3rem;
		border-radius: 0.3125rem;
	}

	.alert-info {
		margin: 1.875rem 0;
		font-size: 1.625rem;
	}

	.alert-info .link {
		cursor: pointer;
		text-decoration: underline;
		color: #3399cc;
	}
</style>
