<template>
    <div class="events-slider">
        <flickity ref="flickity" :options="flickityOptions" style="margin-left: 20%;"">
            <div class="carousel-cell"><a href="/board-games"><img src="../assets/events/event1.png" alt="event"/>></a></div>
            <div class="carousel-cell"><img src="../assets/events/event2.png" alt="event"></div>
            <div class="carousel-cell"><img src="../assets/events/event3.png" alt="event"></div>
            <div class="carousel-cell"><img src="../assets/events/event1.png" alt="event"></div>
            <div class="carousel-cell"><img src="../assets/events/event2.png" alt="event"></div>
        </flickity>
    </div>
</template>

<script>
import Flickity from "vue-flickity";

export default {
  name: "EventsSlider",
  components: {
    Flickity
  },

  data() {
    return {
      flickityOptions: {
      initialIndex: 1,
      prevNextButtons: false,
      pageDots: false,
      wrapAround: true,
      freeScroll: true,
      draggable: true
      // any options from Flickity can be used
      }
    }
  },

  methods: {
    next() {
      this.$refs.flickity.next();
    },

    previous() {
      this.$refs.flickity.previous();
    }
  }
};
</script>

<style scoped>
.carousel-cell {
  width: 369px; /* half-width */
  height: 465px;
  margin-right: 40px;
}
.events-slider {
    margin: 60px 0; 
}
</style>
