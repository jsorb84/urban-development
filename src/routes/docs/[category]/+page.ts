import type { PageLoad } from './$types';
import categories from '$lib/categories';
type Entry = [string, { default: unknown; metadata: Record<string, string> }];
export const load = (async ({ params: { category } }) => {
	const imports = import.meta.glob('/src/routes/pages/**/*.md', { eager: true });
	const importEntries: Entry[] = Object.entries(imports) as Entry[];

	const thisCategory =
		categories.find((c) => c.slug.toUpperCase() == category.toUpperCase()) ?? null;
	return {
		current: thisCategory,
		category,
		entries: importEntries
	};
}) satisfies PageLoad;
