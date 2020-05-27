<template>
	<div class="header">
		<div class="title">
			<span>图巴诺校园安全</span>
		</div>
		<!-- 折叠按钮 -->
		<div class="collapse-btn" @click="collapseChage">
			<i v-if="!collapse" class="el-icon-s-unfold icon"></i>
			<i v-else class="el-icon-s-fold icon"></i>
		</div>
		<!-- 个人中心 -->
		<div class="info">
			<el-dropdown>
				<span class="el-dropdown-link">
					{{username}}
					<i class="el-icon-caret-bottom"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item divided>切换账号</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		
		</div>
		<div class="logout">
			<i class="el-icon-circle-close icon" @click="logout"></i>
		</div>
	</div>
</template>

<script>
	import bus from './bus'
	import API from '@/api/login.js'

	export default {
		data() {
			return {
				collapse: false,
				username: localStorage.getItem('username')
			}
		},
		methods: {
			collapseChage() {
				var self = this;
				self.collapse = !self.collapse;
				bus.$emit('collapse', this.collapse);
			},
			logout() {
				var self = this;
				API.logout().then(res => {
					localStorage.removeItem('username')
					localStorage.removeItem('token')
					self.$router.replace('/login')
				})
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
		height: 50px;
		font-size: 20px;
		background-color: #333;
		color: #fff;
	}

	.title {
		height: 50px;
		line-height: 50px;
		margin-left: 20px;
		font-size: 20px;
	}

	.collapse-btn {
		position: absolute;
		top: 15px;
		left: 210px;
		background: rgba(255, 255, 255, .1);

	}

	.collapse-btn .icon,
	.logout .icon {
		font-size: 20px;
		cursor: pointer;
	}

	.info {
		position: absolute;
		top: 15px;
		right: 80px;
		border-right: 1px #fff solid;
		padding-right: 10px;

		.el-dropdown-link {
			font-size: 20px;
			color: #fff;
		}
	}

	.logout {
		position: absolute;
		top: 15px;
		right: 50px;
	}
</style>
