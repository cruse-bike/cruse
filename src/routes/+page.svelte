<script>
	import { base } from '$app/paths';
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
</script>

<!-- <h1>CRUSE test map</h1> -->

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
	<NavigationControl position="top-right" />
	<GeolocateControl position="top-right" />
	<FullscreenControl position="top-right" />

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
			<Popup openOn="click" offset={[0, -10]} let:features>
				{@const props = features?.[0]?.properties}
				{#each Object.entries(props) as [key, val]}
					<p>
						<span class="popUpKey">{key}</span> : <span class="popUpVal">{val}</span>
					</p>
				{/each}
			</Popup>
		</LineLayer>
	</VectorTileSource>
</MapLibre>

<a href="{base}/about">About</a>

<style>
	:global(.map) {
		height: 500px;
	}

	.popUpKey {
		color: #444
	}
	.popUpVal {
		font-weight: 600;
	}
</style>
