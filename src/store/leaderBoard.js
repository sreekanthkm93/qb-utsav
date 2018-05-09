'use strict';

import ApiService from '../common/api.service';
import { GET_LEADER_BOARD } from '../types/actions';
import { SET_ERROR, SET_LEADER_BOARD } from '../types/mutations';

const state = {
  leaderBoardData: {},
  errors: null
};

const actions = {
  [GET_LEADER_BOARD] (context) {
    ApiService.get('/timeLine')
      .then(data => context.commit(SET_LEADER_BOARD, data))
      .catch(err => context.commit(SET_ERROR, err));
  }
};

const mutations = {
  [SET_ERROR] (state, error) {
    state.errors = error
  },
  [SET_LEADER_BOARD] (state, data) {
    state.leaderBoardData = data.data;
  }
};

const getters = {
};

export default {
  state,
  getters,
  actions,
  mutations
}
