<script>
import { onDestroy, afterUpdate } from 'svelte';


const timeframes = [
  {type: "days", legend: "días", smallLegend: "D"},
  {type: "hours", legend: "horas", smallLegend: "H"},
  {type: "minutes", legend: "minutos", smallLegend: "M"},
  {type: "seconds", legend: "segundos", smallLegend: "S"}
]

$: time = 0
$: initialDate = 1667005200000 


function printRem (t, time) {
  const remains = t === "days" ?
  Math.floor(time/(24*60*60*1000)).toFixed(0)
  : t === 'hours' ?
  Math.floor(Math.floor(time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  : t === 'minutes' ?
  Math.floor(Math.floor(time % (1000 * 60 * 60)) / (1000 * 60))
  : t === 'seconds' ?
  Math.floor(Math.floor((time % (1000 * 60)) / 1000))
  : 0
  return remains < 0 ? '00'
    : remains < 10 ? `0${remains}`
    : `${remains}`
}

function now() {
  return Date.now().valueOf()
}

function onInterval(callback, milliseconds) {
  const interval = setInterval(callback, milliseconds);

  onDestroy(() => {
    clearInterval(interval);
  });
}

const handleTick = () => (time = (now() - initialDate) * -1);

onInterval(handleTick, 1000);

</script>
<div class="flex flex-col">
  <div class="mb-2 md:mb-8">
    en tan solo
  </div>
  <div class="flex space-x-4 md:space-x-10 ">
    {#each timeframes as tf}
      <div class="flex flex-col space-y-2 ">
        <h2 class="font-bold text-2xl md:text-3xl text-amarillo-500 dark:text-verde-500 md:w-48 font-display">
          {printRem(tf.type, time)}
        </h2>
        {tf.legend}
      </div>
    {/each}
  </div>
</div>
