<script lang="ts">
	import { page } from '$app/stores';
	import fm from 'front-matter';
	import Appwrite from '$lib/utilities/Appwrite.svelte';
	import Markdown from '$lib/components/MarkdownDisplay/markdown.svelte';
	import SvelteMarkdown, { type Renderers } from 'svelte-markdown';
	import Code from '$lib/components/Code/code.svelte';
	import '$lib/assets/prism.css';
	import CodeSpan from '$lib/components/Code/code-span.svelte';
	import type { PageData } from './$types';
	import Heading from '$lib/components/Heading/heading.svelte';
	let { data } = $props<{ data: PageData }>();
	const raw = data.text;
	const renderers: Partial<Renderers> = {
		code: Code,
		codespan: CodeSpan,
		heading: Heading
	};
	const prevPage = $page.state.previousUrl;
</script>

{#if raw !== ''}
	{@const frontmatter = fm(raw)}
	<Markdown
		backHref={prevPage ?? '/'}
		frontmatter={frontmatter.attributes as Record<string, string>}
	>
		<SvelteMarkdown source={frontmatter.body} {renderers} />
	</Markdown>
{:else}
	<span class="loading loading-bars loading-lg" />
{/if}
