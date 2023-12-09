<script lang="ts">
	import { useFloatingEffect, typewriter } from '@theofficialurban/svelte-utils';
	import { onMount } from 'svelte';
	import { cubicOut } from 'svelte/easing';
	import { draw } from 'svelte/transition';
	const { effect, store } = useFloatingEffect({ duration: 1000 }, 5);
	let show = $state<boolean>(false);
	onMount(() => (show = true));
</script>

<svelte:head>
	<title>Urban Development™ | Business Web Consulting</title>
</svelte:head>
{#if show}
	<center class="grid grid-flow-row place-items-center">
		<svg use:effect={$store} width={500} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"
			><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"
			></g><g id="SVGRepo_iconCarrier"
				><defs
					><style>
						.a {
							fill: none;

							stroke: orange;
							stroke-linecap: round;
							stroke-linejoin: round;
						}
					</style></defs
				><path
					transition:draw={{ duration: 1000, easing: cubicOut }}
					class="a"
					d="M40.5,5.5H7.5a2,2,0,0,0-2,2v33a2,2,0,0,0,2,2h33a2,2,0,0,0,2-2V7.5A2,2,0,0,0,40.5,5.5Z"
				></path><path
					transition:draw={{ duration: 1000, easing: cubicOut }}
					class="a"
					d="M34.5134,23.575a4.5,4.5,0,0,0-4.5-4.5h0a4.5,4.5,0,0,0-4.5,4.5V26.5a4.5,4.5,0,0,0,4.5,4.5h0a4.5,4.5,0,0,0,4.5-4.5"
				></path><path
					class="a"
					d="M36.3134,31a1.8,1.8,0,0,1-1.8-1.8V13"
					transition:draw={{ duration: 1000, easing: cubicOut }}
				></path><path
					class="a"
					d="M22.0412,26.5a4.5,4.5,0,0,1-4.5,4.5h0a4.5,4.5,0,0,1-4.5-4.5V19.075"
				></path><path
					transition:draw={{ duration: 1000, easing: cubicOut }}
					class="a"
					d="M23.8412,31a1.8,1.8,0,0,1-1.8-1.8V19.075"
				></path><line
					transition:draw={{ duration: 1000, easing: cubicOut }}
					class="a"
					x1="13.0412"
					y1="19.075"
					x2="11.6866"
					y2="19.075"
				></line><line
					transition:draw={{ duration: 1000, easing: cubicOut }}
					class="a"
					x1="22.0412"
					y1="19.075"
					x2="20.6866"
					y2="19.075"
				></line><line
					class="a"
					transition:draw={{ duration: 1000, easing: cubicOut }}
					x1="34.5134"
					y1="13"
					x2="33.1588"
					y2="13"
				></line></g
			></svg
		>
		<h1 class="text-8xl" style="color: deepskyblue;" transition:typewriter={{ speed: 1 }}>
			Urban Development™
		</h1>
	</center>
{/if}

<style>
	@font-face {
		font-family: Oswald Bold;
		src: url('/Oswald/Oswald-Bold.ttf');
	}

	h1 {
		font-size: 72px;
		font-family: Oswald Bold;
		background: -webkit-linear-gradient(#e9d022, #e60b09);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
