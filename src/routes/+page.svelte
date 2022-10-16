<script>
  import MainMenu from '$lib/home/MainMenu.svelte'
  import Countdown from '$lib/home/Countdown.svelte'
  import Banner from '$lib/home/Banner.svelte'
  import LedSeparator from '$lib/ui/LedSeparator.svelte'
  import { illustrations } from '$lib/images' 
</script>

<div class="bg-gradient-to-br from-purple-700 via-purple-900 via-purple-800 via-blue-900 via-purple-900 to-black ">
  <div class="block sm:hidden">
    <Banner/>
  </div>
  <div class="flex flex-col space-y-4 items-center min-h-screen justify-center">
    <div class="max-w-sm w-11/12 mx-auto -mt-8">
      <img src={illustrations.main} alt="">
    </div>
    <LedSeparator/>
    <MainMenu/>
    <LedSeparator/>
    <div class="max-w-sm">
    <Countdown/>
    </div>
  </div>

</div>
