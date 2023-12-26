<script lang="ts">
	import {
		createCollapsible,
		createTableOfContents,
		type CreateCollapsibleProps,
		type CreateTableOfContentsArgs
	} from '@melt-ui/svelte';
	import TableOfContentsItem from './table-of-contents-item.svelte';
	import { fly } from 'svelte/transition';
	interface $$props {
		options: CreateTableOfContentsArgs;
		cOptions?: CreateCollapsibleProps;
	}
	let { options, cOptions } = $props<$$props>();
	const {
		elements: { item },
		states: { headingsTree, activeHeadingIdxs }
	} = createTableOfContents(options);

	const {
		elements: { root, content, trigger },
		states: { open }
	} = createCollapsible(cOptions);
</script>

<div data-menu={$open} class="fixed flex data-[menu=false]:flex-col gap-3">
	<slot name="backButton" />
	<button class="btn max-xl:hidden" use:trigger {...$trigger} disabled={$headingsTree.length == 0}>
		{#if !$open}
			<svg
				fill="white"
				width={25}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 52 52"
				enable-background="new 0 0 52 52"
				xml:space="preserve"
				><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
				></g><g id="SVGRepo_iconCarrier">
					<path
						d="M48,9.5C48,8.7,47.3,8,46.5,8h-41C4.7,8,4,8.7,4,9.5v3C4,13.3,4.7,14,5.5,14h41c0.8,0,1.5-0.7,1.5-1.5V9.5z"
					></path>
					<path
						d="M48,39.5c0-0.8-0.7-1.5-1.5-1.5h-41C4.7,38,4,38.7,4,39.5v3C4,43.3,4.7,44,5.5,44h41c0.8,0,1.5-0.7,1.5-1.5 V39.5z"
					></path>
					<path
						d="M34.5,29c0.8,0,1.5-0.7,1.5-1.5v-3c0-0.8-0.7-1.5-1.5-1.5h-17c-0.8,0-1.5,0.7-1.5,1.5v3 c0,0.8,0.7,1.5,1.5,1.5H34.5z"
					></path>
				</g></svg
			>
		{:else}
			<svg fill="white" width={25} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
				><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
				></g><g id="SVGRepo_iconCarrier">
					<path
						d="M8.70710678,12 L19.5,12 C19.7761424,12 20,12.2238576 20,12.5 C20,12.7761424 19.7761424,13 19.5,13 L8.70710678,13 L11.8535534,16.1464466 C12.0488155,16.3417088 12.0488155,16.6582912 11.8535534,16.8535534 C11.6582912,17.0488155 11.3417088,17.0488155 11.1464466,16.8535534 L7.14644661,12.8535534 C6.95118446,12.6582912 6.95118446,12.3417088 7.14644661,12.1464466 L11.1464466,8.14644661 C11.3417088,7.95118446 11.6582912,7.95118446 11.8535534,8.14644661 C12.0488155,8.34170876 12.0488155,8.65829124 11.8535534,8.85355339 L8.70710678,12 L8.70710678,12 Z M4,5.5 C4,5.22385763 4.22385763,5 4.5,5 C4.77614237,5 5,5.22385763 5,5.5 L5,19.5 C5,19.7761424 4.77614237,20 4.5,20 C4.22385763,20 4,19.7761424 4,19.5 L4,5.5 Z"
					></path>
				</g></svg
			>
		{/if}
	</button>
</div>

{#if $open && $headingsTree.length}
	<div
		transition:fly={{ x: -20 }}
		use:root
		{...$root}
		id="toc"
		class="fixed max-xl:hidden mt-14 w-[250px] max-h-[400px] bg-base-100 overflow-y-scroll rounded-lg bordered"
	>
		<div use:content {...$content} class=" p-6">
			<h3 class="text-xl">📑 Table of Contents</h3>
			<span class="divider p-0" />
			{#each $headingsTree as treeItem}
				<TableOfContentsItem {treeItem} {item} active={activeHeadingIdxs} level={1} />
			{/each}
		</div>
	</div>
{/if}

<slot open={$open} />

<style>
	#toc::-webkit-scrollbar {
		display: none;
	}
</style>
