<script>
    import { MapLibre } from 'svelte-maplibre';
  </script>
  
  <MapLibre 
    center={[-8.63,52.66]}
    zoom={11}
    class="map"
    standardControls
    style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" />
  
  <style>
    :global(.map) {
      height: 500px;
    }
  </style>
