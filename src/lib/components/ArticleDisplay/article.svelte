<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface $$props extends HTMLAttributes<HTMLDivElement> {
		frontmatter: Record<string, string>;
	}
	let { frontmatter, ...restProps } = $props<$$props>();

	let tags = $derived(frontmatter.keywords.split(', '));
</script>

<div {...restProps}>
	<div class="card bg-base-200 min-w-full prose rounded-2xl z-10">
		{#if frontmatter.coverImage}
			<figure>
				<img class="w-full" src={frontmatter.coverImage} alt="Shoes" />
			</figure>
		{/if}

		<div class="card-body" id="body">
			<div class="py-3">
				<span class="card-title flex text-5xl">{frontmatter.title ?? 'No Title'}</span>
				<sub class="text-white text-lg pl-4">
					Written By: {frontmatter.author ?? 'theofficialurban'}</sub
				>
				<br />
				<sub class="text-white text-lg pl-4">
					<span class="pr-2">Keywords:</span>
					{#each tags as tag}
						<div class="p-1 inline-block">
							<span class="p-1 bg-magnum-200 text-magnum-900 rounded-lg bordered text-sm"
								>{tag}</span
							>
						</div>
					{/each}
				</sub>
			</div>
			<slot />
		</div>
	</div>
</div>

<style>
	.card-title {
		@apply text-transparent bg-clip-text bg-gradient-to-r from-[#0061ff] to-[#60efff];
	}
	h3 {
		@apply text-transparent bg-clip-text bg-gradient-to-r from-[#ff0f7b] to-[#f89b29];
	}
</style>
