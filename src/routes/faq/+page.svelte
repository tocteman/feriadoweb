<script>
  import Hero from '$lib/ui/Hero.svelte'
  import Questions from '$lib/faq/Questions.svelte'
  import ContactForm from '$lib/faq/ContactForm.svelte'
  import { photos } from '$lib/images'

</script>
<div class="bg">
  <Hero 
    smallImage={photos.hero_faq_cuadrado} 
    largeImage={photos.hero_faq_grande} 
    title="preguntas"/>
  <div class="mx-auto max-w-lg">
    <Questions/>

  </div>
  <ContactForm/>


</div>

<style>
  .bg {
    background-image: url('faq-bg.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
