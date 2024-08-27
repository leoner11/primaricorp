<script>
	import { fade } from 'svelte/transition';
	let currentIndex = 0;
	const images = ['/lucky1.jpg', '/lucky2.jpg', '/lucky3.jpg', '/lucky4.jpg'];

	function next() {
		currentIndex = (currentIndex + 1) % images.length;
	}

	function prev() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
	}
</script>

<div class="hero min-h-full bg-base-200 rounded-lg">
	<div class="hero-content flex-col lg:flex-row xl:gap-10">
		<div class="relative w-full h-80">
			{#each images as image, i (image)}
				{#if i === currentIndex}
					<img
						alt="hero"
						src={image}
						class="h-80 w-full object-cover rounded-lg shadow-lg absolute top-0 left-0"
						transition:fade
					/>
				{/if}
			{/each}
			<button
				on:click={prev}
				class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
			>
				&#10094;
			</button>
			<button
				on:click={next}
				class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
			>
				&#10095;
			</button>
		</div>
		<div class="w-full">
			<h1 class="text-3xl font-bold">Installment of Kiln Machine in Ceramic Industry</h1>
			<p class="py-6">
				We offer high-quality kiln machines designed for the ceramic industry, providing
				state-of-the-art equipment to meet your production needs.Our kilns are engineered for
				durability and efficiency, ensuring consistent firing results and enhancing the overall
				quality of your ceramic products.
			</p>
		</div>
	</div>
</div>

<div class="hero min-h-full bg-base-200 rounded-lg">
	<div class="hero-content flex-col lg:flex-row-reverse xl:gap-10">
		<img alt="hero" src="ironoxide.jpg" class="h-80 w-full object-cover rounded-lg shadow-lg" />
		<div class="w-full">
			<h1 class="text-3xl font-bold">Iron Oxide</h1>
			<p class="py-6">
				We supply premium iron oxide pigments for a wide range of applications, offering vibrant and
				durable color solutions for various industries.
			</p>
			<!-- <button class="btn btn-primary w-full">Get Started</button> -->
		</div>
	</div>
</div>

<div class="hero min-h-full bg-base-200 rounded-lg">
	<div class="hero-content flex-col lg:flex-row xl:gap-10">
		<img
			alt="hero"
			src="/siam-ngk-klin.jpg"
			class="h-80 w-full object-cover rounded-lg shadow-lg"
		/>
		<div class="w-full">
			<h1 class="text-3xl font-bold">Kiln Furniture</h1>
			<p class="py-6">
				We provide a comprehensive range of kiln furniture, including batts, slabs, setters, and
				saggars, designed to optimize your kiln’s performance and ensure efficient firing. Our kiln
				furniture is crafted from high-quality materials to withstand the rigorous conditions of
				high-temperature processes, enhancing the durability and quality of your ceramic production.
				Whether you need custom solutions or standard products, our kiln furniture supports your
				manufacturing needs with precision and reliability.
			</p>
			<!-- <button class="btn btn-primary w-full">Get Started</button> -->
		</div>
	</div>
</div>

<div class="hero min-h-full bg-base-200 rounded-lg">
	<div class="hero-content flex-col lg:flex-row-reverse xl:gap-10">
		<img alt="hero" src="/magnetite.jpeg" class="h-80 max-w-lg object-cover rounded-lg shadow-lg" />
		<div class="w-full">
			<h1 class="text-3xl font-bold">Magnetite</h1>
			<p class="py-6">
				We offer premium magnetite, a versatile mineral used in various applications including
				industrial processes and as a key component in manufacturing. Our product ensures consistent
				quality and performance, providing the reliability needed for your specific industrial
				requirements.
			</p>
			<!-- <button class="btn btn-primary w-full">Get Started</button> -->
		</div>
	</div>
</div>

<div class="hero min-h-full bg-base-200 rounded-lg">
	<div class="hero-content flex-col lg:flex-row xl:gap-10">
		<img
			alt="hero"
			src="/flint-pebbles.jpg"
			class="h-80 w-full object-cover rounded-lg shadow-lg"
		/>
		<div class="w-full">
			<h1 class="text-3xl font-bold">Flint Pebbles</h1>
			<p class="py-6">
				We offer flint pebbles in a range of sizes to suit diverse grinding and milling needs. Our
				selection ensures that you can find the perfect size for your specific application,
				enhancing the efficiency and effectiveness of your processes.
			</p>
			<!-- <button class="btn btn-primary w-full">Get Started</button> -->
		</div>
	</div>
</div>
