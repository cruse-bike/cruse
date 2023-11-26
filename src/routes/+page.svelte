<script>
  import { base } from "$app/paths";
  import { MapLibre, VectorTileSource, LineLayer } from 'svelte-maplibre';
</script>

<h1>sveltekit-gh-pages</h1>
<p>Deployed to GitHub Pages</p>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<MapLibre
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
</MapLibre>


<style>
	:global(.map) {
		height: 500px;
	}
</style>

<a href="{base}/about">About</a>
