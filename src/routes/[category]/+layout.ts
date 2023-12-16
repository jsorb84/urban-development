import categories from '$lib/categories';
import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';
export const load = (async ({ params: { category } }) => {
	const cat = categories.get(category) ?? null;
	if (!cat) redirect(303, '/');
	return {
		category: cat
	};
}) satisfies LayoutLoad;
