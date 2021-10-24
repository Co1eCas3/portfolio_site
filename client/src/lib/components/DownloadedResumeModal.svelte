<script>
	import { createEventDispatcher } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	const dispatch = createEventDispatcher();

	const closeModalHandler = () => dispatch('closemodal');
</script>

<div class="cont in-center" transition:fade>
	<div class="modal in-center" transition:fly={{ y: -300 }}>
		<div on:click={closeModalHandler} class="close">X</div>
		<h3>Thanks for checking out my resume!</h3>
		<p>I'd love to hear from you!</p>
		<a href="/contact">GO TO CONTACT PAGE</a>
	</div>
</div>

<style>
	.cont {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 999;
		width: 100vw;
		height: 100vh;
		padding: 1.5rem;
		background: var(--bg-darken);
		font-size: 2rem;
		text-align: center;
	}

	.modal {
		width: 85%;
		max-width: 50rem;
		height: max-content;
		padding: 2em;
		background: var(--card-green);
		border-radius: 0.8rem;
	}

	.modal *:not(a) {
		margin-bottom: 1.2em;
	}

	.modal *:nth-child(odd) {
		color: var(--txt-fade);
	}

	.modal *:nth-child(even) {
		color: var(--txt-main);
	}

	.close {
		position: relative;
		top: -1em;
		left: 1em;
		width: 100%;
		text-align: right;
		cursor: pointer;
	}

	.modal a {
		padding: 0.2em 0.6em;
		background: var(--card-blue);
	}
</style>
