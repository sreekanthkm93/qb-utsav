<template>
<div>
  <ul>
    <li><router-link :to="'teams'">Teams</router-link></li>
    <li><router-link :to="'events'">Events</router-link></li>
    <li><router-link :to="'/'">Home</router-link></li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333333;
}
li {
  float: right;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111111;
}
</style>
