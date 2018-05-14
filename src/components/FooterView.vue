<template>
  <footer>
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac arcu faucibus, sagittis odio nec, mollis sem. Nunc ligula turpis, tempus nec odio eu, consectetur hendrerit dui. Nam varius facilisis ex, nec tincidunt dolor elementum condimentum. Nullam porta porttitor sagittis. Maecenas ut leo id neque posuere fermentum ac eget tellus. 
            </p>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <p>
              Made with [emojis] at koratty © 2018 QBurst Utsav TCC
            </p>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  };
</script>

<style scoped>
  footer {

    bottom: 0;
    background: #2a2a30;
    width: 100%;
    text-align: center;
    padding-bottom: 2vh;
    padding-top: 2vh;
  }

  footer p {
    text-align: justify;
    color:#717173;
  }

  footer .footer-top {
    margin: 60px 0;
  }
  footer .footer-bottom {
    border-top: 1px solid #202021;
   }
  footer .footer-bottom p{
    text-align: center;
    margin: 20px 0;
  }

</style>
