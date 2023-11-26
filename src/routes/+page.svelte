<script>
  import { base } from "$app/paths";
  import { MapLibre, VectorTileSource, LineLayer } from 'svelte-maplibre';
  // Add geocoder:
  import GeocodingControl from "@maptiler/geocoding-control/svelte/GeocodingControl.svelte";
  import { createMapLibreGlMapController } from "@maptiler/geocoding-control/maplibregl";
  import maplibregl, { Map, NavigationControl } from 'maplibre-gl';
  // Add your API key:
  const apiKey = 'test';
</script>

<h1>sveltekit-gh-pages</h1>
<p>Deployed to GitHub Pages</p>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

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
    <GeocodingControl
        apiKey={apiKey}
        position="top-left"
        placeholder="Search for a place"
        limit={5}
        language="en"
        onselect={(event) => {
            console.log(event.detail);
        }}
    />
</MapLibre>

<style>
	:global(.map) {
		height: 500px;
	}
</style>

<a href="{base}/about">About</a>
