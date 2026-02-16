<script lang="ts">
  export let value: string;
  export let label: string;
  export let sublabel: string = '';
</script>

<div class="text-center">
  <div class="font-mono text-display-md md:text-display-lg text-gold-400 mb-2">
    {value}
  </div>
  <div class="text-body-md text-white font-semibold mb-1">
    {label}
  </div>
  {#if sublabel}
    <div class="text-body-sm text-gray-400">
      {sublabel}
    </div>
  {/if}
</div>
