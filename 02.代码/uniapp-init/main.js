import App from './App'


import myAxios from './utils/myAxios.js'

import Vue from 'vue'
Vue.config.productionTip = false

Vue.prototype.$myAxios = myAxios;

// 小程序中对应用,页面,组件三者概念区分的非常清楚
// mp->mini program type->类型 App代表整个小程序
App.mpType = 'app'

const app = new Vue({
    ...App
	// {
	// 	onLaunch: function() {
	// 		console.log('App Launch')
	// 	},
	// 	onShow: function() {
	// 		console.log('App Show')
	// 	},
	// 	onHide: function() {
	// 		console.log('App Hide')
	// 	}
	// }
})
app.$mount()
