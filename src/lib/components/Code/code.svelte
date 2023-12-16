<script lang="ts">
	import { browser } from '$app/environment';
	import Prism from 'prismjs';
	import { onMount } from 'svelte';
	import 'prismjs/components/prism-typescript.js';
	interface $$props {
		text: string;
		lang: string;
	}

	let { text, lang, ...restProps } = $props<$$props>();
	const highlighted = Prism.highlight(text, Prism.languages[lang], lang);
</script>

<pre id="codeBlock"><code>{@html highlighted}</code></pre>
