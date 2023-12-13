<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	interface $$props {
		post: [string, { metadata: Record<string, string> }];
	}
	let { post } = $props<$$props>();
	let show = $state<boolean>(false);
	const [name, item] = post;
	const getFileURL = (rawUrl: string) => {
		const split = rawUrl.split('/');
		let urlString = '/';
		const items = split.forEach((i) => {
			if (i != '' && i != 'src' && i != 'routes' && i != 'pages' && i != '+page.md') {
				urlString += `${i}/`;
			}
		});
		return urlString;
	};
	onMount(() => (show = true));
</script>

{#if show}
	<div
		transition:slide
		class="hero rounded-xl"
		style={`background-image: url(${item.metadata.coverImage ?? 'https://placehold.co/600x400'});`}
	>
		<div class="hero-overlay bg-opacity-60"></div>
		<div class="hero-content text-center text-neutral-content p-12">
			<div class="max-w-md">
				<h1 class="mb-5 text-5xl font-bold">{item.metadata.title ?? 'No Title'}</h1>
				<p class="mb-5">
					{item.metadata.description ?? 'No Post Description'}
				</p>

				<a href={`/pages${getFileURL(name)}`} class="btn btn-primary">Read Post..</a>
			</div>
		</div>
	</div>
{/if}
