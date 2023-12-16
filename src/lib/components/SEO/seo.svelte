<script lang="ts">
	interface $$props {
		title: string;
		coverImage?: string;
		url: URL;
		description: string;
		author: string;
		base: string;
		keywords: string;
	}
	let {
		title,
		base,
		coverImage = 'https://placehold.co/600x400',
		url,
		description,
		author,
		keywords
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
	<meta property="og:url" content={`${url}`} />
	<meta name="description" content={description} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content={`${base}`} />
	<meta property="twitter:url" content={url.toString()} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={coverImage} />
	<meta property="og:description" content={`${description} - By ${author}`} />
	<meta property="og:site_name" content={`Urban Development™`} />
	<meta property="og:type" content="article" />
	<meta property="article:author" content={author} />
	<meta property="article:publisher" content={'Urban Development™'} />
	<meta property="article:tag" content={keywords} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content={author} />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>
