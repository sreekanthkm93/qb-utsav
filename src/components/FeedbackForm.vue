<template>
  <section class="feedback-el">
      <div class="container">
          <div class="row">
              <div class="col-md-3"></div>
              <div class="col-md-6">
                  <p class="hero-text">Say Hello</p>
              </div>
              <div class="col-md-3"></div>
          </div>
          <div class="row">
              <div class="col-md-3"></div>
              <div class="col-md-6">
                    <div class="feedback-btn-wrapper">
                        <button type="button" class="btn btn-feedback">feedbacks & suggestions</button>
                    </div>
                    <!-- <div class="feedback-from">
                      <form>
                          <div class="form-group title">
                          <label>FEEDBACKS & SUGGESTIONS</label>
                          </div>
                          <div class="form-group">
                              <input type="email" class="form-control email" id="exampleInputEmail1" placeholder="EMAIL">
                          </div>
                          <div class="form-group">
                              <textarea class="form-control" rows="12" placeholder="MESSAGE"></textarea>
                          </div>
                      </form>
                    </div> -->
              </div>
              <div class="col-md-3"></div>
          </div>
          <div class="row">
              <div class="col-md-3"></div>
              <div class="col-md-6">
                    Clap
              </div>
              <div class="col-md-3"></div>
          </div>
          <div class="row">
              <div class="col-md-3"></div>
              <div class="col-md-6">
                <p class="footer-top">
                    Just as the prophecies foretold, QBUtsav is a collaborative funhouse built of QBurst koratty — surfing the void, hammering away at a Commodore 64 keyboard with their meaty stumps. These dubious machinations are but the harvest of their unholy union.
                </p>
              </div>
              <div class="col-md-3"></div>
          </div>
          <div class="row">
              <div class="col-md-3"></div>
              <div class="col-md-6">
                <p class="footer-bottom">
                  made with love at koratty © 2018 QBurst Utsav TCC
                </p>
              </div>
              <div class="col-md-3"></div>
          </div>
      </div>
  </section>
</template>
<script>
export default {
  name: 'FeedbackForm'
}
</script>
<style>
.feedback-el {
    background: #000017;
    background-image:url('../assets/pattern.png');
    padding-top: 125px;
}
.feedback-el .hero-text {
    font-family: 'Gilroy';
    font-size: 100px;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    text-align: center;
}
.feedback-el form {
    border: 1px solid #8d8d8f;
}
.feedback-el form .form-group {
    margin: 0;
}
.feedback-el form .form-group.title {
    text-align: center;
    color: #d60b12;
    border-bottom: 1px solid #8d8d8f;
}
.feedback-el form .form-group.title label {
    padding: 15px;
}
.feedback-el form .form-control {
    background-color: transparent !important;
    border: none;
    border-radius: 0;
}

.feedback-el form .form-control.email {
    height: 50px;
}
.feedback-el form textarea.form-control {
    border-top: 1px solid #8d8d8f;
}

.feedback-btn-wrapper {
  text-align: center;
}

.btn-feedback{
  height: 50px;
  width: 238px;
  border: 1px solid rgba(151, 151, 151, 1);
  background: transparent;
  border-radius: 0;
  text-transform: uppercase;
  font-family: 'Gilroy';
  font-size: 12px;
  font-weight: bold;
}

.footer-top {
  margin-top: 50px;
  font-family: 'Gilroy';
  font-size: 14px;
  font-weight: 600;
  color: rgba(113, 113, 115, 1);
  text-align: center;
}

.footer-bottom {
  margin-top: 112px;
  padding-bottom:28px;
  font-family: 'Gilroy';
  font-size: 14px;
  color: rgba(149, 149, 149, 1);
  text-align: center;
}
</style>
