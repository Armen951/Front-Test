export type InitialState = {
	articles: Article[];
	newsFeed: Article[];
	authors: ArticleFilter[];
	resources: ArticleFilter[];
	categories: ArticleFilter[];
	loading: boolean;
	loadingFilters: boolean;
	error: string | undefined;
	errorAuthors: string | undefined;
	errorResources: string | undefined;
	errorCategories: string | undefined;
};

export type Article = {
	category_id: number;
	created_at: string;
	description: string;
	id: number;
	img_url: string;
	resource_id: number;
	title: string;
	updated_at: string;
};

export type ArticleFilter = {
	created_at: string;
	description: string | null;
	id: number;
	name: string;
	updated_at: string;
};
