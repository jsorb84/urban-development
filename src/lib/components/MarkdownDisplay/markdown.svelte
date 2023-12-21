<script lang="ts">
	import { slide } from 'svelte/transition';
	import Article from '../ArticleDisplay/article.svelte';
	interface $$props {
		frontmatter: Record<string, string>;
	}
	let { frontmatter } = $props<$$props>();
</script>

<div class="grid grid-flow-row">
	<div transition:slide class="grid grid-cols-6 h-full">
		<!-- Article Display -->
		<div class="col-start-2 col-end-6 place-items-center">
			<Article {frontmatter}>
				<slot />
			</Article>
		</div>
	</div>
	<!-- Spacer -->
	<div class="py-16"></div>
</div>

<style>
	h3 {
		@apply text-transparent bg-clip-text bg-gradient-to-r from-[#ff0f7b] to-[#f89b29];
	}
</style>
