<template>
  <section>
    <div class="round r-1-left">
      <div class="bracket-game">
        <div class="player top spartans">
          <span class="team"></span>
          <span class="participant">Niji - Anisha</span>
        </div>
        <div class="player bot heracles">
          <span class="team"></span>
          <span class="participant">Sneha - Mubeena</span>
        </div>
      </div>
      <div class="bracket-game cont">
        <div class="player top kratos">
          <span class="team"></span>
          <span class="participant">Anupama - Priya</span>
        </div>
        <div class="player bot heracles">
          <span class="team"></span>
          <span class="participant">Steni - Shinija</span>
        </div>
      </div>
    </div>
    <!-- /level one left-->

    <div class="round r-2-left">
      <div class="bracket-game">
        <div class="player top kratos">
          <span class="team"></span>
          <span class="participant">Bonitta - Nitha</span>
        </div>
        <div class="player bot ">
          <span class="team"></span>
          <span class="participant">---</span>
        </div>
      </div>
      <div class="bracket-game cont">
        <div class="player top heracles">
          <span class="team"></span>
          <span class="participant">Arya - Amrutha</span>
        </div>
        <div class="player bot ">
          <span class="team"></span>
          <span class="participant">---</span>
        </div>
      </div>
    </div>
    <!-- /level two left-->


    <div class="round r-3-left">
      <div class="bracket-game">
        <div class="connector">
          <div class="player top ">
            <span class="team"></span>
            <span class="participant">---</span>
          </div>
          <div class="player bot ">
            <span class="team"></span>
            <span class="participant">---</span>
          </div>
        </div>
      </div>
    </div>
    <!-- /level three left-->


   <!-- <div class="round r-4">
    <div class="center-dot">
      ...
    </div>
   </div> -->

    <div class="round r-4">
      <div class="bracket-game">
        <div class="player top ">
          <span class="participant">---</span>
        </div>
        <div class="player bot ">
          <span class="participant">---</span>
        </div>
      </div>
    </div>
    <!-- /level four  -->

    <div class="round r-3-right">
      <div class="bracket-game">
        <div class="connector">
          <div class="player top">
            <span class="participant">---</span>
          </div>
          <div class="player bot ">
            <span class="participant">---</span>
          </div>
        </div>
      </div>
    </div>
    <!-- /level three right-->

    <div class="round r-2-right">
      <div class="bracket-game cont">
        <div class="player top olympus">
          <span class="team"></span>
          <span class="participant">Lathika - Sreeshma</span>
        </div>
        <div class="player bot heracles">
          <span class="team"></span>
          <span class="participant">Steni</span>
        </div>
      </div>
      <div class="bracket-game cont">
        <div class="player top spartans">
          <span class="team"></span>
          <span class="participant">Pooja - Chaythanya </span>
        </div>
        <div class="player bot kratos">
          <span class="participant">Ruby - Sruthy</span>
        </div>
      </div>
    </div>
    <!-- Level two right -->


  <div class="round r-1-right">
      <div class="bracket-game cont">
        <div class="player top heracles">
          <span class="team"></span>
          <span class="participant">Ponni - Gilsha</span>
        </div>
        <div class="player bot spartans">
          <span class="team"></span>
          <span class="participant">Amrutha - Archana </span>
        </div>
      </div>
    </div>
    <!-- Level one right -->

  </section>
</template>
<script>
export default {
  name: 'WomSingFixture'
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
.round.r-3-right,
.round.r-4  {
  margin-top: 44px;
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
.round.r-4 .bracket-game::before,
.round.r-4 .bracket-game::after {
    content: '';
    background: rgb(31, 36, 47);
    position: absolute;
    top: 50%;
}
.round.r-1-left .bracket-game::after,
.round.r-4 .bracket-game::after {
    width: 35px;
    height: 2px;
    right: 0;
    -webkit-transform: translate(100%, -50%);
    transform: translate(100%, -50%);
}

.round.r-4 .bracket-game::before {
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

.round.r-3-left .bracket-game:before {
    width: 17px;
    height: 2px;
    left: 0;
    -webkit-transform: translate(-100%, -50%);
    transform: translate(-100%, -50%);
}

.round.r-3-left .bracket-game:after {
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

.round.r-3-right .bracket-game:before {
    width: 17px;
    height: 2px;
    right: 0;
    -webkit-transform: translate(100%, -50%);
    transform: translate(100%, -50%);
}

.round.r-3-right .bracket-game:after {
    width: 2px;
    height: 86px;
    right: 0;
    -webkit-transform: translate(19px, -50%);
    transform: translate(19px, -50%);
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
.round.r-1-right{
    margin-right: 0;
}
.bracket-game {
  margin: 40px 0;
  position: relative;
}
.player {
  min-width: 100px;
  border: 1px solid rgb(31, 36, 47);
  text-align: center;
  color:#ccc;
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
  border-left: 1px solid rgb(31, 36, 47);
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

.team{
    width: 4px;
    height: 23px;
    float: left;
    display: inline-block;
}

.participant {
  padding-left: 10px;
  padding-right: 10px;
  font-size: 16px;
  font-weight: 100;
}

.player.won .participant{
  color: #60ff7d;
}

.spartans.top .team{
    background: #9e0606;
    border-radius: 3px 0 0 0;
}

.spartans.bot .team{
    background: #9e0606;
    border-radius: 0 0 0 3px;
}

.olympus.top .team {
  background: #5500a2;
  border-radius: 3px 0 0 0;
}

.olympus.bot .team {
  background: #5500a2;
  border-radius: 0 0 0 3px;
}

.kratos.top .team  {
  background: #115a92;
  border-radius: 3px 0 0 0;
}

.kratos.bot .team  {
  background: #115a92;
  border-radius: 0 0 0 3px;
}


.heracles.top .team  {
  background: #4c6b00;
  border-radius: 3px 0 0 0;
}

.heracles.bot .team  {
  background: #4c6b00;
  border-radius: 0 0 0 3px;
}

.center-dot {
  margin-top: 48px;
  color: #ccc;
}
</style>
