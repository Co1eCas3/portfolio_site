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

	/* header::before,
	header::after {
		z-index: -1;
		position: absolute;
		content: '';
		bottom: 25px;
		left: 10px;
		width: 50%;
		top: 80%;
		max-width: 300px;
		background: #777;
		-webkit-box-shadow: 0 35px 20px #777;
		-moz-box-shadow: 0 35px 20px #777;
		box-shadow: 0 35px 20px #777;
		-webkit-transform: rotate(-8deg);
		-moz-transform: rotate(-8deg);
		-o-transform: rotate(-8deg);
		-ms-transform: rotate(-8deg);
		transform: rotate(-8deg);
	}

	header::after {
		-webkit-transform: rotate(8deg);
		-moz-transform: rotate(8deg);
		-o-transform: rotate(8deg);
		-ms-transform: rotate(8deg);
		transform: rotate(8deg);
		right: 10px;
		left: auto;
	} */
</style>
