<template>
<section class="home-banner">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <div class="hero-text">
                <h1>The Event 3.0</h1>
                <p>Work hard, Play harder.</p>
              </div>
            </div>
            <!--- END COL -->
          </div>
          <!--- END ROW -->
          <div class="row">
            <div class="col-md-4">
              <home-leader-board/>
            </div>
          </div>
        </div>
      <div class="bg">
        <img src="../assets/bg.png" alt="bg">
      </div>
    </section>
</template>

<script>
import HomeLeaderBoard from '../components/HomeLeaderBoardView';
export default {
  name: 'HomeBanner',
  components: {
      HomeLeaderBoard
    }
};
</script>

<style scoped>
.home-banner { position:relative;overflow: hidden}
.hero-text{padding-top:250px;}
@media only screen and (max-width:480px) {
.hero-text{padding-top:250px;}
}
.hero-text img{margin-bottom:30px}
.hero-text h1{
color: #fff;
font-size: 70px;
font-weight: 900;
text-transform: uppercase;
}
@media only screen and (max-width:768px) {
.hero-text h1{font-size:40px;}
}

@media only screen and (max-width:320px) {
.slider-info h1{font-size:30px;}
}
.hero-text p{
color: #fff;
font-size: 24px;
margin-bottom: 25px;
}
@media only screen and (max-width:480px) {
.hero-text p {width: 100%;}
}
.bg {
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    z-index: -1;
}

.bg img{
  width:100%;
}

</style>
