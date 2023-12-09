<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header/header.svelte';
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	let show = $state<boolean>(false);
	onMount(() => (show = true));
</script>

<div id="main-bg" class="p-10 h-full w-screen fixed overflow-y-scroll">
	{#if show}
		<div transition:fade={{ duration: 1000 }}>
			<slot />
		</div>
	{/if}
</div>

<div class="pt-10"><Header /></div>

<style>
	#main-bg {
		background-image: url('/background-image.jpg');
		background-size: cover;
	}
</style>
