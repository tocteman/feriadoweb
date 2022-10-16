<script>
  import Pricing from '$lib/entradas/Pricing.svelte'
  import Meet2Go from '$lib/entradas/Meet2Go.svelte'
  import Hero from '$lib/ui/Hero.svelte'
  import LedSeparator from '$lib/ui/LedSeparator.svelte'
  import { photos, illustrations } from '$lib/images'

</script>
<div class="flex flex-col space-y-4 bg-gradient-to-bl from-blue-900 to-black">
  <Hero image={photos.event_2_mobile} title="entradas"/>
  <div class="animate-rolling w-32 mx-auto my-4">
    <img src={illustrations.ojoloco2} alt="">
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
  .pizza-background {
    min-height: 100vh;
    padding: 2rem;
  }
</style>
