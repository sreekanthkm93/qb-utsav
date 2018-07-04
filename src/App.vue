<template>
<div>
  <preloader-view/>
  <header-view/>
  <router-view/>
  <!-- <footer-view/> -->
</div>
</template>

<script>
import HeaderView from './components/HeaderView';
import FooterView from './components/FooterView';
import PreloaderView from './components/PreloaderView';

export default {
  name: 'App',
  components: {
    PreloaderView,
    HeaderView,
    FooterView
  }
};
</script>

<style lang="scss">

  @import "./assets/fonts/fonts.scss";

  body {
      background-color: rgba(0, 0, 24, 1);
      font-family: Gilroy,sans-serif;
      font-size: 16px;
      color: #f0f0f0;
  }
</style>
