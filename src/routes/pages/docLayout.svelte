<script lang="ts">
	import type { PropsWithChildren, Snippet } from 'svelte';
	import { createTableOfContents } from '@melt-ui/svelte';
	import '../../prism.css';
	import TableOfContents from '$lib/components/TableOfContents/table-of-contents.svelte';
	const {
		elements: { item },
		states: { activeHeadingIdxs, headingsTree }
	} = createTableOfContents({ selector: '#body' });
	interface $$props {
		title: string;
		coverImage: string;
		children: Snippet<void>;
		data: unknown;
	}
	let { title, coverImage, children, data, ...restProps } =
		$props<PropsWithChildren<$$props, { children: Snippet<void> }>>();
</script>

<svelte:head>
	<title>{title} | Urban Development™</title>
</svelte:head>
<div class="grid grid-flow-row">
	<div class="grid grid-flow-col h-full">
		<div class="card bg-base-200 mx-auto min-w-[1200px] prose rounded-2xl">
			{#if coverImage}
				<figure>
					<img class="w-full" src={coverImage} alt="Shoes" />
				</figure>
			{/if}

			<div class="card-body" id="body">
				<h1 class="card-title text-3xl">{title}</h1>
				<slot />
			</div>
		</div>

		<div class="fixed"><TableOfContents tree={$headingsTree} /></div>
	</div>
	<div class="py-16"></div>
</div>

<style>
	h1 {
		@apply text-transparent bg-clip-text bg-gradient-to-r from-[#0061ff] to-[#60efff];
	}
	h3 {
		@apply text-transparent bg-clip-text bg-gradient-to-r from-[#ff0f7b] to-[#f89b29];
	}
</style>
