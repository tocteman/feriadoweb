<script>
import DiskJockey from '$lib/evento/DiskJockey.svelte'

const djs = [
  { image: "", name: "Alex Ponce" },
  { image: "", name: "Poncho Magnético" },
  { image: "", name: "Dj Moi" },
]

</script>

<div class="flex flex-col">
  {#each djs as dj}
    <DiskJockey image={dj.image} name={dj.name}/> 
  {/each}
</div>
