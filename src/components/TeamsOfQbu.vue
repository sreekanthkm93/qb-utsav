<template>
  <section class="teams-qbu home">
      <div class="container">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <div class="title">
              <h5>Teams of QBU 3</h5>
              <h1>Supercalifragilistic Heading Here</h1>
            </div>
            <div class="desc">
              <p>
                It’s not every day that you get invited to an interactive party to create digital playthings that are visceral, unexpected, delightful and downright weird - it’s always a breath of fresh air to have a brand willing to do things differently. In 2014, MailChimp struck marketing gold when a 13-year-old girl mispronounced their name 'MailKimp' on the cult podcast Serial. This inspired a collection of cultural activations that captured people’s imaginations around the world. From interactive music videos to whale synthesisers, we crafted nine digital experiences, creating an eclectic multiverse where everything sounds like “MailChimp.
              </p>
            </div>
          </div>
          <div class="col-md-2"></div>
        </div>
      </div>
    </div>
    <div class="slider-container">
      <div class="row">
        <div class="col-md-3">
          <!-- swiper -->
            <swiper :options="swiperOption">
              <swiper-slide><img src="../assets/team_1.png" alt="slider 1"></swiper-slide>
              <swiper-slide><img src="../assets/team_2.png" alt="slider 2"></swiper-slide>
              <swiper-slide><img src="../assets/team_3.png" alt="slider 3"></swiper-slide>
              <swiper-slide><img src="../assets/team_4.png" alt="slider 4"></swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <div class="col-md-3">
          <!-- swiper -->
            <swiper :options="swiperOption">
              <swiper-slide><img src="../assets/team_2.png" alt="slider 1"></swiper-slide>
              <swiper-slide><img src="../assets/team_3.png" alt="slider 2"></swiper-slide>
              <swiper-slide><img src="../assets/team_4.png" alt="slider 3"></swiper-slide>
              <swiper-slide><img src="../assets/team_1.png" alt="slider 4"></swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <div class="col-md-3">
          <!-- swiper -->
            <swiper :options="swiperOption">
              <swiper-slide><img src="../assets/team_3.png" alt="slider 1"></swiper-slide>
              <swiper-slide><img src="../assets/team_4.png" alt="slider 2"></swiper-slide>
              <swiper-slide><img src="../assets/team_1.png" alt="slider 3"></swiper-slide>
              <swiper-slide><img src="../assets/team_2.png" alt="slider 4"></swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <div class="col-md-3">
          <!-- swiper -->
            <swiper :options="swiperOption">
              <swiper-slide><img src="../assets/team_4.png" alt="slider 1"></swiper-slide>
              <swiper-slide><img src="../assets/team_1.png" alt="slider 2"></swiper-slide>
              <swiper-slide><img src="../assets/team_2.png" alt="slider 3"></swiper-slide>
              <swiper-slide><img src="../assets/team_3.png" alt="slider 4"></swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name:'TeamsOfQbu',
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
<style scoped>
  .teams-qbu {
    background: rgba(0, 0, 24, 1);
    padding-top: 102px;
    padding-bottom:20px
  }

  .slider-container {
    margin-top: 20px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .slider-container .col-md-3 {
    padding-right: 0px;
    padding-left: 0px;
  }

  .slider-container img{
      width: 100%;
  }
</style>

