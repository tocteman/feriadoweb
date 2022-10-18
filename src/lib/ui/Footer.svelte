<script>
  import Whatsapp from '$lib/ui/Whatsapp.svelte'
</script>
<div class="mx-2 mb-2 flex space-x-1 justify-between items-center bg-black p-2 text-gray-200">
  <div class="ml-2 flex flex-col space-y-1">
    <a href="/" class="font-display hover:text-yellow-300">
      <h3>↩️ Campanazo 2022</h3>
    </a>
    <div class="flex space-x-2 items-center">
      <a href="/campanazo2021" class="font-sans text-xs hover:text-yellow-300 cursor-pointer">
        <h5>
          Campanazo 2021
        </h5>
      </a>
      &nbsp; ::: &nbsp;
      <a href="/feriado2022" class="font-sans text-xs hover:text-yellow-300 cursor-pointer">
        <h5>
          Feriado 2022
        </h5>
      </a>
    </div>
  </div>
  <div>
    <Whatsapp/>

  </div>
</div>
