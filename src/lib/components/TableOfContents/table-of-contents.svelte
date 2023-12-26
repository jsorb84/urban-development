<script lang="ts">
	import { createTreeView, type TableOfContentsItem } from '@melt-ui/svelte';
	import type { Writable } from 'svelte/store';
	const {
		elements: { tree: treeView, item, group }
	} = createTreeView();

	interface $$props {
		tree: TableOfContentsItem[];
		active: Writable<number[]>;
		level: number;
	}
	let { tree, level, active } = $props<$$props>();
</script>

<ul
	use:treeView
	data-level={level.toString()}
	{...$treeView}
	class="bg-base-200 max-h-[350px] max-w-[200px] data-[level='1']:overflow-y-scroll rounded-xl px-4 py-1"
>
	{#each tree as treeItem}
		<li class={treeItem.node.tagName == 'H2' ? 'primary' : 'secondary'}>
			<a
				data-index={treeItem.index}
				href={`#${treeItem.id}`}
				use:item
				{...$item}
				class:font-bold={level == 1}
				class={`list-item  btn-ghost p-2 rounded-xl z-10`}>{treeItem.title}</a
			>
			{#if treeItem.children && treeItem.children.length > 0}
				<svelte:self {active} level={level + 1} tree={treeItem.children} />
			{/if}
		</li>
	{/each}
</ul>

<style lang="postcss">
	ul {
		font-family: Oswald, sans-serif;
		scrollbar-width: none;
		@apply text-xl;
	}
	::-webkit-scrollbar {
		display: none;
	}
	.primary {
		@apply text-transparent bg-clip-text bg-gradient-to-r from-[#0061ff] to-[#60efff];
	}
	.secondary {
		@apply text-transparent bg-clip-text bg-gradient-to-r from-[#ff0f7b] to-[#f89b29];
	}
</style>
