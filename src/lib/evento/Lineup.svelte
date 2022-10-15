<script>
import { photos } from '$lib/images'

let currentDj = null;

const djs = [
  { image: photos.alex, name: "Alex Ponce" },
  { image: photos.poncho, name: "Poncho Magnético" },
  { image: photos.moi, name: "Dj Moi" },
  { image: photos.contanza, name: "Constanza"}
]

const setDj = dj => { currentDj = dj }

</script>

<div class="flex flex-col">
  {#each djs as dj}
    <h3 on:click={() => setDj(dj)}>{dj.name}</h3>
  {/each}

  {#if currentDj}
  <div class="max-w-sm">
      <img src={currentDj.image} alt="">
    </div>
  {:else}
  {/if}
</div>
