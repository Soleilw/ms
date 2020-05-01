<template>
	<div class="main-container">
		<TopAside/>
		<Content/>
	</div>
</template>

<script>
	import Content from './content'
	import TopAside from './top-aside'
	import { mapState } from 'vuex'
	
	export default {
		components: {
			TopAside,
			Content
		},
		computed: {
			...mapState(['isSidebarNavCollapse'])
		},
		data() {
			return {}
		}
	}
</script>

<style>
</style>
