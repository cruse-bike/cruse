<script>
  import { map } from "stores";
  import { onMount } from "svelte";
  import GeocodingControl from "@maptiler/geocoding-control";

  let position = "top-left";
  let mapController = null;

  onMount(() => {
    mapController = new GeocodingControl({
      apiKey: import.meta.env.VITE_MAPTILER_API_KEY,
      onResult: function(result) {
        console.log(result);
      }
    });
    $map.addControl(mapController, position);
  });
</script>

{#if mapController}
  <div class={position}>
    <GeocodingControl
      apiKey={import.meta.env.VITE_MAPTILER_API_KEY}
      country="gb"
    />
  </div>
{/if}
  
  <style>
    .top-left {
      position: absolute;
      top: 20px;
      left: 50px;
    }
  
    .top-right {
      position: absolute;
      top: 150px;
      right: 10px;
    }
  </style>