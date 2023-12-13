<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import type { Category } from '$lib/categories';
	import PostListing from '$lib/components/PostListing/post-listing.svelte';
	import { has } from 'lodash-es';
	import type { PageData } from './$types';
	interface $$props {
		data: PageData;
	}
	let { data } = $props<$$props>();
	let category = $derived(data.current);
	let entries = data.entries;
</script>

<svelte:head>
	{#key category}
		<title>{category?.name ?? 'Posts'} | Urban Development™</title>

		<meta charset="UTF-8" />
		<meta property="og:title" content={`${category?.name ?? 'Posts'} || Urban Development™`} />
		<meta property="og:url" content={$page.url.toString()} />
		<meta name="description" content={category?.description ?? 'Blog Posts'} />
		<meta property="og:description" content={category?.description ?? 'Blog Posts'} />
		<meta property="og:site_name" content={`Urban Development™`} />
		<meta property="og:type" content="website" />

		<meta name="keywords" content={category?.keywords ?? ''} />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	{/key}
</svelte:head>
{#if category}
	<div class="grid grid-flow-row gap-3">
		{#each entries as [name, entry]}
			{#if has(entry, 'metadata') && entry.metadata.category == category.slug}
				<PostListing post={[name, entry]} />
			{/if}
		{/each}
	</div>
{/if}
