<script>
  import { base } from "$app/paths";
  import { MapLibre, VectorTileSource, LineLayer } from 'svelte-maplibre';
  import { onMount, onDestroy } from 'svelte';
  import Geocoder from '@mapbox/mapbox-gl-geocoder';
  export let map;

  let control;

  onMount(() => {
    const initialState = { lng: 139.753, lat: 35.6844, zoom: 14 };

    map = new Map({
      container: mapContainer,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${apiKey}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });

    map.addControl(new NavigationControl(), 'top-right');
    mapController = createMapLibreGlMapController(map, maplibregl);
  });

  onDestroy(() => {
    map.removeControl(control);
  });
</script>

<h1>sveltekit-gh-pages</h1>
<p>Deployed to GitHub Pages</p>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<MapLibre
  bind:map
  center={[-8.63, 52.66]}
  zoom={11}
  class="map"
  standardControls
  style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
>
  <GeocoderControl {map} />
  <VectorTileSource
    url={'pmtiles://rnet_limerick.pmtiles'}
  >
    <LineLayer
      paint={{
        'line-opacity': 0.6,
        'line-color': 'rgb(53, 175, 109)',
        'line-width': 2
      }}
      sourceLayer="rnet_limerick"
    ></LineLayer>
  </VectorTileSource>
</MapLibre>

<style>
	:global(.map) {
		height: 500px;
	}
</style>

<a href="{base}/about">About</a>
