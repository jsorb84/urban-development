<script lang="ts">
	import type SvelteWrite from '$lib/utilities/SvelteWrite.svelte';
	import { Collection } from '$lib/utilities/SvelteWrite.svelte';
	import type { Models } from 'appwrite';
	type T = $$Generic<Models.Document>;
	interface $$props {
		sveltewrite: SvelteWrite;
		dbId: string;
		colId: string;
	}
	let { sveltewrite, dbId, colId } = $props<$$props>();

	const collection = new Collection<T>(sveltewrite, dbId, colId);
</script>

{#if collection.total > 0}
	<slot {collection} />
{:else}
	<slot name="loading">
		<span class="loading loading-spinner w-[200px]" />
	</slot>
{/if}
