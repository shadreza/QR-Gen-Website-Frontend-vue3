<template>
    <div class="sidebar" :style="{width : `${sidebarWidth}px`}">
        <div class="togglerKey">
            <span class="collapse-icon" @click="toggleSideBar()"
            :class="{ 'rotate-180': !isSidebarCollapsed }"> ⇝ </span>
        </div>
            <router-link style="text-decoration: none; color: inherit;" to="/">
                <div class="options" @click="optionClicked('home')" id="home">
                    <img class="navIcons" :class="{ 'extendedNavIcons': !isSidebarCollapsed }" src="../assets/icons8-home.gif" alt="Home"/>
                    <span v-if="!isSidebarCollapsed" class="option-text">Home</span>
                </div>
            </router-link>
            <router-link style="text-decoration: none; color: inherit;" to="/about">
                <div class="options" @click="optionClicked('about')" id="about">
                    <img class="navIcons" :class="{ 'extendedNavIcons': !isSidebarCollapsed }" src="../assets/icons8-info.gif" alt="About"/>
                    <span v-if="!isSidebarCollapsed" class="option-text">About</span>
                </div>
            </router-link>
            <router-link style="text-decoration: none; color: inherit;" to="/">
                <div class="options" @click="optionClicked('profile')" id="profile">
                    <img class="navIcons" :class="{ 'extendedNavIcons': !isSidebarCollapsed }" src="../assets/icons8-people.gif" alt="Profile"/>
                    <span v-if="!isSidebarCollapsed" class="option-text">Profile</span>
                </div>
            </router-link>
    </div>
</template>

<script>

    import {mapState, mapMutations} from 'vuex'

    export default {
        name : 'SideNavBar',

        data() {
            return {
                selectedOption : 'home',
            }   
        },

        computed : {
            ...mapState(["sidebarWidth", "isSidebarCollapsed"])
        },

        mounted () {
            document.getElementById(this.selectedOption).classList.add('active')
        },

        methods : {
            ...mapMutations(["toggleSideBar"]),
            optionClicked(id) {
                document.getElementById(this.selectedOption).classList.remove('active')
                this.selectedOption = id
                document.getElementById(id).classList.add('active')
            }
        },

    }
</script>

<style>
:root {
    --sidebar-bg-color: #40DFEF;
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
        padding: 0.5rem;
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

    .navIcons {
        border-radius: 100%;
        cursor: pointer;
        width: 100%;
        max-width: 50px;
        transition: 0.4s linear;
    }
    .navIcons:hover {
        width: 120%;
        transition: 0.2s linear;
    }
    .extendedNavIcons {
        margin: 10px;
        transition: 0.1s linear;
    }

    .options {
        width: 100%;
        margin: 10px auto;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        cursor: pointer;
        color: #fff;
    }
    .options:hover{
        background: #FFFBE7;
        border-radius: 30px;
        padding: 0;
        color: #000;
    }

    .option-text {
        font-weight: 700;
        transition: 0.3s ease-in;
    }

    .active {
        border: 4px solid #E78EA9;
        background: #B9F8D3;
        border-radius: 30px;
        padding: 0;
        color: #000;
    }

    router-link {
        text-decoration: none;
    }

</style>