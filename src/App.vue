<template>
  <!-- Navigation Bar -->
  <nav-bar></nav-bar>

  <!-- Invoices Goes Here -->
  <div class="flex text-white mx-20 my-10 p-5 text-2xl rounded-t-lg" style="background: #1f2e42">
    <h2>Invoice Overview</h2>
  </div>

  <InvoiceOverview />

  <!-- Actions Goes Here -->
  <div class="flex text-white mx-20 my-10 p-5 text-2xl rounded-t-lg" style="background: #1f2e42">
    <h2>Actions</h2>
  </div>
  
  <ActionTable msg="Welcome to Your Vue.js App"/>
  <!-- Map Goes Here -->
  <div class="flex text-white mx-20 my-10 p-5 text-2xl rounded-t-lg" style="background: #1f2e42">
    <h2>Project Distribution Map</h2>
  </div>
  <map-comp></map-comp>

  <!-- Bulletin Board Goes Here -->
  <div class="flex text-white mx-20 my-10 p-5 text-2xl rounded-t-lg" style="background: #1f2e42">
    <h2>Bulletin Board</h2>
  </div>
  
  <BulletinGrid />

  <Invoice />

  <!-- Footer -->
  <footer-comp></footer-comp>
</template>
  
<script>
import Invoice from "./components/Invoice.vue";;
import BulletinGrid from './components/BulletinGrid.vue';
import navBar from "@/components/navBar.vue";
import footerComp from "@/components/footerComp.vue";
import mapComp from "@/components/mapComp.vue";
import ActionTable from './components/ActionTable.vue';
import InvoiceOverview from './components/InvoiceOverview.vue';

export default {
  name: 'App',
  components: {
    Invoice,
    navBar,
    footerComp,
    mapComp,
    BulletinGrid,
    ActionTable,
    InvoiceOverview 
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
  