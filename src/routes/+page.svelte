<script>
  import { base } from "$app/paths";
  import { MapLibre, VectorTileSource, LineLayer } from 'svelte-maplibre';
  import { onMount } from 'svelte';
  import GeocodingControl from "@maptiler/geocoding-control/GeocodingControl.svelte";
  import { createMapLibreGlMapController } from "@maptiler/geocoding-control/maplibregl";
  import maplibregl from "maplibre-gl";
  import "maplibre-gl/dist/maplibre-gl.css";

  const apiKey = 'EU1qfgGypy2AfZTKCG6c'; // replace with your actual API key
  let mapController = null;
  let container;

  onMount(() => {
    const map = new maplibregl.Map({
      container: container,
      style: `https://api.maptiler.com/maps/streets/style.json?key=${apiKey}`,
      center: [-8.63, 52.66],
      zoom: 11
    });

    mapController = createMapLibreGlMapController(map, maplibregl);
  });
</script>

<h1>sveltekit-gh-pages</h1>
<p>Deployed to GitHub Pages</p>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<div class="map" bind:this={container} />

{#if mapController}
  <GeocodingControl {mapController} apiKey={apiKey} />
{/if}

<MapLibre
  apiKey={apiKey}
	center={[-8.63, 52.66]}
	zoom={11}
	class="map"
	standardControls
	style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
>
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
    <Geocoder />
</MapLibre>

<style>
	:global(.map) {
		height: 500px;
	}
</style>

<a href="{base}/about">About</a>
