<script lang="ts">
	import PostListing from '$lib/components/PostListing/post-listing.svelte';
	import { has } from 'lodash-es';
	const imports = import.meta.glob('/src/routes/pages/**/*.md', { eager: true });
	const importEntries: [string, { default: unknown; metadata: Record<string, string> }][] =
		Object.entries(imports) as [string, { default: unknown; metadata: Record<string, string> }][];
</script>

<div class="grid grid-flow-row gap-3">
	{#each importEntries as [name, entry]}
		{#if has(entry, 'metadata')}
			<PostListing post={[name, entry]} />
		{/if}
	{/each}
</div>
