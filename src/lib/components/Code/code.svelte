<script lang="ts">
	import Prism from 'prismjs';
	import 'prismjs/components/prism-typescript.js';
	import 'prismjs/components/prism-jsx.js';
	import 'prismjs/components/prism-markdown';
	import 'prismjs/components/prism-yaml';
	import 'prismjs/components/prism-docker';

	interface $$props {
		text: string;
		lang: string;
	}

	let { text, lang, ...restProps } = $props<$$props>();
	const highlighted = Prism.highlight(text, Prism.languages[lang ?? 'html'], lang ?? 'html');
</script>

<pre id="codeBlock" class="mockup-code bg-base-300"><code>{@html highlighted}</code></pre>
