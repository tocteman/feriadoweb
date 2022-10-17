<script>
import { urlFor } from '$lib/2021/image-url'
export let icons;

$: mask = !icons ? null : icons.filter(x => x.name.includes("mask"))[0]
$: id = !icons ? null : icons.filter(x => x.name.includes("id"))[0]
$: carnet = !icons ? null : icons.filter(x => x.name.includes("carnet"))[0]
$: party = !icons ? null : icons.filter(x => x.name.includes("party"))[0]

</script>
<div class="w-full md:w-2/3 mx-auto">
  <div class="bg-white border-4 md:border-8 border-morado-800 dark:border-black p-4 md:p-12 rounded shadow">
    <h2 class="text-xl md:text-3xl my-2 uppercase">
      <span class="bg-amarillo-400 dark:bg-verde-500 p-1 rounded">
        RECUERDA
      </span>
    </h2>
    <div class="flex flex-col">
      <p class="text-xl font-bold md:text-2xl leading-normal py-2">
        No olvides traer contigo: 
      </p>
    </div>
    <div class="flex flex-col uppercase">
      <div class="flex space-x-2 space-y-2 items-center">
        <img src={urlFor(mask.img)} alt="" class="w-16"/>
        <div>
          Mascarilla
        </div>
      </div>
      <div class="flex space-x-2 space-y-2 items-center">
        <img src={urlFor(id.img)} alt="" class="w-16"/>
        <div>
          Cédula
        </div>
      </div>
      <div class="flex space-x-2 space-y-2 items-center">
        <img src={urlFor(carnet.img)} alt="" class="w-16"/>
        <div>
          Carnet vacunación
        </div>
      </div>
      <div class="flex space-x-2 space-y-2 items-center">
        <img src={urlFor(party.img)} alt="" class="w-16"/>
        <div>
          Espíritu farrero
        </div>
      </div>
    </div>
  </div>
</div>
