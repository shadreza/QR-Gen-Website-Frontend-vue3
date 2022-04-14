<template>
    <div class="nav">
        <div class="nav-left-part logo-and-title">
            <router-link class="title-text" to="/"><h2 >QR Gen</h2></router-link>
        </div>
        <div class="nav-middle-part">
            <router-link @click="select('homeLink')" id="homeLink" class="link" to="/">Home</router-link>
            <router-link @click="select('generateQrLink')" id="generateQrLink" class="link" to="/">Generate QR</router-link>
            <router-link @click="select('servicesLink')" id="servicesLink" class="link" to="/">Services</router-link>
            <router-link @click="select('aboutLink')" id="aboutLink" class="link" to="/about">About</router-link>
        </div>
        <div class="nav-right-part">Hi</div>
    </div>
</template>

<script>
    export default {
        name : 'NavBar',
        data () {
            return {
                selectedNavElementId : '',
            }
        },
        methods : {
            select(name) { 
                if (this.selectedNavElementId !== '') {
                    document.getElementById(this.selectedNavElementId).classList.remove('active')
                } 
                this.selectedNavElementId = name
                document.getElementById(name).classList.add('active')
            },
        }
    }
</script>

<style scoped>

    .nav {
        width: auto;
        max-height: 4rem;
        color: white;
        opacity: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
    }

    .nav-left-part {
        text-align: left;
        max-width: 20%;
    }

    .title-text {
        cursor: pointer;
        text-decoration: none;
        color: #F38181;
    }

    .title-text:hover {
        color: #F55353;
        transition: 1.5s;
    }

    .nav-middle-part {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .link {
        text-decoration: none;
        font-size: 18px;
        color: aliceblue;
        margin: 16px;
        padding: 8px;
        border-radius: 6px;
    }

    .active {
        background: #10A500;
    }

    .link:hover {
        background: #F0A500;
        transition: 1s;
    }

    

</style>