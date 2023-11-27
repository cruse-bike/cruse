<script>
  import { base } from "$app/paths";
  import { MapLibre, VectorTileSource, LineLayer, Popup } from 'svelte-maplibre';
  // Add geocoder:
  import GeocodingControl from "@maptiler/geocoding-control/svelte/GeocodingControl.svelte";
  import { createMapLibreGlMapController } from "@maptiler/geocoding-control/maplibregl";
  import maplibregl, { Map, NavigationControl } from 'maplibre-gl';
	import { get } from "svelte/store";
  // Add your API key:
  const apiKey = 'EU1qfgGypy2AfZTKCG6c';
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
        url={'pmtiles://https://nptscot.blob.core.windows.net/pmtiles/rnet_limerick.pmtiles'}
    >
        <LineLayer
            paint={{
                'line-opacity': 0.6,
                // Style based on value of 'Bicycle (Go Dutch)' field
                // With breaks at 0, 10, 100, 1000:
                'line-color': [
                    'step',
                    ['get', 'Bicycle (Go Dutch)'],
                    '#f2f12d',
                    10,
                    '#e6b71e',
                    100,
                    '#d84e11',
                    1000,
                    '#bf1d00'
                ],
                'line-width': 2
            }}
            sourceLayer="rnet_limerick"
            hoverCursor="pointer"        >
        <Popup openOn="click" offset={[0, -10]}>
            <div class="text-lg font-bold">"Test value"</div>
        </Popup>
        </LineLayer>
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
