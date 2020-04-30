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
            
        }
	}
</script>

<style>
</style>
