'use strict';

import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home';
import Events from '../views/Events';
import Teams from '../views/Teams';
import Gallery from '../views/Gallery';
import BoardGames from '../views/BoardGames';
import LeaderBoard from '../views/LeaderBoard';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'BoardGames',
      component: BoardGames
    }
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    // {
    //   path: '/events',
    //   name: 'Events',
    //   component: Events
    // },
    // {
    //   path: '/teams',
    //   name: 'Teams',
    //   component: Teams
    // },
    // {
    //   path: '/gallery',
    //   name: 'Gallery',
    //   component: Gallery
    // },
    // {
    //   path: '/board-games',
    //   name: 'BoardGames',
    //   component: BoardGames
    // },
    // {
    //   path: '/leaderBoard',
    //   name: 'LeaderBoard',
    //   component: LeaderBoard
    // }
  ]
});
