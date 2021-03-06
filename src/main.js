import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
import "./assets/css/global.css";
import "./assets/fonts/iconfont.css";
import axios from "axios";
import TreeTable from 'vue-table-with-tree-grid'

Vue.prototype.$http = axios;
axios.defaults.baseURL = "https://lianghj.top:8888/api/private/v1/";
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // console.log(config);
  return config;
})

Vue.config.productionTip = false;

Vue.component('tree-table', TreeTable)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
