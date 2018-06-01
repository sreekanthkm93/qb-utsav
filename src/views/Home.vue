<template>
<div class="home">
  <home-banner/>
  <events-slider/>
  <feedback-form/>
</div>
</template>

<script>
  import HomeBanner from '../components/HomeBannerView';
  import EventsSlider from '../components/EventsSlider';
  import FeedbackForm from '../components/FeedbackForm';

  export default {
    name: 'Home',
    components: {
      HomeBanner,
      EventsSlider,
      FeedbackForm
    }
  };
</script>

<style scoped>

</style>
