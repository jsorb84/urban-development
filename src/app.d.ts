// See https://kit.svelte.dev/docs/types#app

import type Metadata from '$lib/types/Metadata';
import type { Models } from 'appwrite';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			metadata?: Metadata;
		}
		interface PageState {
			previousUrl?: string;
			session?: Models.Session | null;
		}
		// interface Platform {}
	}
}

export {};
