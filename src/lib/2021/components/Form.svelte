<script>
  export const prerender = true
</script>
<div class="flex items-center justify-center py-4 md:py-16">
  <div class=" bg-morado-900 dark:bg-black text-lg md:text-2xl  mx-auto  leading-normal px-8">
    <h3 class="text-xl font-bold text-amarillo-500 dark:text-rosado-500 py-4 md:py-8 text-center md:text-left">
      ¿Preguntas? ¿Inquietudes?
    </h3>
    <form class="flex flex-col" name="contact" method="post" data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" />
      <input type="text" name="bot-field" class="hidden" />
      <div class="flex flex-col md:flex-row justify-center items-center">
        <p class="text-white">Hola qué tal, mi nombre es</p>
        <input type="text" name="name" class=" dark:bg-gray-900 bg-morado-700 text-amarillo-400 dark:text-verde-500 font-bold border-b-2 dark:border-rosado-500 border-tomate-400 p-1 focus:border-amarillo-400 rounded ml-4">
        <p class="text-white hidden md:block">,</p>
      </div>
      <div class="flex flex-col md:flex-row items-center  mt-4">
        <p class="text-white">con número de teléfono</p>
        <input type="text" name="phone" class="bg-morado-700 dark:bg-gray-900 text-amarillo-400 dark:text-verde-500 font-bold border-b-2 border-tomate-400 dark:border-rosado-500 p-1 focus:border-amarillo-400 rounded ml-4">
        <p class="text-white hidden md:block">,</p>
      </div>
      <div class="mt-4 flex flex-col  items-center md:items-start">
        <p class="text-white">y quiero decirles lo siguiente:</p>
        <textarea id="" name="message" rows="5" class="w-full mx-auto bg-morado-700 dark:bg-gray-900 text-amarillo-400 dark:text-verde-500 border-b-2 border-tomate-400 dark:border-rosado-500 p-1 focus-border-amarillo-400 rounded font-bold"></textarea>
      </div>
      <button class="w-1/2 md:w-1/3 mx-auto mt-8 rounded-lg px-8 py-2 bg-gradient-to-b from-morado-700 dark:from-black to-morado-700 dark:to-black hover:to-morado-800 dark:hover:from-gray-900 border-2 border-tomate-400 dark:border-rosado-500 shadow text-amarillo-400 dark:text-verde-500 hover:text-white dark:hover:text-rosado-500 font-bold hover:border-amarillo-500 dark:hover:border-amarillo-500" type="submit">
        Enviar!
      </button>
    </form>
  </div>
</div>
