<script>
	import Burger from '$lib/assets/burger.png';
	let showNav = false;
	function scrollToView(elementID) {
		const section = document.getElementById(elementID);
		if (section) section.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<main>
	<nav>
		<div class="mt-5 grid grid-cols-2">
			<h3 class="flex justify-end">Logo</h3>
			<ul class="hidden md:justify-center md:flex md:gap-8">
				<button
					type="button"
					on:focus={() => scrollToView('about')}
					on:click={() => scrollToView('about')}>about</button
				>
				<button
					type="button"
					on:focus={() => scrollToView('Projects')}
					on:click={() => scrollToView('Projects')}>Projects</button
				>
				<button
					type="button"
					on:focus={() => scrollToView('Technologies')}
					on:click={() => scrollToView('Technologies')}>Technologies</button
				>
				<button
					type="button"
					on:focus={() => scrollToView('Contacts')}
					on:click={() => scrollToView('Contacts')}>Contacts</button
				>
			</ul>
			<div class="justify-end relative mr-6 flex md:hidden">
				<button
					class="absolute z-20 top-1 right-1"
					on:click={() => {
						showNav = !showNav;
					}}
					type="button"
				>
					<img src={Burger} class=" size-6" alt="buger" /></button
				>
				{#if !showNav}
					<div class=" flex flex-col p-5 rounded-xl border gap-3 bg-orange-400 absolute">
						<button
							type="button"
							on:focus={() => scrollToView('about')}
							on:click={() => scrollToView('about')}>about</button
						>
						<button
							type="button"
							on:focus={() => scrollToView('Projects')}
							on:click={() => scrollToView('Projects')}>Projects</button
						>
						<button
							type="button"
							on:focus={() => scrollToView('Technologies')}
							on:click={() => scrollToView('Technologies')}>Technologies</button
						>
						<button
							type="button"
							on:focus={() => scrollToView('Contacts')}
							on:click={() => scrollToView('Contacts')}>Contacts</button
						>
					</div>
				{/if}
			</div>
		</div>
	</nav>
</main>
