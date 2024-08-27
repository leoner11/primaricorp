<!-- <script>
	document.documentElement.setAttribute('data-theme', 'sunset');
</script> -->

<script>
	import { onMount } from 'svelte';

	onMount(() => {
		document.documentElement.setAttribute('data-theme', 'bumblebee');
	});
</script>

<div class="bg-base-300 top-0 shadow-lg z-40">
	<div class="flex items-center justify-between p-2 w-full max-w-4xl mx-auto">
		<div class="mb-5" style="max-width: 250px;">
			<a href="/">
				<img src="/primaricorp.png" alt="primari corpora logo" />
			</a>
		</div>

		<div class="flex flex-wrap space-x-4 sm:space-x-6 md:space-x-8">
			<a href="/" class="block mb-2 sm:mb-0 font-bold">Home</a>
			<a href="#about-us" class="block mb-2 sm:mb-0 font-bold">About Us</a>
			<a href="#our-partners" class="block mb-2 sm:mb-0 font-bold">Our Partners</a>
			<a href="#contact-us" class="block mb-2 sm:mb-0 font-bold">Contact Us</a>
		</div>
	</div>
</div>
