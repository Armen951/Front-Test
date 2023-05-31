export type ArticlesForm = {
	search?: string;
	date?: string;
	category_id?: number;
	resource_id?: number;
};

export type NewsForm = {
	category_id?: number;
	resource_id?: number;
	author_id?: number;
};
