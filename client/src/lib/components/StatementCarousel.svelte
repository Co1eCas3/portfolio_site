<script>
	import { onMount, onDestroy } from 'svelte';
	import * as animateScroll from 'svelte-scrollto';

	import { statementNodes } from '../config/statementNodes.js';

	let cont, mainCont, headerHeight, winHeight, nodes, scrollHandler, scrollPos;

	let scrollTimeout,
		nextNode = 0;

	let hook, ro;

	onMount(() => {
		mainCont = document.querySelector('#svelte');
		const header = document.querySelector('header');
		headerHeight = header.clientHeight;

		nodes = [...cont.querySelectorAll('.node')];

		scrollHandler = () => nodes.forEach(editNodeRotation);
		scrollHandler();
		scrollTimeout = setTimeout(scrollFirstNode, 2000);

		createHookIO();
	});

	function editNodeRotation(node) {
		const { height: nodeHeight, bottom: nodeBottom } = node.getBoundingClientRect();

		if (nodeBottom > winHeight + nodeHeight || nodeBottom < headerHeight) return;

		const percentThruWindow = 1 - nodeBottom / (winHeight + nodeHeight);
		const headerAdjustment = percentThruWindow * (headerHeight / (winHeight + nodeHeight));
		const percentThruView = percentThruWindow + headerAdjustment;

		// bubble out = transform: rotateX(${(percentThruView * .5) - .25}turn);
		node.style = `
			transform-origin: 50% ${percentThruView * 100}%;
			perspective-origin: 50% ${percentThruView * 100}%;
			transform: rotateX(${-percentThruView * 0.5 + 0.25}turn);
		`;
	}

	function scrollFirstNode() {
		const winMid = winHeight / 2;
		const midWHeaderOffset = winMid + winMid * (headerHeight / winHeight);

		const { width: nodeHeight } = nodes[0].getBoundingClientRect();
		const nodeMid = nodeHeight / 2;

		const scrollOffset = midWHeaderOffset - nodeMid;

		animateScroll.scrollTo({
			element: `#node-0`,
			offset: -scrollOffset,
			duration: 800
		});
	}

	function createHookIO() {
		ro = new IntersectionObserver((entries) =>
			entries[0].isIntersecting
				? (entries[0].target.style.opacity = '1')
				: (entries[0].target.style.opacity = '0')
		);

		ro.observe(hook);
	}
</script>

<svelte:window
	bind:innerHeight={winHeight}
	bind:scrollY={scrollPos}
	on:scroll={scrollHandler}
	on:mousewheel={() => clearTimeout(scrollTimeout)}
/>

<section>
	<div class="track" bind:this={cont}>
		<div class="spacer init" />
		{#each statementNodes as node, i}
			<section class="node" id={`node-${i}`}>
				<div class="dot" />
				<p class="caption" data-caption={node}>{node}</p>
			</section>
			<div class="spacer" />
		{/each}
	</div>
</section>
<div class="hook" bind:this={hook}>
	<div class="hook-cont">
		<p class="line1">If you wan'na be a rockstar</p>
		<p class="line2">then be a rockstar</p>
		<p class="line3">'cause doctors don't</p>
		<p class="line4">sell platinum albums</p>
	</div>
</div>

<style>
	section {
		width: 100%;
		background: var(--bg-main);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.track {
		width: 60px;
		background: var(--bg-main);
		color: var(--txt-main);
		display: flex;
		flex-flow: column;
		place-items: center;
	}

	.spacer {
		width: 100%;
		height: calc(calc(var(--main-height) * 0.5) - 50px);
	}

	.spacer.init {
		height: var(--main-height);
	}

	.node {
		position: relative;
		z-index: 2;
		width: 100px;
		height: 100px;
		font-size: 1.2em;
		display: flex;
		flex-flow: column;
		justify-content: center;
		place-items: center;
		perspective: 200px;
		transform-style: preserve-3d;
		transform-origin: 50% 0;
		perspective-origin: 50% 0;
		transform: rotateX(0.25turn);
	}

	.dot {
		width: 6em;
		aspect-ratio: 1;
		border-radius: 50%;
		background: var(--accnt-gold);
		transform: translateZ(2em);
	}

	.caption {
		position: absolute;
		width: 9em;
		font-family: var(--font-main);
		text-align: right;
		transform: translateZ(4em);
		perspective: 250px;
		transform-style: preserve-3d;
	}

	.caption::before {
		content: attr(data-caption);
		position: absolute;
		top: 3em;
		left: -2em;
		width: 100%;
		color: transparent;
		text-align: right;
		text-shadow: 0 0 4px rgba(220, 220, 220, 0.2);
		transform: translateZ(-20px);
	}

	.hook {
		width: 100vw;
		height: calc(100vh - var(--header-height));
		font-size: 1.5em;
		color: var(--txt-main);
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;
	}

	.hook-cont {
		position: fixed;
		top: 40%;
		z-index: -1;
		padding: 1em;
		width: max-content;
		background: black;
		transform: translateZ(300px);
	}

	.hook-cont p {
		position: relative;
		width: max-content;
		margin-bottom: 0.2em;
	}

	.hook p:first-of-type::before,
	.hook p:last-of-type::after {
		content: '"';
		position: absolute;
		top: -20px;
		left: -5%;
		z-index: -1;
		font-size: 3em;
		color: var(--txt-fade);
	}

	.hook p:last-of-type::after {
		top: -35px;
		left: 95%;
		transform: rotate(0.5turn);
	}

	.hook p:nth-child(even) {
		left: 2.3em;
	}

	.hook p:nth-child(3) {
		left: 0.9em;
	}

	@media screen and (min-width: 700px) {
		.spacer {
			height: calc(calc(var(--main-height) * 0.5) - 65px);
		}

		.node {
			width: 130px;
			height: 130px;
			font-size: 1.4rem;
		}

		.caption {
			width: 12em;
			transform: translateX(5vw) translateZ(4em);
		}

		.hook {
			font-size: 2em;
		}
	}
</style>
