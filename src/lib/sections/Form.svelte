<script>
  export const prerender = true
</script>
<div class="py-24 bg-morado-900 dark:bg-black text-xl w-1/2 mx-auto px-8 leading-normal">
  <form class="flex flex-col" name="contact" method="post" data-netlify="true" netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact" />
    <input type="text" name="bot-field" class="hidden" />
    <div class="flex items-center">
      <p class="text-white">Hola, mi nombre es</p>
      <input type="text" name="name" class="dark:bg-gray-900 bg-morado-700 text-amarillo-400 dark:text-verde-500 font-bold border-b-2 dark:border-rosado-500 border-tomate-400 p-2 focus:border-amarillo-400 rounded ml-4">
        <p class="text-white">,</p>
    </div>
    <div class="flex items-center  mt-4">
      <p class="text-white">con número de teléfono</p>
      <input type="text" name="phone" class="bg-morado-700 dark:bg-gray-900 text-amarillo-400 dark:text-verde-500 font-bold border-b-2 border-tomate-400 dark:border-rosado-500 p-2 focus:border-amarillo-400 rounded ml-4">
        <p class="text-white">,</p>
    </div>
      <div class="mt-4">
        <p class="text-white">y quiero decirles lo siguiente:</p>
        <textarea id="" name="message" cols="50" rows="5" class="bg-morado-700 dark:bg-gray-900 text-amarillo-400 dark:text-verde-500 border-b-2 border-tomate-400 dark:border-rosado-500 p-2 focus-border-amarillo-400 rounded"></textarea>
    </div>
  <button class="w-1/3 mx-auto mt-8 rounded-lg px-8 py-2 bg-gradient-to-b from-morado-700 dark:from-black to-morado-700 dark:to-black hover:to-morado-800 dark:hover:from-gray-900 border-2 border-tomate-400 dark:border-rosado-500 shadow text-amarillo-400 dark:text-verde-500 hover:text-white dark:hover:text-rosado-500 font-bold hover:border-amarillo-500 dark:hover:border-amarillo-500" type="submit">
    Enviar!
    </button>
  </form>
</div>
