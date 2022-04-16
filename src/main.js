import { createApp } from 'vue'
import {createStore} from 'vuex'
import App from './App.vue'
import router from './router'

const store = createStore({
    state() {
        return {
            isSidebarCollapsed: true,
            sidebarWidthDefault: 180,
            sidebarWidthCollapsedDefault: 38,
            sidebarWidth : 38
        }
    },

    mutations: {
        toggleSideBar(state) {
            state.isSidebarCollapsed = !state.isSidebarCollapsed
            state.sidebarWidth = state.isSidebarCollapsed ? state.sidebarWidthCollapsedDefault : state.sidebarWidthDefault
        }
    },

})

createApp(App).use(store).use(router).mount('#app')