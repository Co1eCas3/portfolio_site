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
	<div id="logo" class="in-center">
		<a href="/">
			<div class="in-center">
				<span>R</span>C
			</div>
		</a>
	</div>
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

	#logo {
		width: calc(var(--header-height) + 1.5em);
		aspect-ratio: 1;
		font-size: 3rem;
		font-family: var(--font-accent);
		color: var(--txt-main);
	}

	#logo div {
		width: 6rem;
		height: 6rem;
		letter-spacing: 0;
		flex-flow: row;
		border: 2px solid var(--card-blue);
		border-radius: 50%;
	}

	#logo span {
		position: relative;
		left: 6px;
		color: var(--accnt-gold);
		transform: scale(1.2) rotateY(0.5turn);
	}
</style>
