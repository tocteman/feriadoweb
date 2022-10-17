<script>
  import Poster from '$lib/2021/sections/Poster.svelte'
  import Info from '$lib/2021/sections/Info.svelte'
  import Closer from '$lib/2021/sections/Closer.svelte'
  export let data

</script>

<div class="dark:bg-black bg-morado-900 text-black font-['Jost']">
  <Poster assets={data.assets}/>
  <Info fractions={data.fractions}
    announcements={data.announcements}
    assets={data.assets}
  />
  <Closer assets={data.assets}/>
</div>
