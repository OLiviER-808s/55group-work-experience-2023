<template>
  <div class="hello" style="background-color: #1F2E42  ; ">
    <h1>{{ msg }}</h1>
      
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
h1{
  font-size: 50px;
  color: #FFFFFF;
  font-family: "filson-pro", sans-serif;

}
</style>
