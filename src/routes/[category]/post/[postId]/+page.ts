import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import fm from 'front-matter';
import { PUBLIC_ENDPOINT, PUBLIC_PROJECT } from '$env/static/public';
export const load = (async ({ params: { postId, category }, fetch }) => {
	const req = await fetch(
		`${PUBLIC_ENDPOINT}/storage/buckets/${category}/files/${postId}/view?project=${PUBLIC_PROJECT}`
	);
	if (req.status !== 200) redirect(303, '/');
	const text = await req.text();
	const fmText = fm<Record<string, string>>(text);
	return {
		text,
		metadata: {
			title: fmText.attributes.title ?? 'Post',
			description: fmText.attributes.description ?? 'No Description',
			keywords: fmText.attributes.keywords ?? 'No Keywords',
			coverImage: fmText.attributes.coverImage ?? 'https://placehold.co/600x400',
			author: fmText.attributes.author ?? 'theofficialurban (Josh)'
		}
	};
}) satisfies PageLoad;
