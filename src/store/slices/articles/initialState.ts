import { InitialState } from 'store/types/articles';

const initialState: InitialState = {
	articles: [],
	newsFeed: [],
	authors: [],
	resources: [],
	categories: [],
	loading: false,
	loadingFilters: false,
	error: '',
	errorAuthors: '',
	errorResources: '',
	errorCategories: '',
};

export default initialState;
