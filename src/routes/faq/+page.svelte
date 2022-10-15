<script>
  import Hero from '$lib/ui/Hero.svelte'
  import Questions from '$lib/faq/Questions.svelte'
  import ContactForm from '$lib/faq/ContactForm.svelte'
  import { photos } from '$lib/images'

</script>
<div class="faq-layout">
  <Hero image={photos.hero_faq_cuadrado} title="Preguntas"/>
  <Questions/>
  <ContactForm/>


</div>
