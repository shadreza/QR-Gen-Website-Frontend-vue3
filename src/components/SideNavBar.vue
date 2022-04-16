<template>
    <div class="sidebar" :style="{width : `${sidebarWidth}px`}">
        <div class="togglerKey">
            <span class="collapse-icon" @click="toggleSideBar()"
            :class="{ 'rotate-180': !sidebarCollapsed }"> ⤇ </span>
        </div>
    </div>
</template>

<script>

    import {mapState, mapMutations} from 'vuex'

    export default {
        name : 'SideNavBar',

        computed : {
            ...mapState(["sidebarWidth", "sidebarCollapsed"])
        },

        methods : {
            ...mapMutations(["toggleSideBar"])
        },

    }
</script>

<style>
:root {
    --sidebar-bg-color: #00ADB5;
    --sidebar-item-hover: #38a169;
    --sidebar-item-active: #276749;
}
</style>

<style scoped>
    .sidebar {
        color: white;
        background-color: var(--sidebar-bg-color);

        float: left;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        bottom: 0;
        padding: 1em;

        transition: 0.3s ease;

        display: flex;
        flex-direction: column;
    }

    .collapse-icon {
        position: absolute;
        bottom: 0;
        padding: 0.75rem;
        font-size: 1.75rem;
        font-weight: 900;
        cursor: pointer;
        transition: 0.2s linear;
    }
    .collapse-icon:hover {
        transition: 0.4s ease;
        color: #393E46;
    } 
    .rotate-180 {
        transform: rotate(180deg);
        transition: 0.2s linear;
        margin-left: 30%;
    }
</style>