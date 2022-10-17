<script>
import { urlFor } from '$lib/2021/image-url'
  import Countdown from '$lib/2021/components/Countdown.svelte'
  import Form from '$lib/2021/components/Form.svelte'
  import DateSelector from '$lib/2021/components/DateSelector.svelte'
  export let assets;

  $: sponsors = 
    !assets ? null 
  : assets.filter(x => x.type === "sponsor")

  $: whatsapp =
    !assets ? null
  : assets.filter(x => x.name.includes("whatsapp"))[0]

  function callWhatsapp(){

}

</script>

<div class="flex flex-col items-center space-y-8 pt-16 md:pt-24">

  {#if whatsapp}
    <div class="flex sticky w-full top-4 justify-end ">
      <div class="animate-wiggle mr-8 ">
        <a href="https://api.whatsapp.com/send?phone=+593995749100" >
        <img src={urlFor(whatsapp.img)} alt="" class="w-12 cursor-pointer" on:click={callWhatsapp}/>
        </a>
      </div>
    </div>
  {/if}

  <div class="mt-0 md:my-16">
    <DateSelector/>
  </div>
  <hr class="border-2 border-morado-800 dark:border-gray-900 w-2/3" />
  <Countdown/>
  <hr class="border-2 border-morado-800 dark:border-gray-900 w-2/3" />
  <Form/>
  <hr class="border-2 border-morado-800 dark:border-gray-900 w-2/3" />
  {#if sponsors}
    <div class="flex items-center space-x-4 md:space-x-8">

      {#each sponsors as s}
        <div class="w-10 md:w-24">
          <img src={urlFor(s.img)} alt=""/>
        </div>
      {/each}
    </div>
  {/if}

  <hr class="border-2 border-morado-800 dark:border-gray-900 w-2/3" />

</div>
