<script>
import { photos, illustrations } from '$lib/images'
import instagram from '$lib/assets/instagram.svg'

let currentDj = null;

const djs = [
  { image: photos.alex, name: "Alex Ponce", ig:"alexponcemusica" },
  { image: photos.poncho, name: "Poncho Magnético", ig: "ponchomagnetico" },
  { image: photos.constanza, name: "Dj Constanza", ig: "therealguafle"},
  { image: photos.moi, name: "Dj Moi", ig: "eldjmoi" }
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
        class="text-xl font-bold font-display cursor-pointer hrelative overflow-hidden pb-4 before:content-[attr(data-text)attr(data-text)] before:underline before:underline-offset-4 before:decoration-doubled before:decoration-blue-900 before:decoration-4 before:absolute before:whitespace-nowrap before:text-transparent before:animate-wave over:text-blue-900 hover:text-yellow-300"
        on:click={() => setDj(dj)}
      >
        {dj.name}
      </h3>
    {/each}

    {#if currentDj}
      <div class="max-w-sm border-blue-900 border-4 animate-wave shadow relative text-white">
        <img src={currentDj.image} alt="">
        <a class="w-16 h-16 text-white absolute top-2 left-2 hover:text-yellow-300" href={`https://instagram.com/${currentDj.ig}` } target="_blank">
          <img src={instagram} alt="" class="text-white"/>
        </a>
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
