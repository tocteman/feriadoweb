<script context="module">
  import sclient from '$lib/sclient'
  export async function load({fetch}) {
  const assetq = `*[_type == "generalAsset"]{name,"img": image.asset}`
  const fractionq = `*[_type == "posterFraction"]{name,"img": image.asset,square}`
  const announceq = `*[_type == "announcement"]{title,block,date,order}`
  const assets = await sclient.fetch(assetq)
  const fractions = await sclient.fetch(fractionq)
  const announcements = await sclient.fetch(announceq)
  return {
    props: { 
      assets, 
      fractions,
      announcements 
    }
  }
}
export const prerender = true;
</script>

<script>
  import Poster from '$lib/sections/Poster.svelte'
  import Info from '$lib/sections/Info.svelte'
  import Form from '$lib/sections/Form.svelte'
  import Footer from '$lib/components/Footer.svelte'
  export let assets
  export let fractions
  export let announcements


</script>

<div class="dark:bg-black bg-morado-900 ">
  <Poster assets={assets}/>
  <Info fractions={fractions} announcements={announcements}/>
  <Form/>
  <Footer/>
</div>
