<template>
<div class="home">
  <home-banner/>
  <about-qbu/>
  <teams-of-qbu/>
  <events-slider/>
  <feedback-form/>
</div>
</template>

<script>
  import HomeBanner from '../components/HomeBannerView';
  import EventsSlider from '../components/EventsSlider';
  import FeedbackForm from '../components/FeedbackForm';
  import AboutQbu from '../components/AboutQbu.vue';
  import TeamsOfQbu from '../components/TeamsOfQbu.vue';

  export default {
    name: 'Home',
    components: {
      HomeBanner,
      AboutQbu,
      TeamsOfQbu,
      EventsSlider,
      FeedbackForm
    }
  };
</script>

<style>
</style>
