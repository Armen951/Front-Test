import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from 'store/types/articles';
import { ArticleFilter } from 'store/types/articles';
import { getArticles, getAuthors, getCategories, getNews, getResources } from 'services/articles';
import { ArticlesForm, NewsForm } from 'types/articles';

export const fetchArticlesThunk = createAsyncThunk<Article[], ArticlesForm | undefined, { rejectValue: string }>(
	'getArticles',
	async (data, { rejectWithValue }) => {
		return getArticles(data)
			.then(({ data }) => {
				return data.data;
			})
			.catch(e => rejectWithValue(e.message));
	}
);

export const fetchNewsFeedThunk = createAsyncThunk<Article[], NewsForm | undefined, { rejectValue: string }>(
	'getNews',
	async (data, { rejectWithValue }) => {
		return getNews(data)
			.then(({ data }) => {
				return data.data;
			})
			.catch(e => rejectWithValue(e.message));
	}
);

export const fetchAuthorsThunk = createAsyncThunk<ArticleFilter[], undefined, { rejectValue: string }>(
	'getAuthors',
	async (_, { rejectWithValue }) => {
		return getAuthors()
			.then(({ data }) => {
				return data.data;
			})
			.catch(e => rejectWithValue(e.message));
	}
);

export const fetchResourcesThunk = createAsyncThunk<ArticleFilter[], undefined, { rejectValue: string }>(
	'getResources',
	async (_, { rejectWithValue }) => {
		return getResources()
			.then(({ data }) => {
				return data.data;
			})
			.catch(e => rejectWithValue(e.message));
	}
);

export const fetchCategoriesThunk = createAsyncThunk<ArticleFilter[], undefined, { rejectValue: string }>(
	'getCategories',
	async (_, { rejectWithValue }) => {
		return getCategories()
			.then(({ data }) => {
				return data.data;
			})
			.catch(e => rejectWithValue(e.message));
	}
);
