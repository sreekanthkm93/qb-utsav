<template>
<div>
  <header-view/>
  <router-view/>
  <footer-view/>
</div>
</template>

<script>
import HeaderView from './components/HeaderView';
import FooterView from './components/FooterView';

export default {
  name: 'App',
  components: {
    HeaderView,
    FooterView
  }
};
</script>

<style>
</style>
