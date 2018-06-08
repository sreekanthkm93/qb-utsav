<template>
  <section >
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="float_el">
          </div>
        </div>
      </div>
      <div class="row events-container">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <div class="title">
            <h5>Events of qbu3</h5>
            <h1>We Play.</h1>
          </div>
          <div class="desc">
            <p>
              It’s not every day that you get invited to an interactive party to create digital playthings that are visceral, unexpected, delightful and downright weird - it’s always a breath of fresh air to have a brand willing to do things differently. In 2014, MailChimp struck marketing gold when a 13-year-old girl mispronounced their name
            </p>
          </div>
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
    <div class="swiper-container" >
        <swiper :options="swiperOption"  ref="aboutSwiper">
          <!-- slides -->
          <swiper-slide><img src="../assets/events/event1.png" alt="slider 1"></swiper-slide>
          <swiper-slide><img src="../assets/events/event2.png" alt="slider 2"></swiper-slide>
          <swiper-slide><img src="../assets/events/event3.png" alt="slider 3"></swiper-slide>
          <swiper-slide><img src="../assets/events/event2.png" alt="slider 4"></swiper-slide>
        </swiper>
    </div>
  </section>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
var pos = (window.innerWidth - 1170) / 2 ;
    pos += 1170/12 * 2;

export default {
  name: 'HomeEventList',
  components: {
    swiper,
    swiperSlide
  },
  data() {
      return {

        swiperOption: {
          slidesPerView: 5,
          spaceBetween: 50,
          speed: 600,
          freeMode: !0,
          freeModeMomentum: !0,
          freeModeMomentumRatio: .6,
          freeModeMomentumVelocityRatio: .2,
          freeModeMinimumVelocity: .2,
          watchSlidesProgress: !0,
          watchSlidesVisibility: !0,
          resistance: !0,
          slidesOffsetBefore: pos,
          breakpoints: {
            414: {
                slidesPerView: 1,
                spaceBetween: 10,
                slidesOffsetAfter: 30,
                freeModeMomentumRatio: 1.5,
                freeModeMomentumVelocityRatio: .4,
                speed: 400
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 25,
                slidesOffsetAfter: 30,
                freeModeMomentumRatio: 1.5,
                freeModeMomentumVelocityRatio: .4
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 25,
                slidesOffsetAfter: 30,
                freeModeMomentumRatio: 1.5,
                freeModeMomentumVelocityRatio: .4
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 25
            }
          }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.aboutSwiper.swiper
      }
    },
}
</script>
<style scoped>
  .events-container {
      margin-top: 180px;
  }
  .swiper-container {
    margin-top:10px;
  }
  .swiper-slide {
    width: 60%;
  }
  .swiper-slide:nth-child(2n) {
      width: 40%;
  }
  .swiper-slide:nth-child(3n) {
      width: 20%;
  }
  .float_el {
    background-image: url('../assets/float_2.png');
    height: 220px;
    position: absolute;
    top: 10px;
    width: 340px;
    z-index: 1;
    right: 0;
  }
  .swiper-container img{
      width: 100%;
  }
</style>


