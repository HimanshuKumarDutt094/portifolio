<script lang="ts">
	import { goto, pushState, preloadData } from '$app/navigation';
	import { page } from '$app/stores';
	import Modal from './Modal.svelte';
	import Projects from '../../routes/projects/[id]/+page.svelte';
	import { store } from '$lib/store';
	import ACart from '$lib/assets/a-cart-img.png';
	let modal: HTMLDialogElement;
	let isHovered = [false, false, false, false];
	async function showModal(e: MouseEvent) {
		const { href } = e.currentTarget as HTMLAnchorElement;
		const result = await preloadData(href);
		if (result.type === 'loaded' && result.status === 200) {
			pushState(href, { selected: result.data });
			store.set(result.data.id);
			modal.showModal();
		} else {
			goto(href);
		}
	}
	function closeModal() {
		history.back();
		store.set(0);
	}
	import SupportifyLogo from '$lib/assets/supportify-img.png';
</script>

<Modal bind:modal on:close={closeModal}>
	{#if $page.state.selected}
		<Projects {$store} />
	{/if}
</Modal>

<div id="Projects" class="overlay flex p-12 justify-center items-center mb-[20rem] mt-12">
	<div class="container mt-20">
		<div class="card-group" data-index="0" data-status="active">
			<div class="little-card card"></div>
			<div class="big-card card {isHovered[0] ? ' z-20' : ''}">
				<a on:click|preventDefault={showModal} href="/projects/1"
					><img
						class="card big-card"
						on:mouseenter={() => (isHovered[0] = true)}
						on:mouseleave={() => (isHovered[0] = false)}
						src={ACart}
						alt=""
					/></a
				>
			</div>
			<div class="little-card card"></div>
			<div class="big-card card">
				<a on:click|preventDefault={showModal} href="/projects/2"
					><img class="card big-card" src="https://picsum.photos/200/302" alt="" /></a
				>
			</div>
			<div class="little-card card"></div>
			<div class="big-card card{isHovered[1] ? ' z-20' : ''}">
				<a on:click|preventDefault={showModal} href="/projects/3"
					><img
						class="card big-card"
						on:mouseenter={() => (isHovered[1] = true)}
						on:mouseleave={() => (isHovered[1] = false)}
						src={SupportifyLogo}
						alt=""
					/></a
				>
			</div>
			<div class="little-card card"></div>
			<div class="big-card card">
				<a on:click|preventDefault={showModal} href="/projects/4"
					><img class="card big-card" src="https://picsum.photos/200/304" alt="" /></a
				>
			</div>
		</div>
	</div>
</div>

<style>
	.card-group,
	.card,
	.container {
		aspect-ratio: 5 / 7;
	}

	.card-group,
	.big-card,
	.container {
		width: 30vmin;
	}
	.container {
		position: absolute;
	}
	.card {
		background-color: rgba(255, 255, 255, 0.05);
		position: absolute;
		transition: transform 800ms cubic-bezier(0.05, 0.43, 0.25, 0.95);
		background-position: center;
		background-size: cover;
	}
	.big-card {
		width: 30vmin;
		border-radius: 1vmin;
	}
	.little-card {
		width: 12vmin;
		border-radius: 2vmin;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	.card-group {
		position: absolute;
		transition: transform 400ms ease;
	}
	.big-card:nth-child(2) {
		transform: translateX(-10%) rotate(-1deg);
	}
	.big-card:nth-child(4) {
		transform: rotate(2deg);
	}
	.big-card:nth-child(6) {
		transform: translateX(-10%) rotate(-3deg);
	}
	.big-card:nth-child(8) {
		transform: translate(10%, 3%) rotate(5deg);
	}
	.card-group:hover .big-card:nth-child(2) {
		transform: translate(-75%, 16%) rotate(-24deg);
	}
	.card-group:hover .big-card:nth-child(4) {
		transform: translate(-25%, 8%) rotate(-8deg);
	}
	.card-group:hover .big-card:nth-child(6) {
		transform: translate(25%, 8%) rotate(8deg);
	}
	.card-group:hover .big-card:nth-child(8) {
		transform: translate(75%, 16%) rotate(24deg);
	}
	.card-group:hover > .little-card:nth-child(1) {
		transform: translate(270%, -180%) rotate(-15deg);
		background-image: url('https://picsum.photos/200/300');
	}
	.card-group:hover > .little-card:nth-child(3) {
		transform: translate(180%, 180%) rotate(15deg);
		background-image: url('https://picsum.photos/201/300');
	}
	.card-group:hover > .little-card:nth-child(5) {
		transform: translate(-200%, -190%) rotate(15deg);
		background-image: url('https://picsum.photos/202/300');
	}
	.card-group:hover > .little-card:nth-child(7) {
		transform: translate(-270%, 180%) rotate(-15deg);
		background-image: url('https://picsum.photos/203/300');
	}
</style>
