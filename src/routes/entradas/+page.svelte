<script>
  import Pricing from '$lib/entradas/Pricing.svelte'
  import Meet2Go from '$lib/entradas/Meet2Go.svelte'

</script>
<div class="flex flex-col space-y-2">
  <Pricing/>
  <div class="pizza-background">
    <Meet2Go/>
  </div>

</div>

<div class="style">
  .pizza-background {
    background: url('$lib/assets/pizza.png')
  }
</div>
