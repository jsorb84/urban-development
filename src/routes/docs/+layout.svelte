<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import CategoryList from '$lib/CategoryList/category-list.svelte';
	import type { LayoutData } from './$types';
	export let data: LayoutData;
</script>

<svelte:head>
	<title>Articles | Urban Development™</title>

	<meta charset="UTF-8" />
	<meta property="og:title" content={`Articles || Urban Development™`} />
	<meta property="og:url" content={`${base}/docs`} />
	<meta name="description" content={`Urban Development™ Blog Posts`} />
	<meta property="og:description" content={`Urban Development™ Blog Posts`} />
	<meta property="og:site_name" content={`Urban Development™`} />
	<meta property="og:type" content="website" />

	<meta
		name="keywords"
		content="technology, programming, coding, html, css, javascript, guides, blog, general information, web technology"
	/>
	<meta name="author" content={`theofficialurban`} />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<CategoryList currentPath={$page.url} />

<slot />
