'use strict';

import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home';
import Events from '../views/Events';
import Teams from '../views/Teams';
import BoardGames from '../views/BoardGames';
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/teams',
      name: 'Teams',
      component: Teams
    },
    {
      path: '/board-games',
      name: 'BoardGames',
      component: BoardGames
    }


  ]
});
