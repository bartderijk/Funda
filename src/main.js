import Vue from 'vue';
import App from './App.vue';
import store from './store';
import './assets/sass/styles.scss';
import '../node_modules/@fortawesome/fontawesome-free/js/all.min';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
