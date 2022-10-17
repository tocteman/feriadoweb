<script>
import { onDestroy, afterUpdate } from 'svelte';
import { theme } from '$lib/2021/stores'


let theme_value;
theme.subscribe(x => { theme_value = x; });

const timeframes = [
  {type: "days", legend: "días", smallLegend: "D"},
  {type: "hours", legend: "horas", smallLegend: "H"},
  {type: "minutes", legend: "minutos", smallLegend: "M"},
  {type: "seconds", legend: "segundos", smallLegend: "S"}
]

$: time = 0
$: initialDate = theme_value === "dark" ? 1635807623000 : 1635557448000


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
<div class="flex flex-col items-center text-white text-lg md:text-3xl w-1/2 mx-auto text-center justify-center py-4 md:py-16">
  <div class="mb-2 md:mb-8">
    en tan solo
  </div>
  <div class="flex space-x-4 md:space-x-10 ">
    {#each timeframes as tf}
      <div class="flex flex-col space-y-2">
        <div class="font-bold text-6xl md:text-9xl text-amarillo-500 dark:text-verde-500 md:w-48">
          {printRem(tf.type, time)}
        </div>
        {tf.legend}
      </div>
    {/each}
  </div>
</div>
