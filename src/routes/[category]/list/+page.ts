import { capitalize } from 'lodash-es';
import type { PageLoad } from './$types';
import Appwrite from '$lib/utilities/Appwrite.svelte';

export const load = (async ({ params: { category } }) => {
	const client = new Appwrite();
	const files = client.storage.listFiles(category);

	return {
		files,
		metadata: {
			title: `${capitalize(category)} Articles`,
			keywords: `${capitalize(category)}, articles, list`
		}
	};
}) satisfies PageLoad;
