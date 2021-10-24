<script>
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';

	let submittedSuccessfully = false;

	const { form, errors, handleChange, isValid, isValidating, handleSubmit } = createForm({
		initialValues: {
			fromName: '',
			fromEmail: '',
			fromCompany: '',
			contactMessage: ''
		},
		validationSchema: yup.object().shape({
			fromName: yup.string().required(),
			fromEmail: yup.string().email().required(),
			fromCompany: yup.string(),
			contactMessage: yup.string().required()
		}),
		onSubmit: async (values, errors) => {
			const res = await fetch(
				'https://314pgp2t9a.execute-api.us-east-1.amazonaws.com/testing/contact',
				{
					method: 'POST',
					mode: 'no-cors',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(values)
				}
			);
			const data = await res.json();

			if (!res.ok) {
				errors = { ...errors, form: data.message };
			} else {
				submittedSuccessfully = true;
			}
		}
	});
</script>

<svelte:head>
	<title>Ryan Cederoth | Contact</title>
</svelte:head>

<section class="in-center">
	{#if !submittedSuccessfully}
		<h1>Let's talk!</h1>

		<form class="in-center" on:submit={handleSubmit}>
			<div>
				<input
					type="text"
					id="fromName"
					placeholder="Name"
					bind:value={$form.fromName}
					on:change={handleChange}
					on:blur={handleChange}
				/>
				{#if $errors.fromName}
					<small>Please let me know who I'm speaking with</small>
				{/if}
			</div>
			<div>
				<input
					type="text"
					id="fromEmail"
					placeholder="Email"
					bind:value={$form.fromEmail}
					on:change={handleChange}
					on:blur={handleChange}
				/>
				{#if $errors.fromEmail}
					<small>Doesn't look like I'll be able to resond to that address...</small>
				{/if}
			</div>
			<div>
				<input
					type="text"
					id="fromCompany"
					placeholder="Company"
					bind:value={$form.fromCompany}
					on:change={handleChange}
					on:blur={handleChange}
				/>
			</div>
			<div>
				<textarea
					id="contactMessage"
					cols="30"
					rows="6"
					placeholder="What do you think of my site?"
					bind:value={$form.contactMessage}
					on:change={handleChange}
					on:blur={handleChange}
				/>
				{#if $errors.contactMessage}
					<small>It'd be nice to know a little bit about why you want to talk to me please</small>
				{/if}
			</div>
			<!-- class:loader={$isValidating} -->
			<button type="submit" disabled={!$isValid}>SEND MESSAGE</button>
			{#if $errors.form}
				<small>Oops! Something happened in transit.. Try again?</small>
			{/if}
		</form>
	{:else}
		<div class="success-message in-center">
			<h1>Thanks for messaging me!</h1>
			<h3>I'll be in touch ASAP!</h3>
		</div>
	{/if}
</section>

<style>
	section {
		width: 100%;
		padding: 3rem 0;
		color: var(--txt-main);
		font-size: 1.5rem;
	}

	h1 {
		margin-bottom: 0.5em;
		font-family: var(--font-accent);
		font-size: 2em;
	}

	form {
		width: 40rem;
		max-width: 85%;
		padding: 1em 2em;
		border-radius: 1.2em;
		background: var(--bg-darken);
	}

	form > * {
		position: relative;
		width: 100%;
		margin-bottom: 1.2em;
	}

	input,
	textarea,
	button {
		width: 100%;
		padding: 0.5em;
		background: transparent;
		border-style: none;
		border-bottom: 1px solid var(--txt-fade);
		border-radius: 0.4em;
		font-size: 1em;
		color: var(--txt-main);
	}

	input {
		font-family: monospace;
	}

	input:focus-visible {
		outline: var(--accnt-gold) 1px solid;
	}

	button {
		position: relative;
		width: max-content;
		padding: 0.4em 0.6em;
		border-radius: 0;
		background: var(--card-red);
		font-size: 1.2em;
	}

	small {
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		font-size: 0.58em;
		color: var(--card-red);
	}

	.success-message {
		align-self: center;
		width: 40rem;
		max-width: 85%;
		height: 15rem;
		background: var(--card-green);
		border-radius: 1.2em;
	}

	/* .success-message * {
		font-size: 2rem;
	} */

	.success-message h1 {
		font-size: 3rem;
		font-family: var(--font-accent);
	}

	.success-message h3 {
		color: var(--txt-fade);
	}
</style>
