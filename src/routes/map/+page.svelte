<script>
    import { MapLibre } from 'svelte-maplibre';
  </script>
  
  <MapLibre 
    center={[-8.63,52.66]}
    zoom={11}
    class="map"
    standardControls
    style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
>
<VectorTileSource
url={'pmtiles://https://r2-public.protomaps.com/protomaps-sample-datasets/cb_2018_us_zcta510_500k.pmtiles'}
>
<LineLayer
  paint={{
    'line-opacity': 0.6,
    'line-color': 'rgb(53, 175, 109)',
    'line-width': 2,
  }}
  sourceLayer={'zcta'}
/>
</VectorTileSource>
</MapLibre>    


  <style>
    :global(.map) {
      height: 500px;
    }
  </style>
