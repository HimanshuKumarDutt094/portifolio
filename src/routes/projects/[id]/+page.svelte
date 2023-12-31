<script lang="ts">
	import { page } from '$app/stores';
	let projectID = $page?.state?.selected?.props?.param.id;
</script>

{#if projectID === 1}
	<div class="aspect-video border rounded-3xl h-[50dvh] overflow-hidden w-[70dvw] border-black">
		<iframe
			src="https://anything-cart.vercel.app/"
			title="anythingcart"
			frameborder="0"
			class="aspect-video rounded-3xl border h-[50dvh] w-[70dvw] border-black"
		></iframe>
	</div>
{/if}
{#if projectID === 2}
	<div class="aspect-video border rounded-3xl h-[50dvh] overflow-hidden w-[70dvw] border-black">
		<iframe
			src="https://draw-match77-client.vercel.app/"
			title="anythingcart"
			frameborder="0"
			class="aspect-video rounded-3xl border h-[50dvh] w-[70dvw] border-black"
		></iframe>
	</div>
{/if}
{#if projectID === 3}
	<div class="aspect-video border rounded-3xl h-[50dvh] overflow-hidden w-[70dvw] border-black">
		<iframe
			src="https://supportify-svelte.vercel.app/"
			title="anythingcart"
			frameborder="0"
			class="aspect-video rounded-3xl border h-[50dvh] w-[70dvw] border-black overflow-hidden"
		></iframe>
	</div>
{/if}
{#if projectID === 4}
	<div class="aspect-video border rounded-3xl h-[50dvh] overflow-hidden w-[70dvw] border-black">
		<iframe
			src="https://anything-cart.vercel.app/"
			title="anythingcart"
			frameborder="0"
			class="aspect-video rounded-3xl border h-[50dvh] w-[70dvw] border-black"
		></iframe>
	</div>
{/if}
