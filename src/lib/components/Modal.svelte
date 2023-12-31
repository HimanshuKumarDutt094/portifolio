<script lang="ts">
	export let modal: HTMLDialogElement;
</script>

<dialog bind:this={modal} on:close class="rounded-3xl border overflow-hidden">
	<slot />
</dialog>

<style>
	dialog::backdrop {
		background-color: hsl(0 0% 0% /40%);
	}
</style>
