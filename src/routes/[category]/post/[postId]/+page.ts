import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import fm from 'front-matter';
export const load = (async ({ params: { postId, category }, fetch }) => {
	const req = await fetch(
		`https://cloud.appwrite.io/v1/storage/buckets/${category}/files/${postId}/view?project=657df22a1439a12f822a`
	);
	if (req.status !== 200) redirect(303, '/');
	const text = await req.text();
	const fmText = fm<Record<string, string>>(text);
	return {
		text,
		metadata: {
			title: fmText.attributes.title,
			description: fmText.attributes.description,
			keywords: fmText.attributes.keywords,
			coverImage: fmText.attributes.coverImage,
			author: fmText.attributes.author
		}
	};
}) satisfies PageLoad;
