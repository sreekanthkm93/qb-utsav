<template>
  <section>
    <div class="round r-1-left">
      <div class="bracket-game">
        <div class="player top kratos">
          Priya
        </div>
        <div class="player bot heracles">
          Ponni
        </div>
      </div>
      <div class="bracket-game cont">
        <div class="player top spartans">
          Archana
        </div>
        <div class="player bot heracles">
          Shinija
        </div>
      </div>
      <div class="bracket-game cont">
        <div class="player top kratos">
          Sruthy
        </div>
        <div class="player bot spartans">
          Titty
        </div>
      </div>
      <div class="bracket-game cont">
        <div class="player top olympus">
          Tinu
        </div>
        <div class="player bot spartans">
          Bilvi
        </div>
      </div>
    </div>
    <!-- /level one left-->

    <div class="round r-2-left">
      <div class="bracket-game">

          <div class="player top olympus">
            Sreeshma
          </div>
          <div class="player bot ">
            ---
          </div>

      </div>
      <div class="bracket-game cont">
        <div class="player top heracles">
          Amrutha
        </div>
        <div class="player bot spartans">
          Archana
        </div>
      </div>
      <div class="bracket-game cont">
        <div class="player top spartans">
          Pooja
        </div>
        <div class="player bot kratos">
          Sruthy
        </div>
      </div>
      <div class="bracket-game cont">
        <div class="player top kratos">
          Ruby
        </div>
        <div class="player bot ">
          ---
        </div>
      </div>
    </div>
    <!-- /level two left-->


    <div class="round r-3-left">
      <div class="bracket-game">
        <div class="connector">
          <div class="player top ">
            ---
          </div>
          <div class="player bot ">
            ---
          </div>
        </div>
      </div>
      <div class="bracket-game cont">
        <div class="connector">
          <div class="player top ">
            ---
          </div>
          <div class="player bot ">
            ---
          </div>
        </div>
      </div>
    </div>
    <!-- /level three left-->

    <div class="round r-4-left">
      <div class="bracket-game">
        <div class="player top ">
          ---
        </div>
        <div class="player bot ">
         ---
        </div>
      </div>
    </div>
    <!-- /level four left-->

    <div class="round r-5">
      <div class="bracket-game">
        <div class="player top ">
          ---
        </div>
        <div class="player bot ">
          ---
        </div>
      </div>
    </div>
    <!-- /level five -->

    <div class="round r-4-right">
      <div class="bracket-game">
        <div class="player top ">
          ---
        </div>
        <div class="player bot ">
          ---
        </div>
      </div>
    </div>
    <!-- /level four right -->

    <div class="round r-3-right">
      <div class="bracket-game">
        <div class="connector">
          <div class="player top">
            ---
          </div>
          <div class="player bot ">
            ---
          </div>
        </div>
      </div>
      <div class="bracket-game cont">
        <div class="connector">
          <div class="player top">
            ---
          </div>
          <div class="player bot">
            --
          </div>
        </div>
      </div>
    </div>
    <!-- /level three right-->

    <div class="round r-2-right">
      <div class="bracket-game cont">
        <div class="player top olympus">
          Lathika
        </div>
        <div class="player bot heracles">
          Steni
        </div>
      </div>
      <div class="bracket-game cont">
        <div class="player top heracles">
          Arya
        </div>
        <div class="player bot ">
          ---
        </div>
      </div>
      <div class="bracket-game cont">
        <div class="player top spartans">
          Chaythanya
        </div>
        <div class="player bot ">
          ---
        </div>
      </div>
      <div class="bracket-game cont">
        <div class="player top kratos">
          Bonita
        </div>
        <div class="player bot ">
          ---
        </div>
      </div>
    </div>
    <!-- Level two right -->


  <div class="round r-1-right">
      <div class="bracket-game cont">
        <div class="player top heracles">
          Steni
        </div>
        <div class="player bot kratos">
          Anupama
        </div>
      </div>
      <div class="bracket-game cont">
        <div class="player top spartans">
          Niji
        </div>
        <div class="player bot heracles">
          Sneha
        </div>
      </div>
      <div class="bracket-game cont">
        <div class="player top kratos">
          Nitha
        </div>
        <div class="player bot spartans">
          Amritha
        </div>
      </div>
      <div class="bracket-game cont">
        <div class="player top heracles">
          Gilsha
        </div>
        <div class="player bot spartans">
          Anisha
        </div>
      </div>
    </div>
    <!-- Level one right -->

  </section>
</template>
<script>
export default {
  name: 'CarromFixture'
}
</script>

<style scoped>
section {
  color:#222;
}

.round {
  float: left;
}

.round {
  margin-right: 35px;
}
.round.r-3-left,
.round.r-3-right  {
  margin-top: 44px;
}
.round.r-4-left,
.round.r-4-right,
.round.r-5 {
  margin-top: 132px;
}
.round .connector::after,
.round.r-1-left .bracket-game::after,
.round.r-2-left .bracket-game::before,
.round.r-2-left .bracket-game::after,
.round.r-3-left .bracket-game::before,
.round.r-3-left .bracket-game::after,
.round.r-4-left .bracket-game::before,
.round.r-4-left .bracket-game::after,
.round.r-1-right .bracket-game::after,
.round.r-2-right .bracket-game::before,
.round.r-2-right .bracket-game::after,
.round.r-3-right .bracket-game::before,
.round.r-3-right .bracket-game::after,
.round.r-4-right .bracket-game::before,
.round.r-4-right .bracket-game::after,
.round.r-5 .bracket-game::after,
.round.r-5 .bracket-game::before {
    content: '';
    background: #b70711;
    position: absolute;
    top: 50%;
}
.round.r-1-left .bracket-game::after,
.round.r-5 .bracket-game::after {
    width: 35px;
    height: 2px;
    right: 0;
    -webkit-transform: translate(100%, -50%);
    transform: translate(100%, -50%);
}

.round.r-5 .bracket-game::before {
    width: 35px;
    height: 2px;
    left: 0;
    -webkit-transform: translate(-100%, -50%);
    transform: translate(-100%, -50%);
}
.round.r-2-left .bracket-game:after {
    width: 18px;
    height: 2px;
    right: 0;
    -webkit-transform: translate(100%, -50%);
    transform: translate(100%, -50%);
}

.round.r-3-left .bracket-game:before,
.round.r-4-left .bracket-game:before {
    width: 17px;
    height: 2px;
    left: 0;
    -webkit-transform: translate(-100%, -50%);
    transform: translate(-100%, -50%);
}

.round.r-3-left .bracket-game:after,
.round.r-4-left .bracket-game:after {
    width: 2px;
    height: 86px;
    left: 0;
    -webkit-transform: translate(-19px, -50%);
    transform: translate(-19px, -50%);
}

.round.r-4-left .bracket-game:after {
    height: 176px;
}

.round.r-1-right .bracket-game::after{
    width: 35px;
    height: 2px;
    left: 0;
    -webkit-transform: translate(-100%, -50%);
    transform: translate(-100%, -50%);
}

.round.r-2-right .bracket-game:after {
    width: 18px;
    height: 2px;
    left: 0;
    -webkit-transform: translate(-100%, -50%);
    transform: translate(-100%, -50%);
}

.round.r-3-right .bracket-game:before,
.round.r-4-right .bracket-game:before {
    width: 17px;
    height: 2px;
    right: 0;
    -webkit-transform: translate(100%, -50%);
    transform: translate(100%, -50%);
}

.round.r-3-right .bracket-game:after,
.round.r-4-right .bracket-game:after {
    width: 2px;
    height: 86px;
    right: 0;
    -webkit-transform: translate(19px, -50%);
    transform: translate(19px, -50%);
}

.round.r-4-right .bracket-game:after {
    height: 176px;
}

.round.r-3-left .connector::after{
    width: 18px;
    height: 2px;
    right: 0;
    -webkit-transform: translate(100%, -50%);
    transform: translate(100%, -50%);
}

.round.r-3-right .connector::after {
    width: 18px;
    height: 2px;
    left: 0;
    -webkit-transform: translate(-100%, -50%);
    transform: translate(-100%, -50%);
}

.round.r-3-left .bracket-game,
.round.r-3-right .bracket-game {
  margin-bottom: 128px;
}
.bracket-game {
  max-width: 125px;
  margin: 40px 0;
  position: relative;
}
.player {
  min-width: 100px;
  border: 1px solid #AAA;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
}
.player.top {
  border-radius: 3px 3px 0 0;
}
.player.bot {
  border-radius: 0 0 3px 3px;
}
.player .score {
  display: inline;
  float: right;
  border-left: 1px solid #AAA;
  padding-left: 10px;
  padding-right: 10px;
  background: #EEE;
}
.player.win {
  background-color: #B8F2B8;
}
.player.loss {
  background-color: #F2B8B8;
}



</style>
