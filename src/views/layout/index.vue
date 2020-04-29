<template>
	<div>
		<div>
			<sidebarNav class="sidebar"/>
			<mainContent/>
		</div>
	</div>
</template>

<script>
	import sidebarNav from './component/sidebar-nav'
	import mainContent from './component/main-content/index'
	export default {
		components: {
			sidebarNav,
			mainContent
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style>
</style>
