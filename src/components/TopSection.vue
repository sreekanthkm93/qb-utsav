<template>
<div class="top-header">
	<div>
		<p class="top-header-title">{{title}}</p>	
	</div>
	
</div>
</template>
<script>
export default {
  name: 'TopSection',
  props: ['title']
};
</script>

<style scoped>
.top-header{
    height: 40vh;
    background: url("../assets/carroms.jpg");
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