<template>
	<div>
		<div :class="{navCollapsed:isSidebarNavCollapse}">
			<sidebarNav class="sidebar"/>
			<mainContent/>
		</div>
	</div>
</template>

<script>
	import sidebarNav from './component/sidebar-nav'
	import mainContent from './component/main-content/index'
    import { mapState } from 'vuex'
	export default {
		components: {
			sidebarNav,
			mainContent
		},
		data() {
			return {
				
			}
		},
        computed: {
            ...mapState(['isSidebarNavCollapse'])
        }
	}
</script>

<style>
</style>
