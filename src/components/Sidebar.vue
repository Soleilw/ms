<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" :collapse="collapse" class="sidebar-el-menu" background-color="#fff"
            text-color="#000" active-text-color="#000" unique-opened router>
            <template v-for="item in sidebar">
                <template v-if="item.children">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">
                                {{item.title}}
                            </span>
                        </template>
                        <template v-for="childrenItem in item.children">
                            <el-submenu v-if="childrenItem.children" :index="childrenItem.index" :key="childrenItem.index">
                                <template slot="title">
                                    {{childrenItem.title}}
                                </template>
                                <el-menu-item v-for="threeItem in childrenItem.children" :key="threeItem.index" :index="threeItem.index">{{ threeItem.title }}</el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="childrenItem.index" :key="childrenItem.index">{{ childrenItem.title }}</el-menu-item>
                        </template>
                    </el-submenu>
                </template>

                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">
                            {{item.title}}
                        </span>
                    </el-menu-item>
                </template>

            </template>
        </el-menu>
    </div>
</template>

<script>
    import sidebar from './sidebar.js'
    import bus from './bus'

    export default {
        data() {
            return {
                sidebar: sidebar,
                collapse: false,
            }
        },
        created() {
            var self = this;
            bus.$on('collapse', msg => {
                self.collapse = msg;
                bus.$emit('collapse-content', msg);
            })
        },
        computed: {
            onRoutes() {
                console.log(1111, this.$route.path)
                return this.$route.path.replace('/', '');
            }
        }
    }
</script>

<style scoped>
    .sidebar {
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom: 0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar {
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse) {
        width: 200px;
    }
    .sidebar > ul {
        height: 100%;
    }

    /* 	
	.el-menu-item.is-active {
		background-color: #786aed !important;
	} */
</style>
