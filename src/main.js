'use strict';

import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import ApiService from './common/api.service';
import Chart from 'chart.js';
import VueChartkick from 'vue-chartkick';
import jQuery from 'jquery';
import {VueMasonryPlugin} from 'vue-masonry';

Vue.use(VueMasonryPlugin)

import 'bootstrap3/dist/css/bootstrap.css';

global.$ = jQuery;
ApiService.init();
Vue.use(VueChartkick, {adapter: Chart});
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
