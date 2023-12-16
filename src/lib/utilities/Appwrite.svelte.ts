import { PUBLIC_ENDPOINT, PUBLIC_PROJECT } from '$env/static/public';
import { Client, Storage, type Models } from 'appwrite';
export default class Appwrite {
	client: Client = new Client();
	storage: Storage;
	private files: Models.FileList | null = $state<Models.FileList | null>(null);
	private isLoading = $state<boolean>(true);
	constructor() {
		this.client.setEndpoint(PUBLIC_ENDPOINT).setProject(PUBLIC_PROJECT);
		this.storage = new Storage(this.client);

		return this;
	}
	loadFiles = async (bucketId: string, queries: string[] = []) => {
		this.files = await this.storage.listFiles(bucketId, queries);
		if (this.files.total > 0) {
			this.isLoading = false;
		}
	};
	getFile = (bucketId: string, fileId: string) => {
		const file = this.storage.getFileView(bucketId, fileId);
		return file;
	};
	get pages() {
		return this.files;
	}
	get loading() {
		return this.isLoading;
	}
}
