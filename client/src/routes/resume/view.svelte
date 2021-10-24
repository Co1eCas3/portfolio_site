<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';

	import DownloadedResumeModal from '$lib/components/DownloadedResumeModal.svelte';

	let downloadLink;
	$: autoDownload = $page.query.get('download') || false;
	$: downloaded = autoDownload;
	$: modalOpen = downloaded;

	onMount(() => autoDownload && downloadLink.click());
</script>

<svelte:head>
	<title>Ryan Cederoth | Resume</title>
</svelte:head>

<section class="in-center" transition:blur>
	<div class="in-center">
		<a
			bind:this={downloadLink}
			on:click={() => !downloaded && (downloaded = true)}
			href="https://docs.google.com/uc?id=1mbfgbmWZLd2XVrBj3j9yt9nSfkR-CpqT&export=download"
			>DOWNLOAD</a
		>
	</div>
	<iframe
		title="Ryan C Resume"
		src="https://docs.google.com/document/d/e/2PACX-1vRP5PY3dSYDg93BFvc0FBp2LVFO3_5lTFn9wQ0Xy4yiw3ZCM37Vgt5VV5XjwiYo-A/pub?embedded=true"
	/>
</section>

{#if modalOpen}
	<DownloadedResumeModal on:closemodal={() => (modalOpen = false)} />
{/if}

<style>
	section {
		width: 100%;
		max-width: 90rem;
		min-height: var(--main-height);
	}

	div {
		width: max-content;
		color: var(--txt-fade);
		font-size: 3rem;
		text-align: center;
	}

	a {
		margin: 1em;
		padding: 0.2em 0.5em;
		background: var(--card-red);
	}

	iframe {
		width: 85%;
		max-width: 8.5in;
		height: 11in;
	}
</style>
