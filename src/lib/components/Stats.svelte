<script>
	const items = [
		{
			title: 'Minerals',
			description: ['Noddle Clay', 'Noddle Kaolin', 'Silica Sand', 'Talc', 'Special Kaolin']
		},
		{
			title: 'Oxides',
			description: [
				'Iron Oxide',
				'Cobalt Oxide',
				'Cobalt Sulphate',
				'Nickel Oxide',
				'Nickel Sulphate',
				'Selenium Powder',
				'Sodium Selenite',
				'Alumina Oxide',
				'Aluminium Hydroxide'
			]
		},
		{
			title: 'Chemicals',
			description: [
				'Anti-Oxidant',
				'General Chemicals: Alcohol, IBA, IPA, etc.',
				'Cleaning Agent for Resin Mould',
				'Gypsum Additive',
				'Specialty Chemical for Green Strength',
				'Anti-Bacteria',
				'Polymer Product',
				'Magnetite Washing Grade'
			]
		},
		{
			title: 'Supporting Equipment',
			description: [
				'Custom-made Rubber Hoses for Mining and Industry',
				'SiC Heating Elements',
				'SiC Ceramic Rollers',
				'Kiln Furniture: Batts, Slabs, Setters, Saggars, etc.',
				'Grinding Alumina',
				'Flint Pebbles',
				'Crucible for Mining Lab'
			]
		},
		{
			title: 'Machinery (SETEC - Vicentini)',
			description: [
				'Ceramic Industry Equipment',
				'Kiln, Ball Mill, Extruder, Casting, Glazing, etc.',
				'Automatic/Robotic Machinery',
				'Body Preparation Lines',
				'Shaping Lines'
			]
		}
	];
</script>

<div class="p-4 xl:p-10 bg-base-300 my-10 rounded-lg">
	<div class="max-w-3xl mx-auto pb-10">
		<div class="text-3xl font-bold text-center my-5" id="about-us">About Us</div>
		<div class="text-center">
			Since 2011, Primari Corpora has been a leading provider in the minerals, oxides, chemicals,
			and rubber hose industries in Indonesia and abroad. Our expertise spans a diverse range of
			products, including industrial minerals, precious stones, and specialty chemicals tailored for
			various applications.
		</div>
		<div class="max-w-4xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
			{#each items as { title, description }}
				<div class="border p-4 rounded-lg shadow-lg">
					<h2 class="text-xl font-semibold text-black mb-2">{title}</h2>
					<ul class="list-disc pl-5 space-y-1">
						{#each description as item}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>

	<div class="stats flex flex-col lg:flex-row bg-base-100 shadow-lg">
		<div class="stat">
			<div class="stat-figure text-primary">
				<!-- <svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block w-8 h-8 stroke-current"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
					/></svg
				> -->
			</div>
			<div class="stat-title">Partnerships with</div>
			<div class="stat-value text-primary">8</div>
			<div class="stat-desc">Different Countries</div>
		</div>

		<div class="stat">
			<div class="stat-figure text-secondary">
				<!-- <svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block w-8 h-8 stroke-current"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 10V3L4 14h7v7l9-11h-7z"
					/></svg
				> -->
			</div>
			<div class="stat-title">Founded in</div>
			<div class="stat-value text-primary">2011</div>
			<div class="stat-desc">at Indonesia</div>
		</div>
	</div>
</div>
