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
                <!-- Schedule for carroms Starts-->
               <h1></h1>

                <section class="management-tree">
                <div class="mgt-container">
                    <div class="mgt-wrapper">
                        <div class="mgt-item">
                            <div class="mgt-item-parent">
                                <div class="person">
                                    <img src="../assets/candidates/chenku.jpg" alt="bg">
                                    <p class="name">Winner</p>
                                </div>
                            </div>

                            <div class="mgt-item-children">
                                <div class="mgt-item-child">
                                    <div class="mgt-item">
                                        <div class="mgt-item-parent">
                                            <div class="person">
                                               <img src="../assets/candidates/saju.jpg" alt="bg">
                                                <p class="name">Player</p>
                                            </div>
                                        </div>

                                        <div class="mgt-item-children">
                                            <div class="mgt-item-child">
                                                <div class="person">
                                                   <img src="../assets/candidates/shan.jpg" alt="bg">
                                                    <p class="name">Player</p>
                                                </div>
                                            </div>

                                            <div class="mgt-item-child">
                                                <div class="person">
                                                    <img src="../assets/candidates/saju.jpg" alt="bg">
                                                    <p class="name">Player</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="mgt-item-child">
                                        <div class="mgt-item">
                                            <div class="mgt-item-parent">
                                                <div class="person">
                                               <img src="../assets/candidates/chenku.jpg" alt="bg">
                                                <p class="name">Player</p>
                                            </div>
                                        </div>

                                        <div class="mgt-item-children">
                                            <div class="mgt-item-child">
                                                <div class="person">
                                                   <img src="../assets/candidates/chenku.jpg" alt="bg">
                                                    <p class="name">Player</p>
                                                </div>
                                            </div>

                                            <div class="mgt-item-child">
                                                <div class="person">
                                                    <img src="../assets/candidates/shan.jpg" alt="bg">
                                                    <p class="name">Player</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            <!-- Schedule for carroms ends-->
            </div>
        </div>        
    </div>
</div>
</template>
<script>
export default {
    name: 'EventsContainer',
    props: ['aboutEvent','eventResults','eventSchedule'],
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
.about-event-footer{
    margin-top: 15px;
    width: 50%;
    float: left;
}


.about-event-footer {
  margin-top: 15px;
  width: 50%;
  float: left;
}

/* 
CSS Style sheet
Ver. 1.0
Author: Nishant Dogra
Contact: https://twitter.com/mrdogra007
*/

@import url('https://fonts.googleapis.com/css?family=Roboto:400');
h1 { text-align: center; font-size: 28px; font-weight: 600; margin-top: 40px; margin-bottom: 30px;}
body { font-family: 'Roboto', sans-serif;}
.mgt-container { flex-grow: 1; overflow: auto; justify-content: center;}
.basic-style { background-color: #EFE6E2; }
.mgt-item-parent p { font-weight: 400; color: #DE5454;}

.management-tree { background-color: #ffffff; font-family: inherit; padding: 40px;}
.management-tree .person { text-align: center;}
.management-tree .person img { max-width: 80px; border: 2px solid #d7d7d7; border-radius: 50%; overflow: hidden; background-color: #f7f7f7;}
.management-tree .person p.name { background-color: #f7f7f7; padding: 5px; font-size: 12px; font-weight: normal; color: #676767; margin: 0; position: relative;}
.management-tree .person p.name:before { content: ''; position: absolute; width: 2px; height: 5px; background-color: #d7d7d7; left: 50%; top: 0; transform: translateY(-100%);}

.mgt-wrapper { display: flex;}
.mgt-wrapper .mgt-item { display: flex; flex-direction: column; margin: auto;}
.mgt-wrapper .mgt-item .mgt-item-parent { margin-bottom: 50px; position: relative; display: flex; justify-content: center;}
.mgt-wrapper .mgt-item .mgt-item-parent:after { position: absolute; content: ''; width: 2px; height: 25px; bottom: 0; left: 50%; background-color: #d7d7d7; transform: translateY(100%);}
.mgt-wrapper .mgt-item .mgt-item-children { display: flex; justify-content: center;}
.mgt-wrapper .mgt-item .mgt-item-children .mgt-item-child { padding: 0 15px; position: relative;}
.mgt-wrapper .mgt-item .mgt-item-children .mgt-item-child:before, .mgt-wrapper .mgt-item .mgt-item-children .mgt-item-child:after { content: ''; position: absolute; background-color: #d7d7d7; left: 0;}
.mgt-wrapper .mgt-item .mgt-item-children .mgt-item-child:before { left: 50%; top: 0; transform: translateY(-100%); width: 2px; height: 25px;}
.mgt-wrapper .mgt-item .mgt-item-children .mgt-item-child:after { top: -23px; transform: translateY(-100%); height: 2px; width: 100%;}
.mgt-wrapper .mgt-item .mgt-item-children .mgt-item-child:first-child:after { left: 50%; width: 50%;} 
.mgt-wrapper .mgt-item .mgt-item-children .mgt-item-child:last-child:after { width: calc(50% + 1px);}

.person img{
        width: 90px;
    max-width: 90px;
    height: 80px;
    max-height: 80px;
}

</style>