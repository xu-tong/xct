import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
import icon from '@/components/icon/index.vue'
Vue.component("myIcon",icon)
const app = new Vue({
    ...App
})
app.$mount()
