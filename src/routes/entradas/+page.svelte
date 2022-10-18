<script>
  import Pricing from '$lib/entradas/Pricing.svelte'
  import Meet2Go from '$lib/entradas/Meet2Go.svelte'
  import Hero from '$lib/ui/Hero.svelte'
  import LedSeparator from '$lib/ui/LedSeparator.svelte'
  import pizzotres from '$lib/assets/animacion1.gif'
  import { photos, illustrations } from '$lib/images'

</script>
<div class="bg flex flex-col space-y-4">
  <Hero 
    smallImage={photos.entradas_cuadrado} 
    largeImage={photos.entradas_grande} 
    title="entradas"
  />
  <div class="my-4">

  <p class="text-lg my-4 mx-auto max-w-sm p-4">
      Consigue tus entradas con nuestros promotores oficiales 🥳, en Vrooms 👾, Pizzo Tr3s, y a través del link de Meet2Go.<br/>
      Estas son las opciones disponibles:
    </p>

  </div>
    <Pricing/>
    <Meet2Go/>

  <div class="py-4">
    <LedSeparator color={"lime"}/>
  </div>
  <div class="flex items-center max-w-md mx-auto space-x-4 pb-2 sm:pb-8">
    <div class="w-20">
      <a href="https://pizzotres.com" target="_blank">
      <img src={illustrations.pizzotres} alt="">
      </a>
    </div>
    <div class="w-36">
      <a href="https://vrooms.ec" target="_blank">
        <img src={illustrations.vrooms} alt="">
      </a>
    </div>
  </div>
    
  <div class="block sm:hidden mt-4">
    <img src={illustrations.pizzas} alt="">
  </div>



  <!-- <div class="bg-cover pizza-background" style="background-image: url({illustrations.pizzas});"> -->
  <!-- </div> -->

</div>

<style>
  .bg {
    background: 
      linear-gradient(194deg, rgba(25,37,102,1) 0%, rgba(9,4,83,1) 30%, rgba(16,15,51,1) 72%, rgba(9,8,25,1) 100%),
      url('noise.svg');
  }
  .pizza-background {
    min-height: 100vh;
    padding: 2rem;
  }
</style>
