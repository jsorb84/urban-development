<script lang="ts">
	import type { PropsWithChildren, Snippet } from 'svelte';

	import '../../prism.css';
	import Markdown from '$lib/components/MarkdownDisplay/markdown.svelte';
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	interface $$props {
		title: string;
		coverImage: string;
		description?: string;
		keywords?: string;
		author?: string;
		children: Snippet<void>;
		data: unknown;
	}
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

<Markdown {title} {coverImage} {description} {author} {keywords} {base} url={$page.url}>
	<slot />
</Markdown>
