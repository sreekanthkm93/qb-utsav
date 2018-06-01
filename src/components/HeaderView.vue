<template>
  <!-- START PRELOADER -->
  <div class="navbar navbar-default navbar-fixed-top menu-top" ref="navbar">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a href="/" class="navbar-brand">
              <img src="../assets/logo.png" alt="logo">
            </a>
          </div>
        </div>
        <div class="col-md-9">
          <div class="navbar-collapse collapse">
            <nav>
              <ul class="nav navbar-nav navbar-right scrollable-menu">
                <li>
                  <a class="page-scroll" href="/events">Events</a>
                </li>
                <li>
                  <a class="page-scroll" href="/teams">Teams</a>
                </li>
                <li>
                  <a class="page-scroll" href="/gallery">Gallery</a>
                </li>
                <li>
                  <a class="page-scroll">
                    <router-link :to="'leaderBoard'">Leader Board</router-link>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!--- END CONTAINER -->
  </div>
</template>

<script>
export default {
  name: "Header",
  mounted() {
    $("a.page-scroll").on("click", function(e) {
      var anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $(anchor.attr("href")).offset().top - 50
          },
          1500
        );
      e.preventDefault();
    });

    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $(".menu-top").addClass("menu-shrink");
      } else {
        $(".menu-top").removeClass("menu-shrink");
      }
    });

    $(document).on("click", ".navbar-collapse.in", function(e) {
      if (
        $(e.target).is("a") &&
        $(e.target).attr("class") != "dropdown-toggle"
      ) {
        $(this).collapse("hide");
      }
    });
  }
};
</script>

<style scoped>
.navbar-default {
  background: none repeat scroll 0 0;
  border: medium none;
  border-radius: 0;
  margin-bottom: 0;
  padding: 20px 0;
  transition: all 0.2s ease-in-out 0s;
  width: 100%;
  position: fixed;
  overflow: hidden;
}

.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus {
  color: #fff !important;
  background-color: transparent;
}

.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:hover,
.navbar-default .navbar-nav > .open > a:focus {
  color: #fff !important;
  background-color: transparent;
}

.navbar-brand {
  padding: 0px;
}

.navbar-brand img {
  width: 170px;
}

.navbar-default .navbar-collapse,
.navbar-default .navbar-form {
  border-color: #fff;
}

@media only screen and (max-width: 768px) {
  .navbar-brand {
    height: 130px;
  }

  .navbar-brand img {
    margin-left: 10px;
  }
}

.navbar-default .navbar-collapse,
.navbar-default .navbar-form {
  border-color: #222;
  margin-top: 0px;
}

@media only screen and (max-width: 480px) {
  .navbar-default .navbar-collapse,
  .navbar-default .navbar-form {
    margin-top: 10px;
  }
}

.menu-top li a {
  color: #4d4d4d !important;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
}

.menu-top li a:hover {
  color: #292929 !important;
}

@media only screen and (max-width: 768px) {
  .navbar-default .navbar-nav > li > a {
    margin-top: 10px;
    padding: 8px;
  }
}

@media only screen and (max-width: 480px) {
  .menu-top {
    background-color: #222;
    position: fixed;
    overflow: hidden;
  }

  .navbar-default .navbar-nav > li > a {
    color: #fff !important;
  }
}

.navbar-default.menu-shrink {
  background-color: #222;
  box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  width: 100%;
}

@media only screen and (max-width: 480px) {
  .menu-top {
    color: #fff !important;
    margin-left: 0px;
  }
}

.scrollable-menu {
  height: auto;
  max-height: 200px;
  overflow-x: hidden;
}

.navbar-default.menu-shrink li a {
  color: #fff !important;
}

.navbar-default.menu-shrink li a:hover {
  color: #fff !important;
}

.navbar-default .navbar-toggle {
  background: #fff none repeat scroll 0 0;
}

.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus {
  background-color: #fff;
}

.navbar-default .navbar-toggle .icon-bar {
  background-color: #f9461d;
}

body {
  min-height: 1800px;
  background-color: #ffffff;
}
</style>
