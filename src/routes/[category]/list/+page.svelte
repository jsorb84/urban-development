<script lang="ts">
	import PostListing from '$lib/components/PostListing/post-listing.svelte';
	import { page } from '$app/stores';
	import { beforeNavigate, pushState } from '$app/navigation';
	import Loading from '$lib/components/Loading/loading.svelte';
	import { Modal } from '@theofficialurban/svelte-utils';
	import type { PageData } from './$types';
	let { data } = $props<{ data: PageData }>();
	let filesProm = $state(data.files);
	beforeNavigate((n) => {
		const fromUrl = n.from?.url.href;
		const toUrl = n.to?.url.pathname;
		if (fromUrl && toUrl) {
			pushState(toUrl, { previousUrl: fromUrl });
		}
	});
	$effect(() => {
		filesProm = data.files;
	});
</script>

{#await filesProm}
	<Loading />
{:then files}
	{#if files}
		<div class="grid grid-flow-row gap-4">
			<h1 class="text-6xl text-white">{$page.data.category.name} Articles</h1>
			{#each files.files as file}
				<PostListing {file} />
			{/each}
		</div>
	{:else}
		<Loading />
	{/if}
{/await}
