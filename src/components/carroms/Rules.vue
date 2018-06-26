<template>
<section class="rules">
  <div class="container">
    <div class="col-md-12">
      <div class="segment">
        <h2> Basic rules</h2>
        <ul>
          <li>For the very first turn, the player is allowed three attempts to "break" i.e. disturb the central group of counters.</li>
          <li>It doesn't matter which piece the striker hits first and it doesn't matter if the striker hits no pieces.</li>
          <li>If the striker pockets the Queen and/or one or more pieces of her own colour, the player retrieves the striker and takes another strike.</li>
          <li>If the player pockets no pieces or commits a foul, the turn finishes.</li>
        </ul>
      </div>
      <div class="segment">
        <h2> Striking</h2>
        <ul>
          <li>For each strike, the player must position the striker within the baseline OR on one of the two circles at either end of the baseline.</li>
          <li>A striker within the baseline must touch both the front line and the rear line.</li>
          <li>The striker may not "cut the moon" - be placed partially within the baseline and partially within the circle.</li>
          <li>The player must flick the striker with one finger so that it crosses the front baseline - it is not permitted to flick backwards or horizontally.</li>
          <li>A piece that is on or behind the front baseline must not be struck by the striker until the striker has crossed the front baseline.</li>
          <li>In striking, the player's hand or arm must not cross the diagonal foul lines at either end of the baseline.</li>
        </ul>
      </div>
      <div class="segment">
        <h2> Covering the Queen</h2>
        <ul>
          <li>A player may only pocket and cover the Queen if that player has already pocketed at least one piece of that player's colour.</li>
          <li>If a player pocket the Queen before being permitted to cover it, the turn continues but the Queen is returned to the centre at the end of the turn.</li>
          <li>If a player pockets the Queen and one of her own pieces in the same turn, this counts and that player has covered the Queen.  Such a player must have already pocketed at least one piece in order to cover the Queen as per normal.</li>
          <li>When a player pockets the Queen but does not cover it, the Queen is returned to the centre circle. The queen will be always placed at the bottom if there are other peices in ther center</li>
        </ul>
      </div>
      <div class="segment">
        <h2> Other Rules</h2>
        <ul>
          <li>Pieces returned to the centre can be placed on top of other pieces within the main circle.</li>
          <li>If pieces come to rest overlapping another piece, they are left as they are until moved again in the normal course of play.</li>
          <li>If the striker comes to rest under another piece, the striker should be removed with as little disturbance to the covering piece as possible.</li>
          <li>If a coins stands on its edge, they are left as they are until moved again in the normal course of play.</li>
          <li>If multiple coins are coverd in a single strike  turn will continue based on the last coin pocketed.</li>
        </ul>
      </div>
      <div class="segment">
        <h2> Fouls</h2>
        <p>When a player commits a foul, the turn comes to an end immediately and a penalty is incurred.  The penalty is that one pocketed piece is returned to the board by the opponent anywhere within the main circle.  Any other pieces requiring to be returned to the board will be placed at the center cirlce.  It is normal for penalty pieces to be positioned in order to confer an advantage for the opponent.</p>
        <p>A foul is recorded in the following situations:</p>
        <ul>
          <li>The striker is pocketed.</li>
          <li>A player pockets an opponent's piece, the turn comes to an end immediately and the pieces pocketed in the same strike remain pocketed.</li>
          <li>A player pockets the final piece  before the Queen has been covered.  In this case both the pocketed piece and a penalty piece are returned to the centre. The turn is finished.</li>
          <li>A player contravenes the rules for striking.</li>
          <li>The first player to strike fails to break the counters in three attempts.</li>
        </ul>
        <p>Where a penalty is incurred but no pocketed pieces exist to return, the penalty is "owed" until a piece becomes available.  If a penalty is owed, when a piece becomes available due to being pocketed, the piece is returned to the centre by the opponent at the end of the turn.  Should the opponent forget to do this before the start of the next turn, any owed penalties are lost.</p>
      </div>
      <div class="segment">
        <h2> Finishing</h2>
        <ul>
          <li>If a player pockets oppponents last coin, the player loses. In this case the queen should be covered already.</li>
          <li> A player cannot hit directly or cover his/opponent's last coin  if the Queen is not covered. In that case a penalty coin has to be placed back to the board.</li>
        </ul>
      </div>
    </div>
  </div>

</section>
</template>
<script>
export default {
  name: 'Rules'
}
</script>

<style scoped>
.rules {
  color: #868fa9;
  margin-top:20px;
  margin-bottom: 50px;
  font-family: Gilroy,sans-serif;
}
.rules h2 {
  font-size: 20px;
  font-weight: normal;
  color: #6565e0;
  font-family: Gilroy,sans-serif;
}

.rules li {
  font-size: 16px;
  font-weight: 100;
  font-family: Gilroy,sans-serif;
}
.rules .segment {
  margin-top: 50px;
}

.rules p {
  font-size: 16px;
  font-weight: 100;
  margin: 20px 0;
  font-family: Gilroy,sans-serif;
}
</style>
