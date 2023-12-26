<script lang="ts">
	import type SvelteWrite from '$lib/utilities/SvelteWrite.svelte';
	import { Bucket } from '$lib/utilities/SvelteWrite.svelte';

	interface $$props {
		sveltewrite: SvelteWrite;
		bucketId: string;
		queries?: string[];
	}
	let { sveltewrite, bucketId, queries } = $props<$$props>();

	const bucket = new Bucket(sveltewrite, bucketId, queries);
</script>

{#if bucket.total > 0}
	<slot {bucket} />
{:else}
	<slot name="loading">
		<span class="loading loading-spinner w-[200px]" />
	</slot>
{/if}
