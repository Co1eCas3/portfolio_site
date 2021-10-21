<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
</script>

<main>
	<Header />

	<slot />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		place-items: center;
	}
</style>
