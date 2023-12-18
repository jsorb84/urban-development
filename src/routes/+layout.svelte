<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header/header.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import { page } from '$app/stores';

	import Seo from '$lib/components/SEO/seo.svelte';
	let show = $state<boolean>(false);

	onMount(() => (show = true));
</script>

<Seo
	title={$page.data.metadata?.title ?? 'Home'}
	description={$page.data.metadata?.description ?? 'Free Programming Notes, Guides, and Resources'}
	author={$page.data.metadata?.author ?? 'theofficialurban (Josh)'}
	keywords={$page.data.metadata?.keywords ??
		'technology, javascript, programming, guides, notes, resources'}
	coverImage={$page.data.metadata?.coverImage ?? 'https://placehold.co/600x400'}
	url={$page.data.metadata?.url ?? $page.url.href}
></Seo>
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
		background-image: url('$lib/assets/background-image-two.jpg');
		background-size: cover;
	}
</style>
