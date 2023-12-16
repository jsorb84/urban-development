<script lang="ts">
	import { page } from '$app/stores';
	import fm from 'front-matter';
	import Appwrite from '$lib/utilities/Appwrite.svelte';
	import Markdown from '$lib/components/MarkdownDisplay/markdown.svelte';
	import SvelteMarkdown, { type Renderers } from 'svelte-markdown';
	import Code from '$lib/components/Code/code.svelte';
	import '$lib/assets/prism.css';
	const postId = $page.params.postId;
	const client = new Appwrite();
	let raw = $state<string>('');
	const loadFile = async () => {
		const req = await fetch(client.getFile($page.data.category.slug, $page.params.postId));
		if (req.status !== 200) return null;
		raw = await req.text();
	};
	const renderers: Partial<Renderers> = {
		code: Code
	};
	const prevPage = $page.state.previousUrl;
	$effect(() => {
		loadFile();
	});
</script>

{#if raw !== ''}
	{@const frontmatter = fm(raw)}
	<Markdown frontmatter={frontmatter.attributes as Record<string, string>}>
		<svelte:fragment slot="backBtn">
			<a class="xl:hidden py-2 btn btn-sm" href={prevPage}>👈 Go Back</a>
		</svelte:fragment>
		<SvelteMarkdown source={frontmatter.body} {renderers} />
	</Markdown>
{:else}
	<span class="loading loading-bars loading-lg" />
{/if}
