---
title: Hello
coverImage: https://clashcourse.xyz/images/playgrounds/ddl.png
description: A sample testing post...
keywords: testing, tech, guides, blog post, information, free resources, svelte, sveltekit, javascript
author: theofficialurban
category: notes
---

# Transitions

## useTransition

> This

- Something
- Is Cool

* No
* Yes
* Huh

```svelte
<script lang="ts">
	import { onMount, type PropsWithChildren, type Snippet } from 'svelte';
	import { createTableOfContents } from '@melt-ui/svelte';
	import '../../prism.css';
	import TableOfContents from '$lib/components/TableOfContents/table-of-contents.svelte';
	import { slide } from 'svelte/transition';
	const {
		elements: { item },
		states: { activeHeadingIdxs, headingsTree }
	} = createTableOfContents({ selector: '#body' });
	interface $$props {
		title: string;
		coverImage: string;
		description?: string;
		keywords?: string;
		author?: string;
		children: Snippet<void>;
		data: unknown;
	}
	let show = $state<boolean>(false);
	onMount(() => (show = true));
	let {
		title,
		coverImage,
		description = 'n/a',
		author = 'theofficialurban',
		keywords = 'n/a',
		children,
		data,
		...restProps
	} = $props<PropsWithChildren<$$props, { children: Snippet<void> }>>();
</script>

<svelte:head>
	<title>{title} | Urban Development™</title>
	<meta charset="UTF-8" />
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content={author} />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div class="grid grid-flow-row">
	{#key title}
		<a class="btn btn-sm btn-info w-[190px] fixed" href="/docs">👈 Go Back</a>
		<div transition:slide class="grid grid-flow-col h-full">
			<div class="card bg-base-200 mx-auto min-w-[1200px] prose rounded-2xl z-10">
				{#if coverImage}
					<figure>
						<img class="w-full" src={coverImage} alt="Shoes" />
					</figure>
				{/if}

				<div class="card-body" id="body">
					<div class="py-3">
						<span class="card-title text-5xl">
							{title}
						</span>
						<sub class="text-white text-lg pl-4">By {author}</sub>
					</div>
					<slot />
				</div>
			</div>

			<div class="fixed top-20 max-xl:hidden"><TableOfContents tree={$headingsTree} /></div>
		</div>
		<div class="py-16"></div>
	{/key}
</div>

<style>
	.card-title {
		@apply text-transparent bg-clip-text bg-gradient-to-r from-[#0061ff] to-[#60efff];
	}
	h3 {
		@apply text-transparent bg-clip-text bg-gradient-to-r from-[#ff0f7b] to-[#f89b29];
	}
</style>
```
