import { capitalize } from 'lodash-es';
import type { PageLoad } from './$types';
import Appwrite from '$lib/utilities/Appwrite.svelte';

export const load = (async ({ params: { category }, url }) => {
	const client = new Appwrite();
	const files = client.storage.listFiles(category);
	return {
		files,
		metadata: {
			title: `${capitalize(category)} Articles`,
			keywords: `${capitalize(category)}, articles, list, programming`,
			description: `${capitalize(category)} Articles, Notes, and Guides`,
			author: 'theofficialurban (Josh)',
			url: url.href
		}
	};
}) satisfies PageLoad;
