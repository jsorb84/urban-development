<script lang="ts">
	import type { Models } from 'appwrite';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { page } from '$app/stores';
	interface $$props {
		file: Models.File;
	}
	let { file } = $props<$$props>();
	let show = $state<boolean>(false);
	onMount(() => (show = true));
</script>

{#if show}
	<div in:slide|global class="hero bg-base-300 rounded-xl">
		<div class="hero-content text-center text-neutral-content p-12">
			<div class="max-w-md grid grid-flow-row">
				<sub class="py-3">Created On {new Date(file.$createdAt).toDateString()}</sub>
				<h1 class="mb-5 text-5xl font-bold">{file.name.split('.')[0] ?? 'No Title'}</h1>

				<!-- <p class="mb-5">
						{item.metadata.description ?? 'No Post Description'}
					</p> -->

				<a href={`/${$page.data.category.slug}/post/${file.$id}`} class="btn btn-primary"
					>Read Post..</a
				>
			</div>
		</div>
	</div>
{/if}
