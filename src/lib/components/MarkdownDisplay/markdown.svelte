<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import TableOfContents from '../TableOfContents/table-of-contents.svelte';
	import { createTableOfContents, createCollapsible } from '@melt-ui/svelte';
	import Article from '../ArticleDisplay/article.svelte';
	interface $$props {
		frontmatter: Record<string, string>;
		backHref: string;
	}
	let { frontmatter, backHref } = $props<$$props>();
	const {
		elements: { root, trigger, content },
		states: { open }
	} = createCollapsible({ defaultOpen: true });
	const {
		states: { activeHeadingIdxs, headingsTree }
	} = createTableOfContents({ selector: '#body' });
</script>

<div class="grid grid-flow-row">
	<div data-toc={$open} transition:slide class="grid grid-cols-6 h-full">
		<div
			data-open={$open}
			use:root
			{...$root}
			class="max-xl:hidden data-[open=true]:col-start-1 data-[open=true]:col-end-2 grid grid-flow-row py-14"
		>
			<!-- ToC -->
			{#if $open}
				<div use:content {...$content} class="fixed pr-4">
					<div transition:fly={{ x: -20 }} class="card bg-base-200">
						<h2 class="card-title p-3 text-center font-thin">📑 Table of Contents</h2>
						<span class="divider m-0" />
						<TableOfContents active={activeHeadingIdxs} level={1} tree={$headingsTree} />
					</div>
				</div>
			{/if}
		</div>

		<!-- Article Display -->
		<div
			data-toc={$open}
			class="data-[toc=false]:col-start-2 data-[toc=true]:col-start-2
			
			col-end-6 place-items-center"
		>
			<!-- Controls Display -->
			<div class="py-3 flex gap-3 xl:fixed xl:top-2 xl:right-0 xl:p-8">
				<a class="btn btn-secondary" href={backHref}>👈</a>
				<button class="btn btn-primary max-xl:hidden" use:trigger {...$trigger}>
					<svg fill="white" width={25} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
						><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
							id="SVGRepo_tracerCarrier"
							stroke-linecap="round"
							stroke-linejoin="round"
						></g><g id="SVGRepo_iconCarrier"
							><path
								fill-rule="evenodd"
								d="M7.22 14.47L9.69 12 7.22 9.53a.75.75 0 111.06-1.06l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 01-1.06-1.06z"
							></path><path
								fill-rule="evenodd"
								d="M3.75 2A1.75 1.75 0 002 3.75v16.5c0 .966.784 1.75 1.75 1.75h16.5A1.75 1.75 0 0022 20.25V3.75A1.75 1.75 0 0020.25 2H3.75zM3.5 3.75a.25.25 0 01.25-.25H15v17H3.75a.25.25 0 01-.25-.25V3.75zm13 16.75v-17h3.75a.25.25 0 01.25.25v16.5a.25.25 0 01-.25.25H16.5z"
							></path></g
						></svg
					>
				</button>
			</div>
			<Article {frontmatter}>
				<slot />
			</Article>
		</div>
	</div>
	<!-- Spacer -->
	<div class="py-16"></div>
</div>

<style>
	h3 {
		@apply text-transparent bg-clip-text bg-gradient-to-r from-[#ff0f7b] to-[#f89b29];
	}
</style>
