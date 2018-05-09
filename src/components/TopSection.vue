<template>
<div class="top-header" :class="getEvent(title)">
	<div>
		<p class="top-header-title">{{title}}</p>	
	</div>
	
</div>
</template>
<script>
export default {
  name: 'TopSection',
  props: ['title'],
  methods: {
      getEvent: function(title) {
          return title;
      }
  }
};
</script>

<style scoped>
.top-header{
    height: 40vh;
    background-repeat: no-repeat;
    background-position: center; 
}
.cricket{
    height: 40vh;
    background: url("../assets/cricket.jpg");
    background-repeat: no-repeat;
    background-size:cover;
    background-position: center; 
}
.football{
    height: 40vh;
    background: url("../assets/football.jpg");
    background-size:cover;
    background-repeat: no-repeat;
    background-position: center;     
}
.carroms{
    height: 40vh;
    background: url("../assets/carroms.jpg");
    background-size:cover;
    background-repeat: no-repeat;
    background-position: center;       
}

.top-header-title{
	margin: 0;
    text-align: center;
    padding-top: 10vh;
    font-size: 100px;
    font-weight: 800;
    color: #feffe3;
    font-family: ubuntu;
    opacity: .8;
}

</style>