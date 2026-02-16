<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import SectionHeader from '$lib/components/SectionHeader.svelte';

  const projects = [
    {
      title: 'Kiln Installation - Ceramic Manufacturing',
      client: 'Major Ceramic Producer',
      location: 'Indonesia',
      year: '2023',
      category: 'Machinery Installation',
      image: '/lucky1.jpg',
      description: 'Complete installation of advanced kiln systems from SETEC-Vicentini, including automated loading systems and temperature control equipment.',
      products: ['Industrial Kiln', 'Automation Systems', 'Kiln Furniture']
    },
    {
      title: 'Iron Oxide Supply Contract',
      client: 'Industrial Manufacturer',
      location: 'Southeast Asia',
      year: '2023',
      category: 'Oxides Supply',
      image: '/ironoxide.jpg',
      description: 'Long-term supply agreement for premium iron oxide pigments for industrial coating applications.',
      products: ['Iron Oxide', 'Quality Testing', 'Logistics Support']
    },
    {
      title: 'Kiln Furniture Replacement',
      client: 'Ceramic Tile Manufacturer',
      location: 'Indonesia',
      year: '2022',
      category: 'Equipment Supply',
      image: '/siam-ngk-klin.jpg',
      description: 'Complete kiln furniture replacement including batts, slabs, and setters for improved firing efficiency.',
      products: ['Kiln Batts', 'Setters', 'Saggars']
    },
    {
      title: 'Magnetite Processing Setup',
      client: 'Mining Operation',
      location: 'Indonesia',
      year: '2022',
      category: 'Chemicals & Materials',
      image: '/magnetite.jpeg',
      description: 'Supply of magnetite washing grade materials and setup support for mineral processing operations.',
      products: ['Magnetite', 'Processing Equipment', 'Technical Support']
    }
  ];
</script>

<svelte:head>
  <title>Projects - Primari Corpora</title>
  <meta name="description" content="Explore our successfully completed projects across Indonesia and Southeast Asia, showcasing our expertise in industrial materials supply and equipment installation." />
</svelte:head>

<!-- Hero -->
<section class="bg-charcoal-900 py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <nav class="text-sm text-gray-400 mb-6">
      <a href="/" class="hover:text-gold-400">Home</a>
      <span class="mx-2">/</span>
      <span class="text-white">Projects</span>
    </nav>
    
    <h1 class="text-display-md md:text-display-lg text-white mb-4">
      Delivering Excellence<br />Across Industries
    </h1>
    <p class="text-body-lg text-gray-300 max-w-3xl">
      Over 1000 successfully completed projects showcasing our expertise in industrial materials supply, equipment installation, and technical support
    </p>
  </div>
</section>

<!-- Projects Grid -->
<section class="bg-gray-50 py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="space-y-16">
      {#each projects as project, index}
        <div class="grid lg:grid-cols-2 gap-8 items-start">
          <!-- Image -->
          <div class="order-2" class:lg:order-1={index % 2 === 1} class:lg:order-2={index % 2 === 0}>
            <div class="aspect-[4/3] rounded-lg overflow-hidden sticky top-24">
              <img
                src={project.image}
                alt={project.title}
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <!-- Content -->
          <div class="order-1" class:lg:order-2={index % 2 === 1} class:lg:order-1={index % 2 === 0}>
            <div class="space-y-4">
              <!-- Metadata -->
              <div class="flex flex-wrap gap-3">
                <span class="px-3 py-1 bg-gold-100 text-gold-800 text-xs font-semibold rounded">
                  {project.category}
                </span>
                <span class="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-semibold rounded">
                  {project.year}
                </span>
              </div>

              <h2 class="text-heading-lg text-gray-900">
                {project.title}
              </h2>

              <div class="space-y-2 text-body-sm text-gray-600">
                <p><strong>Client:</strong> {project.client}</p>
                <p><strong>Location:</strong> {project.location}</p>
              </div>

              <p class="text-body-md text-gray-700">
                {project.description}
              </p>

              <!-- Products Used -->
              <div>
                <h3 class="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">Products & Services:</h3>
                <div class="flex flex-wrap gap-2">
                  {#each project.products as product}
                    <span class="px-3 py-1 bg-charcoal-800 text-white text-sm rounded">
                      {product}
                    </span>
                  {/each}
                </div>
              </div>
            </div>
          </div>
        </div>

        {#if index < projects.length - 1}
          <div class="border-t border-gray-200"></div>
        {/if}
      {/each}
    </div>
  </div>
</section>

<!-- Stats -->
<section class="bg-charcoal-900 py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid md:grid-cols-3 gap-8 text-center">
      <div>
        <div class="text-display-lg font-mono text-gold-400 mb-2">1000+</div>
        <div class="text-body-lg text-white">Projects Completed</div>
      </div>
      <div>
        <div class="text-display-lg font-mono text-gold-400 mb-2">08</div>
        <div class="text-body-lg text-white">Countries Served</div>
      </div>
      <div>
        <div class="text-display-lg font-mono text-gold-400 mb-2">13+</div>
        <div class="text-body-lg text-white">Years Experience</div>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="bg-gray-50 py-20">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-display-md text-gray-900 mb-4">
      Start Your Next Project
    </h2>
    <p class="text-body-lg text-gray-600 mb-8">
      Let's discuss how we can support your industrial material needs
    </p>
    <Button variant="primary" size="lg" href="/contact">
      Get in Touch
    </Button>
  </div>
</section>
