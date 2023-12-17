<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	interface $$props {
		title?: string;
		coverImage?: string;
		url?: string;
		description?: string;
		author?: string;
		type?: 'article' | 'website';
		base?: string;
		keywords?: string;
	}
	let {
		title = 'Home',
		coverImage = 'https://placehold.co/600x400',
		url,
		description,
		type = 'website',
		author = 'theofficialurban (Josh)',
		keywords = 'technology, guides, programming resources, svelte, javascript'
	} = $props<$$props>();
</script>

<svelte:head>
	<title>{title} | Urban Development™</title>

	<meta charset="UTF-8" />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<meta property="og:image" content={coverImage} />
	<meta property="og:title" content={`${title} || Urban Development™`} />
	<meta property="og:url" content={url} />
	<meta name="description" content={description} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content={base} />
	<meta property="twitter:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={coverImage} />
	<meta property="og:description" content={`${description} - By ${author}`} />
	<meta property="og:site_name" content={`Urban Development™`} />
	<meta property="og:type" content={type} />
	{#if type == 'article'}
		<meta property="article:author" content={author} />
		<meta property="article:publisher" content={'Urban Development™'} />
		<meta property="article:tag" content={keywords} />
	{/if}
	<meta name="keywords" content={keywords} />
	<meta name="author" content={author} />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<slot />
</svelte:head>
