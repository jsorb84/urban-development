<script lang="ts">
	interface $$props {
		text: string;
	}
	let { text, ...restProps } = $props<$$props>();
</script>

<div class="inline-block px-1 text-white">
	<span class="inline-flex bg-info-content p-1 rounded-lg font-mono">
		{text}
	</span>
</div>
