  
<script>

import { ref } from "vue";
import { MapboxMap, MapboxMarker, MapboxLayer } from '@studiometa/vue-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default {
  name: 'mapComp',
  components: {
    MapboxMap,
    MapboxMarker,
    MapboxLayer
  },
  setup() {
    const mapCenter = ref([-1.486052, 52.830348]);
    return {
      mapCenter
    }
  }
}

</script>


<template>
  <MapboxMap
      style="height: 600px; width: 50%; align-self: center;"
      access-token="pk.eyJ1IjoienliZXJ3b2xmaSIsImEiOiJjbGs5cXpkZG0wem5nM3NydHhvdTFrMmJsIn0.FqnLAPPbIlRIaXNZakf-GQ"
      map-style="mapbox://styles/mapbox/streets-v11"
      :center="mapCenter"
      :zoom="5" />
</template>