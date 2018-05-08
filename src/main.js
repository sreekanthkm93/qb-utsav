'use strict';

import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import ApiService from './common/api.service';

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
