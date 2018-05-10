<template>
  <div class="preloader">
    <div class="status">
      <div class="status-mes"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Preloader',
    mounted () {
      this.$nextTick(() => {
        $('.status').fadeOut();
        $('.preloader').delay(350).fadeOut('slow');
      });
    }
  };

</script>

<style scoped>
  .preloader {
    background: #fff;
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 99999;
  }

  .status-mes {
    width: 45px;
    height: 45px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -40px 0 0 -40px;
    font-size: 10px;
    text-indent: -12345px;
    border-top: 8px solid #ed212b;
    border-right: 8px solid #ed212b;
    border-bottom: 8px solid #ed212b;
    border-left: 8px solid #fff;
    border-radius: 50%;
    -webkit-animation: spinner 700ms infinite linear;
    animation: spinner 700ms infinite linear;
    z-index: 10000;
  }

  @-webkit-keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .status-mes h4 {
    color: #f7f7f7;
    position: relative;
    font-size: 24px;
    margin-top: 30px;
    text-transform: capitalize;
    letter-spacing: 1px;
  }

  .no-padding {
    padding: 0
  }
</style>
