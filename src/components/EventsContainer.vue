<template>
<section>
    <div class="container-header" v-on:click="scrollToTab" ref="eventsDetailTab">
        <div class="container text-left">
            <div class="row" >
                <!-- <div class="col-xs-1" v-bind:class="{ active: events }" v-on:click = "clickEventTab('events')">EVENTS</div> -->
                <div class="col-xs-2" v-bind:class="{ active: wom_sing }" v-on:click = "clickEventTab('wom_sing')">WOMENS SINGLES</div>
                <div class="col-xs-2" v-bind:class="{ active: men_sing }" v-on:click = "clickEventTab('men_sing')">MENS SINGLES</div>
                <!-- <div class="col-xs-2" v-bind:class="{ active: wom_doub }" v-on:click = "clickEventTab('wom_doub')">WOMENS DOUBLES</div>
                <div class="col-xs-2" v-bind:class="{ active: men_doub }" v-on:click = "clickEventTab('men_doub')">MENS DOUBLES</div> -->
                <!-- <div class="col-xs-2" v-bind:class="{ active: mix_doub }" v-on:click = "clickEventTab('mix_doub')">MIXED DOUBLES</div> -->
                <div class="col-xs-2" v-bind:class="{ active: rules }" v-on:click = "clickEventTab('rules')">RULES</div>
            </div>
        </div>
    </div>
    <div class="fixture-container" v-bind:style="{ height: con_height + 'px' }">
      <events v-if="events"/>
      <wom-sing-fixture v-if="wom_sing"/>
      <men-sing-fixture v-if="men_sing"/>
      <wom-doub-fixture v-if="wom_doub"/>
      <men-doub-fixture v-if="men_doub"/>
      <mix-doub-fixture v-if="mix_doub"/>
      <rules v-if="rules"/>
    </div>

</section>
</template>
<script>
import Events from '../components/carroms/Events';
import WomSingFixture from '../components/carroms/WomSingFixture';
import MenSingFixture from '../components/carroms/MenSingFixture';
import WomDoubFixture from '../components/carroms/WomDoubFixture';
import MenDoubFixture from '../components/carroms/MenDoubFixture';
import MixDoubFixture from '../components/carroms/MixDoubFixture';
import Rules from '../components/carroms/Rules';

export default {
    name: 'EventsContainer',
    props: ['aboutEvent','eventResults','eventSchedule'],
    components: {
      Events,
      WomSingFixture,
      MenSingFixture,
      WomDoubFixture,
      MenDoubFixture,
      MixDoubFixture,
      Rules
    },
    data(){
        return{
            events: false,
            wom_sing: true,
            men_sing: false,
            wom_doub: false,
            men_doub: false,
            mix_doub: false,
            rules: false,
            con_height: 500
        }
    },
    methods:{
       clickEventTab: function(type) {
            this.resetTab();
            switch(type) {
              case 'events': this.events = true; break;
              case 'wom_sing': this.wom_sing = true; break;
              case 'men_sing': this.men_sing = true; break;
              case 'wom_doub': this.wom_doub = true; break;
              case 'men_doub': this.men_doub = true; break;
              case 'mix_doub': this.mix_doub = true; break;
              case 'rules': this.rules = true; break;
              default: this.events = true;
            }
        },
        resetTab: function() {
            this.events = false;
            this.wom_sing = false;
            this.men_sing = false;
            this. wom_doub = false;
            this.men_doub = false;
            this.mix_doub = false;
            this.rules = false
        },
        scrollToTab: function(event) {

            $('html, body').stop().animate({
					scrollTop: $('.event-banner').outerHeight() - 58
				}, 800);

        }
    },
    mounted () {
      this.$nextTick(()=> {
          this.con_height = window.innerHeight -120;
      })
    }

};
</script>

<style scoped>
section{
	background-color: rgba(0, 0, 24, 1);
}
.container-header {
  background: #191d23;
  color: #737373;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  cursor: pointer;
  font-family: Gilroy,sans-serif;
}
.container-header .active {
  color: #3b64ea;
}
.container-body {
  width: 100%;
}
.about-event-footer {
  margin-top: 15px;
  width: 50%;
  float: left;
}


</style>
