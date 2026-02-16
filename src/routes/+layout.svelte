<script lang="ts">
  import '../app.css';
  import Navigation from '$lib/components/Navigation.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import WhatsAppFloat from '$lib/components/WhatsAppFloat.svelte';
</script>

<div class="flex flex-col min-h-screen">
  <Navigation />
  
  <main class="flex-grow">
    <slot />
  </main>
  
  <Footer />
  <WhatsAppFloat />
</div>
