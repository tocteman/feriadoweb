<script>
import Hero from '$lib/ui/Hero.svelte'
import Lineup from '$lib/evento/Lineup.svelte'
import { photos } from '$lib/images'

</script>

<div class="event-layout">

  <Hero image={photos.hero_evento_cuadrado} title={"Evento"}/>
  <Lineup/>


</div>
