<template>
    <div>
        <SideNavBar />
        <router-view class="changingSize" :style="{marginLeft : `${extendedSidebarWidth}px`}" />
    </div>
</template>

<script>

    import SideNavBar from '../components/SideNavBar.vue'
    import {mapState} from 'vuex'

    export default {
        name : 'MainLayout',
        components : {
            SideNavBar,
        },
        computed : {
            ...mapState(["extendedSidebarWidth"])
        },
    }
</script>

<style scoped>
    .changingSize {
        transition: 0.4s ease-in-out;
    }
</style>