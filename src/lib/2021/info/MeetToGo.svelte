<script>
import { urlFor } from '$lib/2021/image-url'
  export let meet
</script>
<div class="w-full flex flex-col items-center">
  <a href="https://www.meet2go.com/ev/elcampanazo2021/">
    <button class="mx-auto rounded-lg px-8 py-2 from-black to-morado-700 to-black hover:from-gray-900 border-2 border-rosado-500 shadow text-verde-500 hover:text-rosado-500 hover:border-amarillo-500 bg-black" type="submit">
        {#if meet?.img}
          <img src={urlFor(meet?.img)} class="mx-auto w-28"/>
        {/if}
        <div class="text-lg md:text-2xl uppercase">
          comprar
        </div>
    </button>
  </a>
</div>
