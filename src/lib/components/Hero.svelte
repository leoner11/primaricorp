<script>
	const handleClick = () => {
		// @ts-ignore
		document.getElementById('contact-us').scrollIntoView({ behavior: 'smooth' });
	};
</script>

<div
	class="hero h-[400px] lg:h-[600px] transition-all duration-300"
	style="background-image: url('https://images.unsplash.com/photo-1644325349124-d1756b79dd42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2675&q=80');"
>
	<div class="hero-overlay bg-opacity-70" />
	<div class="hero-content text-neutral-content">
		<div class="-z-[-1] drop-shadow-lg text-center lg:-translate-y-20">
			<div class="mb-5 text-7xl font-bold">In Partnership, We Trust</div>
			<div class="mb-5 max-w-4xl">
				We are a specialized agent and trading company with a strong focus on the global supply and
				distribution of minerals, oxides, chemicals, and rubber hoses based in Indonesia. Our
				extensive portfolio encompasses a wide range of high-quality products sourced from reputable
				manufacturers and suppliers worldwide.
			</div>
			<div class="flex gap-4 justify-center">
				<button
					class="btn bg-red-800 hover:bg-yellow-600 transition-color duration-300 text-lg text-white"
					on:click={handleClick}>Contact Us!</button
				>
				<!-- <button class="btn transition-color duration-300 text-lg">Get Started</button> -->
			</div>
		</div>
	</div>
</div>
