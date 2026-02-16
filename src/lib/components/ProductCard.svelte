<script lang="ts">
  export let title: string;
  export let description: string;
  export let image: string;
  export let href: string;
  export let featured: boolean = false;
</script>

<a
  {href}
  class="group relative overflow-hidden rounded bg-charcoal-800 transition-all duration-300 hover:scale-[1.02] {featured ? 'aspect-[2/1]' : 'aspect-square'}"
>
  <img
    src={image}
    alt={title}
    class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
  />
  
  <div class="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
  
  <div class="absolute inset-0 p-6 flex flex-col justify-end">
    <h3 class="text-heading-sm text-white mb-2 transform transition-transform duration-300 group-hover:-translate-y-1">
      {title}
    </h3>
    
    <p class="text-body-sm text-gray-300 mb-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      {description}
    </p>
    
    <div class="flex items-center text-gold-400 font-semibold text-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <span>Learn More</span>
      <svg class="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </div>
  </div>
</a>