<script lang="ts">
	import { createTreeView, type TableOfContentsItem } from '@melt-ui/svelte';
	const {
		elements: { tree: treeView, item, group }
	} = createTreeView();
	interface $$props {
		tree: TableOfContentsItem[];
	}
	let { tree } = $props<$$props>();
</script>

<ul use:treeView {...$treeView} class="bg-base-200 h-fit rounded-xl px-6 list-item py-3">
	{#each tree as treeItem}
		<li class={treeItem.node.tagName == 'H2' ? 'primary' : 'secondary'}>
			<a href={`#${treeItem.id}`} use:item {...$item} class="list-item btn-ghost p-2 rounded-xl"
				># {treeItem.title}</a
			>
			{#if treeItem.children && treeItem.children.length > 0}
				<svelte:self tree={treeItem.children} />
			{/if}
		</li>
	{/each}
</ul>

<style>
	@font-face {
		font-family: Oswald Bold;
		src: url('/Oswald/Oswald-Bold.ttf');
	}
	ul {
		font-family: Oswald Bold;
		@apply text-xl;
	}
	.primary {
		@apply text-transparent bg-clip-text bg-gradient-to-r from-[#0061ff] to-[#60efff];
	}
	.secondary {
		@apply text-transparent bg-clip-text bg-gradient-to-r from-[#ff0f7b] to-[#f89b29];
	}
</style>
