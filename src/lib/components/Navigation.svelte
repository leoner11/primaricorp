<script lang="ts">
  import { page } from '$app/stores';

  let mobileMenuOpen = false;

  const navItems = [
    { label: 'About', href: '/#about' },
    { label: 'Products', href: '/products' },
    { label: 'Projects', href: '/projects' },
    { label: 'Partners', href: '/partners' },
    { label: 'Contact', href: '/contact' }
  ];

  $: currentPath = $page.url.pathname;
</script>

<nav class="sticky top-0 z-50 bg-charcoal-900/95 backdrop-blur-sm border-b border-charcoal-700">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-20">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <a href="/" class="flex items-center">
          <img src="/primaricorp.png" alt="Primari Corpora" class="h-20 w-auto" />
        </a>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        {#each navItems as item}
          <a
            href={item.href}
            class="text-gray-300 hover:text-gold-400 transition-colors duration-200 text-sm font-medium tracking-wide"
            class:text-gold-400={currentPath === item.href || (item.href !== '/' && currentPath.startsWith(item.href))}
          >
            {item.label}
          </a>
        {/each}
        
        <a
          href="/contact"
          class="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded transition-colors duration-200"
        >
          Request Quote
        </a>
      </div>

      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button
          on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
          class="text-gray-300 hover:text-white p-2"
          aria-label="Toggle menu"
        >
          {#if !mobileMenuOpen}
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          {:else}
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          {/if}
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile menu -->
  {#if mobileMenuOpen}
    <div class="md:hidden border-t border-charcoal-700 bg-charcoal-800">
      <div class="px-4 py-4 space-y-3">
        {#each navItems as item}
          <a
            href={item.href}
            on:click={() => (mobileMenuOpen = false)}
            class="block text-gray-300 hover:text-gold-400 py-2 text-base font-medium"
            class:text-gold-400={currentPath === item.href}
          >
            {item.label}
          </a>
        {/each}
        <a
          href="/contact"
          on:click={() => (mobileMenuOpen = false)}
          class="block w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white text-center font-semibold rounded transition-colors duration-200"
        >
          Request Quote
        </a>
      </div>
    </div>
  {/if}
</nav>
