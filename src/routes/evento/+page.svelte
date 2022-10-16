<script>
import Hero from '$lib/ui/Hero.svelte'
import Presentation from '$lib/evento/Presentation.svelte'
import Lineup from '$lib/evento/Lineup.svelte'
import Info from '$lib/evento/Info.svelte'
import { photos } from '$lib/images'

</script>

<div class="event-layout leading-normal
  bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
  <Hero image={photos.hero_evento_cuadrado} title={"evento"}/>
  <div class="flex flex-col space-y-4 max-w-md mx-auto p-8 border-t-indigo-900 border-t-2">
    <Presentation/>
    <Lineup/>
    <Info/>

  </div>

</div>
