<script lang="ts">
	import { fly } from 'svelte/transition';

	let show = $state<boolean>(false);
	$effect(() => {
		show = true;
	});
</script>

{#if show}
	<div transition:fly={{ y: 100 }}><slot /></div>
{/if}
