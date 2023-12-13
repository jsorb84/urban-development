<script lang="ts">
	import { onMount, type PropsWithChildren, type Snippet } from 'svelte';
	import { createTableOfContents } from '@melt-ui/svelte';
	import '../../prism.css';
	import TableOfContents from '$lib/components/TableOfContents/table-of-contents.svelte';
	import { slide } from 'svelte/transition';
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	const {
		elements: { item },
		states: { activeHeadingIdxs, headingsTree }
	} = createTableOfContents({ selector: '#body' });
	interface $$props {
		title: string;
		coverImage: string;
		description?: string;
		keywords?: string;
		author?: string;
		children: Snippet<void>;
		data: unknown;
	}
	let show = $state<boolean>(false);
	onMount(() => (show = true));
	let {
		title,
		coverImage,
		description = 'n/a',
		author = 'theofficialurban',
		keywords = 'n/a',
		children,
		data,
		...restProps
	} = $props<PropsWithChildren<$$props, { children: Snippet<void> }>>();
</script>

<svelte:head>
	<title>{title} | Urban Development™</title>

	<meta charset="UTF-8" />
	<meta property="og:image" content={coverImage} />
	<meta property="og:title" content={`${title} || Urban Development™`} />
	<meta property="og:url" content={`${$page.url}`} />
	<meta name="description" content={description} />
	<meta property="og:description" content={`${description} - By ${author}`} />
	<meta property="og:site_name" content={`Urban Development™`} />
	<meta property="og:type" content="article" />
	<meta property="article:author" content={author} />
	<meta property="article:publisher" content={base} />
	<meta property="article:tag" content={keywords} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content={author} />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div class="grid grid-flow-row">
	{#key title}
		<div transition:slide class="grid grid-flow-col h-full">
			<div class="card bg-base-200 mx-auto min-w-[1200px] prose rounded-2xl z-10">
				{#if coverImage}
					<figure>
						<img class="w-full" src={coverImage} alt="Shoes" />
					</figure>
				{/if}

				<div class="card-body" id="body">
					<div class="py-3">
						<span class="card-title flex text-5xl">
							{title}
						</span>
						<sub class="text-white text-lg pl-4">
							Written By {author}
						</sub>
						<br />
						<sub class="text-white text-lg pl-4">
							Keywords: {keywords}
						</sub>
					</div>
					<slot />
				</div>
			</div>

			<div class="fixed top-20 grid grid-flow-row sm:max-lg:bg-white">
				<span class="py-10"><a class="btn btn-sm btn-info fixed" href="/docs">👈 Go Back</a></span>
				<TableOfContents tree={$headingsTree} />
			</div>
		</div>
		<div class="py-16"></div>
	{/key}
</div>

<style>
	.card-title {
		@apply text-transparent bg-clip-text bg-gradient-to-r from-[#0061ff] to-[#60efff];
	}
	h3 {
		@apply text-transparent bg-clip-text bg-gradient-to-r from-[#ff0f7b] to-[#f89b29];
	}
</style>
