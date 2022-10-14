 <script>
  import "../app.css";
    import Whatsapp from '$lib/ui/Whatsapp.svelte'
</script>

 <main>
  <slot />
  <div class="sticky bottom-4 z-50">
    <Whatsapp/>
  </div>
 </main>
