<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';
	import Chat from '$lib/components/Chat.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Mobile from '$lib/components/Mobile.svelte';
	import Stats from '$lib/components/Stats.svelte';
	import HeroCards from '$lib/components/HeroCards.svelte';
	import Links from '$lib/components/Links.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<div>
	<div class="">
		<div class="">
			<Hero />
		</div>

		<!-- <div class="w-full max-w-4xl mx-auto mt-5 lg:-mt-20 px-4 lg:px-0">
			<Carousel />
		</div> -->
	</div>
	<div class="w-full max-w-4xl mx-auto">
		<Stats />
		<div class="my-10">
			<div class="text-3xl font-bold text-center my-5">Flagship Products & Projects</div>
			<HeroCards />
		</div>
		<Chat />

		<!-- <div class="my-10">
			<Mobile />
		</div>

		<div class="my-10">
			<Links />
		</div> -->

		<ContactForm />
	</div>
</div>
