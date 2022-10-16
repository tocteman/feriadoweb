<script>
import BackButton from '$lib/ui/BackButton.svelte'
  export let image
  export let title

</script>


<div class="hero-container bg-cover " style="background-image: url({image});">
  <BackButton/>
  <h2 class="font-display hero-title pl-4">{title}</h2>
</div>

<style>
  .hero-container {
    min-height: 50vh;
    background-position: left center;
    position: relative;
  }
  .hero-title {
    position: absolute;
    bottom: 0.5rem;
    left: 0.25rem;
    font-size: 2rem;
    
  }
</style>

