<script>
	import { page } from '$app/stores';
	import { fly, fade } from 'svelte/transition';
	import { sineOut } from 'svelte/easing';

	export let href;
	export let title;
	export let order;
	export let expandOnMobile = false;
	export let next = null;

	next = next && next.map((link) => ({ ...link, href: href + link.href }));

	let linkWidth;
	let expandNext = false;

	const expandSubMenu = () => (expandNext = !expandNext);
</script>

<li
	bind:clientWidth={linkWidth}
	transition:fly={{ x: linkWidth, duration: 150, delay: order * 100, easing: sineOut }}
	on:mouseenter={expandSubMenu}
	on:mouseleave={expandSubMenu}
>
	<a {href} class:isCurrent={$page.path === href || (href !== '/' && $page.path.startsWith(href))}
		>{title}</a
	>
	{#if next && expandNext}
		<ul transition:fade={{ duration: 300 }}>
			{#each next.sort((a, b) => a.order - b.order) as link}
				<svelte:self {...link} />
			{/each}
		</ul>
	{/if}
</li>

<style>
	li {
		position: relative;
		width: 100%;
		padding-left: 1rem;
		/* background: linear-gradient(-90deg, rgba(255, 255, 255, 0) 0%, var(--bg-darken) 15%); */
		background: var(--bg-dark);
		font-size: 1.7rem;
		display: flex;
		flex-flow: column;
		justify-content: center;
	}

	a {
		height: var(--header-height);
		border-bottom: 1px solid var(--txt-fade);
		display: flex;
		flex-flow: column;
		justify-content: center;
	}

	.isCurrent {
		color: var(--txt-main);
	}

	@media screen and (min-width: 700px) {
		li {
			width: auto;
			padding: 0 1rem;
			background: none;
		}

		a {
			border-bottom: none;
		}

		a:hover {
			border-bottom: 1px solid var(--txt-fade);
		}

		ul {
			position: absolute;
			top: 100%;
			right: 0;
			max-width: calc(100% + (100% * 0.4));
			min-width: calc(100% + (100% * 0.12));
			background: var(--bg-darken);
		}
	}
</style>
