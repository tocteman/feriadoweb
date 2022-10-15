<script>
import BackButton from '$lib/ui/BackButton.svelte'
  export let image
  export let title

</script>


<div class="hero-container" style="background-image: url({image});">
  <BackButton/>
  <h2 class="hero-title">{title}</h2>
</div>

<style>
  .hero-container {
    min-height: 50vh;
    background-position: left center;
  }
  .hero-title {
    position: relative;
    margin-top: 3rem;
    font-size: 2rem;
    
  }
</style>

