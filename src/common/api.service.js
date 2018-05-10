'use strict';

import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { API_URL } from '../common/config';
import StorageService from './storage.service';

const ApiService = {
  init () {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },
  setHeader () {
    Vue.axios.defaults.headers.common['Authorization'] = StorageService.getToken();
  },
  post (url, body) {
    return Vue.axios.post(`${url}`, body);
  },
  get(url) {
    return new Promise((resolve => {
      resolve({
        data : [
          {name: '1', data: {'May': 12, 'Jun': 16, 'Jul': 20, 'Aug': 20, 'Sep': 35, 'Oct': 56, 'Nov': 59, 'Dec': 60}},
          {name: '2', data: {'May': 12, 'Jun': 13, 'Jul': 26, 'Aug': 30, 'Sep': 48, 'Oct': 66, 'Nov': 70, 'Dec': 72}},
          {name: '3', data: {'May': 8, 'Jun': 10, 'Jul': 25, 'Aug': 56, 'Sep': 70, 'Oct': 80, 'Nov': 90, 'Dec': 101}},
          {name: '4', data: {'May': 15, 'Jun': 16, 'Jul': 16, 'Aug': 42, 'Sep': 60, 'Oct': 60, 'Nov': 78, 'Dec': 80}},
        ]
      })
    }));
    // return Vue.axios.get(url);
  }
};

export default ApiService;
