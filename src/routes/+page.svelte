<script>
	import { base } from '$app/paths';
	import {
		MapLibre,
		VectorTileSource,
		LineLayer,
		Popup,
        GeolocateControl,
		NavigationControl

	} from 'svelte-maplibre';
	import GeocodingControl from '@maptiler/geocoding-control/svelte/GeocodingControl.svelte';
	const apiKey = 'EU1qfgGypy2AfZTKCG6c';
</script>

<h1>sveltekit-gh-pages</h1>
<p>Deployed to GitHub Pages</p>
<p>
	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<MapLibre
	{apiKey}
	center={[-8.63, 52.66]}
	zoom={11}
	class="map"
    controlPosition="top-right"
	style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
	let:map
>
	<GeocodingControl
		{apiKey}
		on:select={(e) => {
			map.flyTo({
				center: e.detail.center,
				zoom: 10
			});
		}}
	/>

    <!-- <Control position="top-right"/> -->
    <NavigationControl position="top-right"/>
    <GeolocateControl position="top-right"/>


	<VectorTileSource url={'pmtiles://rnet_limerick.pmtiles'}>
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
			hoverCursor="pointer"
		>
			<Popup openOn="click" offset={[0, -10]}>
				<div class="text-lg font-bold">"Test value"</div>
			</Popup>
		</LineLayer>
	</VectorTileSource>
</MapLibre>

<a href="{base}/about">About</a>

<style>
	:global(.map) {
		height: 500px;
	}
</style>
