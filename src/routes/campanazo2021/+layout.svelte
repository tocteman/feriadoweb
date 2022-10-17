<script>
  import { theme } from '$lib/2021/stores'

  let theme_value;
  theme.subscribe(x => { theme_value = x; });

</script>

<div class="{theme_value === 'dark' ? 'dark' : ''}" >
  <slot />
</div>
