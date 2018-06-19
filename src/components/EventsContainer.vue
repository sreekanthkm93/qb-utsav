<template>
<div>
    <div class="container-header" v-on:click="scrollToTab" ref="eventsDetailTab">
        <div class="container text-left">
            <div class="row" >
                <div class="col-xs-2" v-on:click = "clickEventTab('Aboutevent')">About event</div>
                <div class="col-xs-2" v-on:click = "clickEventTab('Results')">Results</div>
                <div class="col-xs-2" v-on:click = "clickEventTab('Schedule')">Schedule</div>
            </div>
        </div>
    </div>
    <div class="container-body">
        <div class="container">
            <div v-if="eventSection" class="about-event">
              <carrom-fixture/>
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
                <carrom-fixture/>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import CarromFixture from '../components/CarromFixture';

export default {
    name: 'EventsContainer',
    props: ['aboutEvent','eventResults','eventSchedule'],
    components: {
      CarromFixture
    },
    data(){
        return{
            eventSection: true,
            resultSection: false,
            scheduleSection: false,
        }
    },
    methods:{
       clickEventTab: function(type) {
            if (type === 'Aboutevent'){
                this.eventSection = true;this.resultSection = false;this.scheduleSection = false;}
            else if (type === 'Results'){
                this.eventSection = false;this.resultSection = true;this.scheduleSection = false;}
            else if (type === 'Schedule'){
                this.eventSection = false;this.resultSection = false;this.scheduleSection = true;}
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
  background: #ffffff;
  width: 100%;
  height: 100vh;
}
.about-event-footer {
  margin-top: 15px;
  width: 50%;
  float: left;
}
</style>
