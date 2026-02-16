<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import SectionHeader from '$lib/components/SectionHeader.svelte';

  const categories = [
    {
      id: 'minerals',
      title: 'Minerals',
      description: 'High-quality industrial minerals for ceramic and manufacturing applications',
      image: '/flint-pebbles.jpg',
      products: ['Noddle Clay', 'Noddle Kaolin', 'Silica Sand', 'Talc', 'Special Kaolin']
    },
    {
      id: 'oxides',
      title: 'Oxides',
      description: 'Premium oxide compounds for pigments and industrial processes',
      image: '/ironoxide.jpg',
      products: ['Iron Oxide', 'Cobalt Oxide', 'Cobalt Sulphate', 'Nickel Oxide', 'Nickel Sulphate', 'Selenium Powder', 'Sodium Selenite', 'Alumina Oxide', 'Aluminium Hydroxide']
    },
    {
      id: 'chemicals',
      title: 'Chemicals',
      description: 'Specialty chemicals and additives for various industrial applications',
      image: '/magnetite.jpeg',
      products: ['Anti-Oxidant', 'General Chemicals (Alcohol, IBA, IPA)', 'Cleaning Agent for Resin Mould', 'Gypsum Additive', 'Specialty Chemical for Green Strength', 'Anti-Bacteria', 'Polymer Product', 'Magnetite Washing Grade']
    },
    {
      id: 'equipment',
      title: 'Supporting Equipment',
      description: 'Essential equipment and materials for industrial operations',
      image: '/siam-ngk-klin.jpg',
      products: ['Custom-made Rubber Hoses', 'SiC Heating Elements', 'SiC Ceramic Rollers', 'Kiln Furniture (Batts, Slabs, Setters, Saggars)', 'Grinding Alumina', 'Flint Pebbles', 'Crucible for Mining Lab']
    },
    {
      id: 'machinery',
      title: 'Machinery (SETEC - Vicentini)',
      description: 'Advanced ceramic industry equipment and automated systems',
      image: '/lucky1.jpg',
      products: ['Ceramic Industry Equipment', 'Kiln, Ball Mill, Extruder, Casting, Glazing', 'Automatic/Robotic Machinery', 'Body Preparation Lines', 'Shaping Lines']
    }
  ];
</script>

<svelte:head>
  <title>Products - Primari Corpora</title>
  <meta name="description" content="Explore our comprehensive range of industrial materials including minerals, oxides, chemicals, equipment, and machinery." />
</svelte:head>

<!-- Hero -->
<section class="bg-charcoal-900 py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <nav class="text-sm text-gray-400 mb-6">
      <a href="/" class="hover:text-gold-400">Home</a>
      <span class="mx-2">/</span>
      <span class="text-white">Products</span>
    </nav>
    
    <h1 class="text-display-md md:text-display-lg text-white mb-4">
      Comprehensive Material Solutions
    </h1>
    <p class="text-body-lg text-gray-300 max-w-3xl">
      Discover our extensive range of industrial materials across five specialized categories, each designed to meet the highest standards of quality and performance
    </p>
  </div>
</section>

<!-- Categories Grid -->
<section class="bg-gray-50 py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="space-y-12">
      {#each categories as category, index}
        <div class="grid lg:grid-cols-2 gap-8 items-center" class:lg:flex-row-reverse={index % 2 === 1}>
          <!-- Image -->
          <div class="order-2" class:lg:order-1={index % 2 === 1} class:lg:order-2={index % 2 === 0}>
            <div class="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src={category.image}
                alt={category.title}
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <!-- Content -->
          <div class="order-1" class:lg:order-2={index % 2 === 1} class:lg:order-1={index % 2 === 0}>
            <div class="flex items-center gap-2 mb-3">
              <span class="font-mono text-gold-600 text-sm">0{index + 1}</span>
              <div class="h-px bg-gold-400 w-12"></div>
            </div>
            
            <h2 class="text-heading-lg text-gray-900 mb-3">
              {category.title}
            </h2>
            
            <p class="text-body-md text-gray-600 mb-6">
              {category.description}
            </p>

            <!-- Product list -->
            <div class="mb-6">
              <h3 class="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Products Include:</h3>
              <ul class="space-y-2">
                {#each category.products.slice(0, 5) as product}
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-gold-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-gray-700">{product}</span>
                  </li>
                {/each}
                {#if category.products.length > 5}
                  <li class="text-gray-500 text-sm ml-7">
                    +{category.products.length - 5} more products
                  </li>
                {/if}
              </ul>
            </div>

            <Button variant="primary" href={`/products/${category.id}`}>
              View {category.title}
            </Button>
          </div>
        </div>

        {#if index < categories.length - 1}
          <div class="border-t border-gray-200 my-12"></div>
        {/if}
      {/each}
    </div>
  </div>
</section>

<!-- CTA -->
<section class="bg-charcoal-900 py-20">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-display-md text-white mb-4">
      Can't Find What You're Looking For?
    </h2>
    <p class="text-body-lg text-gray-300 mb-8">
      Contact our team to discuss your specific material requirements
    </p>
    <Button variant="primary" size="lg" href="/contact">
      Get in Touch
    </Button>
  </div>
</section>
