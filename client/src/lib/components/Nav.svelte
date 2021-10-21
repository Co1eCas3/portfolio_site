<script>
	import { fly } from 'svelte/transition';
	import { sineOut } from 'svelte/easing';

	import { navBarConfig } from '../config/navBarConfig.js';
	import NavLink from './NavLink.svelte';

	export let mobileSized;

	$: isMobileAndOpen = mobileSized ? false : true;
	$: hamburgerTransDelay = !isMobileAndOpen ? navBarConfig.length * 0.1 : 0;
</script>

<nav class:isMobileAndOpen>
	{#if mobileSized}
		<div
			id="hamburger-cont"
			class:isMobileAndOpen
			style={`transition-delay: ${hamburgerTransDelay}s`}
			on:click={() => (isMobileAndOpen = !isMobileAndOpen)}
		>
			<div id="hamburger" />
		</div>
	{/if}
	{#if isMobileAndOpen}
		<ul>
			{#each navBarConfig.sort((a, b) => a.order - b.order) as link}
				<NavLink {...link} />
			{/each}
		</ul>
	{/if}
</nav>

<style>
	nav {
		height: var(--header-height);
	}

	#hamburger-cont {
		width: var(--header-height);
		height: 100%;
		display: flex;
		flex-flow: column;
		justify-content: center;
		transition-property: margin-left;
		transition-duration: 0.3s;
		transition-timing-function: ease-out;
	}

	#hamburger {
		position: relative;
		right: 0;
		width: 70%;
		height: 50%;
		margin: 0 auto;
	}

	#hamburger::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: calc(50% - 1px);
		border-top: 1px solid var(--txt-fade);
		border-bottom: 1px solid var(--txt-fade);
		transform-origin: top left;
		transform: rotate(0);
		transition-property: transform border-bottom-color;
		transition-duration: 0.4s;
		transition-timing-function: ease-out;
		transition-delay: 0s;
	}

	#hamburger::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		border-bottom: 1px solid var(--txt-fade);
		transform-origin: bottom left;
		transform: rotate(0);
		transition-property: transform;
		transition-duration: 0.4s;
		transition-timing-function: ease-out;
		transition-delay: 0s;
	}

	.isMobileAndOpen #hamburger::before {
		border-bottom-color: transparent;
		transform: rotate(45deg);
	}

	.isMobileAndOpen #hamburger::after {
		transform: rotate(-45deg);
	}

	ul {
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
	}

	@media screen and (min-width: 700px) {
		nav {
			width: max-content;
		}

		ul {
			position: initial;
			width: max-content;
			justify-self: flex-end;
			display: flex;
			justify-content: flex-end;
		}
	}
</style>
