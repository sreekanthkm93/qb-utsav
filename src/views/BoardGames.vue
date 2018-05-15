<template>
<div>
	<top-section 
		title="Carroms" 
		description = "A round of carrom ends when one player pockets all of his or her pieces, and the queen has been pocketed. You play rounds until one player has reached 29 points.">		
	</top-section>
	<div class="board-games-description">
		<div>TABS</div>
		<div>458645</div>
	</div>
</div>
</template>

<script>

import TopSection from '../components/TopSection.vue';


export default {
  name: 'BoardGames',
  components : {
  	TopSection
  }
};
</script>

<style scoped>

</style>
