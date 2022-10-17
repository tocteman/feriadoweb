<script>
  import MainMenu from '$lib/home/MainMenu.svelte'
  import Countdown from '$lib/home/Countdown.svelte'
  import Banner from '$lib/home/Banner.svelte'
  import LedSeparator from '$lib/ui/LedSeparator.svelte'
  import { illustrations } from '$lib/images' 
</script>

<div class="bg">
  <div class="block sm:hidden">
    <Banner/>
  </div>
  <div class="flex flex-col space-y-4 items-center min-h-screen justify-center mt-8">
    <div class="max-w-sm w-11/12 mx-auto">
      <img src={illustrations.main} alt="">
    </div>
    <LedSeparator/>
    <MainMenu/>
    <LedSeparator/>
    <div class="max-w-sm pt-4 pb-8">
    <Countdown/>
    </div>
  </div>

</div>

<style>
  .bg {
    background-image: url('https://pub-7ce9aa6155a4421e9084c29ec9212d4e.r2.dev/ilustraciones%2Fbg-home.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
