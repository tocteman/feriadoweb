<script>
import { urlFor } from '$lib/2021/image-url'
import { theme } from '$lib/2021/stores'
import DateSelector from '$lib/2021/components/DateSelector.svelte'
import Header from '$lib/2021/components/Header.svelte'
export let assets;


let theme_value;
theme.subscribe(x => { theme_value = x; });

$: poster = 
  !assets ? {img: "", name: ""} 
  : theme_value === "dark" ? 
  assets.filter(x => x.name.includes("01nov"))[0]
  : assets.filter(x => x.name.includes("29oct"))[0]

$: campanazo = 
  !assets ? null
  : theme_value === "dark" ? 
  assets.filter(x => x.name.includes("01nov_campanazo21"))[0]
  : assets.filter(x => x.name.includes("29oct_campanazo21"))[0]

$: feriadoLogo = 
  !assets ? {img: "", name: ""} 
  : assets.filter(x => x.name.includes("feriado_logo"))[0]

$: partyName = theme_value === "dark" ? "Edición Fiestas de Cuenca" : "Edición Halloween"

$: partyDate = theme_value === "dark" ? "01 nov" : "29 oct"

</script>

<div class="">
<Header logo={feriadoLogo}/>
<div class="pt-24 flex flex-col items-center justify-center">
  {#if poster}
  <div class="w-full flex flex-col items-center justify-center space-y-12">
  <img src={urlFor(poster.img)} alt="" class="w-4/5" >
    </div>
  {/if}
<div class="flex flex-col space-y-4 mx-12 my-12 w-3/5 justify-center items-center text-center mt-12">

{#if campanazo}
<img src={urlFor(campanazo.img)} class="max-w-lg md:max-w-2xl">
  <div class="text-center text-white uppercase text-xl md:text-3xl flex flex-col space-y-2 mt-16 mb-8">
    <h2 class="">{partyName}</h2>
    <h2 class="font-bold">{partyDate}</h2>
    <h2 class="">Caballo Campana</h2>
  </div>
  {/if}
</div>
</div>
<div class="pb-24">

  <DateSelector/>
</div>
</div>
