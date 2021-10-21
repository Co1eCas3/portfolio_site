<script>
	import { onMount } from 'svelte';

	import HeroLogo from '$lib/components/HeroLogo.svelte';
	import StatementCarousel from '$lib/components/StatementCarousel.svelte';
	import CallToAction from '$lib/components/CallToAction.svelte';

	let scrollY;

	onMount(() => (scrollY = 0));
</script>

<svelte:head>
	<title>Homepage for Ryan C</title>
</svelte:head>

<svelte:window bind:scrollY />

<section>
	<HeroLogo />
	<StatementCarousel />
</section>
<CallToAction />

<style>
	section {
		width: 100%;
		max-width: 90rem;
		margin-top: var(--header-height);
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
</style>
