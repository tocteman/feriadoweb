import sclient from '$lib/2021/sclient'
  export async function load({fetch}) {
  const assetq = `*[_type == "generalAsset"]{name,"img": image.asset,type}`
  const fractionq = `*[_type == "posterFraction"]{name,"img": image.asset,square}`
  const announceq = `*[_type == "announcement"]{title,block,date,order}`
  const assets = await sclient.fetch(assetq)
  const fractions = await sclient.fetch(fractionq)
  const announcements = await sclient.fetch(announceq)
  return {
      assets, 
      fractions,
      announcements 
  }
}
export const prerender = true;


