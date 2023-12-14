<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header/header.svelte';
	import { onMount, setContext } from 'svelte';
	import { fade } from 'svelte/transition';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { writable } from 'svelte/store';
	import type Metadata from '$lib/types/Metadata';
	import Seo from '$lib/components/SEO/seo.svelte';
	let show = $state<boolean>(false);

	const metadata = writable<Metadata>({
		title: 'Home',
		keywords:
			'technology, programming, coding, html, css, javascript, guides, blog, general information, web technology',
		url: new URL(`http://localhost:5173`),
		description: 'Urban Development™',
		base,
		coverImage: '',
		author: ''
	});

	setContext('metadata', metadata);
	onMount(() => (show = true));
</script>

<Seo
	title={$metadata.title}
	description={$metadata.description}
	author={$metadata.author}
	keywords={$metadata.keywords}
	coverImage={$metadata.coverImage}
	url={$metadata.url}
	base={$metadata.base}
/>
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
