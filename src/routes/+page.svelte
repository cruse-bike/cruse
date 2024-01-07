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
    'Baseline': 'Bicycle (Baseline)',
    'Near market': 'Bicycle (Near market)',
    'Climate Action Plan': 'Bicycle (Climate Action Plan)',
    'Go Dutch': 'Bicycle (Go Dutch)',
    'Ebike': 'Bicycle (Ebike)',
    'Gradient': 'Gradient',
    'Quietness': 'Quietness'
  };

  let selectedKey = 'Go Dutch'; // Initialize selectedKey to 'Go Dutch'
  let selectedLayer = keyMap[selectedKey]; // Initialize selectedLayer to the corresponding value in keyMap

  function toggleLayer(layerKey) {
    selectedKey = layerKey; // Update selectedKey
    selectedLayer = keyMap[layerKey]; // Update selectedLayer

    // Emit layerChange event
    dispatch('layerChange', { layer: selectedLayer });
  }
</script>

<!-- <h1>CRUSE test map</h1> -->

<div class="layer-selector">
	<h2>Select Layers</h2>
	{#each Object.keys(keyMap) as displayName (displayName)}
	  <label>
		<input type="radio" bind:group={selectedKey} value={displayName} on:change={() => toggleLayer(displayName)}>
		{displayName}
	  </label>
	{/each}
  </div>

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
	
    <VectorTileSource url={'pmtiles://rnet_multi_balanced.pmtiles'}>
            <LineLayer
                id="rnet"
                paint={selectedLayer === 'Quietness' ? {
      'line-color': [
          "case",
          ["<=", ["to-number", ["get", "Quietness"]], 25],
          "hsl(330, 60%, 33%)",
          ["<=", ["to-number", ["get", "Quietness"]], 50],
          "#cc6677",
          ["<=", ["to-number", ["get", "Quietness"]], 75],
          "#44ab9a",
          [">=", ["to-number", ["get", "Quietness"]], 75],
          "hsl(140, 75%, 27%)",
          "#000000"
      ],
                  'line-width': 2
              } : {
                  'line-color': [
                      'interpolate',
                      ['linear'],
                      ['get', selectedLayer],
                      10,
                      '#ADD8E6',
                      1000,
                      '#006400'
                  ],
                  'line-width': 2
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
			</Popup>            </LineLayer>
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
