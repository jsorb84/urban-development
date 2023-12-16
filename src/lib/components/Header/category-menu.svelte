<script lang="ts">
	import categories from '$lib/categories';
	import { createDropdownMenu } from '@melt-ui/svelte';
	const {
		elements: { menu, item, trigger, arrow },
		states: { open }
	} = createDropdownMenu();
</script>

<button use:trigger {...$trigger}>
	<ul class="dropdown dropdown-content menu bg-base-300 rounded" use:menu {...$menu}>
		{#each categories as [slug, category]}
			<li use:item {...$item}><a href={category.url}>{category.name}</a></li>
		{/each}
	</ul>

	<svg width={30} color="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
		><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
			id="SVGRepo_tracerCarrier"
			stroke-linecap="round"
			stroke-linejoin="round"
		></g><g id="SVGRepo_iconCarrier">
			<rect x="0" fill="none"></rect>
			<g>
				<path
					color="#000000"
					fill="white"
					d="M16 19H3v-2h13v2zm5-10H3v2h18V9zM3 5v2h11V5H3zm14 0v2h4V5h-4zm-6 8v2h10v-2H11zm-8 0v2h5v-2H3z"
				></path>
			</g>
		</g></svg
	>
</button>
