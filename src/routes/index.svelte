<script context="module">
  import sclient from '$lib/sclient'
  export async function load({fetch}) {
    const assetq = `*[_type == "generalAsset"]{name,"img": image.asset}`
    // const fractionq = `*[_type == "posterFraction"]{name,"img": image.asset}`
    const url = 'https://3rwfbpeo.api.sanity.io/v2021-03-25/data/query/production?query=*%5B_type%20%3D%3D%20%22posterFraction%22%5D%7B%0A%20%20name%2C%0A%20%20%22img%22%3A%20image.asset%0A%7D'
    const announceq = `*[_type == "announcement"]{title,block,date}`
    const assets = await sclient.fetch(assetq)
    // const fractions = await sclient.fetch(fractionq)
    const res = await fetch(url)
    console.log({res})
    const announcements = await sclient.fetch(announceq)
    return {
    props: { 
      assets, 
      fractions: await res.json(), 
      announcements }
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

<div class="dark:bg-black bg-morado-900">
  <Poster assets={assets}/>
  <Info fractions={fractions} announcements={announcements}/>
  <Form/>
  <Footer/>
</div>
