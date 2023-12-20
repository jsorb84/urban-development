<script lang="ts">
	import type { Snippet } from 'svelte';

	interface $$props {
		children: Snippet<void>;
		depth: number;
	}
	let { children, depth, ...restProps } = $props<$$props>();
</script>

<svelte:element this={`h${depth}`} class="">
	{@render children()}
</svelte:element>
{#if depth == 2}
	<hr style="padding: 0px;" />
{/if}
