<script>
import BackButton from '$lib/ui/BackButton.svelte'
  export let smallImage
  export let largeImage
  export let title

</script>


<div class="min-h-1/2 relative">
  <div class="z-10 min-h-1/2 object-contain sm:object-cover sm:w-full">
    <img
      srcset={`${smallImage} 768w, ${largeImage} 1400w`}
      sizes="(max-width: 768px) 768px,
      1400px"
      class="max-w-none max-h-half object-contain sm:max-h-half sm:object-cover sm:w-full object-center"
      src={`${smallImage}`}
      />
  </div>
  <div class="z-20">
    <BackButton/>
  </div>
    <h2 class="font-display absolute left-1 bottom-1 text-2xl pl-4 z-20">{title}</h2>
</div>

