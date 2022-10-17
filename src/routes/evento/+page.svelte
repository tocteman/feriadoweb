<script>
import Hero from '$lib/ui/Hero.svelte'
import Presentation from '$lib/evento/Presentation.svelte'
import Lineup from '$lib/evento/Lineup.svelte'
import Info from '$lib/evento/Info.svelte'
import { photos } from '$lib/images'

</script>

<div class="event-layout leading-normal
  bg
  ">
  <Hero 
    smallImage={photos.hero_evento_cuadrado} 
    largeImage={photos.hero_evento_grande} 
    title={"evento"}
  />
  <div class="flex flex-col space-y-4 max-w-md mx-auto p-8 border-t-indigo-900 border-t-2">
    <Presentation/>
    <Lineup/>
    <Info/>

  </div>

</div>
<style>
  .bg {
    background-image: url('https://pub-7ce9aa6155a4421e9084c29ec9212d4e.r2.dev/ilustraciones%2Fbg-evento.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
