<template>
    <div>
        <SideNavBar />
        <router-view :style="{marginLeft : `${extendedSidebarWidth}px`}" />
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

</style>