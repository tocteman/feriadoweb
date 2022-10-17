<script>
  import { theme } from '$lib/2021/stores'
  function setNovember(){
    theme.set("dark")
  }
  function setOctober(){
    theme.set("halloween")
  }

</script>

<div class="flex items-center space-x-4 md:space-x-8 w-full justify-center">
  <button class="rounded-lg px-10 py-2 md:py-4 bg-gradient-to-b from-morado-700 to-morado-700 hover:to-morado-800 border-2 border-tomate-400 hover:border-amarillo-400 shadow text-amarillo-400 hover:text-white font-bold text-2xl md:text-4xl" on:click={setOctober}>
    29 OCT
  </button>
  <button class="rounded-lg px-10 py-2 md:py-4 bg-gradient-to-b from-black to-black hover:from-gray-900 border-2 border-rosado-500 shadow text-verde-500 hover:text-white font-bold hover:border-verde-500 text-2xl md:text-4xl" on:click={setNovember}>
    01 NOV
  </button>
</div>


