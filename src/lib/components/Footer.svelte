<script lang="ts">
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { label: 'Minerals', href: '/products/minerals' },
    { label: 'Oxides', href: '/products/oxides' },
    { label: 'Chemicals', href: '/products/chemicals' },
    { label: 'Equipment', href: '/products/equipment' },
    { label: 'Machinery', href: '/products/machinery' }
  ];

  const companyLinks = [
    { label: 'About', href: '/#about' },
    { label: 'Partners', href: '/partners' },
    { label: 'Projects', href: '/projects' }
  ];
</script>

<footer class="bg-charcoal-900 border-t border-charcoal-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
      <!-- Company Info -->
      <div class="lg:col-span-1">
        <img src="/primaricorp.png" alt="Primari Corpora" class="h-10 w-auto mb-4" />
        <p class="text-gray-400 text-sm mb-4">
          Indonesia's premier supplier of industrial materials since 2011
        </p>
        <p class="text-gold-400 font-mono text-xs tracking-wider">
          EST. 2011
        </p>
      </div>

      <!-- Products -->
      <div>
        <h3 class="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Products</h3>
        <ul class="space-y-2">
          {#each productLinks as link}
            <li>
              <a href={link.href} class="text-gray-400 hover:text-gold-400 text-sm transition-colors">
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Company -->
      <div>
        <h3 class="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Company</h3>
        <ul class="space-y-2">
          {#each companyLinks as link}
            <li>
              <a href={link.href} class="text-gray-400 hover:text-gold-400 text-sm transition-colors">
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h3 class="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Contact</h3>
        <ul class="space-y-3 text-sm text-gray-400">
          <li>
            <a href="mailto:admin@primaricorp.com" class="hover:text-gold-400 transition-colors">
              admin@primaricorp.com
            </a>
          </li>
          <li>
            <a href="tel:+622139721586" class="hover:text-gold-400 transition-colors">
              +62 21 3972 1586
            </a>
          </li>
          <li class="pt-2">
            <p class="text-xs leading-relaxed">
              Citra Office Tower, 2nd Floor<br />
              Unit A2, Jl Benyamin Suaeb Kav A6<br />
              Kemayoran, Jakarta Pusat 10630
            </p>
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="mt-12 pt-8 border-t border-charcoal-800">
      <p class="text-center text-gray-500 text-sm">
        © {currentYear} PT Primari Corpora. All rights reserved.
      </p>
    </div>
  </div>
</footer>
