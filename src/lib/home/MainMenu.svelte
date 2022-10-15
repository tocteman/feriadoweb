<script>
  const navs = [
    { text: "entradas", link: "/entradas", icon: ""},
    { text: "evento", link: "/evento", icon: ""},
    { text: "preguntas", link: "/faq", icon: ""},
  ]

</script>


<div class="container">
  <nav class="font-display">
    <div class="flex flex-col items-center">
      {#each navs as n}
        <div class="flex space-x-2 my-2 hover:text-yellow-300 hover:underline-yellow-300">
        <a href={n.link}>
            <button class="flex space-x-2">
            <img src={n.icon} alt="">
            <h3 class="text-2xl">
              {n.text}
            </h3>
            </button>
        </a>
        </div>
      {/each}
    </div>
  </nav>
</div>
