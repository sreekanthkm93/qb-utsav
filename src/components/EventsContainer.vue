<template>
<div>
    <div class="container-header" v-on:click="scrollToTab" ref="eventsDetailTab">
        <div class="container text-left">
            <div class="row" >
                <div class="col-xs-1" v-on:click = "clickEventTab('events')">EVENTS</div>
                <div class="col-xs-2" v-on:click = "clickEventTab('wom_sing')">WOMENTS SINGLES</div>
                <div class="col-xs-2" v-on:click = "clickEventTab('men_sing')">MENS SINGLES</div>
                <div class="col-xs-2" v-on:click = "clickEventTab('wom_doub')">WOMENTS DOUBLES</div>
                <div class="col-xs-2" v-on:click = "clickEventTab('men_doub')">MENTS DOUBLES</div>
                <div class="col-xs-2" v-on:click = "clickEventTab('mix_doub')">MIXED DOUBLES</div>
                <div class="col-xs-1" v-on:click = "clickEventTab('rules')">RULES</div>
            </div>
        </div>
    </div>
    <!-- <div class="container-body">
        <div class="container">
            <div v-if="eventSection" class="about-event">

                <div class="about-event-header ">{{aboutEvent.name}}</div>
                <div class="about-event-content">{{aboutEvent.details}}</div>
                <div class="about-event-footer">
                    <div class="col-xs-4">
                        <div>Organizers</div>
                        <div v-for="member in aboutEvent.committee">{{member}}</div>
                    </div>
                    <div class="col-xs-4">
                        <div>When</div>
                        <div>{{aboutEvent.time}}</div>
                    </div>
                </div>
            </div>
            <div v-if="resultSection" class="results">
                <div>RESULTS</div>
            </div>
            <div v-if="scheduleSection" class="schedule">
                <div>SCHEDULE</div>

            </div>
        </div>
    </div> -->
    <div class="fixture-container">
      <wom-sing-fixture v-if="wom_sing"/>
    </div>

</div>
</template>
<script>
import WomSingFixture from '../components/WomSingFixture';

export default {
    name: 'EventsContainer',
    props: ['aboutEvent','eventResults','eventSchedule'],
    components: {
      WomSingFixture
    },
    data(){
        return{
            events: true,
            wom_sing: false,
            men_sing: false,
            wom_doub: false,
            men_doub: false,
            mix_doub: false,
            rules: false
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
					scrollTop: $('.event-banner').outerHeight() - 70
				}, 800);

        }
    }

};
</script>

<style scoped>
.container-header {
  background: #949191;
  width: 100%;
  float: left;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  cursor: pointer;
}
.container-body {
  background: #000017;
  width: 100%;
}
.about-event-footer {
  margin-top: 15px;
  width: 50%;
  float: left;
}

.fixture-container {
  margin-right: auto;
  margin-left: auto;
  display: table;
  content: " ";
}
</style>
