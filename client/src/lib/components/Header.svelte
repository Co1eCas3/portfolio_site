<script>
	import { onMount } from 'svelte';
	import Nav from './Nav.svelte';

	let cont;
	let mobileSized;
	let loaded = false;

	let ro;

	onMount(() => {
		ro = new ResizeObserver((els) => {
			mobileSized = els[0].contentRect.width < 700;
		});
		ro.observe(cont);

		loaded = true;
	});
</script>

<header bind:this={cont} class:loaded>
	<div id="logo" />
	<Nav {mobileSized} />
</header>

<style>
	header {
		position: fixed;
		top: -100%;
		z-index: 999;
		width: 100%;
		max-width: 90rem;
		height: var(--header-height);
		padding: 0 1.5rem;
		border-bottom: 1px solid black;
		background: var(--bg-main);
		box-shadow: 0 8px 6px -6px black;
		display: flex;
		justify-content: space-between;
		transition: top 1s ease-out;
	}

	.loaded {
		top: 0;
	}
</style>
