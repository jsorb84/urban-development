<script lang="ts">
	import Prism from 'prismjs';
	import 'prismjs/components/prism-typescript.js';
	import 'prismjs/components/prism-jsx.js';
	interface $$props {
		text: string;
		lang: string;
	}

	let { text, lang, ...restProps } = $props<$$props>();
	const highlighted = Prism.highlight(text, Prism.languages[lang], lang);
</script>

<pre id="codeBlock" class="mockup-code bg-base-300"><code>{@html highlighted}</code></pre>
