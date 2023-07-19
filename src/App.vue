<template>

    <!-- Navigation Bar -->
    <nav-bar></nav-bar>

    <!-- Invoices Goes Here -->
    <div class="flex text-white mx-20 my-10 p-5 text-2xl rounded-t-lg" style="background: #1f2e42">
        <h2>Invoice Overview</h2>
    </div>

    <!-- Actions Goes Here -->
    <div class="flex text-white mx-20 my-10 p-5 text-2xl rounded-t-lg" style="background: #1f2e42">
        <h2>Actions</h2>
    </div>

    <!-- Map Goes Here -->
    <div class="flex text-white mx-20 my-10 p-5 text-2xl rounded-t-lg" style="background: #1f2e42">
        <h2>Project Distribution Map</h2>
    </div>
    <map-comp></map-comp>

    <!-- Bulletin Board Goes Here -->
    <div class="flex text-white mx-20 my-10 p-5 text-2xl rounded-t-lg" style="background: #1f2e42">
        <h2>Bulletin Board</h2>
    </div>

    <!-- Footer -->
    <footer-comp></footer-comp>
</template>

<script>
import navBar from "@/components/navBar.vue";
import footerComp from "@/components/footerComp.vue";
import mapComp from "@/components/mapComp.vue";

export default {
  name: 'App',
  components: {
      navBar,
      footerComp,
      mapComp,
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
    font-family: 'filson-pro', sans-serif;
}
</style>
