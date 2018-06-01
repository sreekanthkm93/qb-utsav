<<template>
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
              </div>
              <div class="col-md-3"></div>
          </div>
      </div>
  </section>
</template>
<<script>
export default {
  name: 'FeedbackForm'
}
</script>
<style>
.feedback-el {
    background: #000017;
    padding: 65px 0;
}
.feedback-el .hero-text {
    color: #fff;
    font-size: 70px;
    font-weight: bold;
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
</style>
