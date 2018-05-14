<template>
<div class="home">
  <home-banner/>
  <events-slider/>
</div>
</template>

<script>
  import HomeBanner from '../components/HomeBannerView';
  import EventsSlider from '../components/EventsSlider';

  export default {
    name: 'Home',
    components: {
      HomeBanner,
      EventsSlider
    }
  };
</script>

<style scoped>

</style>
