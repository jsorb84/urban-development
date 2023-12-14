<script lang="ts">
	import { goto } from '$app/navigation';
	import categories from '$lib/categories';
	import Toggle from '$lib/components/Toggle/toggle.svelte';
	interface $$props {
		currentPath: URL;
	}
	let { currentPath } = $props<$$props>();
</script>

<div class="py-3 inline-flex gap-4">
	{#each categories as category}
		<Toggle
			--bg={category.color?.off ?? '#FFFFFF'}
			--bgOn={category.color?.on ?? 'gray'}
			data-state={category.url == currentPath.pathname ? 'on' : 'off'}
			onclick={() => goto(category.url)}>{category.name}</Toggle
		>
	{/each}
</div>
