<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/works/githubrepos.json');
		const repos = await res.json();

		if (res.ok) return { props: { repos } };
		return { status: res.status, error: new Error('Something went wrong..') };
	}
</script>

<script>
	import { publishedWorks } from '$lib/config/publishedWorks';

	import WorksCard from '$lib/components/WorksCard.svelte';

	export let repos = [];
	$: console.log(repos);
</script>

<svelte:head>
	<title>Ryan Cederoth | Works</title>
</svelte:head>

<section class="in-center">
	<h1>Published Works</h1>
	<div class="cards-cont in-center">
		{#if publishedWorks.length}
			{#each publishedWorks as work}
				<WorksCard {...work} />
			{/each}
		{:else}
			<i class="placeholder-message">Working on it!!</i>
		{/if}
	</div>
	<h1>Github Repos</h1>
	<div class="cards-cont in-center">
		{#if repos.length}
			{#each repos as repo}
				<WorksCard {...repo} />
			{/each}
		{:else}
			<i class="placeholder-message">Working on it!!</i>
		{/if}
	</div>
</section>

<style>
	section {
		width: 60rem;
		max-width: 85%;
		color: var(--txt-main);
	}

	h1 {
		width: 100%;
		margin-bottom: 1em;
		padding: 0.6em 2em;
		border-bottom: 1px solid var(--accnt-gold);
		border-bottom-left-radius: 0.5em;
		font-size: 2rem;
	}

	i {
		color: var(--txt-fade);
	}

	.cards-cont {
		width: 100%;
		flex-flow: row wrap;
		justify-content: space-around;
		gap: 2em;
	}
</style>
