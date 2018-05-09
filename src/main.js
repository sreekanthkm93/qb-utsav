'use strict';

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue'
import App from './App';
import router from './router';
import store from './store';
import ApiService from './common/api.service';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
ApiService.init();
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  return Promise.resolve()
    .then(() => {
      if (from.name === null && to.name === null) {
        next('/');
      } else {
        next();
      }
    });
});

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
