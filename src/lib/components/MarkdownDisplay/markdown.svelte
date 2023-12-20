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
	} = createCollapsible();
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
			class="max-xl:hidden data-[open=true]:col-start-1 data-[open=true]:col-end-2 grid grid-flow-row py-6"
		>
			<!-- ToC -->
			{#if $open}
				<div use:content {...$content} class="fixed pr-4">
					<div transition:fly={{ x: -20 }}>
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
			<div class="py-3">
				<button class=" btn btn-sm" use:trigger {...$trigger}> 📑 Table of Contents </button>
				<a class="py-2 btn btn-sm" href={backHref}>👈 Go Back</a>
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
