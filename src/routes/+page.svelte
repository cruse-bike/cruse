<script>
	import {
		MapLibre,
		VectorTileSource,
		LineLayer,
		Popup,
		GeolocateControl,
		NavigationControl,
		FullscreenControl,
		ScaleControl,
		GeoJSON,
		FillLayer
	} from 'svelte-maplibre';
	import GeocodingControl from '@maptiler/geocoding-control/svelte/GeocodingControl.svelte';
	import { createEventDispatcher } from 'svelte';

	const apiKey = 'EU1qfgGypy2AfZTKCG6c';
	const dispatch = createEventDispatcher();

	let keyMap = {
		Baseline: 'Bicycle (Baseline)',
		'Near Market': 'Bicycle (Near market)',
		'Climate Action Plan': 'Bicycle (Climate Action Plan)',
		'Go Dutch': 'Bicycle (Go Dutch)',
		Ebike: 'Bicycle (Ebike)',
		Gradient: 'Gradient',
		Quietness: 'Quietness'
	};

	let selectedKey = 'Go Dutch'; // Initialize selectedKey to 'Go Dutch'
	let selectedLayer = keyMap[selectedKey]; // Initialize selectedLayer to the corresponding value in keyMap

	function toggleLayer(layerKey) {
		selectedKey = layerKey; // Update selectedKey
		selectedLayer = keyMap[layerKey]; // Update selectedLayer

		// Emit layerChange event
		dispatch('layerChange', { layer: selectedLayer });
	}

	let palette = [
		'#d73027',
		'#f46d43',
		'#fdae61',
		'#fee090',
		'#ffffbf',
		'#e0f3f8',
		'#abd9e9',
		'#74add1',
		'#d9d9d9'
	];
	let greyNullValue = '#d9d9d9';
	let breaks = [0, 1, 2, 3, 5, 10, 20, 30, 100];
	let breakLabels = ['0-1%', '1-2%', '2-3%', '3-5%', '5-10%', '10-20%', '20-30%', '30+%'];
	let gradientBreakLabels = ['0-2%', '2-4%', '4-7%', '7+%'];

	function interpolateColor(color1, color2, factor) {
		const r1 = parseInt(color1.substring(1, 3), 16);
		const g1 = parseInt(color1.substring(3, 5), 16);
		const b1 = parseInt(color1.substring(5, 7), 16);

		const r2 = parseInt(color2.substring(1, 3), 16);
		const g2 = parseInt(color2.substring(3, 5), 16);
		const b2 = parseInt(color2.substring(5, 7), 16);

		const r = Math.round(r1 + factor * (r2 - r1));
		const g = Math.round(g1 + factor * (g2 - g1));
		const b = Math.round(b1 + factor * (b2 - b1));

		return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	}

	const color1 = '#ADD8E6';
	const color2 = '#006400';

	const colors = [
		interpolateColor(color1, color2, 0.25),
		interpolateColor(color1, color2, 0.5),
		interpolateColor(color1, color2, 0.75)
	];

	let networkColors = [
		color1, // Light Blue
		colors[0], //
		colors[1], //
		colors[2], //
		color2 //
	];

	let zoom = 6;
	bind: zoom;
	let legendTitle = '';

	let legend = [];
	$: {
		if (
			selectedLayer === 'Bicycle (Baseline)' ||
			selectedLayer === 'Bicycle (Near market)' ||
			selectedLayer === 'Bicycle (Climate Action Plan)' ||
			selectedLayer === 'Bicycle (Go Dutch)' ||
			selectedLayer === 'Bicycle (Ebike)'
		) {
			if (zoom < 8.9) {
				legendTitle = '% trips by cycling<br>Scenario: ' + selectedKey;
				legend = palette.map((color, index) => {
					const label = breakLabels[index];
					return { color, label };
				});
			} else {
				legendTitle = 'Cycle flow (trips per day)<br>Scenario: ' + selectedKey;
				legend = [
					{ color: color1, label: '<= 10' },
					{ color: networkColors[1], label: '10 - 100' },
					{ color: networkColors[2], label: '100 - 500' },
					{ color: networkColors[3], label: '500 - 1000' },
					{ color: color2, label: '>= 1000' }
				];
			}
		} else {
			if (selectedLayer === 'Gradient') {
				legendTitle = '% Gradient<br>Zoom in to see network';
				legend = [
					{
						color: selectedLayer === 'Quietness' ? 'hsl(330, 60%, 33%)' : '#8BC34A',
						label: gradientBreakLabels[0]
					},
					{
						color: selectedLayer === 'Quietness' ? '#cc6677' : '#CDDC39',
						label: gradientBreakLabels[1]
					},
					{
						color: selectedLayer === 'Quietness' ? '#44ab9a' : '#FFA500',
						label: gradientBreakLabels[2]
					},
					{
						color: selectedLayer === 'Quietness' ? 'hsl(140, 75%, 27%)' : '#B22222',
						label: gradientBreakLabels[3]
					}
				];
			} else {
				legendTitle = `Quietness<br>100 is most cyclable<br>Zoom in to see network`;
				legend = [
					{ color: 'hsl(330, 60%, 33%)', label: '<= 24' },
					{ color: '#cc6677', label: '25 - 49' },
					{ color: '#44ab9a', label: '50 - 74' },
					{ color: 'hsl(140, 75%, 27%)', label: '>= 75' }
				];
			}
		}
	}

	const lineOpacity = ['interpolate', ['linear'], ['zoom'], 8, 0.0, 11, 1];
	// fillOpacity that changes with zoom level and becomes visible when you zoom out:
	const fillOpacity = ['interpolate', ['linear'], ['zoom'], 8, 0.8, 11, 0.0];

</script>

<MapLibre
	{apiKey}
	center={[-7.96, 53.42]}
	bind:zoom
	class="map"
	controlPosition="top-right"
	style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
	on:zoomstart
	let:map
>
	<GeocodingControl
		{apiKey}
		on:select={(e) => {
			if (!e.detail?.center) return;
			map.flyTo({
				center: e.detail.center,
				zoom: 11
			});
		}}
		class="geoCodeControl"
	/>

	<!-- <Control position="top-right"/> -->
	<NavigationControl position="top-right" />
	<GeolocateControl position="top-right" />
	<FullscreenControl position="top-right" />
	<ScaleControl />

	<GeoJSON id="counties" data="counties.geojson">
		<FillLayer
			paint={{
				'fill-color': [
					'case',
					['<=', ['to-number', ['get', selectedKey]], breaks[0]],
					greyNullValue,
					['<=', ['to-number', ['get', selectedKey]], breaks[1]],
					palette[0],
					['<=', ['to-number', ['get', selectedKey]], breaks[2]],
					palette[1],
					['<=', ['to-number', ['get', selectedKey]], breaks[3]],
					palette[2],
					['<=', ['to-number', ['get', selectedKey]], breaks[4]],
					palette[3],
					['<=', ['to-number', ['get', selectedKey]], breaks[5]],
					palette[4],
					['<=', ['to-number', ['get', selectedKey]], breaks[6]],
					palette[5],
					['<=', ['to-number', ['get', selectedKey]], breaks[7]],
					palette[6],
					['<=', ['to-number', ['get', selectedKey]], breaks[8]],
					palette[7],
					greyNullValue
				],
				'fill-opacity': fillOpacity,
				'fill-opacity-transition': {
					duration: 0 // Set the transition duration to 0 to make the layer disappear instantly
				},
				// Add a border around the counties:
				'fill-outline-color': '#000000'
			}}
			filter={['<=', ['zoom'], 8]}
		>
			<Popup openOn={'click'} let:features>
				{@const props = features?.[0]?.properties}
				{#each Object.entries(props) as [key, val]}
					{#if key === 'Name'}
						<p>
							<a href={`../${val.toLowerCase()}/`} target="_blank" rel="noopener noreferrer">
								<span class="popUpKey">{key}</span> : <span class="popUpVal">{val}</span>
							</a>
						</p>
					{:else}
						<p>
							<span class="popUpKey">{key}</span> : <span class="popUpVal">{val}</span>
						</p>
					{/if}
				{/each}
			</Popup>
		</FillLayer>
	</GeoJSON>

	<VectorTileSource url={'pmtiles://rnet_multi_balanced.pmtiles'} minzoom="13">
		<LineLayer
			id="rnet"
			paint={selectedLayer === 'Quietness'
				? {
						'line-color': [
							'case',
							['<=', ['to-number', ['get', 'Quietness']], 24],
							'hsl(330, 60%, 33%)',
							['<=', ['to-number', ['get', 'Quietness']], 49],
							'#cc6677',
							['<=', ['to-number', ['get', 'Quietness']], 74],
							'#44ab9a',
							['>=', ['to-number', ['get', 'Quietness']], 75],
							'hsl(140, 75%, 27%)',
							'#000000'
						],
						'line-width': 2,
						'line-opacity': lineOpacity
					}
				: selectedLayer === 'Gradient'
					? {
							'line-color': [
								'case',
								['<=', ['to-number', ['get', 'Gradient']], 2],
								'#8BC34A', // Light Green
								['<=', ['to-number', ['get', 'Gradient']], 4],
								'#CDDC39', // Lime
								['<=', ['to-number', ['get', 'Gradient']], 7],
								'#FFA500', // Lighter Orange
								['>=', ['to-number', ['get', 'Gradient']], 7],
								'#B22222', // Fire Brick
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
								color1,
								1000,
								color2
							],
							'line-width': 2,
							'line-opacity': lineOpacity
						}}
			sourceLayer="rnet"
			hoverCursor="pointer"
			filter={['>=', ['zoom'], 8]}
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

	<div
		class="legend"
		style="position: absolute; bottom: 15; left: 15px; background: white; padding: 10px;"
	>
		<p style="font-weight: bold; margin-bottom: 5px;">Show layer:</p>
		<!-- <p style="margin-bottom: 5px;">{networkType}</p>
		<p style="margin-bottom: 5px;">Zoom level: {zoom}</p> -->

		<div class="selector-container" style="padding: 5px;">
			<div class="layer-selector">
				<select bind:value={selectedKey} on:change={() => toggleLayer(selectedKey)}>
					{#each Object.keys(keyMap) as displayName (displayName)}
						<option value={displayName}>{displayName}</option>
					{/each}
				</select>
			</div>
		</div>

		<div class="legend-title" style="font-weight: bold; margin-bottom: 10px;">
			{@html legendTitle}
		</div>
		{#each legend as item (item.label)}
			<div class="legend-item" style="display: flex; align-items: center; margin-bottom: 5px;">
				<div
					class="legend-color"
					style="width: 20px; height: 20px; background-color: {item.color}; margin-right: 5px;"
				></div>
				<div class="legend-label">{item.label}</div>
			</div>
		{/each}
	</div>
</MapLibre>

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
