<script>
	import { onMount } from 'svelte';

	import HeroLogo from '$lib/components/HeroLogo.svelte';
	import StatementCarousel from '$lib/components/StatementCarousel.svelte';
	import CallToAction from '$lib/components/CallToAction.svelte';

	let scrollY;

	onMount(() => (scrollY = 0));
</script>

<svelte:head>
	<title>Ryan Cederoth | Home Page</title>
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
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
</style>
