<script lang="ts">
	import { slide } from 'svelte/transition';
	import TableOfContents from '../TableOfContents/table-of-contents.svelte';
	import { createTableOfContents } from '@melt-ui/svelte';
	import Seo from '../SEO/seo.svelte';
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	interface $$props {
		frontmatter: Record<string, string>;
		backHref: string;
	}
	let { frontmatter, backHref } = $props<$$props>();

	const {
		states: { activeHeadingIdxs, headingsTree }
	} = createTableOfContents({ selector: '#body' });

	let tags = $derived(frontmatter.keywords.split(', '));
</script>

<Seo
	title={frontmatter.title ?? 'No Title'}
	description={frontmatter.description ?? 'No Description'}
	coverImage={frontmatter.coverImage ?? ''}
	keywords={frontmatter.keywords ?? 'No Keywords'}
	author={frontmatter.author ?? 'theofficialurban'}
	url={$page.url.href}
	{base}
/>

<div class="grid grid-flow-row">
	<div transition:slide class="xl:grid xl:grid-cols-4 h-full">
		<a class="xl:hidden py-2 btn btn-sm" href={backHref}>👈 Go Back</a>
		<div class="max-xl:hidden xl:fixed xl:col-start-1 xl:col-end-2 top-20 grid grid-flow-row">
			<span class="py-10"><a class="btn btn-sm btn-info fixed" href={backHref}>👈 Go Back</a></span>
			<TableOfContents active={activeHeadingIdxs} level={1} tree={$headingsTree} />
		</div>
		<div class="xl:col-start-2 xl:col-end-5 card bg-base-200 min-w-fit prose rounded-2xl z-10">
			{#if frontmatter.coverImage}
				<figure>
					<img class="w-full" src={frontmatter.coverImage} alt="Shoes" />
				</figure>
			{/if}

			<div class="card-body" id="body">
				<div class="py-3">
					<span class="card-title flex text-5xl">{frontmatter.title ?? 'No Title'}</span>
					<sub class="text-white text-lg pl-4">
						Written By: {frontmatter.author ?? 'theofficialurban'}</sub
					>
					<br />
					<sub class="text-white text-lg pl-4 inline-flex">
						<span class="pr-2">Keywords:</span>
						{#each tags as tag}
							<div class="p-1">
								<span class="p-1 bg-magnum-200 text-magnum-900 rounded-lg bordered text-sm"
									>{tag}</span
								>
							</div>
						{/each}
					</sub>
				</div>
				<slot />
			</div>
		</div>
	</div>
	<div class="py-16"></div>
</div>

<style>
	.card-title {
		@apply text-transparent bg-clip-text bg-gradient-to-r from-[#0061ff] to-[#60efff];
	}
	h3 {
		@apply text-transparent bg-clip-text bg-gradient-to-r from-[#ff0f7b] to-[#f89b29];
	}
</style>
