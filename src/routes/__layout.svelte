<script>
  import "../global.css";
  import { theme } from '$lib/stores'

  let theme_value;
  theme.subscribe(x => { theme_value = x; });

</script>

<div class="{theme_value === 'dark' ? 'dark' : ''}" >
  <slot />
</div>
