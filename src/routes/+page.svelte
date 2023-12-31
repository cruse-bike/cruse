<script>
	import { base } from '$app/paths';
	import LayerSelector from '$lib/LayerSelector.svelte';
	import {
		MapLibre,
		VectorTileSource,
		LineLayer,
		Popup,
		GeolocateControl,
		NavigationControl,
		FullscreenControl
	} from 'svelte-maplibre';
	import GeocodingControl from '@maptiler/geocoding-control/svelte/GeocodingControl.svelte';
	const apiKey = 'EU1qfgGypy2AfZTKCG6c';

	let layersVisibility = { rnet_limerick: true, another_layer: true }; // replace with your actual layers

	function handleLayerChange(event) {
		const { layer, visible } = event.detail;
		layersVisibility[layer] = visible;
		console.log(layersVisibility);
	}
</script>

<!-- <h1>CRUSE test map</h1> -->

<LayerSelector on:layerChange={handleLayerChange} />

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
			if (!e.detail?.center) return;
			map.flyTo({
				center: e.detail.center,
				zoom: 10
			});
		}}
		class="geoCodeControl"
	/>

	<!-- <Control position="top-right"/> -->
	<NavigationControl position="top-right" />
	<GeolocateControl position="top-right" />
	<FullscreenControl position="top-right" />

	<!-- <VectorTileSource url={'pmtiles://rnet_limerick.pmtiles'}> -->
	<VectorTileSource url={'pmtiles://rnet-simplified-2023-11-11.pmtiles'}>
		{#if layersVisibility['rnet_limerick']}
			<LineLayer
				id="rnet"
				paint={{
					'line-color': [
						'interpolate',
						['linear'],
						['get', 'Bicycle (Go Dutch)'],
						10,
						'#ADD8E6',
						1000,
						'#006400'
					],
					'line-width': 2
				}}
				sourceLayer="rnet_limerick"
				hoverCursor="pointer"
			>
				<Popup openOn="click" offset={[0, -10]} let:features>
					{@const props = features?.[0]?.properties}
					{#each Object.entries(props) as [key, val]}
						<p>
							<span class="popUpKey">{key}</span> : <span class="popUpVal">{val}</span>
						</p>
					{/each}
				</Popup>
			</LineLayer>
		{/if}
	</VectorTileSource>
</MapLibre>

<a href="{base}/about">About</a>

<style>
	:global(.map) {
		height: 500px;
	}

	:global(.geoCodeControl) {
		margin: 10px 15px;
	}
	.popUpKey {
		color: #444;
	}
	.popUpVal {
		font-weight: 600;
	}
</style>
