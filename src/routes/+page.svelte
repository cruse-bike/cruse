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

	let layersVisibility = { rnet_limerick: true, another_layer: true }; // replace with your actual layers

	function handleLayerChange(event) {
		const { layer } = event.detail;
		selectedLayer = layer; // Update selectedLayer when the layer changes
		console.log('Selected layer:', selectedLayer); // Log the value of selectedLayer
		console.log(layersVisibility);
	}

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let keyMap = {
		Baseline: 'Bicycle (Baseline)',
		'Near market': 'Bicycle (Near market)',
		'Climate Action Plan': 'Bicycle (Climate Action Plan)',
		'Go Dutch': 'Bicycle (Go Dutch)',
		Ebike: 'Bicycle (Ebike)',
		Gradient: 'Gradient',
		Quietness: 'Quietness'
	};

	let selectedKey = 'Quietness'; // Initialize selectedKey to 'Go Dutch'
	let selectedLayer = keyMap[selectedKey]; // Initialize selectedLayer to the corresponding value in keyMap

	function toggleLayer(layerKey) {
		selectedKey = layerKey; // Update selectedKey
		selectedLayer = keyMap[layerKey]; // Update selectedLayer

		// Emit layerChange event
		dispatch('layerChange', { layer: selectedLayer });
	}

  let networkType = 'balanced'; // Initialize networkType to 'balanced'
  const networkTypes = ['fastest', 'balanced', 'quietest']; // Define the network types

  function changeNetworkType(newType) {
    networkType = newType; // Update networkType

    // Emit networkChange event
    dispatch('networkChange', { networkType });
  }

  const lineOpacity = [
    'interpolate',
    ['linear'],
    ['zoom'],
    8,
    0.0,
    11,
    1
  ];

</script>

<!-- <h1>CRUSE test map</h1> -->

<div class="selector-container">
  <div class="layer-selector">
    <select bind:value={selectedKey} on:change={() => toggleLayer(selectedKey)}>
        {#each Object.keys(keyMap) as displayName (displayName)}
            <option value={displayName}>{displayName}</option>
        {/each}
    </select>
  </div>

  <!-- <div class="network-selector">
    <select bind:value={networkType} on:change={() => changeNetworkType(networkType)}>
      {#each networkTypes as type (type)}
        <option value={type}>{type}</option>
      {/each}
    </select>
  </div> -->
</div>

<MapLibre
	{apiKey}
  center={[-7.96, 53.42]}
	zoom={6}
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

	<VectorTileSource
    url={'pmtiles://rnet_multi_balanced.pmtiles'} 
    minzoom=13
  >
		<LineLayer
			id="rnet"
			paint={selectedLayer === 'Quietness'
				? {
						'line-color': [
							'case',
							['<=', ['to-number', ['get', 'Quietness']], 25],
							'hsl(330, 60%, 33%)',
							['<=', ['to-number', ['get', 'Quietness']], 50],
							'#cc6677',
							['<=', ['to-number', ['get', 'Quietness']], 75],
							'#44ab9a',
							['>=', ['to-number', ['get', 'Quietness']], 75],
							'hsl(140, 75%, 27%)',
							'#000000'
						],
						'line-width': 2,
            'line-opacity': lineOpacity
				  } : selectedLayer === 'Gradient' ? {
            'line-color': [
            'case',
            ['<=', ['to-number', ['get', 'Gradient']], 1],
            '#8BC34A', // Light Green
            ['<=', ['to-number', ['get', 'Gradient']], 3],
            '#CDDC39', // Lime
            ['<=', ['to-number', ['get', 'Gradient']], 20],
            '#FFA500', // Lighter Orange
            ['>=', ['to-number', ['get', 'Gradient']], 20],
            '#FF9800',
            '#000000'
        ],
            'line-width': 2,
            'line-opacity': lineOpacity
          }
				: {
						'line-color': [
							'interpolate',
							['linear'],
							['get', selectedLayer],
							10,
							'#ADD8E6',
							1000,
							'#006400'
						],
						'line-width': 2,
            'line-opacity': lineOpacity
				  }}
			sourceLayer="rnet"
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

	:global(.geoCodeControl) {
		margin: 10px 15px;
	}
	.popUpKey {
		color: #444;
	}
	.popUpVal {
		font-weight: 600;
	}

  /* Set the font to Google's prompt */
  @import url('https://fonts.googleapis.com/css2?family=Prompt:wght@300&display=swap');
  :global(body) {
    font-family: 'Prompt', sans-serif;
  }

  .selector-container {
    display: flex;
    gap: 10px;
  }
</style>
