<script>
import { photos, illustrations } from '$lib/images'

let currentDj = null;

const djs = [
  { image: photos.alex, name: "Alex Ponce" },
  { image: photos.poncho, name: "Poncho Magnético" },
  { image: photos.constanza, name: "Dj Constanza"},
  { image: photos.moi, name: "Dj Moi" }
]

const setDj = dj => { currentDj = dj }

</script>

<div>
  <div class="flex space-x-8 mb-4 items-center mx-auto">
    <div class="w-20 animate-wave">
      <img src={illustrations.bunny} alt="">
    </div>
    <h2 class="text-2xl text-yellow-300 font-display mt-4">lineup</h2>

  </div>
  <div class="flex flex-col">
    {#each djs as dj}
      <h3 
        data-text={"xxxxxxx"}
        class="text-xl font-bold font-display cursor-pointer hrelative overflow-hidden pb-4 before:content-[attr(data-text)attr(data-text)] before:underline before:underline-offset-4 before:decoration-doubled before:decoration-indigo-900 before:decoration-4 before:absolute before:whitespace-nowrap before:text-transparent before:animate-wave over:text-indigo-900 hover:text-yellow-300"
        on:click={() => setDj(dj)}
      >
        {dj.name}
      </h3>
    {/each}

    {#if currentDj}
      <div class="max-w-sm border-indigo-900 border-4 animate-wave shadow">
        <img src={currentDj.image} alt="">
      </div>
    {:else}
      <div class="animate-wiggle animate-passthrough">
        <div class="w-12">
          <img src={illustrations.guagua} alt="Kiss Me">
        </div>
      </div>
    {/if}
  </div>

</div>
