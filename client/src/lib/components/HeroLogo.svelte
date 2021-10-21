<script>
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';

	const myName = [[...'Ryan'], [...'Cederoth']];

	let mounted = false;

	onMount(() => setTimeout(() => (mounted = true), 500));
</script>

<div>
	{#if mounted}
		{#each myName as namePart, i}
			<p transition:blur={{ duration: 1000, delay: 500 }}>
				{#each namePart as letter, j}
					<span transition:blur={{ delay: j / 10 }}>{letter}</span>
				{/each}
			</p>
		{/each}
	{/if}
	<aside class="accent" />
</div>

<style>
	div {
		position: sticky;
		top: var(--header-height);
		z-index: 10;
		width: 100%;
		background: linear-gradient(180deg, rgba(11, 17, 25, 1) 50%, rgba(255, 255, 255, 0) 100%);
		color: var(--txt-main);
		font-size: 3.6rem;
		letter-spacing: 0.12em;
		font-family: var(--font-accent);
		text-shadow: 2px 4px 6px var(--accnt-gold);
		display: flex;
		flex-flow: column;
		justify-content: center;
		place-items: center;
		transition: letter-spacing 0.8s ease-out;
	}

	p {
		width: max-content;
	}

	p:last-of-type {
		position: relative;
		top: -1.2em;
		left: 0.1em;
	}

	span {
		position: relative;
	}

	span:first-child {
		font-size: 1.4em;
	}

	p:last-of-type > span:first-child {
		position: relative;
		top: 0.24em;
		left: 0.05em;
	}

	.accent {
		position: absolute;
		bottom: 10%;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 40%;
		background: radial-gradient(rgba(220, 220, 220, 0.2) 0%, rgba(11, 17, 25, 0) 60%);
	}

	@media screen and (min-width: 700px) {
		div {
			margin: 0 15%;
			font-size: 5rem;
			display: block;
		}
	}
</style>
