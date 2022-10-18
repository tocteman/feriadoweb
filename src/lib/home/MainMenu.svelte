<script>
  import { illustrations } from '$lib/images'
  const { guagua, gordon, bunny } = illustrations
  const navs = [
    { text: "entradas", link: "/entradas", image: guagua, icon: "🎟"},
    { text: "evento", link: "/evento", image: bunny, icon: "🎃"},
    { text: "preguntas", link: "/faq", image: gordon, icon: "🤔"},
  ]

</script>


<div class="container mt-8">
  <nav class="font-display w-64 mx-auto">
    <div class="flex flex-col mx-auto">
      {#each navs as n}
        <div class="flex space-x-2 my-2 hover:text-yellow-300 hover:underline-yellow-300">
        <a href={n.link}>
            <button class="flex space-x-4 items-center">
              <h2 class="text-4xl animate-wiggle drop-shadow">
                {n.icon}
              </h2>
              <!-- <div class="w-8"> -->
              <!--   <img src={n.icon} alt=""> -->
              <!-- </div> -->
            <h3 class="text-2xl drop-shadow">
              {n.text}
            </h3>
            </button>
        </a>
        </div>
      {/each}
    </div>
  </nav>
</div>
