 <script>
  import "../app.css";
    import Whatsapp from '$lib/ui/Whatsapp.svelte'
</script>

 <main class="text-white overflow-x-hidden bg-black">
  <slot />
  <div class="sticky bottom-8 z-50">
    <Whatsapp/>
  </div>
 </main>
