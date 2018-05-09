<template>
<div>
  <preloader-view/>
  <header-view/>
  <router-view/>
  <footer-view/>
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

<style>
</style>
