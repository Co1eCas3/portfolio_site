<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
</script>

<main class="in-center">
	<Header />

	<slot />
</main>

<style>
	main {
		padding-top: var(--header-height);
	}
</style>
