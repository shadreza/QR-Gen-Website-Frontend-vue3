<template>
    <div>
        <SideNavBar />
        <router-view />
    </div>
</template>

<script>

    import SideNavBar from '../components/SideNavBar.vue'

    export default {
        name : 'MainLayout',
        components : {
            SideNavBar,
        }
    }
</script>

<style scoped>

</style>