import { createSlice } from '@reduxjs/toolkit';

import initialState from './initialState';
import {
	fetchArticlesThunk,
	fetchAuthorsThunk,
	fetchCategoriesThunk,
	fetchNewsFeedThunk,
	fetchResourcesThunk,
} from './thunk';

const { reducer, actions } = createSlice({
	name: 'articles',
	initialState,
	reducers: {
		cleanArticlesSlice: state => {
			state.articles = [];
			state.newsFeed = [];
			state.authors = [];
			state.resources = [];
			state.categories = [];
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchArticlesThunk.pending, state => {
				state.loading = true;
			})
			.addCase(fetchArticlesThunk.fulfilled, (state, { payload }) => {
				state.loading = false;
				state.articles = payload;
				state.error = '';
			})
			.addCase(fetchArticlesThunk.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload;
			})
			.addCase(fetchNewsFeedThunk.pending, state => {
				state.loading = true;
			})
			.addCase(fetchNewsFeedThunk.fulfilled, (state, { payload }) => {
				state.loading = false;
				state.newsFeed = payload;
				state.error = '';
			})
			.addCase(fetchNewsFeedThunk.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload;
			})
			.addCase(fetchAuthorsThunk.pending, state => {
				state.loadingFilters = true;
			})
			.addCase(fetchAuthorsThunk.fulfilled, (state, { payload }) => {
				state.loadingFilters = false;
				state.authors = payload;
				state.errorAuthors = '';
			})
			.addCase(fetchAuthorsThunk.rejected, (state, { payload }) => {
				state.loadingFilters = false;
				state.errorAuthors = payload;
			})
			.addCase(fetchResourcesThunk.pending, state => {
				state.loadingFilters = true;
			})
			.addCase(fetchResourcesThunk.fulfilled, (state, { payload }) => {
				state.loadingFilters = false;
				state.resources = payload;
				state.errorResources = '';
			})
			.addCase(fetchResourcesThunk.rejected, (state, { payload }) => {
				state.loadingFilters = false;
				state.errorResources = payload;
			})
			.addCase(fetchCategoriesThunk.pending, state => {
				state.loadingFilters = true;
			})
			.addCase(fetchCategoriesThunk.fulfilled, (state, { payload }) => {
				state.loadingFilters = false;
				state.categories = payload;
				state.errorCategories = '';
			})
			.addCase(fetchCategoriesThunk.rejected, (state, { payload }) => {
				state.loadingFilters = false;
				state.errorCategories = payload;
			});
	},
});

export const { cleanArticlesSlice } = actions;
export default reducer;
