<script>
import { urlFor } from '$lib/2021/image-url'
import { theme } from '$lib/2021/stores'
import BlockContent from '$lib/2021/portable-text'
import NovPresentation from '$lib/2021/info/NovPresentation.svelte'
import OctPresentation from '$lib/2021/info/OctPresentation.svelte'
import Soldout from '$lib/2021/info/Soldout.svelte'
import Precautions from '$lib/2021/info/Precautions.svelte'
import MeetToGo from '$lib/2021/info/MeetToGo.svelte'

export let fractions;
export let announcements;
export let assets;
export const prerender = true

let theme_value;
theme.subscribe(x => { theme_value = x; });

export const customSerializers = {}

function randInt(max) {
  let m = Math.floor(Math.random() * max);
  if (m === 0) { m = 1}
  return m
}

$: frs = theme_value === "dark" ?
  fractions.filter(x => x.name.includes("01nov")) 
  : fractions.filter(x => x.name.includes("29oct"))


$: ans =
  !announcements ? [{title: "", block: {}}] 
  : theme_value === "dark" ?
  announcements.filter(x => x.date.includes("2021-11-01")).sort((a, b) => a.order > b.order ? 1 : b.order < a.order ? -1 : 0) 
  : announcements.filter(x => x.date.includes("2021-10-29")).sort((a, b) => a.order > b.order ? 1 : b.order < a.order ? -1 : 0) 


$: precautionIcons = assets.filter(x => x.name.includes("precaution"))
$: meetTo = assets.filter(x => x.name.includes("meet2go_button"))[0]

$: console.log({ precautionIcons })
$: console.log({ meetTo })


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

setInterval(() => { a = bySqr["1"][randInt(bySqr["1"].length)] ?? null }, 2000)
setInterval(() => { b = bySqr["2"][randInt(bySqr["2"].length)] ?? null}, 750)
setInterval(() => { c = bySqr["3"][randInt(bySqr["3"].length)] ?? null }, 1500)
setInterval(() => { d = bySqr["4"][randInt(bySqr["4"].length)] ?? null }, 1000)


</script>

<div>
    {#if theme_value !== "dark"}
      <Soldout/>
    {/if}
  <div class="bg-tomate-400 dark:bg-azul-500 py-24 flex items-start border-4 border-morado-800 dark:border-black">
    <div class="flex flex-col space-y-0 md:space-y-2 w-1/3 sticky top-16 z-10">
      {#if a && b && c && d}
        <div class="flex flex-col md:flex-row space-x-0 md:space-x-2 w-11/12 md:w-1/2">
          <img src={urlFor(a.img)} class="bg-morado-700 animate-fade-in-right md:animate-fade-in-left"/>
          <img src={urlFor(b.img)} class="bg-morado-700 animate-fade-in-right md:animate-fade-in-up"/>
        </div>
        <div class="flex flex-col md:flex-row space-x-0 md:space-x-2 w-11/12 md:w-1/2">
          <img src={urlFor(c.img)} class="bg-morado-700  animate-fade-in-right md:animate-fade-in-down"/>
          <img src={urlFor(d.img)} class="bg-morado-700 animate-fade-in-right"/>
        </div>
      {/if}
    </div>
    <div class="w-2/3 mx-1 px-1 md:px-12 flex flex-col space-y-8">

      {#if theme_value === "dark"}
        <NovPresentation/>
      {:else}
        <OctPresentation/>
      {/if}
      {#each ans as an}
        <div class="w-full md:w-2/3 mx-auto">
          <div class="bg-white border-4 md:border-8 border-morado-800 dark:border-black p-4 md:p-12 rounded shadow">
            <h2 class="text-xl md:text-3xl my-2 uppercase">
              <span class="bg-amarillo-400 dark:bg-verde-500 p-1 rounded">
                {an.title}
              </span>
            </h2>
            <p class="text-lg md:text-2xl leading-normal pt-2">
              <BlockContent blocks={an.block} serializers={customSerializers}/>
            </p>
          </div>
        </div>
      {/each}
      {#if precautionIcons}
        <Precautions icons={precautionIcons}/>
      {/if}
      {#if theme_value === "dark" && meetTo}
        <div class="flex flex-col items-center justify-center">
          <MeetToGo meet={meetTo}/>
        </div>
      {/if}

    </div>
  </div>



</div>
