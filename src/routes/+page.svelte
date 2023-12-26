<script lang="ts">
	import { onMount } from 'svelte';

	import HomeGraphic from '$lib/components/HomeGraphic/home-graphic.svelte';
	import { typewriter } from '@theofficialurban/svelte-utils';

	let show = $state<boolean>(false);
	onMount(() => (show = true));
</script>

{#if show}
	<center class="grid grid-flow-row place-items-center">
		<HomeGraphic --color="#e60b09" />
		<h1 class="text-8xl" style="">
			<b data-testid="ud-text" transition:typewriter={{ speed: 1 }}>Urban Development™</b>
		</h1>
	</center>
{/if}

<style lang="postcss">
	h1 {
		font-size: 72px;
		stroke: blue;
		stroke-width: 1;
		font-family: Courgette, cursive;
		background: -webkit-linear-gradient(#e9d022, #e60b09);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
