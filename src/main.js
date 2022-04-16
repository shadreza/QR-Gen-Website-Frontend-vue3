import { createApp } from 'vue'
import {createStore} from 'vuex'
import App from './App.vue'
import router from './router'

const store = createStore({
    state() {
        return {
            sidebarCollapsed: false,
            sidebarWidthDefault: 180,
            sidebarWidthCollapsedDefault: 38,
            sidebarWidth : 180
        }
    },

    mutations: {
        toggleSideBar(state) {
            state.sidebarCollapsed = !state.sidebarCollapsed
            state.sidebarWidth = state.sidebarCollapsed ? state.sidebarWidthCollapsedDefault : state.sidebarWidthDefault
        }
    },

})

createApp(App).use(store).use(router).mount('#app')