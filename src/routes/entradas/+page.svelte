<script>
  import Pricing from '$lib/entradas/Pricing.svelte'
  import Meet2Go from '$lib/entradas/Meet2Go.svelte'
  import Hero from '$lib/ui/Hero.svelte'
  import LedSeparator from '$lib/ui/LedSeparator.svelte'
  import { photos, illustrations } from '$lib/images'

</script>
<div class="bg flex flex-col space-y-4">
  <Hero 
    smallImage={photos.entradas_cuadrado} 
    largeImage={photos.entradas_grande} 
    title="entradas"
  />
  <div class="my-4">
    <div class="animate-rolling w-32 mx-auto ">
      <img src={illustrations.ojoloco2} alt="">
    </div>

  </div>
    <Pricing/>
    <Meet2Go/>
    
  <div class="mt-4">
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
