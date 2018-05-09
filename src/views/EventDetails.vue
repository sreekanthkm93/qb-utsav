<template>
<div>
	<top-section :title=$route.params.name></top-section>
    <event-winners-table winner="Spartans"></event-winners-table>
</div>
</template>

<script>

import TopSection from '../components/TopSection.vue';
import EventWinnersTable from '../components/EventWinnersTable.vue';

export default {
  name: 'BoardGames',
  components : {
  	TopSection,
    EventWinnersTable
  }
};
</script>

<style scoped>

</style>
