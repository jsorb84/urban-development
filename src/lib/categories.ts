type Category = {
	name: string;
	url: string;
	description: string;
	items: Category[];
	keywords?: string;
	slug: string;
	color?: { off: string; on: string };
};
const categories: Map<string, Category> = new Map<string, Category>([
	[
		'programming',
		{
			name: 'Programming',
			slug: 'programming',
			url: '/programming/list',
			description: 'Programming Articles',
			items: [],
			color: { off: '#FFFFFF', on: 'gray' },
			keywords:
				'technology, programming, coding, html, css, javascript, guides, blog, general information, web technology'
		}
	],
	[
		'notes',
		{
			name: 'Notes & Guides',
			slug: 'notes',
			url: '/notes/list',
			description: 'Programming Guides & Personal Notes',
			items: [],
			keywords:
				'technology, programming, coding, html, css, javascript, guides, blog, general information, web technology'
		}
	],
	[
		'tutorials',
		{
			name: 'Tutorials',
			slug: 'tutorials',
			url: '/tutorials/list',
			description: 'Programming Tutorials and How-To Guides for Svelte and other frameworks',
			items: [],
			keywords:
				'svelte, how-to-guide, tutorials, javascript, packages, frameworks, informational guides'
		}
	],
	[
		'packages',
		{
			name: 'Packages',
			slug: 'packages',
			url: '/packages/list',
			description: 'Programming Resources, Packages, and More',
			items: [],
			keywords: 'npm, pnpm, packages, free, resources, javascript, svelte, typescript'
		}
	]
]);

export default categories;
export type { Category };
