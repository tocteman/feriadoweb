<script>
  import Countdown from '$lib/components/Countdown.svelte'
  import Form from '$lib/components/Form.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import DateSelector from '$lib/components/DateSelector.svelte'
</script>

<div class="flex flex-col items-center space-y-8 pt-16 md:pt-24">
  <div class="mt-0 md:my-16">
    <DateSelector/>
  </div>
  <hr class="border-2 border-morado-800 dark:border-gray-900 w-2/3" />
  <Countdown/>
  <hr class="border-2 border-morado-800 dark:border-gray-900 w-2/3" />
  <Form/>
  <hr class="border-2 border-morado-800 dark:border-gray-900 w-2/3" />
  <Footer/>

</div>
