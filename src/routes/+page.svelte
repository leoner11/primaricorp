<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import SectionHeader from '$lib/components/SectionHeader.svelte';
  import ProductCard from '$lib/components/ProductCard.svelte';
  import StatCounter from '$lib/components/StatCounter.svelte';
  import GlobalNetwork from '$lib/components/GlobalNetwork.svelte';

  const featuredProducts = [
    {
      title: 'Iron Oxide',
      description: 'Premium iron oxide pigments for industrial applications with vibrant and durable color solutions.',
      image: '/ironoxide.jpg',
      href: '/products/oxides'
    },
    {
      title: 'Kiln Furniture',
      description: 'High-quality kiln furniture including batts, slabs, setters, and saggars for optimal performance.',
      image: '/siam-ngk-klin.jpg',
      href: '/products/equipment'
    },
    {
      title: 'Ceramic Machinery',
      description: 'State-of-the-art equipment for the ceramic industry from SETEC-Vicentini.',
      image: '/lucky1.jpg',
      href: '/products/machinery'
    }
  ];

  const productCategories = [
    {
      title: 'Minerals',
      count: '5',
      description: 'Noddle Clay, Kaolin, Silica Sand, and specialized minerals',
      href: '/products/minerals'
    },
    {
      title: 'Oxides',
      count: '9',
      description: 'Iron, Cobalt, Nickel Oxides and specialty compounds',
      href: '/products/oxides'
    },
    {
      title: 'Chemicals',
      count: '8',
      description: 'Anti-oxidants, cleaning agents, and specialty chemicals',
      href: '/products/chemicals'
    },
    {
      title: 'Equipment',
      count: '7',
      description: 'Rubber hoses, SiC elements, and grinding materials',
      href: '/products/equipment'
    },
    {
      title: 'Machinery',
      count: '5',
      description: 'Kilns, ball mills, extruders, and automated systems',
      href: '/products/machinery'
    }
  ];
</script>

<svelte:head>
  <title>Primari Corpora - Industrial Materials Built on Trust</title>
  <meta name="description" content="Indonesia's premier supplier of minerals, oxides, chemicals, and ceramic machinery since 2011. Serving 8 countries with quality industrial materials." />
</svelte:head>

<!-- Hero Section -->
<section class="relative bg-charcoal-900 overflow-hidden">
  <!-- Background pattern -->
  <div class="absolute inset-0 opacity-5">
    <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"></div>
  </div>

  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Left: Text Content -->
      <div class="space-y-8">
        <div class="space-y-4">
          <h1 class="text-display-md md:text-display-xl text-white leading-tight">
            Industrial Materials<br />
            <span class="text-gold-400">Built on Trust</span>
          </h1>
          
          <p class="text-body-lg text-gray-300 max-w-xl">
            Indonesia's premier supplier of minerals, oxides, chemicals, and ceramic machinery serving global industries since 2011
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-4">
          <Button variant="primary" size="lg" href="/contact">
            Request Quote
          </Button>
          <Button variant="ghost" size="lg" href="/products">
            Explore Products
          </Button>
        </div>

        <!-- Stats bar -->
        <div class="pt-8 border-t border-charcoal-700">
          <div class="font-mono text-sm text-gold-400 tracking-wider">
            EST. 2011 • 08 COUNTRIES • 1000+ PROJECTS
          </div>
        </div>
      </div>

      <!-- Right: Animation -->
      <div class="relative hidden lg:block">
        <div class="aspect-square rounded-lg overflow-hidden">
          <!-- <GlobalNetwork /> -->
        </div>
        <!-- Decorative element -->
        <div class="absolute -bottom-6 -right-6 w-64 h-64 bg-gold-400/10 rounded-lg -z-10"></div>
      </div>
    </div>
  </div>
</section>

<!-- Stats Section -->
<section class="bg-charcoal-800 py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <StatCounter value="08" label="Countries" sublabel="Global Partnerships" />
      <StatCounter value="2011" label="Founded" sublabel="Years of Excellence" />
      <StatCounter value="1000+" label="Projects" sublabel="Successfully Delivered" />
    </div>
  </div>
</section>

<!-- Featured Products -->
<section id="products" class="bg-gray-50 py-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeader
      number="01"
      title="Featured Products"
      subtitle="Discover our flagship materials trusted by industry leaders across ceramics, mining, and manufacturing"
      headingColor="False"
    />

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each featuredProducts as product}
        <ProductCard {...product} />
      {/each}
    </div>
  </div>
</section>

<!-- Product Categories -->
<section class="bg-charcoal-900 py-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeader
      number="02"
      title="Product Categories"
      subtitle="Comprehensive material solutions across five specialized categories"
    />

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each productCategories as category}
        <a
          href={category.href}
          class="group p-8 bg-charcoal-800 border border-charcoal-700 rounded hover:border-gold-400 transition-all duration-300"
        >
          <div class="flex items-start justify-between mb-4">
            <h3 class="text-heading-sm text-white group-hover:text-gold-400 transition-colors">
              {category.title}
            </h3>
            <span class="font-mono text-sm text-gray-500">{category.count}</span>
          </div>
          <p class="text-body-sm text-gray-400 mb-4">
            {category.description}
          </p>
          <div class="flex items-center text-gold-400 text-sm font-semibold opacity-0 transform translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2">
            <span>View Products</span>
            <svg class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- About Section -->
<section id="about" class="bg-gray-50 py-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <SectionHeader
          number="03"
          title="About Primari Corpora"
          subtitle=""
          headingColor="False"
        />
        <div class="space-y-4 text-body-md text-gray-700">
          <p>
            Since 2011, Primari Corpora has been Indonesia's leading provider in the minerals, oxides, chemicals, and rubber hose industries. Our expertise spans a diverse range of products, including industrial minerals, precious stones, and specialty chemicals tailored for various applications.
          </p>
          <p>
            We are a specialized agent and trading company with a strong focus on the global supply and distribution of materials for the ceramic industry. Our extensive portfolio encompasses high-quality products sourced from reputable manufacturers and suppliers worldwide.
          </p>
          <p>
            With partnerships across 8 countries and over 1000 successfully completed projects, we've built our reputation on trust, quality, and reliability.
          </p>
        </div>
        <div class="mt-8">
          <Button variant="primary" href="/partners">
            Our Partners
          </Button>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <img src="/flint-pebbles.jpg" alt="Flint pebbles" class="rounded-lg w-full h-64 object-cover" />
        <img src="/ironoxide.jpg" alt="Iron oxide" class="rounded-lg w-full h-64 object-cover mt-8" />
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="bg-charcoal-900 py-24">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-display-md text-white mb-6">
      Ready to Discuss Your Project?
    </h2>
    <p class="text-body-lg text-gray-300 mb-8 max-w-2xl mx-auto">
      Get in touch with our team to learn more about our products and how we can support your industrial needs
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <Button variant="primary" size="lg" href="/contact">
        Contact Us
      </Button>
      <Button variant="ghost" size="lg" href="/products">
        View All Products
      </Button>
    </div>
  </div>
</section>