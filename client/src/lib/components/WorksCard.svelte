<script>
	export let name;
	export let url;
	export let description;

	const randomColor = () => ['red', 'green', 'blue'][Math.floor(Math.random() * 3)];
</script>

<div class="cont in-center">
	<a target="_blank" href={url} class="in-center">
		<div class={`front in-center ${randomColor()}`}>
			<div class="border in-center">
				<h1 class="name">{name}</h1>
			</div>
		</div>
		<div class={`back in-center ${randomColor()}`}>
			<div class="border in-center">
				<p class="description">{description}</p>
			</div>
		</div>
	</a>
</div>

<style>
	.cont {
		position: relative;
		max-width: 50%;
		min-width: 20em;
		height: 6em;
		perspective: 200px;
		transform-style: preserve-3d;
	}

	a {
		width: 100%;
		height: 100%;
		color: var(--txt-main);
		perspective: 200px;
		transform-style: preserve-3d;
		transform: rotateX(0);
		transition: transform 0.4s ease-out;
	}

	.red {
		background: linear-gradient(
			0,
			var(--card-red) 0%,
			rgba(89, 120, 129, 0) 50%,
			var(--card-red) 100%
		);
	}

	.blue {
		background: linear-gradient(
			0,
			var(--card-blue) 0%,
			rgba(89, 120, 129, 0) 50%,
			var(--card-blue) 100%
		);
	}

	.green {
		background: linear-gradient(
			0,
			var(--card-green) 0%,
			rgba(89, 120, 129, 0) 50%,
			var(--card-green) 100%
		);
	}

	.front,
	.back {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		text-align: center;
		backface-visibility: hidden;
		perspective: 200px;
		transform-style: preserve-3d;
	}

	.back {
		transform: rotateX(0.5turn);
	}

	.border {
		width: 80%;
		height: 80%;
		border: 1px solid var(--txt-fade);
		transform: translateZ(20px);
		backface-visibility: hidden;
	}

	.border * {
		transform: translateZ(20px);
		backface-visibility: hidden;
	}

	.cont:hover a {
		transform: rotateX(0.5turn);
	}
</style>
