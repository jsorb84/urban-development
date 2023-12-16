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
		'pages',
		{
			name: 'Notes & Guides',
			slug: 'pages',
			url: '/pages/list',
			description: 'Programming Guides & Notes',
			items: [],
			keywords:
				'technology, programming, coding, html, css, javascript, guides, blog, general information, web technology'
		}
	]
]);

export default categories;
export type { Category };
