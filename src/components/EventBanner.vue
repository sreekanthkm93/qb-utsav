<template>
    <section class="event-banner" >
        <div class="container">
          <div class="row">
            <div class="col-md-12 ">
              <div class="hero-img">
              <img src="../assets/strike.png" alt="strike">
              </div>
              <div class="hero-text">
                <h1>{{title}}</h1>
                <p>{{description}}</p>
              </div>
            </div>
            <!--- END COL -->
          </div>

        </div>
      <div class="bg">
        <img src="../assets/carroms.jpg" alt="carroms-bg">
      </div>
    </section>
</template>
<script>
export default {
  name: 'TopSection',
  props: ['title','description'],
  data: function() {
    return {
      bannerHeight: 0
    }
  }
};
</script>

<style scoped>

.event-banner { height: 458px;position:relative;overflow: hidden}
.hero-text{padding-top:100px;}
.hero-img {
  margin-left:auto;
  margin-right:auto;
  display: table;
  margin-top: 150px;
}
@media screen and (min-width: 1400px) {
  .event-banner {
    height: 640px;
  }
  .hero-img {
    margin-top: 250px;
  }
  .hero-text{
    padding-top:180px;
  }
}
@media only screen and (max-width:480px) {
.hero-text{padding-top:250px;}
}

.hero-text img{margin-bottom:30px}
.hero-text h1{
color: #6583e4;
font-size: 30px;
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
    max-width: 600px;
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
    background: #173694;
}

.bg img{
  width:100%;
}

</style>
