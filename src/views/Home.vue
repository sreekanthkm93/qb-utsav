<template>
<div class="home">
  <home-banner/>
  <about-qbu :sample="sampleData" />
  <teams-of-qbu/>
  <home-event-list/>
  <!-- <events-slider/> -->
  <testimonials/>
  <feedback-form/>
</div>
</template>

<script>
  import HomeBanner from '../components/HomeBannerView';
  import EventsSlider from '../components/EventsSlider';
  import FeedbackForm from '../components/FeedbackForm';
  import AboutQbu from '../components/AboutQbu';
  import TeamsOfQbu from '../components/TeamsOfQbu';
  import HomeEventList from '../components/HomeEventList';
  import Testimonials from '../components/Testimonials';

  export default {
    name: 'Home',
    components: {
      HomeBanner,
      AboutQbu,
      TeamsOfQbu,
      HomeEventList,
      EventsSlider,
      FeedbackForm,
      Testimonials
    },
    data() {
      return {
            sampleData: 20
      }
    },
    mounted() {
        sampleData: 600
    }
  };


</script>

<style>
</style>
