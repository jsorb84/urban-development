<script lang="ts">
	import {
		createDropdownMenu,
		type TableOfContentsElements,
		type TableOfContentsItem
	} from '@melt-ui/svelte';
	import type { Writable } from 'svelte/store';
	import { slide } from 'svelte/transition';

	interface $$props {
		item: TableOfContentsElements['item'];
		treeItem: TableOfContentsItem;
		level: number;
		active: Writable<number[]>;
	}
	let { item, active, treeItem, level } = $props<$$props>();
	const {
		elements: { item: ddItem, trigger },
		states: { open }
	} = createDropdownMenu({ closeOnItemClick: false });
</script>

{#if level == 1}
	<ul class="py-2">
		<a
			use:trigger
			{...$trigger}
			href={`#${treeItem.id}`}
			class:bg-base-300={$open}
			class:bg-base-200={!$open}
			class:btn-disabled={treeItem.children?.length == 0}
			class="btn bg-opacity-80 btn-outline h-fit w-full z-20 text-xl"
		>
			<span class="primary">{treeItem.title}</span>
		</a>
		{#if $open && treeItem.children?.length}
			<div transition:slide class="z-30 px-3">
				<li use:ddItem {...$ddItem} class="p-3 h-fit bg-base-300 bg-opacity-80 rounded-b-xl z-30">
					{#if treeItem.children && treeItem.children.length}
						{#each treeItem.children as ti}
							<svelte:self treeItem={ti} {active} level={level + 1} {item} />
						{/each}
					{/if}
				</li>
			</div>
		{/if}
	</ul>
{:else}
	<ul class="px-2 py-1">
		<li use:ddItem {...$ddItem} class="">
			<a href={`#${treeItem.id}`} class="text-md btn btn-ghost"
				><span class="px-1">#</span> <span class="secondary">{treeItem.title}</span></a
			>
			{#if treeItem.children && treeItem.children.length}
				{#each treeItem.children as ti}
					<svelte:self treeItem={ti} {active} level={level + 1} {item} />
				{/each}
			{/if}
		</li>
	</ul>
{/if}

<style>
	.primary {
		@apply text-transparent bg-clip-text bg-gradient-to-r from-[#0061ff] to-[#60efff];
	}
	.secondary {
		@apply text-transparent bg-clip-text bg-gradient-to-r from-[#ff0f7b] to-[#f89b29];
	}
</style>
