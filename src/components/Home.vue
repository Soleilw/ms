<template>
	<div class="wrapper">
		<v-header></v-header>
		<v-siderbar></v-siderbar>
		<div class="main" :class="{'content-collapse':collapse}">
			<v-tags></v-tags>
			<div class="content">
				<transition name="move" mode="out-in">
					<keep-alive :include="tagsList">
						<router-view></router-view>
					</keep-alive>
				</transition>
				<el-backtop target=".content"></el-backtop>
			</div>
		</div>
	</div>
</template>

<script>
	import vHeader from './Header.vue'
	import vSiderbar from './Sidebar.vue'
	import vTags from './Tags.vue'
	import bus from './bus'
	export default {
		components: {
			vHeader,
			vSiderbar,
			vTags
		},
		data() {
			return {
				tagsList: [],
				collapse: false
			}
		},
		mounted() {
			console.log(99999, this.tagsList)
		},
		created() {
			bus.$on('collapse-content', msg => {
					this.collapse = msg;
				}),

				bus.$on('tags', msg => {
					console.log('msg', msg)
					let arr = [];
					for (let i = 0, len = msg.length; i < len; i++) {
						msg[i].name && arr.push(msg[i].name);
						console.log(msg[i].name)
						console.log(arr.push(msg[i].name))
					}
					this.tagsList = arr;
				});
		}
	}
</script>

<style>

</style>
