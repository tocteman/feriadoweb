<script>
  import { urlFor } from '$lib/image-url'
  import { theme } from '$lib/stores'
  import BlockContent from '$lib/portable-text'

  export let fractions;
  export let announcements;

  let theme_value;
  theme.subscribe(x => { theme_value = x; });


  function getRandomInt(max) {
    let m = Math.floor(Math.random() * max);
    if (m === 0) { m = 1}
    return m
  }

  $: frs =
    !fractions ? [{img: ""}]
  : theme_value === "dark" ?
    fractions.filter(x => x.name.includes("02nov")) 
  : fractions.filter(x => x.name.includes("29oct"))

  $: ans =
    !announcements ? [{title: "", block: {}}] 
  : theme_value === "dark" ?
    announcements.filter(x => x.date.includes("2021-11-02")) 
  : announcements.filter(x => x.date.includes("2021-10-29"))

  
  let [a, b, c, d] = Array.from({length: 4}, i => frs ? frs[0] : null )
  setInterval(() => { a = frs[getRandomInt(frs.length)] }, 1000)
  setInterval(() => { b = frs[getRandomInt(frs.length)] }, 800)
  setInterval(() => { c = frs[getRandomInt(frs.length)] }, 2000)
  setInterval(() => { d = frs[getRandomInt(frs.length)] }, 1500)
    
  export const customSerializers = {}

</script>

<div class="bg-white py-24 flex items-center">
  <div class="flex flex-col space-y-2 w-1/3 sticky top-12">
    {#if a && b && c && d}
      <div class="flex space-x-2 w-1/2">
        <img src={urlFor(a.img)} class="bg-morado-700"/>
        <img src={urlFor(b.img)} class="bg-morado-700"/>
      </div>
      <div class="flex space-x-2 w-1/2">
        <img src={urlFor(c.img)} class="bg-morado-700 animate-fade-in-down"/>
        <img src={urlFor(d.img)} class="bg-morado-700"/>
      </div>
    {/if}
  </div>
  <div class="bg-white w-2/3 mx-8 px-12 flex flex-col space-y-8">
    {#each ans as an}
      <div class="w-2/3 mx-auto">
        <h2 class="text-5xl font-bold uppercase">
        {an.title}
        </h2>
        <p class="text-2xl leading-normal">
          <BlockContent blocks={an.block} serializers={customSerializers}/>
        </p>
      </div>
    {/each}

  </div>
</div>



