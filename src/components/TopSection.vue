<template>
<div class="top-header">
	<p class="top-header-title">{{title}}</p>
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
    height: 30vh;
    background: url("../assets/carroms.jpg");
     background-repeat: no-repeat;
    background-position: center; 
}

.top-header-title{
	margin: 0;
    text-align: center;
    padding-top: 15vh;
    font-size: 100px;
    font-weight: 800;
    color: #feffe3;
    font-family: ubuntu;
    opacity: .8;
}

</style>