<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import About from '$lib/components/About.svelte';
	import Projects from '$lib/components/Projects.svelte';
	export let data;
</script>

<NavBar />
<About />
<Projects {data} />
