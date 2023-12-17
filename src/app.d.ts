// See https://kit.svelte.dev/docs/types#app

import type Metadata from '$lib/types/Metadata';

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
		}
		// interface Platform {}
	}
}

export {};
