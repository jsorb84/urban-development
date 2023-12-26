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
	import TableOfContentsTwo from '$lib/components/TableOfContents/table-of-contents-two.svelte';
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

	<TableOfContentsTwo options={{ selector: '#body' }} cOptions={{ defaultOpen: true }} let:open>
		<svelte:fragment slot="backButton">
			<a href={prevPage ?? '/'} class="btn btn-error">❌</a>
		</svelte:fragment>
		<Markdown
			menuOpen={open}
			backHref={prevPage ?? '/'}
			frontmatter={frontmatter.attributes as Record<string, string>}
		>
			<SvelteMarkdown source={frontmatter.body} {renderers} />
		</Markdown>
	</TableOfContentsTwo>
{:else}
	<span class="loading loading-bars loading-lg" />
{/if}
