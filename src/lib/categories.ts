type Category = {
	name: string;
	url: string;
	description: string;
	items: Category[];
	keywords?: string;
	slug: string;
	color?: { off: string; on: string };
};
const categories: Category[] = [
	{
		name: 'Programming',
		slug: 'programming',
		url: '/docs/programming',
		description: 'Programming Articles',
		items: [],
		color: { off: '#FFFFFF', on: 'gray' },
		keywords:
			'technology, programming, coding, html, css, javascript, guides, blog, general information, web technology'
	},
	{
		name: 'Notes & Guides',
		slug: 'notes',
		url: '/docs/notes',
		description: 'Programming Guides & Notes',
		items: [],
		keywords:
			'technology, programming, coding, html, css, javascript, guides, blog, general information, web technology'
	}
];

export default categories;
export type { Category };
