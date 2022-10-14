<script>
  const navs = [
    { text: "entradas", link: "/entradas", icon: ""},
    { text: "evento", link: "/evento", icon: ""},
    { text: "preguntas", link: "/preguntas", icon: ""},
  ]

</script>


<div class="container">
  <div class="main-img">
    <img src="" alt="">
  </div>
  <nav>
    <div class="flex flex-col">
      {#each navs as n}
        <div class="flex space-x-2">
        <a href={n.link}>
            <button class="flex space-x-2">
            <img src={n.icon} alt="">
            <h3>
              {n.text}
            </h3>
            </button>
        </a>
        </div>
      {/each}
    </div>
  </nav>
</div>
