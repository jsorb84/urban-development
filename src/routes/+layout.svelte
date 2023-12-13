<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header/header.svelte';
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import { base } from '$app/paths';
	let show = $state<boolean>(false);
	onMount(() => (show = true));
</script>

<svelte:head>
	<title>Home | Urban Development™</title>

	<meta charset="UTF-8" />
	<meta property="og:title" content={`Home || Urban Development™`} />
	<meta property="og:url" content={`${base}`} />
	<meta name="description" content={`Urban Development™`} />
	<meta
		property="og:description"
		content={`Urban Development™ - Programming Information & Notes`}
	/>
	<meta property="og:site_name" content={`Urban Development™`} />
	<meta property="og:type" content="website" />

	<meta
		name="keywords"
		content="technology, programming, coding, html, css, javascript, guides, blog, general information, web technology"
	/>
	<meta name="author" content={`theofficialurban`} />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div id="main-bg" class="p-10 h-full w-screen fixed overflow-y-scroll">
	{#if show}
		<div transition:fade={{ duration: 1000 }}>
			<slot />
		</div>
	{/if}
	<div class="py-20" />
</div>

<div class="pt-10"><Header /></div>

<style>
	#main-bg {
		background-image: url('/background-image.jpg');
		background-size: cover;
	}
</style>
