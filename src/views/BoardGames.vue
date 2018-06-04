<template>
<div>
	<event-banner	 
		title="Carroms" 
		description = "A round of carrom ends when one player pockets all of his or her pieces, and the queen has been pocketed. You play rounds until one player has reached 29 points.">		
	</event-banner>
	<events-container 
		:aboutEvent = "eventSnapshot"
		:eventResults = "eventOutcome"
		:eventSchedule = "eventTimings">
	</events-container>

</div>
</template>

<script>

import EventBanner from '../components/EventBanner.vue';
import EventsContainer from '../components/EventsContainer.vue';


export default {
  name: 'BoardGames',
  components : {
  	EventBanner,
  	EventsContainer
  },
  data(){
  	return{
  		eventSnapshot:{
  			'name':'Carroms Tournament',
  			'details':"The 2016 Carrom World Championship, was the 7th edition of an international Carrom tournament governed by the International Carrom Federation, contested from 7 to 11 November 2016 in UK. The 2016 Carrom World Championship, was the 7th edition of an international Carrom tournament governed by the International Carrom Federation, contested from 7 to 11 November 2016 in UK.",
  			'committee':['vimal','arunJolly','Babu KA'],
  			'time': "2018 May2 - May30",
        'rules' : 'https://www.google.com/+/policy/contestspolicy.html'
  	        },
  		eventOutcome:"bla bla bla",
  		eventTimings:"bla bla"

  	}
  }  

};

</script>

<style scoped>

</style>
