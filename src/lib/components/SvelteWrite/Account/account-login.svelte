<script lang="ts">
	import { goto } from '$app/navigation';
	import type SvelteWrite from '$lib/utilities/SvelteWrite.svelte';
	import type { Models } from 'appwrite';

	interface $$props {
		sveltewrite: SvelteWrite;
		redirect?: string;
	}
	let { sveltewrite, redirect = '/' } = $props<$$props>();
	let session = $state<Models.Session | null>(null);

	let email = $state<string>('');
	let password = $state<string>('');
	let error = $state<string>('');
	let loading = $state<boolean>(false);
	const attemptLogin = async () => {
		loading = true;
		try {
			const s = await sveltewrite.account.createEmailSession(email, password);
			session = s;

			goto(redirect);
		} catch (error) {
			console.error(error);
			session = null;
			error = 'Error Logging In Try Again';
			loading = false;
			return null;
		}
	};
</script>

{#if !loading}
	<slot>
		{#if error != ''}
			<div class="alert alert-error">
				{error}
			</div>
		{/if}
		<div class="form-control">
			<label class="label" for="">E-Mail</label>
			<input
				class="input input-bordered"
				bind:value={email}
				placeholder="E-Mail"
				type="email"
				required
			/>
		</div>
		<div class="form-control">
			<label class="label" for="">Password</label>
			<input
				class="input input-bordered"
				bind:value={password}
				placeholder="Password"
				type="password"
				required
			/>
		</div>
		<button class="btn btn-success" onclick={attemptLogin}>Login</button>
		<button class="btn btn-error" onclick={() => sveltewrite.account.deleteSession('current')}
			>Logout</button
		>
	</slot>
{:else}
	<slot name="loading">
		<span class="loading loading-spinner w-[200px]" />
	</slot>
{/if}
