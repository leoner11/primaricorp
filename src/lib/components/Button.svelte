<script lang="ts">
  export let variant: 'primary' | 'secondary' | 'ghost' = 'primary';
  export let href: string | undefined = undefined;
  export let size: 'sm' | 'md' | 'lg' = 'md';
  
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-200 rounded';
  
  const variantClasses = {
    primary: 'bg-orange-500 hover:bg-orange-600 text-white',
    secondary: 'bg-charcoal-700 hover:bg-charcoal-600 text-white border border-charcoal-600',
    ghost: 'bg-transparent hover:bg-charcoal-800 text-gray-300 hover:text-white border border-gray-600'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  $: classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;
</script>

{#if href}
  <a {href} class={classes}>
    <slot />
  </a>
{:else}
  <button class={classes} on:click>
    <slot />
  </button>
{/if}
