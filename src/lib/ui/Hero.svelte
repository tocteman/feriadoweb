<script>
import BackButton from '$lib/ui/BackButton.svelte'
  export let image
  export let title

</script>


<div class="hero-container" style="background-image: url({image}); color:{color};">
  <h2>{title}</h2>
</div>

<style>
  .hero-container {

  }
</style>

