<script>
  import { urlFor } from '$lib/2021/image-url'
  export let logo
</script>

<div class="flex sticky top-4 justify-end ">
  <div class="animate-wiggle p-4 mr-8">
    <img src={urlFor(logo.img)} alt="feriado logo" class="animate-fade-in">
  </div>
</div>
