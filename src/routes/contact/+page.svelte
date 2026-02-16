<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  
  let formData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    productInterest: '',
    message: ''
  };
  
  let submitting = false;
  let submitStatus: 'idle' | 'success' | 'error' = 'idle';
  let errorMessage = '';

  async function handleSubmit(event: Event) {
    event.preventDefault();
    submitting = true;
    submitStatus = 'idle';
    errorMessage = '';

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        submitStatus = 'success';
        formData = {
          name: '',
          email: '',
          phone: '',
          company: '',
          productInterest: '',
          message: ''
        };
      } else {
        const data = await response.json();
        submitStatus = 'error';
        errorMessage = data.error || 'Failed to send message. Please try again.';
      }
    } catch (error) {
      submitStatus = 'error';
      errorMessage = 'Network error. Please check your connection and try again.';
    } finally {
      submitting = false;
    }
  }

  const productCategories = [
    'Minerals',
    'Oxides',
    'Chemicals',
    'Supporting Equipment',
    'Machinery (SETEC-Vicentini)',
    'General Inquiry'
  ];
</script>

<svelte:head>
  <title>Contact - Primari Corpora</title>
  <meta name="description" content="Get in touch with Primari Corpora for industrial material inquiries, quotes, and partnerships. Serving Indonesia and 8 countries worldwide." />
</svelte:head>

<!-- Hero -->
<section class="bg-charcoal-900 py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <nav class="text-sm text-gray-400 mb-6">
      <a href="/" class="hover:text-gold-400">Home</a>
      <span class="mx-2">/</span>
      <span class="text-white">Contact</span>
    </nav>
    
    <h1 class="text-display-md md:text-display-lg text-white mb-4">
      Get in Touch
    </h1>
    <p class="text-body-lg text-gray-300 max-w-3xl">
      Have questions about our products or services? We're here to help. Contact us today to discuss your industrial material needs.
    </p>
  </div>
</section>

<!-- Contact Content -->
<section class="bg-gray-50 py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid lg:grid-cols-2 gap-12">
      <!-- Contact Information -->
      <div>
        <h2 class="text-heading-lg text-gray-900 mb-8">Contact Information</h2>
        
        <div class="space-y-6 mb-8">
          <!-- Email -->
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 bg-gold-400/10 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-sm font-semibold text-gray-900 mb-1">Email</h3>
              <a href="mailto:admin@primaricorp.com" class="text-body-md text-gray-600 hover:text-gold-600">
                admin@primaricorp.com
              </a>
            </div>
          </div>

          <!-- Phone -->
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 bg-gold-400/10 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-sm font-semibold text-gray-900 mb-1">Phone</h3>
              <a href="tel:+622139721586" class="text-body-md text-gray-600 hover:text-gold-600">
                +62 21 3972 1586
              </a>
            </div>
          </div>

          <!-- Address -->
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 bg-gold-400/10 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-sm font-semibold text-gray-900 mb-1">Office Address</h3>
              <p class="text-body-md text-gray-600 leading-relaxed">
                PT Primari Corpora<br />
                Citra Office Tower, 2nd Floor, Unit A2<br />
                Jl Benyamin Suaeb Kav A6<br />
                Kemayoran, Jakarta Pusat 10630<br />
                Indonesia
              </p>
            </div>
          </div>
        </div>

        <!-- Business Hours -->
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <h3 class="text-heading-sm text-gray-900 mb-4">Business Hours</h3>
          <div class="space-y-2 text-body-sm">
            <div class="flex justify-between">
              <span class="text-gray-600">Monday - Friday</span>
              <span class="text-gray-900 font-medium">9:00 AM - 5:00 PM</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Saturday - Sunday</span>
              <span class="text-gray-900 font-medium">Closed</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div>
        <div class="bg-white rounded-lg border border-gray-200 p-8">
          <h2 class="text-heading-lg text-gray-900 mb-6">Send us a Message</h2>

          {#if submitStatus === 'success'}
            <div class="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <div>
                  <h3 class="text-sm font-semibold text-green-900 mb-1">Message Sent!</h3>
                  <p class="text-sm text-green-700">Thank you for contacting us. We'll get back to you shortly.</p>
                </div>
              </div>
            </div>
          {/if}

          {#if submitStatus === 'error'}
            <div class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div class="flex items-start">
                <svg class="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
                <div>
                  <h3 class="text-sm font-semibold text-red-900 mb-1">Error</h3>
                  <p class="text-sm text-red-700">{errorMessage}</p>
                </div>
              </div>
            </div>
          {/if}

          <form on:submit={handleSubmit} class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                bind:value={formData.name}
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-shadow"
                placeholder="Your name"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                bind:value={formData.email}
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-shadow"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                bind:value={formData.phone}
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-shadow"
                placeholder="+62 xxx xxxx xxxx"
              />
            </div>

            <div>
              <label for="company" class="block text-sm font-medium text-gray-700 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                bind:value={formData.company}
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-shadow"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label for="productInterest" class="block text-sm font-medium text-gray-700 mb-2">
                Product Interest
              </label>
              <select
                id="productInterest"
                bind:value={formData.productInterest}
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-shadow"
              >
                <option value="">Select a category</option>
                {#each productCategories as category}
                  <option value={category}>{category}</option>
                {/each}
              </select>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                bind:value={formData.message}
                required
                rows="5"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-shadow"
                placeholder="Tell us about your requirements..."
              ></textarea>
            </div>

            <Button 
              variant="primary" 
              size="lg"
              disabled={submitting}
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
