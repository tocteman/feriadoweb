<script>
  import MainMenu from '$lib/home/MainMenu.svelte'
  import Countdown from '$lib/home/Countdown.svelte'
  import Banner from '$lib/home/Banner.svelte'
  import { illustrations } from '$lib/images' 
</script>

<div>
    <Banner/>
  <div class="flex flex-col space-y-4 items-center min-h-screen justify-center">
    <div class="max-w-sm w-11/12 mx-auto">
      <img src={illustrations.main} alt="">
    </div>
    <MainMenu/>
    <Countdown/>
  </div>

</div>
