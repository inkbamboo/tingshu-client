import App from './App'
import uvUI from '@/uni_modules/uv-ui-tools'
import {
	Request
} from '@/util/request/index'
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
Vue.prototype.$Channel = 'nianYin';

App.mpType = 'app'
Vue.use(uvUI, {
	mpShare: true
});
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {createSSRApp} from 'vue'
import store from './store/index.js'
export function createApp() {
	const app = createSSRApp(App)
	// 引入请求封装
	Request(app)
	app.use(uvUI, {
		mpShare: true
	})
	app.use(store)
	return {
		app
	}
}
// #endif



