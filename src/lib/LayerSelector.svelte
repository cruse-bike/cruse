<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  let layers = ['rnet_limerick', 'another_layer']; // replace with your actual layers
  let selectedLayers = layers.slice(); // by default, all layers are selected

  $: selectedLayersMap = layers.map(layer => selectedLayers.includes(layer));

  function toggleLayer(index) {
    if (selectedLayersMap[index]) {
      selectedLayers = selectedLayers.filter(layer => layer !== layers[index]);
    } else {
      selectedLayers = [...selectedLayers, layers[index]];
    }
    selectedLayersMap[index] = !selectedLayersMap[index];

    // Emit layerChange event
    dispatch('layerChange', { layer: layers[index], visible: selectedLayersMap[index] });
  }
</script>

<div class="layer-selector">
  <h2>Select Layers</h2>
  {#each layers as layer, index (layer)}
    <label>
      <input type="checkbox" bind:checked={selectedLayersMap[index]} on:change={() => toggleLayer(index)}>
      {layer}
    </label>
  {/each}
</div>