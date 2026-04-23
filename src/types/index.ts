export interface Article {
	id: string;
	title: string;
	excerpt?: string;
	cover_image?: string;
	category?: string;
	created_date: string;
	published: boolean;
	slug?: string;
	author?: string;
	content?: string;
}

export interface NewsletterSubscriber {
	email: string;
}

export interface ContactMessage {
	name: string;
	email: string;
	message: string;
}

export interface ApiResponse<T> {
	data: T;
	error?: string;
}
