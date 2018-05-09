<template>
<div>
    <b-table dark outlined hover :items="items" caption-top>
      <template slot="table-caption">
        The final standings after the event are.
      </template>
    </b-table>		
</div>
</template>
<script>
const items = [
  { Position: 1, Team: 'Spartans', Points: 15 },
  { Position: 2, Team: 'Hercules', Points: 10 },
  { Position: 3, Team: 'Kratos', Points: 7 },
  { Position: 4, Team: 'Olympus', Points: 0 }
]

export default {
  name: 'EventWinnersTable',
  props: ['winner'],
  data () {
    return {
      items: items
    }
  }
};
</script>

<style scoped>
</style>