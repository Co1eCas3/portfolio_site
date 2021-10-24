<script>
	import { onMount } from 'svelte';

	let cont, io;

	$: cardData = [
		{
			href: '/resume/view',
			display: 'VIEW RESUME',
			applyShowClass: false,
			el: null
		},
		{
			href: '/works',
			display: 'WORKS GALLERY',
			applyShowClass: false,
			el: null
		},
		{
			href: '/contact',
			display: 'CONTACT ME',
			applyShowClass: false,
			el: null
		}
	];
	onMount(() => {
		cardData = cardData.map((card, _, cards) => {
			const cb = (entries) => flipCard.call(card, entries[0], cards);
			card.io = new IntersectionObserver(cb);
			card.io.observe(card.el);
			return card;
		});
	});

	function flipCard(entry, cards) {
		if (entry.intersectionRatio >= 0.9) {
			this.applyShowClass = true;
			cardData = cards;
		}
	}
</script>

<section class="in-center" bind:this={cont}>
	{#each cardData as card}
		<div bind:this={card.el} class="card in-center" class:show={card.applyShowClass}>
			<div class="border in-center"><a href={card.href}>{card.display}</a></div>
		</div>
	{/each}
</section>

<style>
	section {
		width: 100%;
		max-width: 90rem;
		min-height: var(--main-height);
		background: var(--bg-main);
		align-content: center;
		transform-style: preserve-3d;
	}

	.card {
		width: 80%;
		max-width: 18em;
		height: calc(var(--main-height) / 4);
		max-height: 12em;
		margin: 1rem;
		color: var(--txt-main);
		text-align: center;
		perspective: 150px;
		transform-style: preserve-3d;
		transform-origin: bottom;
		transform: rotateX(0.25turn);
		transition: transform 1s ease-out;
	}

	.card:first-of-type {
		background: linear-gradient(
			0,
			var(--card-blue) 0%,
			rgba(89, 120, 129, 0) 50%,
			var(--card-blue) 100%
		);
	}

	.card:nth-of-type(2) {
		background: linear-gradient(
			0,
			var(--card-red) 0%,
			rgba(89, 120, 129, 0) 50%,
			var(--card-red) 100%
		);
	}

	.card:nth-of-type(3) {
		background: linear-gradient(
			0,
			var(--card-green) 0%,
			rgba(89, 120, 129, 0) 50%,
			var(--card-green) 100%
		);
	}

	.border {
		width: 80%;
		height: 75%;
		border: 2px solid var(--txt-fade);
		transform: translateZ(20px);
		perspective: 150px;
		transform-style: preserve-3d;
	}

	a {
		color: var(--txt-main);
		transform: translateZ(40px);
		font-size: 0.8em;
	}

	.show {
		transform: rotateX(0);
	}

	@media screen and (min-width: 700px) {
		section {
			flex-flow: row wrap;
		}

		.card {
			flex-basis: 50%;
			font-size: 1.5em;
		}

		.card:last-of-type {
			max-width: 37em;
			flex-basis: 100%;
		}
	}
</style>
