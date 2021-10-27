<script>
  import { urlFor } from '$lib/image-url'
  import { theme } from '$lib/stores'
  import BlockContent from '$lib/portable-text'

  export let fractions;
  export let announcements;
  export const prerender = true

  let theme_value;
  theme.subscribe(x => { theme_value = x; });

  export const customSerializers = {}

  function getRandomInt(max) {
    let m = Math.floor(Math.random() * max);
    if (m === 0) { m = 1}
    return m
  }

  console.log({fractions})

  $: frs = theme_value === "dark" ?
    fractions.filter(x => x.name.includes("01nov")) 
  : fractions.filter(x => x.name.includes("29oct"))


  $: ans =
    !announcements ? [{title: "", block: {}}] 
  : theme_value === "dark" ?
    announcements.filter(x => x.date.includes("2021-11-01")).sort((a, b) => a.order < b.order) 
  : announcements.filter(x => x.date.includes("2021-10-29")).sort((a, b) => a.order < b.order) 

  function groupedBy (array, fn) {
    const arr = array.map(x => ({...x, sqr: String(x.square)}))
		const ret = {}
		arr.forEach(x => {
			const key = fn(x)
			if (ret[key]) {ret[key].push(x)}
			else {ret[key] = [x]}
		})
		return ret
	}


  $: bySqr = frs ? groupedBy(frs, x => x.square) : null
  
  let a; let b; let c; let d;

  setInterval(() => { a = bySqr["1"][getRandomInt(bySqr["1"].length)] ?? null }, 2000)
  setInterval(() => { b = bySqr["2"][getRandomInt(bySqr["2"].length)] ?? null}, 750)
  setInterval(() => { c = bySqr["3"][getRandomInt(bySqr["3"].length)] ?? null }, 1500)
  setInterval(() => { d = bySqr["4"][getRandomInt(bySqr["4"].length)] ?? null }, 1000)

    

</script>

<div class="bg-tomate-400 dark:bg-verde-500 py-24 flex items-start z-10 border-4 border-morado-800 dark:border-black">
  <div class="flex flex-col space-y-2 w-1/3 sticky top-16 ">
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
  <div class="w-2/3 mx-8 px-12 flex flex-col space-y-8">
    {#each ans as an}
      <div class="w-2/3 mx-auto">
        <div class="bg-white border-4 border-morado-800 dark:border-black p-4 rounded shadow">
          <h2 class="text-3xl my-2 bg-amarillo-400 dark:bg-verde-500 font-bold uppercase">
            {an.title}
          </h2>
          <p class="text-2xl leading-normal">
            <BlockContent blocks={an.block} serializers={customSerializers}/>
          </p>
        </div>
      </div>
    {/each}

  </div>
</div>



