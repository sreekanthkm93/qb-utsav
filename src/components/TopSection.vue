<template>
<div class="top-header">
	<div class="top-wrapper">
		<p class="top-header-title">{{title}}</p>
		<p class="top-header-description">{{description}}</p>
	</div>
	
</div>
</template>
<script>
export default {
  name: 'TopSection',
  props: ['title','description']
};
</script>

<style scoped>
.top-header{
    height: 100vh;
    background: url("../assets/carroms.jpg");
    background-repeat: no-repeat;
    background-position: center; 
}

.top-wrapper{

}

.top-header-title{
	margin: 0;
    padding-top: 10vh;
    font-size: 100px;
    font-weight: 800;
    color: #feffe3;
    font-family: ubuntu;
    opacity: .8;
}

.top-header-description{

}

</style>