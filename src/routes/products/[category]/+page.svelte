<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import type { PageData } from './$types';
  
  export let data: PageData;
</script>

<svelte:head>
  <title>{data.title} - Primari Corpora</title>
  <meta name="description" content={data.description} />
</svelte:head>

<!-- Hero -->
<section class="bg-charcoal-900 py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <nav class="text-sm text-gray-400 mb-6">
      <a href="/" class="hover:text-gold-400">Home</a>
      <span class="mx-2">/</span>
      <a href="/products" class="hover:text-gold-400">Products</a>
      <span class="mx-2">/</span>
      <span class="text-white">{data.title}</span>
    </nav>
    
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 class="text-display-md md:text-display-lg text-white mb-4">
          {data.title}
        </h1>
        <p class="text-body-lg text-gray-300">
          {data.description}
        </p>
        <div class="mt-8">
          <Button variant="primary" size="lg" href="/contact">
            Request Quote
          </Button>
        </div>
      </div>

      <div class="aspect-[4/3] rounded-lg overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>

<!-- Products Grid -->
<section class="bg-gray-50 py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mb-12">
      <h2 class="text-heading-lg text-gray-900 mb-2">Available Products</h2>
      <p class="text-body-md text-gray-600">
        {data.products.length} products in this category
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each data.products as product}
        <div class="bg-white rounded-lg border border-gray-200 p-6 hover:border-gold-400 hover:shadow-lg transition-all duration-300">
          <h3 class="text-heading-sm text-gray-900 mb-3">
            {product.name}
          </h3>
          
          <p class="text-body-sm text-gray-600 mb-4">
            {product.description}
          </p>

          <!-- Specifications -->
          <div class="mb-6">
            <h4 class="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Key Features:</h4>
            <ul class="space-y-1">
              {#each product.specs as spec}
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-gold-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm text-gray-700">{spec}</span>
                </li>
              {/each}
            </ul>
          </div>

          <Button variant="secondary" href="/contact">
            Request Information
          </Button>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CTA -->
<section class="bg-charcoal-900 py-20">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-display-md text-white mb-4">
      Need Technical Specifications?
    </h2>
    <p class="text-body-lg text-gray-300 mb-8">
      Contact our technical team for detailed product specifications and pricing
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <Button variant="primary" size="lg" href="/contact">
        Contact Technical Team
      </Button>
      <Button variant="ghost" size="lg" href="/products">
        View All Categories
      </Button>
    </div>
  </div>
</section>
