<script>
  export let color

  let appliedClass = null

  $: if (!color || color == "yellow"){
    appliedClass = "border-yellow-300 shadow-yellow-300 border-t-yellow-300 border-b-yellow-300" 
  } else if (color === "pink"){
    appliedClass = "border-pink-400 shadow-pink-400 border-t-pink-400 border-b-pink-400 "
  } else if (color === "lime") {
    appliedClass = "border-lime-400 shadow-lime-400 border-t-lime-400 border-b-lime-400 "

  }

</script>
<div class={`shadow w-100 w-5/6 mx-auto border-b-2 border-t-2 rounded border-r-blue-900 border-r-4 border-l-blue-900 border-l-4 border-r-4 ${appliedClass}`}>
</div>
