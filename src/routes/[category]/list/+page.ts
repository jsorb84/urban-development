import { capitalize } from 'lodash-es';
import type { PageLoad } from './$types';
import type { Models } from 'appwrite';

export const load = (async ({ params: { category }, url, fetch }) => {
	const req = await fetch(
		`https://cloud.appwrite.io/v1/storage/buckets/${category}/files?project=657df22a1439a12f822a`
	);
	const files = req.json() as Promise<Models.FileList>;
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
