 <script>
  import "../app.css";
    import Whatsapp from '$lib/ui/Whatsapp.svelte'
</script>

 <main class="bg-gradient-to-br from-pink-700 via-purple-800 to-blue-800 min-h-screen text-white">
  <slot />
  <div class="sticky bottom-4 z-50">
    <Whatsapp/>
  </div>
 </main>
