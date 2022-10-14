<script>
  const navs = [
    { text: "entradas", link: "", icon: ""}
    { text: "evento", link: "", icon: ""},
    { text: "preguntas", link: "", icon: ""},
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
        <a href={a.link}>
          <img src={n.icon} alt="">
          <h3>
            {n.text}
          </h3>
        </a>
        </div>
      {/each}
    </div>
  </nav>
</div>
