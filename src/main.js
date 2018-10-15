import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import './xlsx_html.full.min';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app', 
  render: h => h(App),
});
