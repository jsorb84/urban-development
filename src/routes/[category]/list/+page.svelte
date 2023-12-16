<script lang="ts">
	import PostListing from '$lib/components/PostListing/post-listing.svelte';
	import Appwrite from '$lib/utilities/Appwrite.svelte';
	import { page } from '$app/stores';
	import type { LayoutData } from '../$types';
	import { beforeNavigate, pushState } from '$app/navigation';
	let { data } = $props<{ data: LayoutData }>();
	const client = new Appwrite();
	$effect(() => {
		client.loadFiles($page.data.category.slug);
	});
	let loading = $derived(client.loading);
	let files = $derived(client.pages);
	beforeNavigate((n) => {
		const fromUrl = n.from?.url.href;
		const toUrl = n.to?.url.pathname;
		if (fromUrl && toUrl) {
			console.log(toUrl);
			pushState(toUrl, { previousUrl: fromUrl });
		}
	});
</script>

{#if !loading && files}
	<div class="grid grid-flow-row gap-4">
		{#each files.files as file}
			<PostListing {file} />
		{/each}
	</div>
{:else}
	<span class="loading loading-bars loading-lg mx-auto" />
{/if}
