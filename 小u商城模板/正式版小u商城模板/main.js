import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
Vue.use(uView);
Vue.config.productionTip = false

// 引入网络请求
import http from "./utils/request.js";
// 方便使用，挂载原型上面
Vue.prototype.$http = http;
// 引入我们的baseurl
import {
	baseUrl
} from "./utils/baseUrl.js";
Vue.prototype.$baseUrl = baseUrl;
// 引入检测token的方法
import {
	checkToken
} from "./utils/checkToken.js";
Vue.prototype.$checkToken = checkToken;
// 引入提示
import shotost from "./utils/tips.js";
Vue.prototype.$shotost = shotost;

App.mpType = 'app'

const app = new Vue({
	...App
})

app.$mount()
