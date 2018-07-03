'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
import leaderBoard from './leaderBoard';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    leaderBoard
  }
});
