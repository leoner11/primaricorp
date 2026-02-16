<script lang="ts">
  export let number: string;
  export let title: string;
  export let subtitle: string = '';
  export let headingColor: string = "True";
</script>


<div class="mb-12">
  <div class="flex items-center gap-4 mb-4">
    <div class="h-px bg-gold-400 w-16"></div>
    <span class="font-mono text-gold-400 text-sm tracking-wider">{number}</span>
    <div class="h-px bg-gold-400 flex-grow"></div>
  </div>
  
  {#if headingColor == "True"}
  <h2 class="text-heading-lg md:text-display-md text-white mb-2">
    {title}
  </h2>
  {:else}
  <h2 class="text-heading-lg md:text-display-md text-black mb-2">
    {title}
  </h2>
  {/if}
  
  {#if subtitle}
    <p class="text-body-lg text-gray-400 max-w-3xl">
      {subtitle}
    </p>
  {/if}
</div>
