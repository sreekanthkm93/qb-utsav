'use strict';

const TOKEN = 'AUTH_KEY';
const USER = 'USER';

export default {
  getToken () {
    return window.localStorage.getItem(TOKEN);
  },

  saveToken (token) {
    window.localStorage.setItem(TOKEN, token);
  },

  getUser () {
    return window.localStorage.getItem(USER);
  },

  saveUser (user) {
    window.localStorage.setItem(USER, user);
  },

  clearStorage () {
    window.localStorage.clear();
  }
};
