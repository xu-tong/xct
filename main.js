import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$statusBarHeight = uni.getSystemInfoSync().statusBarHeight;

// Vue.component("icon",icon)
const app = new Vue({
    ...App
})
app.$mount()
