<script>
  import { urlFor } from '$lib/image-url'
  export let logo
</script>

<div class="animate-wiggle p-4 w-64 sticky top-2">
  <img src={urlFor(logo.img)} alt="feriado logo" class="animate-fade-in">
</div>
