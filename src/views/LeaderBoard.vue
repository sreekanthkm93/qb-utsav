<template>
<line-chart :data="data" :curve="true" height="500px" :max="125" xtitle="Month" ytitle="Points"></line-chart>
</template>

<script>
import { mapState } from 'vuex';
import { GET_LEADER_BOARD } from '../types/actions';

export default {
  name: 'LeaderBoard',
  mounted () {
    this.getLeaderBoardData();
  },
  methods: {
    getLeaderBoardData () {
      this.$store.dispatch(GET_LEADER_BOARD);
    }
  },
  computed: {
    ...mapState({
      errors: state => state.leaderBoard.errors,
      data: state => state.leaderBoard.leaderBoardData
    })
  }
};
</script>

<style scoped>
</style>
