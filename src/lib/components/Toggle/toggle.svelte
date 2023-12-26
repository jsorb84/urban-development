<script lang="ts">
	import { createToggle } from '@melt-ui/svelte';
	import type { PropsWithChildren, Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	const {
		elements: { root },
		states: { pressed }
	} = createToggle();
	interface $$props extends HTMLAttributes<HTMLButtonElement> {
		children: Snippet<void>;
	}
	let { children, ...restProps } =
		$props<PropsWithChildren<$$props, { children: Snippet<void> }>>();
</script>

<button
	{...$root}
	use:root
	class="grid h-9 p-2 place-items-center items-center justify-center rounded-md
 text-base leading-4 text-gray-800 shadow-lg
  data-[disabled]:cursor-not-allowed
  data-[state=on]:text-gray-900"
	{...restProps}
>
	{@render children()}
</button>

<style lang="postcss">
	button {
		@apply bg-[var(--bg)] hover:bg-[var(--bg)] data-[state=on]:bg-[var(--bgOn)];
	}
</style>
