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
        <div class="col-md-12">
          <div class="title">
            <h5>About Qburst Utsav</h5>
            <h1>Young, Wild & Free</h1>
          </div>
          <div class="desc">
            <p>
              It’s not every day that you get invited to an interactive party to create digital playthings that are visceral, unexpected, delightful and downright weird - it’s always a breath of fresh air to have a brand willing to do things differently. In 2014, MailChimp struck marketing gold when a 13-year-old girl mispronounced their name 'MailKimp' on the cult podcast Serial. This inspired a collection of cultural activations that captured people’s imaginations around the world. From interactive music videos to whale synthesisers, we crafted nine digital experiences, creating an eclectic multiverse where everything sounds like “MailChimp.
            </p>
          </div>
        </div>
      </div>
      <div class="row m-top30">
        <div class="col-md-2">
          <h6>WHERE</h6>
          <h4>QBurst Koratty</h4>
        </div>
        <div class="col-md-2">
          <h6>WHEN</h6>
          <h4>2018 Yearlong</h4>
        </div>
        <div class="col-md-2">
            <button type="button" class="btn btn-more">Basic</button>
        </div>
      </div>
      <div class="slider">

      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'AboutQbu'
}
</script>
<style>
  .home .title {
    margin-top: 310px;
  }

  .home .title h5 {
    font-family: 'Gilroy';
    font-size: 12px;
    font-weight: bold;
    color: rgba(80, 227, 194, 1);
    text-align: left;
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
/*Remove*/
.slider {
  margin-top:40px;
  height: 326px;
}
</style>


