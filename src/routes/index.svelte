<script>
  import meetToGoLogo from '$lib/assets/meettogo_logo.svg'
  import aficheFeriado from '$lib/assets/aficheferiado.png'
  import whatsapp from '$lib/assets/whatsapp.svg'

</script>

<div class="w-full flex flex-col items-center bg-morado-950 py-8 min-h-screen justify-between">
  <div class="w-full sm:w-4/5 my-16">
  <img src={aficheFeriado} class="mx-auto" alt="">
  </div>
  <a href="https://www.meet2go.com/ev/elferiado2022">
    <button class="bg-black mx-auto rounded-lg px-8 py-2 w-32 sm:w-48 from-black to-morado-700 to-black hover:from-gray-900 border-2 border-amarillo-300 hover:border-rosado-400 shadow text-amarillo-500">
      <img src={meetToGoLogo} alt="">
    </button>
  </a>
  <div class="flex sticky w-full bottom-4 justify-end ">
    <div class="animate-wiggle mr-8 ">
      <a href="https://api.whatsapp.com/send?phone=+593995749100" >
      <img src={whatsapp} alt="" class="w-12 cursor-pointer" on:click={callWhatsapp}/>
      </a>
    </div>
  </div>
</div>
