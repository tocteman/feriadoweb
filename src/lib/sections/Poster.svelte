<script>
  import { urlFor } from '$lib/image-url'
  import { theme } from '$lib/stores'
  import DateSelector from '$lib/components/DateSelector.svelte'
  import Header from '$lib/components/Header.svelte'
  export let assets;


  let theme_value;
  theme.subscribe(x => { theme_value = x; });

  $: poster = 
    !assets ? {img: "", name: ""} 
  : theme_value === "dark" ? 
    assets.filter(x => x.name.includes("01nov"))[0]
  : assets.filter(x => x.name.includes("29oct"))[0]

  $: campanazo = 
    !assets ? {img: "", name: ""} 
  : assets.filter(x => x.name.includes("campanazo"))[0]

  $: feriadoLogo = 
    !assets ? {img: "", name: ""} 
  : assets.filter(x => x.name.includes("feriado_logo"))[0]

</script>

<Header logo={feriadoLogo}/>
<div class="py-24">
{#if assets}
  <div class="flex flex-col items-center justify-center">
  <div class="w-full flex flex-col items-center justify-center space-y-12">
    <img src={urlFor(poster.img)} alt="" class="w-4/5" >
  </div>
  <div class="flex flex-col space-y-4 mx-12 my-12 w-3/5 justify-center items-center text-center">
      <img src={urlFor(campanazo.img)} >
    <h2 class="text-center text-white">29 oct</h2>
  </div>
  </div>
{/if}
<DateSelector/>
</div>
