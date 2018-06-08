<template>
  <section class="about-qbu home">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="float_el">

          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <div class="title" id="aboutQB">
            <h5>About Qburst Utsav</h5>
            <h1>Young, Wild & Free</h1>
          </div>
          <div class="desc">
            <p>
              It’s not every day that you get invited to an interactive party to create digital playthings that are visceral, unexpected, delightful and downright weird - it’s always a breath of fresh air to have a brand willing to do things differently. In 2014, MailChimp struck marketing gold when a 13-year-old girl mispronounced their name 'MailKimp' on the cult podcast Serial. This inspired a collection of cultural activations that captured people’s imaginations around the world. From interactive music videos to whale synthesisers, we crafted nine digital experiences, creating an eclectic multiverse where everything sounds like “MailChimp.
            </p>
          </div>
        </div>
        <div class="col-md-2"></div>
      </div>
      <div class="row m-top30">
        <div class="col-md-2"></div>
        <div class="col-md-2">
          <h6>WHERE</h6>
          <h4>QBurst Koratty</h4>
        </div>
        <div class="col-md-2">
          <h6>WHEN</h6>
          <h4>2018 Yearlong</h4>
        </div>
        <div class="col-md-2">
            <button type="button" class="btn btn-more">KNOW MORE</button>
        </div>
      </div>
    </div>
    <div class="swiper-container" >
          <swiper :options="swiperOption"  ref="aboutSwiper">
            <!-- slides -->
            <swiper-slide><img src="../assets/Bitmap_1.png" alt="slider 1"></swiper-slide>
            <swiper-slide><img src="../assets/Bitmap_2.png" alt="slider 2"></swiper-slide>
            <swiper-slide><img src="../assets/Bitmap_1.png" alt="slider 3"></swiper-slide>
            <swiper-slide><img src="../assets/Bitmap_2.png" alt="slider 4"></swiper-slide>
            <swiper-slide><img src="../assets/Bitmap_1.png" alt="slider 5"></swiper-slide>
            <swiper-slide><img src="../assets/Bitmap_2.png" alt="slider 6"></swiper-slide>
          </swiper>
    </div>
  </section>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
var pos = (window.innerWidth - 1170) / 2 ;
    pos += 1170/12 * 2;

export default {
  name: 'AboutQbu',
  components: {
    swiper,
    swiperSlide
  },
  data() {
      return {
        swiperOption: {
          slidesPerView: 2.5,
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
    }
}
</script>
<style>
  .about-qbu .title {
    margin-top: 310px;
  }

  .home .title h5 {
    font-family: 'Gilroy';
    font-size: 12px;
    font-weight: bold;
    color: rgba(80, 227, 194, 1);
    text-align: left;
    text-transform: uppercase;
  }

  .home .title h1 {
    font-family: 'Gilroy';
    font-size: 40px;
    font-weight: bold;
    color: rgba(77, 77, 77, 1);
    text-align: left;
  }

  .home .desc p{
    font-family: 'Gilroy';
    font-size: 16px;
    color: rgba(77, 77, 77, 1);
    text-align: left;
    line-height: 29px;
  }
</style>

<style scoped>
  .about-qbu {
    background: rgba(0, 0, 24, 1);
  }

  .float_el {
    background-image: url('../assets/float_1.png');
    height: 401px;
    position: absolute;
    top: 10px;
    width: 335px;
    z-index: 1;
    right: 0;
    top: -70px;
  }

  h6 {
    font-family: 'Gilroy';
    font-size: 12px;
    color: rgba(77, 77, 77, 1);
  }

  h4 {
    font-family: 'Gilroy';
    font-size: 16px;
    font-weight: bold;
    color: rgba(77, 77, 77, 1);
  }

  .m-top30 {
    margin-top:30px
  }
  .btn-more {
    margin-top:10px;
    width: 100%;
    font-family: 'Gilroy';
    font-size: 12px;
    font-weight: bold;
    color: rgba(77, 77, 77, 1);
    height: 40px;
    border: 1px solid rgba(151, 151, 151, 1);
    background: transparent;
    border-radius: 0;
  }
  .swiper-container {
    margin-top:30px;
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
</style>


