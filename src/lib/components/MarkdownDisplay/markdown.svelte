<script lang="ts">
	import { slide } from 'svelte/transition';
	import Seo from '../SEO/seo.svelte';
	import TableOfContents from '../TableOfContents/table-of-contents.svelte';
	import { createTableOfContents } from '@melt-ui/svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import type Metadata from '$lib/types/Metadata';
	const metadata = getContext<Writable<Metadata>>('metadata');

	interface $$props {
		title: string;
		coverImage: string;
		url: URL;
		description: string;
		author: string;
		base: string;
		keywords: string;
	}
	let { title, base, coverImage, url, description, author, keywords } = $props<$$props>();
	$metadata = {
		title,
		coverImage,
		url,
		description,
		keywords,
		base,
		author
	};
	const {
		elements: { item },
		states: { activeHeadingIdxs, headingsTree }
	} = createTableOfContents({ selector: '#body' });
</script>

<div class="grid grid-flow-row">
	{#key title}
		<div transition:slide class="xl:grid xl:grid-cols-4 h-full">
			<a class="xl:hidden py-2 btn btn-sm" href="/docs">👈 Go Back</a>
			<div class="max-xl:hidden xl:fixed xl:col-start-1 xl:col-end-2 top-20 grid grid-flow-row">
				<span class="py-10"><a class="btn btn-sm btn-info fixed" href="/docs">👈 Go Back</a></span>
				<TableOfContents active={activeHeadingIdxs} level={1} tree={$headingsTree} />
			</div>
			<div class="xl:col-start-2 xl:col-end-5 card bg-base-200 min-w-fit prose rounded-2xl z-10">
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
