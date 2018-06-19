<template>
  <section class="testimonials">
    <swiper>
      <swiper-slide>
        <div class="card">
          It’s not every day that you get invited to an interactive party to create digital playthings that are visceral, unexpected, delightful and downright weird - it’s always a breath of fresh air to have a brand willing to do things differently. In 2014, MailChimp struck marketing gold when a 13-year-old girl mispronounced their name 'MailKimp' on the cult podcast Serial.
        </div>
      </swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
      <swiper-slide>Slide 10</swiper-slide>
    </swiper>
  </section>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name:'Testimonials',
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>
<style>
.testimonials {
  height: 1000px;
}

.testimonials .card {
  background: rgba(216, 216, 216, 1);
  height: 326px;
  width: 785px;
  font-family: 'Gilroy';
  font-size: 16px;
  font-weight: 500;
  color: rgba(118, 118, 118, 1);
  text-align: left;
  line-height: 29px;
}
</style>


