<script>
  import Hero from '$lib/ui/Hero.svelte'
  import Questions from '$lib/faq/Questions.svelte'
  import ContactForm from '$lib/faq/ContactForm.svelte'
  import { photos } from '$lib/images'

</script>
<div class="faq-layout bg-gradient-to-bl from-black via-blue-900 to-black">
  <Hero image={photos.hero_faq_cuadrado} title="preguntas"/>
  <div class="mx-auto max-w-lg">
    <Questions/>

  </div>
  <ContactForm/>


</div>
